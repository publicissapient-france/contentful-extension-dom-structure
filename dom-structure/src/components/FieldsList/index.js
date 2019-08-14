import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FieldContainer} from "./styled";
import Text  from '../../fields/Text/index';
import TextMarkdown  from '../../fields/TextMarkdown/index';

class FieldsList extends Component {
    render() {
        const {fields, index, indexParent} = this.props;
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
                                defaultContent : field.content.defaultValue,
                                defaultSettings : field.settings.defaultValue,
                                key: i
                            }
                            switch (field.typeField) {
                                case 'Text':
                                    return <Text {...params} />;

                                case 'TextMarkdown':
                                    return <TextMarkdown {...params} />;

                                default :
                                    return <div className={'error'}><p>No field <strong>{field}</strong> matches</p>
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
    indexParent: PropTypes.number.isRequired
};

export default FieldsList;
