import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BoxesContainer} from '../../style/styledComponentsBoxes';

//import Title from '../../boxes/settings/Title/index';
//import Logo from '../../boxes/settings/Title/index';

class BoxesSettings extends Component {

    render() {
        const {fields, index, indexParent, open} = this.props;

       /* const mapSettingsBoxes = new Map([
            ['Title', Title],
            ['Logo', Logo]
        ]);*/

        return (
            <BoxesContainer>
                <React.Suspense fallback={<div>Loading Box...</div>}>

                    {
                        fields.map((box, i) => {
                            const params = {
                                indexComponent: index,
                                indexSection: indexParent,
                                name: box.name,
                                contentType : box.contentType,
                                responsive : box.responsive,
                                defaultValue: box.defaultValue,
                                open: open,
                                key: i}
                            switch (box.contentType) {
                                case 'Title':
                                    return React.createElement(React.lazy(() => import('../../boxes/settings/Title/index')), params);
                                case 'Logo':
                                    return React.createElement(React.lazy(() => import('../../boxes/settings/Logo/index')), params);

                                default :
                                    return <div className={'error'}><p>No content-box <strong>{box}</strong> matches</p>
                                    </div>;
                            }
                        })
                    }
                </React.Suspense>
            </BoxesContainer>
            /*<BoxesContainer>
            {
                fields.map((box, i) => {
                const params = {
                    indexComponent: index,
                    indexSection: indexParent,
                    name: box.name,
                    defaultValue: box.defaultValue,
                    open: open,
                    key: i
                };

                const DefaultComponent = () => (<div className={'error'}><p>No content-box <strong>{box}</strong> matches</p>
                </div>);

                const RenderedComponent = mapSettingsBoxes.get(box.name) || DefaultComponent;

                return <RenderedComponent {...params} />
            })
    }
    </BoxesContainer>*/
        );
    }
};

BoxesSettings.propTypes = {
    fields: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    indexParent: PropTypes.number.isRequired
};

export default BoxesSettings;
