import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getColors} from '../../actions/index';
import {hasNotSamePropertyValue, hexToRgb, RGBtoString} from '../../utils/functions';

import {Error} from '../../style/styledComponents';
import {Property} from '../../style/styledComponentsFields';
import {
    Field,
    ChoiceColor,
    ChoiceOpacity,
    Close,
    FieldsError,
    PaletteContainer,
    PaletteView,
    SelectedColor
} from './styled';

import ColorAdd from '../../containers/ColorAdd/index';
import SvgCross from '../../components/svg/SvgCross';
import ColorView from '../../components/ColorView/index';
import ColorsList from '../../components/ColorsList/index';
import Dot from '../../components/Dot/index';


const ColorPicker = ({
                         colors, color, defaultColor, storeValueColor,
                         opacity, defaultOpacity, storeValueOpacity,
                         updateStateProps,
                         openView, toggleOpenView,
                         hidden, event, customName, customTargetColor, customTargetOpacity
                     }) => {
    const [openBasic, setOpenBasic] = useState(false);
    const [openCustom, setOpenCustom] = useState(false);
    const [currentAction, setCurrentAction] = useState('view');
    const [innerColor, setInnerColor] = useState(color);

    useEffect(() => {
        setInnerColor(color)
    }, [color]);

    useEffect(() => {
        if (innerColor) {
            updateStateProps(customTargetColor || 'color', innerColor, event);
        }
    }, [innerColor]);

    const toggleAction = () => currentAction === 'view' ? setCurrentAction('add') : setCurrentAction('view');

    const toggleOpenBasic = () => setOpenBasic(!openBasic);

    const toggleOpenCustom = () => setOpenCustom(!openCustom);

    const isSelected = item => color && color.hex === item.hex && currentAction === 'view';

    const updateColor = value => {
        setInnerColor(prev => ({
            ...prev,
            hex: value.hex,
            rgb: RGBtoString(hexToRgb(value.hex)),
            name: value.name,
            shade: value.shade
        }));
        setCurrentAction('view');
    }

    const updateOpacity = value => {
        const opacity = {
            value: String(value / 100)
        };
        updateStateProps(customTargetOpacity || 'opacity', opacity, event);
    }

    if (!color || !innerColor) return null;
    if (!colors) {
        return (
            <FieldsError>
                <Error>
                    <h2>Error</h2>
                    <p>To use this option, you must have selected a reference style guide in your project.</p>
                    <p>Please check that a style guide has been selected.</p>
                </Error>
            </FieldsError>
        );
    }
    return (
        <ChoiceColor className={[openView ? 'full-width' : '', hidden ? 'hidden' : '']}>
            <div>
                <Property>{customName ? customName : 'Color'}</Property>
                <Field>
                    <Dot enabled={hasNotSamePropertyValue(defaultColor, color, 'hex')}/>
                    <SelectedColor
                        className={['active', hasNotSamePropertyValue(storeValueColor, color, 'hex') ? 'updated' : '', color.name === 'Transparent' ? 'transparent' : '']}
                        onClick={() => toggleOpenView()}
                        style={{background: color.hex}}/>
                </Field>
            </div>
            <PaletteView className={openView ? '' : 'hidden'}>
                <div>
                    <Property>Color chart</Property>
                    <PaletteContainer>
                        <ColorsList open={openBasic} colors={colors.basic} action={updateColor}
                                    isSelected={isSelected} toggleOpen={toggleOpenBasic}/>
                        <ColorsList open={openCustom} colors={colors.custom}
                                    action={updateColor}
                                    availableAdding
                                    selectedAdding={currentAction === 'add'}
                                    isSelected={isSelected}
                                    toggleAction={toggleAction}
                                    toggleOpen={toggleOpenCustom}/>
                        <ColorView display={currentAction === 'view'} color={color}/>
                        <ColorAdd display={currentAction === 'add'}/>
                    </PaletteContainer>
                </div>
                <div>
                    <Close onClick={() => toggleOpenView()}><SvgCross/></Close>
                </div>
            </PaletteView>
            <ChoiceOpacity className={openView ? 'hidden' : ''}>
                <Property>Opacity</Property>
                <Field>
                    <Dot enabled={hasNotSamePropertyValue(defaultOpacity, opacity, 'value')}/>
                    <div>
                        <input type={'number'} max={100} min={0}
                               className={hasNotSamePropertyValue(storeValueOpacity, opacity, 'value') ? 'updated' : ''}
                               value={Number(opacity.value) * 100}
                               onChange={e => {
                                   updateOpacity(e.target.value);
                               }}/>
                        <span>%</span>
                    </div>
                </Field>
            </ChoiceOpacity>
        </ChoiceColor>
    );
}

ColorPicker.protoTypes = {
    color: PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        shade: PropTypes.string.isRequired
    }),
    defaultColor: PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        shade: PropTypes.string.isRequired
    }),
    storeValueColor: PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        shade: PropTypes.string.isRequired
    }),
    opacity: PropTypes.number,
    defaultOpacity: PropTypes.number,
    storeValueOpacity: PropTypes.number,
    colors: PropTypes.shape({
        basic: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            hex: PropTypes.string.isRequired,
            shade: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired
        })),
        custom: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            hex: PropTypes.string.isRequired,
            shade: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired
        }))
    }),
    openView: PropTypes.bool.isRequired,
    hidden: PropTypes.bool,
    event: PropTypes.string,
    customName: PropTypes.string,
    customTargetColor: PropTypes.string,
    customTargetOpacity: PropTypes.string,
    updateStateProps: PropTypes.func,
    toggleOpenView: PropTypes.func
};

const mapStateToProps = state => ({
    colors: getColors(state).value
});

export default connect(mapStateToProps)(ColorPicker);
