import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BoxesContainer } from '../style/styledComponentsBoxes';

class Boxes extends Component {
    render () {
        const { fields, index, indexParent, open } = this.props;
        return (
            <BoxesContainer className={!open ? 'closed' : ''}>
                <React.Suspense fallback={<div>Loading Box...</div>}>

                    {
                        fields.map((box, i) => {
                            switch (box) {

                            //BOXES CONTENT
                            case 'Title':
                                return React.createElement(React.lazy(() => import('../boxes/content/Title')), { indexComponent: index, indexSection: indexParent, name: box });

                            case 'Tagline':
                                return React.createElement(React.lazy(() => import('../boxes/content/Tagline')), { indexComponent: index, indexSection: indexParent, name: box });
                            case 'Text':
                                return React.createElement(React.lazy(() => import('../boxes/content/Text')), { indexComponent: index, indexSection: indexParent, name: box });

                            //BOXES SETTINGS
                            case 'Template':
                                return React.createElement(React.lazy(() => import('../boxes/settings/Template')), { indexComponent: index, indexSection: indexParent, name: box });




                            default :
                                return <div className={'error'}><p>No content-box <strong>{box}</strong> matches</p></div>;
                            }
                        })
                    }
                </React.Suspense>
            </BoxesContainer>
        );
    }
};

Boxes.propTypes = {
    fields: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    indexParent: PropTypes.number.isRequired
};

export default Boxes;
