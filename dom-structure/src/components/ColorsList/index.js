import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HexColor, NameColor, BlockColor, BoxColor, Palette, IconAdd} from '../../style/styledComponentsFields'
import {List, IconExtend} from './styled'
import SvgExtended from '../svg/SvgExtended'
import SvgNotExtended from '../svg/SvgNotExtended'
import SvgSheet from '../svg/SvgSheet'

class ColorsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {open, colors, availableAdding, selectedAdding} = this.props;
        let extendSVG = open ? <SvgExtended/> : <SvgNotExtended/>;
        let iconAdd = <IconAdd className={ selectedAdding ? 'selected' : ''}
                               onClick={e => this.props.toggleAction()}>
            <SvgSheet/>
        </IconAdd>

        if (!colors) return <p>No color available</p>
        return (
            <Palette className={open ? 'open' : ''}>
                <IconExtend onClick={() => this.props.toggleOpen()}>
                    {extendSVG}
                </IconExtend>
                <List>
                    {
                        colors.map((item, i) =>
                            <BlockColor key={i}
                                        className={this.props.isSelected(item) ? 'selected' : ''}
                                        onClick={e => {
                                            this.props.action(item)
                                        }}>
                                <BoxColor
                                    className={item.name === 'None' ? 'null' : ''}
                                    style={{background: item.hex}}/>
                                <NameColor>{item.slug}</NameColor>
                                <HexColor>{item.hex}</HexColor>
                            </BlockColor>
                        )
                    }
                    { availableAdding ? iconAdd : null }
                </List>
            </Palette>

        )
    }
}

ColorsList.propTypes = {
    colors: PropTypes.array,
    open : PropTypes.bool,
    availableAdding: PropTypes.bool,
    selectedAdding : PropTypes.bool
};

export default ColorsList;
