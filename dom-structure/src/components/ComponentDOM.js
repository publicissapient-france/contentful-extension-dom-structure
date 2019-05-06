import React, {Component} from 'react'
import styled from 'styled-components';
import { extensionTheme} from "../style/theme";
import SvgContent from './SvgContent';
import SvgSpecs from './SvgSpecs';
import SvgRange from './SvgRange';
import SvgTrash from './SvgTrash';
import { Container} from "../style/styledComponents";


const ContainerComponent = styled(Container)`
  border: 1px solid ${ extensionTheme.grey };
  border-left : 5px solid ${ extensionTheme.blue }; 
  width : 100%;
  padding-right :0px;
  margin-top :10px;

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
    
    :nth-child(2){
        transform:rotate(180deg);
    }
  }
`;


class ComponentDOM extends Component {
    render () {
        const { component } = this.props;
        console.log('section on props',component);

        return (
            <ContainerComponent>
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


            </ContainerComponent>
        );
    }
};

export default ComponentDOM;