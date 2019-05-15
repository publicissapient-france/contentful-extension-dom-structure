import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Boxes extends Component {
    render () {
        const { fields, index, indexParent } = this.props;
        console.log('FIELDS :', fields);
        return (
            <div>
                <React.Suspense fallback={<div>Loading Component...</div>}>

                    {
                        fields.map((option, i) => {
                            switch (option) {
                            case 'Title':
                                return React.createElement(React.lazy(() => import('../boxes/content/Title')), { indexComponent: index, indexSection: indexParent, maxLength: 140, option: option });

                            case 'Tagline':
                                return React.createElement(React.lazy(() => import('../boxes/content/Tagline')), {});
                            default :
                                return <span>No content-box <strong>{option}</strong> matches</span>;
                            }
                        })
                    }
                </React.Suspense>
            </div>
        );
    }
};

Boxes.propTypes = {
    fields : PropTypes.array.isRequired,
    index : PropTypes.number.isRequired,
    indexParent : PropTypes.number.isRequired
}

export default Boxes;
