import React from 'react';
import { Container, View, ViewPort, IconContainer, Actions, RefreshMessage } from './styled';

import SvgAddSmall from '../svg/SvgAddSmall';
import SvgAttachement from '../svg/SvgAttachement';
import SvgTrashSmall from '../svg/SvgTrashSmall';
import SvgRefresh from '../svg/SvgRefresh';

import ButtonValidate from '../ui/ButtonValidate';

const ReloadView = ({assetId, onClickReload}) =>  {
    return (
        <Container>
            <View>
                <ViewPort>
                    <IconContainer>
                        <SvgRefresh/>
                    </IconContainer>
                </ViewPort>
                <Actions>
                    <div>
                        <IconContainer>
                            <SvgAttachement/>
                        </IconContainer>
                        <IconContainer>
                            <SvgAddSmall/>
                        </IconContainer>
                    </div>
                    <IconContainer>
                        <SvgTrashSmall/>
                    </IconContainer>
                </Actions>
            </View>
            <RefreshMessage>
                <p>You added a new image. <br/>Click on "refresh" to see it</p>
                <ButtonValidate label={'Refresh'} action={() => { onClickReload(assetId); }}/>
            </RefreshMessage>
        </Container>
    );
}

export default ReloadView;
