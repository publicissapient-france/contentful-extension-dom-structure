import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentStyle} from '../../actions';

import FieldWrapper from '../../HOC/FieldWrapper';
import FieldWrapperOfSection from "../../HOC/FieldWrapperOfSection";
import FieldBanner from "../../components/FieldBanner";
import FieldUpdateForm from "../../components/FieldUpdateForm";

import TypeSystem from '../../interfaces/system/TypeSystem'
import ColorPicker from '../../interfaces/ColorPicker';

import {Field} from '../../style/styledComponentsFields';
import {
    Content,
    Settings,
    Column, Grid, Sets, SetContainer
} from './styled';
import {Set, SetTypography} from './Set';

class Schedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openColorView: false,
            selectedView: ''
        };
    }

    componentDidUpdate(prevProps) {
        ['set1Title', 'set1Text', 'set2Title', 'set2Text', 'set3Title', 'set3Text'].map(prop => {
            if (this.props.settings && this.props.getSettingsByProperty(prop, 'font')) {
                if (!Object.values(this.props.settings[prop])[0].font.family && this.props.themes) {
                    this.props.initFont(prop);
                }
            }
        })
    }


    getGrid = () => this.props.settings.grid ? this.props.settings.grid : false;

    updateSetBkg = (property, value, event) => this.props.updateSettingsProperty(this.state.selectedView, property, value, event);
    toggleOpenView = () => this.setState(prevState => ({openColorView: !prevState.openColorView}));

    updateSelectedView = (view) => {
        this.setState({selectedView: view});
    }

    render() {
        const {updated} = this.props;

        if (!this.props.settings) return null;
        return (
            <div>
                <FieldBanner {...this.props}/>
                <Field>
                    <Content className={!this.props.openContent ? 'hidden' : ''}>

                    </Content>
                    <Settings className={!this.props.openSettings ? 'hidden' : ''}>
                        <Grid>
                            <label>
                                <input type={'checkbox'} defaultChecked={this.getGrid()}
                                       onChange={(e) => {
                                           this.props.updateSettingsNoResponsive('grid', !this.getGrid())
                                       }}/>
                                Display grid
                            </label>
                        </Grid>
                        <Sets>
                            {[{n : '1', label : 'Tabs Date, Filter Button, Opening, Keynote, Opening'},
                                {n : '2', label : 'Breakfast, Lunch, Break,Party'},
                                {n : '3', label : 'Talk, Fastrack, Rex...'}].map(e => <SetContainer>
                                    <div>
                                        <h4>Set {e.n}</h4>
                                        <label>{e.label}</label>
                                    </div>

                                    <Set property={`set${e.n}Bkg`} label={'Background'}
                                         getSettingsByProperty={this.props.getSettingsByProperty}
                                         view={this.state.selectedView} updateSelectedView={this.updateSelectedView}/>
                                    <SetTypography property={`set${e.n}Title`} propertyBkg={`set${e.n}Bkg`} label={'Title'}
                                                   getSettingsByProperty={this.props.getSettingsByProperty}
                                                   view={this.state.selectedView}
                                                   updateSelectedView={this.updateSelectedView}/>
                                    <SetTypography property={`set${e.n}Text`} propertyBkg={`set${e.n}Bkg`} label={'Duration, Author'}
                                                   getSettingsByProperty={this.props.getSettingsByProperty}
                                                   view={this.state.selectedView}
                                                   updateSelectedView={this.updateSelectedView}/>
                                </SetContainer>
                            )}
                        </Sets>
                        {
                            this.state.selectedView.includes('Bkg') ?
                                <Column className={this.state.openColorView ? 'full-width' : ''}>
                                    <ColorPicker hidden={false}
                                                 color={this.props.getSettingsByProperty(this.state.selectedView, 'color')}
                                                 opacity={this.props.getSettingsByProperty(this.state.selectedView, 'opacity')}
                                                 storeValueColor={this.props.getStoreSettingsByProperty(this.state.selectedView, 'color')}
                                                 storeValueOpacity={this.props.getStoreSettingsByProperty(this.state.selectedView, 'color')}
                                                 defaultColor={this.props.getDefaultSettingsByProperty(this.state.selectedView, 'color')}
                                                 defaultOpacity={this.props.getDefaultSettingsByProperty(this.state.selectedView, 'opacity')}
                                                 openView={this.state.openColorView}
                                                 updateStateProps={this.updateSetBkg}
                                                 toggleOpenView={this.toggleOpenView}
                                    />
                                </Column>
                                : null
                        }
                        {
                            this.state.selectedView.includes('Title') || this.state.selectedView.includes('Text') ?
                                <Column className={[this.state.openColorView ? 'full-width' : '', 'column-typo']}>
                                    <TypeSystem key={this.state.selectedView}
                                                label={null}
                                                propertyName={this.state.selectedView}
                                                getSettingsByProperty={this.props.getSettingsByProperty}
                                                getStoreSettingsByProperty={this.props.getStoreSettingsByProperty}
                                                getDefaultSettingsByProperty={this.props.getDefaultSettingsByProperty}
                                                updateSettingsProperty={this.props.updateSettingsProperty}
                                                currentResponsiveMode={this.props.currentResponsiveMode}
                                    />
                                </Column>
                                : null
                        }
                    </Settings>
                </Field>
                <FieldUpdateForm updated={updated} canceling={this.props.cancelStateValue}
                                 updating={this.props.updateField}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    themes: getCurrentStyle(state).style.themes
});

const WrappedComponent = FieldWrapper(connect(mapStateToProps)(Schedule));
export default WrappedComponent;

export const ScheduleForComponent = FieldWrapper(connect(mapStateToProps)(Schedule));
export const ScheduleForSection = FieldWrapperOfSection(connect(mapStateToProps)(Schedule));

