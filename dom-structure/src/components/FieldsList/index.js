import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FieldContainer} from './styled';
import {TemplateForComponent} from '../../fields/Template/index';
import Text from '../../fields/Text/index';
import TextMarkdown from '../../fields/TextMarkdown/index';
import SingleImage from '../../fields/SingleImage/index';
import {MultipleImagesForComponent} from '../../fields/MultipleImages/index';
import CTA from '../../fields/CTA/index';
import DuplicableCTA from '../../fields/DuplicableCTA/index';
import Link from '../../fields/Link/index';
import NavigationLinks from '../../fields/NavigationLinks/index';
import NavigationBar from '../../fields/NavigationBar/index';
import SelectSpeakers from '../../fields/SelectSpeakers/index';
import SelectCategory from '../../fields/SelectCategory/index';
import Iframe from '../../fields/Iframe';

class FieldsList extends Component {
    render() {
        const {fields, index, indexParent, triggerOpening, fieldsComponent} = this.props;
        Object.keys(fieldsComponent).map( (key, i) => {
            console.log(key)
            console.log(fieldsComponent[key])
        })

        return (
            <FieldContainer>
                {
                    Object.keys(fieldsComponent).map( (key, i) => {
                        console.log(key)
                        console.log(fieldsComponent[key])

                        let config = fields.find( el => el.nameProperty.includes(key) )
                        if(!config){
                            config = fields.find( el => key.includes(el.nameProperty) )
                        }
                        const params = {
                            indexComponent: index,
                            indexSection: indexParent,
                            name: config.name,
                            nameProperty: key,
                            typeField: config.typeField,
                            responsiveContent: config.content.responsive,
                            responsiveSettings: config.settings.responsive,
                            defaultContent: config.content.defaultValue,
                            defaultSettings: config.settings.defaultValue,
                            parametersContent: config.content.parameters,
                            key: i,
                            triggerOpening: triggerOpening
                        };

                        switch (true) {
                            case key === 'Template' || key === 'Separator':
                                return <TemplateForComponent {...params}/>;

                            case key === 'Title' || key === 'Tagline':
                                return <Text {...params} />;

                            case  key === 'Content':
                                return <TextMarkdown {...params} />;

                            case  key === 'Image':
                                return <SingleImage {...params} />;

                            case key === 'CornerImages':
                                return <MultipleImagesForComponent {...params} />;

                            case key === 'CTA':
                                return <CTA {...params} />;

                            case key === 'Links':
                                return <NavigationLinks {...params} />;

                            case key === 'Bar':
                                return <NavigationBar {...params} />;

                            case key === 'Speakers':
                                return <SelectSpeakers {...params} />;

                            case key === 'Link':
                                return <Link {...params} />;

                            case key === 'Category':
                                return <SelectCategory {...params} />;

                            case key === 'Iframe':
                                return <Iframe {...params} />;

                            case key.includes('Template'):
                                return <TemplateForComponent {...params} />;

                            case key.includes('Title'):
                                return <Text {...params} />;

                            case key.includes('Tagline'):
                                return <Text {...params} />;

                            case key.includes('Content'):
                                return <TextMarkdown {...params} />;

                            case key.includes('Image'):
                                return <SingleImage {...params} />;

                            case key.includes('DupCTA'):
                                return <DuplicableCTA {...params} />;

                            case key.includes('CTA'):
                                return <CTA {...params} />;
                            default :
                                return <div className={'error'}><p>No
                                    field matches</p>
                                </div>
                        }

                    })



                }
                {
                   /* fields.map((field, i) => {
                        const params = {
                            indexComponent: index,
                            indexSection: indexParent,
                            name: field.name,
                            nameProperty: field.nameProperty,
                            typeField: field.typeField,
                            responsiveContent: field.content.responsive,
                            responsiveSettings: field.settings.responsive,
                            defaultContent: field.content.defaultValue,
                            defaultSettings: field.settings.defaultValue,
                            parametersContent: field.content.parameters,
                            key: i,
                            triggerOpening: triggerOpening
                        };

                        switch (field.typeField) {
                            case 'Template':
                                return <TemplateForComponent {...params}/>;

                            case 'Text':
                                return <Text {...params} />;

                            case 'TextMarkdown':
                                return <TextMarkdown {...params} />;

                            case 'SingleImage':
                                return <SingleImage {...params} />;

                            case 'MultipleImages':
                                return <MultipleImagesForComponent {...params} />;

                            case 'CTA':
                                return <CTA {...params} />;

                            case 'DuplicableCTA':
                                return <DuplicableCTA {...params} />;

                            case 'NavigationLinks':
                                return <NavigationLinks {...params} />;

                            case 'NavigationBar':
                                return <NavigationBar {...params} />;

                            case 'SelectSpeakers':
                                return <SelectSpeakers {...params} />;

                            case 'Link':
                                return <Link {...params} />;

                            default :
                                return <div className={'error'}><p>No
                                    field <strong>{field.typefield}</strong> matches</p>
                                </div>
                        }
                    })*/
                }
            </FieldContainer>
        );
    }
};

FieldsList.propTypes = {
    fields: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    indexParent: PropTypes.number,
    triggerOpening: PropTypes.bool.isRequired
};

export default FieldsList;
