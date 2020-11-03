import React, {useState, useEffect} from 'react';
import {Container, Field} from './styled';
import PropTypes from 'prop-types';
import {hasNotSamePropertyValue} from '../../utils/functions';
import Dot from '../../components/Dot';
import IconActing from '../../components/IconActing';
import SvgAlignToStart from '../../components/svg/SvgAlignToStart';
import SvgAlignToEnd from '../../components/svg/SvgAlignToEnd';
import SvgAlignToCenter from '../../components/svg/SvgAlignToCenter';

const Alignment = ({alignment, storeValueAlignment, defaultAlignment, hidden, updateStateProps, event}) => {
    const [innerAlignment, setInnerAlignment] = useState(alignment);

    useEffect(() => {
        setInnerAlignment(alignment);
    }, [alignment])

    useEffect(() => {
        if (innerAlignment) {
            updateStateProps('alignment', innerAlignment, event);
        }
    }, [innerAlignment])

    const updateAlignment = (prop, value) => {
        setInnerAlignment(prev => ({
            ...prev,
            [prop]: value
        }))
    }

    if (!innerAlignment || !alignment) return null;
    return (
        <Container className={hidden ? 'hidden' : ''}>
            <Field>
                <div>
                    <Dot enabled={hasNotSamePropertyValue(defaultAlignment, alignment, 'horizontal')}/>
                    <IconActing objectA={storeValueAlignment} objectB={alignment} targetProperty={'horizontal'}
                                value={'flex-start'} action={updateAlignment} nullAllowed>
                        <SvgAlignToStart/>
                    </IconActing>
                    <IconActing objectA={storeValueAlignment} objectB={alignment} targetProperty={'horizontal'}
                                value={'center'} action={updateAlignment} nullAllowed>
                        <SvgAlignToCenter/>
                    </IconActing>
                    <IconActing objectA={storeValueAlignment} objectB={alignment} targetProperty={'horizontal'}
                                value={'flex-end'} action={updateAlignment} nullAllowed>
                        <SvgAlignToEnd/>
                    </IconActing>
                </div>
            </Field>
        </Container>
    );
}

Alignment.propTypes = {
    updateStateProps: PropTypes.func,
    alignment: PropTypes.shape({
        horizontal: PropTypes.string,
    }),
    storeValueAlignment: PropTypes.shape({
        horizontal: PropTypes.string,
    }),
    defaultAlignment: PropTypes.shape({
        horizontal: PropTypes.string,
    }),
    hidden: PropTypes.bool,
    event: PropTypes.string
};

export default Alignment;