import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, BlockColor, BoxColor} from './styled';
import {HexColor, NameColor} from '../../style/styledComponentsBoxes'

class ColorsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {colors} = this.props;
        if (!colors) return <p>No color available</p>
        return (<List>
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
        </List>)
    }
}


ColorsList.propTypes = {
    colors: PropTypes.array,
};

export default ColorsList;
