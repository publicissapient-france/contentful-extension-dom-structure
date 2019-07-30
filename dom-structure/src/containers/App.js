import debounce from 'debounce-fn';
import React from 'react';
import { connect } from 'react-redux';
import { Extension, MainContainer } from '../style/styledComponents';
import ButtonAddSection from './AddingSection';
import Section from './Section/index';
import AddSection from './AddSection/index';
import GlobalStyle from '../style/globalStyle';
import {
    initDOM,
    initDOMbuild,
    initExtensionInformation,
    initVisibility,
    initStyleInformation,
    addFontFaces,
    getFontfaces,
    getCurrentStyle
} from '../actions';
import { extractActiveValue, arrayToString, extractFontValueToCSS } from '../utils/functions';

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            dom: null,
            openAddSectionTop: false
        };

        this.onViewingEntryUpdated = debounce(this.onViewingEntryUpdated, {
            wait: 250
        });
    }

    componentDidMount = async () => {
        console.log('STORE MOUNT ', this.props.store.getState());
        if (this.props.extension.field && this.props.extension.field.getValue()) {
            this.props.dispatch(initDOM(this.props.extension.field.getValue().dom));
            this.props.dispatch(initDOMbuild(this.props.extension.field.getValue().build));
            this.props.dispatch(initExtensionInformation(this.props.extension));
            this.props.dispatch(initVisibility());
            this.setState({ state: this.state });
        }

        this.detachFns = [];

        const fields = this.props.extension.entry.fields;
        for (let key in fields) {
            this.detachFns.push(
                fields[key].onValueChanged(this.onViewingEntryUpdated)
            );
        }
        this.detachFns.push(
            this.props.extension.entry.onSysChanged(this.onViewingEntryUpdated)
        );

        this.subscribe();
        this.props.extension.window.startAutoResizer();

        await this.initStyleStore();

    }

    componentDidUpdate = () => {}

    componentWillUnmount = () => {
        this.detachFns.forEach(detach => detach());
        this.props.extension.window.stopAutoResizer();
    }

    setFieldValue = () => {
        extractActiveValue(this.props.store.getState().dom);
        this.setState({
            dom: this.props.store.getState().dom
        });
        this.props.extension.field.setValue(
            {
                dom: this.props.store.getState().dom,
                build: JSON.stringify(extractActiveValue(this.props.store.getState().dom))
            }
        );
    }

    subscribe = () => {
        this.props.store.subscribe(() => {
            console.log('STORE SUBSCRIBE', this.props.store.getState());
            console.log('STORE SUBSCRIBE', JSON.stringify(extractActiveValue(this.props.store.getState().dom)));
            this.setFieldValue();
        });
    }

    getElementById = id => {
        return this.props.extension.space.getEntries({
            'sys.id': id
        }).then(function (result) {
            return result.items[0];
        });
    }

    getStyleGuide = () => {
        if (!this.props.extension.entry.fields['styleGuide'].getValue()) return;
        let styleGuideID = this.props.extension.entry.fields['styleGuide'].getValue().sys.id;
        const locale = this.props.extension.locales.default;
        return this.props.extension.space
            .getEntries({
                'sys.id': styleGuideID
            })
            .then(result => {
                return result.items[0].fields;
            });
    }



    initStyleStore = async () => {
        const locale = this.props.extension.locales.default;
        const styleguide = await this.getStyleGuide();
        const typographies = await this.getTypographies(styleguide.typography[locale]);

        this.props.dispatch(initStyleInformation(styleguide, typographies));

        const fonts = await typographies.map(entry => entry).filter(font => font.fields.fontFile[this.props.extension.locales.default].sys.id);
        fonts.forEach(async font => {
            let extractedValue = await extractFontValueToCSS(this, font, this.props.extension.locales.default);
            this.props.dispatch(addFontFaces(extractedValue));
        });
    };


    getTypographies = typographies => {
        const locale = this.props.extension.locales.default;
        const fontsID = typographies.map(entry => entry.sys.id);
        return this.props.extension.space
            .getEntries({
                'content_type': 'font',
                'sys.id[in]': fontsID.join(',')
            })
            .then(result => {
                return result.items.map(entry => entry).filter(font => font.fields.fontFile[locale].sys.id);
            });
    }

    getAssetsUrlById = id => {
        return this.props.extension.space
            .getAsset(id)
            .then(result => {
                return result.fields.file[this.props.extension.locales.default].url;
            });
    }


    onError = error => {
        this.props.extension.notifier.error(error.message);
    }

    onViewingEntryUpdated = async () => {
        const latestSys = this.props.extension.entry.getSys();
    }

    openEntry = entryId => {
        return () => {
            this.props.extension.navigator.openEntry(entryId, {
                slideIn: true
            });
        };
    }

    render = () => {
        return (
            <Extension>
                <div className={'container'}>
                    <section>
                        <MainContainer className={'container'} >
                            <ButtonAddSection onTop={true}/>
                            <AddSection open={this.props.store.getState().visibility.openFormAddSectionToTop} onTop={true}/>
                            { this.renderDomStructure() }
                            <ButtonAddSection onTop={false}/>
                            <AddSection open={this.props.store.getState().visibility.openFormAddSection} onTop={false} />
                        </MainContainer>
                    </section>
                </div>
                <GlobalStyle globalFontFaces={arrayToString(this.props.fontfaces)}/>
            </Extension>
        );
    }

    renderDomStructure = () => {
        return (
            <section>
                {
                    this.props.store.getState().dom.map((section, i) =>
                        <Section key={i} section={section} index={i} domLength={this.props.store.getState().dom.length}/>
                    )
                }
            </section>
        );
    }
}


const mapStateToProps = state => ({
    fonts: getCurrentStyle(state).style.fonts,
    fontfaces: getFontfaces(state).value
});
export default connect(mapStateToProps)(App);