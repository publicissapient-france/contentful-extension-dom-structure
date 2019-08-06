import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BoxesContainer} from '../../style/styledComponentsBoxes';

class BoxesContent extends Component {
    render() {
        const {fields, index, indexParent, open} = this.props;
        return (
            <BoxesContainer>
                <React.Suspense fallback={<div>Loading Box...</div>}>

                    {
                        fields.map((box, i) => {
                            const params = {
                                indexComponent: index,
                                indexSection: indexParent,
                                defaultValue : box.defaultValue,
                                name: box.name,
                                contentType : box.contentType,
                                responsive : box.responsive,
                                open: open,
                                key: i
                            }
                            switch (box.contentType) {
                                case 'Title':
                                    return React.createElement(React.lazy(() => import('../../boxes/content/Title/index')), params);

                                case 'Tagline':
                                    return React.createElement(React.lazy(() => import('../../boxes/content/Tagline/index')), params);
                                case 'Text':
                                    return React.createElement(React.lazy(() => import('../../boxes/content/Text/index')), params);
                                case 'Logo':
                                    return React.createElement(React.lazy(() => import('../../boxes/content/Logo/index')),params);
                                case 'HeaderImages':
                                    return React.createElement(React.lazy(() => import('../../boxes/content/HeaderImages/index')), params);

                                default :
                                    return <div className={'error'}><p>No content-box <strong>{box}</strong> matches</p>
                                    </div>;
                            }
                        })
                    }
                </React.Suspense>
            </BoxesContainer>
        );
    }
};

BoxesContent.propTypes = {
    fields: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    indexParent: PropTypes.number.isRequired
};

export default BoxesContent;
