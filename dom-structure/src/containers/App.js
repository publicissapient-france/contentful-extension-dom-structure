import debounce from 'debounce-fn';
import React from 'react';
import { connect } from 'react-redux';
import { Extension, MainContainer, ChoiceInterface } from '../style/styledComponents';
import ButtonAddSection from './AddingSection';
import Section from './Section/index';
import AddSection from './AddSection/index';
import isEqual from 'lodash/isEqual';
import GlobalStyle from '../style/globalStyle';
import {
    initDOM,
    initExtensionInformation,
    initVisibility,
    initStyleInformation,
    addFontFaces,
    getFontfaces,
    getCurrentStyle, getCurrentDOM, toggleEditorOnly
} from '../actions';
import { extractActiveValue, arrayToString, extractFontValueToCSS, extractAssetUrl, findProp } from '../utils/functions';
import ButtonAction from "../components/ui/ButtonAction";


class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            openAddSectionTop: false
        };

        this.onViewingEntryUpdated = debounce(this.onViewingEntryUpdated, {
            wait: 250
        });
    }

    componentDidMount = async () => {
        if (this.props.extension.field && this.props.extension.field.getValue()) {
            console.log('DOM VALUE ON MOUNT', this.props.extension.field.getValue() )
            this.props.dispatch(initDOM(JSON.parse(this.props.extension.field.getValue().dom)));
            this.props.dispatch(initExtensionInformation(this.props.extension));
            this.props.dispatch(initVisibility());
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

        this.props.extension.window.startAutoResizer();
        await this.initStyleStore();


    }

    componentDidUpdate = prevProps => {
        if (!isEqual(prevProps.dom, this.props.dom)) {
            if (!this.props.extension.field.getValue()) {
                this.setFieldValue();
            }

            if (this.props.extension.field.getValue() && this.props.extension.field.getValue().dom && !isEqual(this.props.dom.sections, JSON.parse(this.props.extension.field.getValue().dom))) {
                this.setFieldValue();
            }
        }
    }

    componentWillUnmount = () => {
        this.detachFns.forEach(detach => detach());
        this.props.extension.window.stopAutoResizer();
    }

    setFieldValue = () => {
        this.props.extension.field.removeValue().then(() => {
            const buildDom = extractActiveValue(this.props.store.getState().dom);
            const staticResources = extractAssetUrl(buildDom);
            console.log('staticResources', staticResources)

            this.props.extension.field.setValue({
                dom: JSON.stringify(this.props.store.getState().dom),
                staticResources : staticResources.length !== 0 ? staticResources : ['no-static-resources']
            }).then( () => {
                console.log('NEW DOM VALUE', this.props.extension.field.getValue() )
            });
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
                <div className={'container'} ref={elem => this.nv = elem}>
                    <section>
                        <MainContainer className={'container'} >
                            <ChoiceInterface>
                                <ButtonAction type={''} label={'Editeur'} active={this.props.store.getState().visibility.editorOnly} action={() => {
                                    this.props.dispatch(toggleEditorOnly(true))
                                }}
                                />
                                <ButtonAction type={''} disabled={false} label={'Integrateur'} active={!this.props.store.getState().visibility.editorOnly} action={() => {
                                    this.props.dispatch(toggleEditorOnly(false))
                                }}
                                />
                            </ChoiceInterface>
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
                    this.props.dom.sections.map((section, i) =>
                        <Section key={i} section={section} index={i} domLength={this.props.dom.sections.length}/>
                    )
                }
            </section>
        );
    }
}

const mapStateToProps = state => ({
    fonts: getCurrentStyle(state).style.fonts,
    dom: getCurrentDOM(state),
    fontfaces: getFontfaces(state).value
});
export default connect(mapStateToProps)(App);
