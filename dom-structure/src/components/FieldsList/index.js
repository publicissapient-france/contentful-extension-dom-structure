import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FieldContainer} from "./styled";
import Template from '../../fields/Template'
import Text  from '../../fields/Text/index';
import TextMarkdown  from '../../fields/TextMarkdown/index';
import SingleImage from '../../fields/SingleImage/index';
import MultipleImages from '../../fields/MultipleImages/index';

class FieldsList extends Component {

    render() {
        const {fields, index, indexParent, triggerOpening} = this.props;
        return (
            <FieldContainer>

                    {
                        fields.map((field, i) => {
                            const params = {
                                indexComponent: index,
                                indexSection: indexParent,
                                name: field.name,
                                nameProperty : field.nameProperty,
                                typeField : field.typeField,
                                responsiveContent : field.content.responsive,
                                responsiveSettings : field.settings.responsive,
                                defaultContent :  field.content.defaultValue,
                                defaultSettings :  field.settings.defaultValue,
                                parametersContent : field.content.parameters,
                                key: i,
                                triggerOpening : triggerOpening
                            }
                            switch (field.typeField) {
                                case 'Template':
                                    return <Template {...params}/>;

                                case 'Text':
                                    return <Text {...params} />;

                                case 'TextMarkdown':
                                    return <TextMarkdown {...params} />;

                                case 'SingleImage':
                                    return <SingleImage {...params} />;

                                case 'MultipleImages':
                                    return <MultipleImages {...params} />;

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

FieldsList.propTypes = {
    fields: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    indexParent: PropTypes.number.isRequired,
    triggerOpening: PropTypes.bool.isRequired
};

export default FieldsList;
