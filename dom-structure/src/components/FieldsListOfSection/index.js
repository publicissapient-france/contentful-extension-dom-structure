import React from 'react';
import PropTypes from 'prop-types';
import {FieldContainer} from './styled';

import {TemplateForSection} from '../../fields/Template/index';
import {CTAForSection} from '../../fields/CTA/index';
import {TextForSection} from '../../fields/Text/index';
import {TextMarkdownForSection} from '../../fields/TextMarkdown/index';

import {FlexContainerForSection} from '../../fields/FlexContainer/index';
import {SelectSpeakersForSection} from '../../fields/SelectSpeakers/index';
import {SingleImageForSection} from '../../fields/SingleImage/index';
import {SelectFormationsForSection} from '../../fields/SelectFormations/index';
import {SelectPartnersForSection} from '../../fields/SelectPartners/index';
import {MultipleImagesForSection} from '../../fields/MultipleImages/index';
import {SelectCategoryForSection} from '../../fields/SelectCategory/index';
import {MultiSelectCategoryForSection} from '../../fields/MultiSelectCategory/index';
import {MultiSelectCustomContentTypeForSection} from '../../fields/MultiSelectCustomContentType/index';
import {ScheduleForSection} from '../../fields/Schedule';

const FieldsListOfSection = ({fields, index, triggerOpening}) => {
    return (
        <FieldContainer>
            {
                fields.map((field, i) => {

                    const params = {
                        indexSection: index,
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
                            return <TemplateForSection {...params}/>;

                        case 'FlexContainer':
                            return <FlexContainerForSection {...params}/>;

                        case 'CTA':
                            return <CTAForSection {...params}/>;

                        case 'Text':
                            return <TextForSection {...params}/>;

                        case 'TextMarkdown':
                            return <TextMarkdownForSection {...params}/>;

                        case 'SelectSpeakers':
                            return <SelectSpeakersForSection {...params}/>;

                        case 'SelectFormations':
                            return <SelectFormationsForSection {...params}/>;

                        case 'SelectPartners':
                            return <SelectPartnersForSection {...params}/>;

                        case 'SelectCategory':
                            return <SelectCategoryForSection {...params}/>;

                        case 'SingleImage':
                            return <SingleImageForSection {...params} />;

                        case 'MultipleImages':
                            return <MultipleImagesForSection {...params} />;

                        case 'MultiSelectCategory':
                            return <MultiSelectCategoryForSection {...params} />;

                        case 'MultiSelectCustomContentType':
                            return <MultiSelectCustomContentTypeForSection {...params} />;

                        case 'Schedule':
                            return <ScheduleForSection {...params} />;

                        default :
                            return <div className={'error'}><p>No field <strong>{field.typeField}</strong> matches</p>
                            </div>;
                    }
                })
            }
        </FieldContainer>
    );
};

FieldsListOfSection.propTypes = {
    fields: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    triggerOpening: PropTypes.bool.isRequired
};

export default FieldsListOfSection;
