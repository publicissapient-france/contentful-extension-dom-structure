import debounce from 'debounce-fn';
import React from 'react';
import { connect } from 'react-redux';
import sections from '../config/sections';
import components from '../config/components';
import { Extension, MainContainer } from '../style/styledComponents';
import ButtonAddSection from '../components/ButtonAddSection';
import Section from './Section';
import AddSection from './AddSection';
import { initDOM, initDOMbuild } from '../actions';
import { extractActiveValue } from '../utils/functions'

class App extends React.Component {
    constructor (props) {
        super(props);

        this.availableSections = sections;
        this.availableComponents = components;

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
    }

    componentDidUpdate = () => {}

    componentWillUnmount = () => {
        this.detachFns.forEach(detach => detach());
        this.props.extension.window.stopAutoResizer();
    }

    setFieldValue = () => {
        extractActiveValue( this.props.store.getState().dom );
        this.setState({
            dom: this.props.store.getState().dom
        });
        this.props.extension.field.setValue(
            {
                dom: this.props.store.getState().dom,
                build : extractActiveValue(this.props.store.getState().dom)
            }

        );
    }

    subscribe = () => {
        this.props.store.subscribe(() => {
            console.log('STORE SUBSCRIBE', this.props.store.getState());
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
                            <ButtonAddSection/>
                            <AddSection open={this.props.store.getState().visibility.openFormAddSection} />
                            { this.renderDomStructure() }
                        </MainContainer>
                    </section>
                </div>
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
export default connect()(App);
