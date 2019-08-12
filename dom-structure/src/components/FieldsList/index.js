import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FieldContainer} from "./styled";

class FieldsList extends Component {
    render() {
        const {fields, index, indexParent} = this.props;
        console.log('props on FieldsList', this.props)
        return (
            <FieldContainer>
                <React.Suspense fallback={<div>Loading Box...</div>}>

                    {
                        fields.map((field, i) => {
                            const params = {
                                indexComponent: index,
                                indexSection: indexParent,
                                name: field.name,
                                type : field.type,
                                responsive : field.responsive,
                                defaultContent : field.content.defaultValue,
                                defaultSettings : field.settings.defaultValue,
                                key: i
                            }
                            switch (field.type) {
                                case 'Title':
                                    return React.createElement(React.lazy(() => import('../../fields/Title/index')), params);


                                default :
                                    return <div className={'error'}><p>No field <strong>{field}</strong> matches</p>
                                    </div>;
                            }
                        })
                    }
                </React.Suspense>
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
