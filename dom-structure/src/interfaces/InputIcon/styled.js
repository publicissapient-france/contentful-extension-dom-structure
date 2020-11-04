import styled from 'styled-components';
import { extensionTheme } from '../../style/theme';

export const Container = styled.div`
  padding : 10px 5px;
  
  & input{
    max-width : 80px;
  }
`;

export const SelectIcon = styled.div`
    display : flex;
    flex-wrap:wrap;
`;

export const Message = styled.p`
    color : ${extensionTheme.redL};
    font-size : 12px;
    padding-left : 4px;
 
`;
