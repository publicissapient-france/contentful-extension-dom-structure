import React, {Component} from 'react';
import {Container, IconContainer, SelectIcon, Message} from './styled';
import PropTypes from 'prop-types';

class InputIcon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            light: true,
            alphabet: true,
            text: {
                alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ‘?’“!”(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*',
            }
        };
    }

    render() {
        const {font, action, targetProperty, defaultValue} = this.props;

        if (!font) return null
        if (!font.family) return <Message>Please choose a font on settings</Message>
        return (<Container>
            <SelectIcon>
                {
                    this.state.text.alphabet.split("").map((char) => {
                        return <Icon clickAction={() => {
                            action(char, targetProperty)
                        }} font={font} char={char} currentValue={defaultValue}/>
                    })
                }
            </SelectIcon>

            <input type={'text'}
                   value={defaultValue}
                   disabled
                   onChange={e => {
                       action(e.target.value, targetProperty);
                   }}/>
        </Container>);
    }
}

InputIcon.propTypes = {
    action: PropTypes.func,
    targetProperty: PropTypes.string.isRequired,
    defaultValue: PropTypes.string
};

export default InputIcon;


class Icon extends Component {
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
