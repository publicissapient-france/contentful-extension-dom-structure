import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldContainer } from './styled';
import { TemplateForSection } from '../../fields/Template/index';
import { FlexContainerForSection } from '../../fields/FlexContainer/index';
import { SelectSpeakersForSection } from '../../fields/SelectSpeakers/index';

class FieldsListOfSection extends Component {
    render () {
        const { fields, index, triggerOpening } = this.props;
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

                        case 'SelectSpeakers':
                            return <SelectSpeakersForSection {...params}/>;

                        default :
                            return <div className={'error'}><p>No field <strong>{field.typefield}</strong> matches</p>
                            </div>;
                        }
                    })
                }
            </FieldContainer>
        );
    }
};

FieldsListOfSection.propTypes = {
    fields: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    triggerOpening: PropTypes.bool.isRequired
};

export default FieldsListOfSection;
