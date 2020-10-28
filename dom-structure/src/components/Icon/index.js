import React, {Component} from 'react';
import {IconContainer} from "./styled";

class Icon extends Component{
    constructor(props) {
        super(props)
        this.myInput = React.createRef()

        this.state = {
            width: null
        }
    }

    componentDidMount() {
        if (this.leaflet.offsetWidth !== 0) {
            this.setState({
                width: this.leaflet.offsetWidth
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.state.width === null || this.state.width === 0 || prevProps !== this.props) {
            if (this.leaflet.offsetWidth !== 0) {
                this.setState({
                    width: this.leaflet.offsetWidth
                })
            }
        }
    }

    render() {
        const {char, font, currentValue} = this.props;

        return (
            <IconContainer onClick={() => this.props.clickAction()}
                           className={[  this.state.width ? 'show' :'', char === currentValue ? 'active' : '']}
                           style={{
                               width: 'fit-content',
                               fontSize: "30px",
                               fontFamily: `"${ font.family }", Blank ,${ font.typeface } `,
                               fontWeight: font.weight ? font.weight[1] : '',
                               height: this.state.width ? 'auto' : '0px'
                           }}
            >
                <p  ref={iconElement => {
                    this.leaflet = iconElement
                }}>{char}</p>
            </IconContainer>
        )
    }
}
 export default Icon;