import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BoxesContainer } from '../style/styledComponentsBoxes';

class BoxesSettings extends Component {
    render () {
        const { fields, index, indexParent, open } = this.props;

        return (
            <BoxesContainer>
                <React.Suspense fallback={<div>Loading Box...</div>}>

                    {
                        fields.map((box, i) => {
                            switch (box.name) {
                            case 'Title':
                                return React.createElement(React.lazy(() => import('../boxes/settings/Title/index')), { indexComponent: index, indexSection: indexParent, name: box.name, defaultValue : box.defaultValue ,open: open , key : i});

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

BoxesSettings.propTypes = {
    fields: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    indexParent: PropTypes.number.isRequired
};

export default BoxesSettings;
