import React, {Component} from 'react'
import styled from 'styled-components';
import { extensionTheme} from "../style/theme";
import SvgContent from './SvgContent';
import SvgSpecs from './SvgSpecs';
import SvgRange from './SvgRange';
import SvgTrash from './SvgTrash';


const Container = styled.div`
  border: 1px solid ${ extensionTheme.grey };
  border-left : 5px solid ${ extensionTheme.blue };
  background : white;
  margin-bottom : 10px;
  padding : 0 8px;
  width : 100%;
  
  h3, h4{
    font-size : 13px;
    width : fit-content;
    padding : 0 5px;
    margin : 0;line-height : 40px;

  }
  
  h3{
    font-weight : 400;
   }
   h4{
    color :  ${ extensionTheme.grey };
    font-weight : 300;
   }
  
`;

const TopBar = styled.div`
  width : 100%;
  display : flex;
  justify-content: space-between;
  
`;

const Description = styled.div`
  display : flex;
  width : fit-content
  
`;
const Actions = styled.div`
  display : flex;
  width : fit-content
  
`;
const Icon = styled.div`
  width : 40px;
  height : 40px;
`;
const Range = styled.div`
  display : flex;
  flex-direction : column;
  width : 40px;
  
  & ${Icon}{
    height : 20px;
    & svg{
        height : 20px;
    }
  }
`;


class ComponentDOM extends Component {
    render () {
        const { component } = this.props;
        console.log('section on props',component);

        return (
            <Container>
                <TopBar>
                    <Description>
                        <h3>{component.name} </h3>
                        <h4>{component.model} </h4>
                    </Description>
                    <Actions>
                        <Icon><SvgContent/></Icon>
                        <Icon><SvgSpecs/></Icon>
                        <Range>
                            <Icon><SvgRange/></Icon>
                            <Icon><SvgRange/></Icon>
                        </Range>
                        <Icon><SvgTrash/></Icon>
                    </Actions>


                </TopBar>


            </Container>
        );
    }
};

export default ComponentDOM;