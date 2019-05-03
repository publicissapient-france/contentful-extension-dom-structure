import debounce from 'debounce-fn';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import update from 'react-addons-update'; // ES6
import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import { init } from 'contentful-ui-extensions-sdk';
import './style/index.css';
import { defaultConfig, sections, components } from './config/defaultConfig';
import { Extension, MainContainer } from './style/styledComponents';
import { createSlug, hexToRgb, RGBtoString, slugIsUnique } from './utils/functions';
import _ from 'lodash';

import ButtonAddSection from './components/ButtonAddSection'
import Footer from './components/Footer'
import Section from './components/Section'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import AddSection from "./containers/AddSection";

class App extends React.Component {
  constructor (props) {
    super(props);

    this.defaultBasic = defaultConfig;
    this.availableSections = sections;
    this.availableComponents = components;

    this.state = {
        dom : null,
        openAddSectionTop : false
    };

    this.onViewingEntryUpdated = debounce(this.onViewingEntryUpdated, {
      wait: 250
    });
  }

    componentDidMount = async () => {

      console.log('STORE ',store.getState());
      this.setFieldValue();
      console.log('field value ',this.props.extension.field.getValue());
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

      this.props.extension.window.updateHeight();
    }

    componentDidUpdate = () => {
      this.props.extension.window.updateHeight();
    }

    componentWillUnmount = () => {
      this.detachFns.forEach(detach => detach());
    }

    setFieldValue = () => {
      this.setState({
          dom : store.getState().dom
      })
       this.props.extension.field.setValue(
           store.getState().dom
       )
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
              <AddTodo />
              <AddSection/>
              <VisibleTodoList />
              <Footer/>
          </div>
        </Extension>

      );
    }

    renderExtension = () => {
      return (
        <section>
          <MainContainer className={'container'} >
            <ButtonAddSection parent={this}/>
            <AddSection open={this.state.openAddSectionTop} parent={this}/>
            { this.renderDomStructure() }
          </MainContainer>
        </section>
      );
    }

    renderDomStructure = () => {
        return (
            <section>
                {
                    store.getState().dom.map((section, i) =>
                        <Section key={i} section={section} index={i}/>
                    )
                }
            </section>
        );
    }

}


const initialState = {
    dom: [
        {
            type : 'section',
            name : 'Presentation',
            model : 'BasicLayout',
            specs : ['background'],
            components : [
                {
                    type : 'components',
                    name : 'Introduction',
                    model : 'TextContent',
                    specs : [],
                    content :[]
                }
            ]
        },
        {
            type : 'section',
            name : 'Header',
            model : 'FullLayout',
            specs : ['background'],
            components : []
        }
    ]


};

const store = createStore(rootReducer, initialState);


init(extension => {
    ReactDOM.render(
        <Provider store={store}>
          <App extension={extension} />
        </Provider>,
        document.getElementById('root')
  );
});
