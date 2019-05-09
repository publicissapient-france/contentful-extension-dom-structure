import debounce from 'debounce-fn';
import React from 'react';
import { connect } from 'react-redux';

import { defaultConfig, sections, components } from '../config/defaultConfig';
import { Extension, MainContainer } from '../style/styledComponents';
import ButtonAddSection from '../components/ButtonAddSection';
import Section from '../components/Section';
import AddSection from './AddSection';
import { initDOM } from '../actions';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.defaultBasic = defaultConfig;
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
      console.log('STORE ', this.props.store.getState());
      if (this.props.extension.field && this.props.extension.field.getValue()) {
        this.props.dispatch(initDOM(this.props.extension.field.getValue()));
        this.setState({ state: this.state });
      }
      console.log('STORE 2 ', this.props.store.getState());

      // this.setFieldValue();
      // console.log('field value ',this.props.extension.field.getValue());
      this.detachFns = [];

      // Update component state when a field value changes
      const fields = this.props.extension.entry.fields;
      for (let key in fields) {
        this.detachFns.push(
          fields[key].onValueChanged(this.onViewingEntryUpdated)
        );
      }
      // Listen sys changes
      this.detachFns.push(
        this.props.extension.entry.onSysChanged(this.onViewingEntryUpdated)
      );

      this.subscribe();
    }

    componentDidUpdate = () => {
      this.props.extension.window.updateHeight();
    }

    componentWillUnmount = () => {
      this.detachFns.forEach(detach => detach());
    }

    setFieldValue = () => {
      this.setState({
        dom: this.props.store.getState().dom
      });
      this.props.extension.field.setValue(
        this.props.store.getState().dom
      );
    }

    subscribe = () => {
      this.props.store.subscribe(() => {
        console.log('STORE COMPLET', this.props.store.getState());
        this.setFieldValue();
        this.props.extension.window.updateHeight();
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
            { this.renderExtension() }
          </div>
        </Extension>

      );
    }

    renderExtension = () => {
      return (
        <section>
          <MainContainer className={'container'} >
            <ButtonAddSection/>
            <AddSection open={this.props.store.getState().visibility.openFormAddSection} />
            { this.renderDomStructure() }
          </MainContainer>
        </section>
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
