import React from "react"
import { Icon } from "@contentful/forma-36-react-components"
import { Container, View, ViewPort, IconContainer, Actions, RefreshMessage } from "./styled"

import SvgAddSmall from '../svg/SvgAddSmall'
import SvgAttachement from '../svg/SvgAttachement'
import SvgTrashSmall from '../svg/SvgTrashSmall'
import SvgRefresh from '../svg/SvgRefresh';

import ButtonValidate from '../ui/ButtonValidate'

export default function ReloadView(props) {
    return (
        <Container>
            <View>
                <ViewPort>
                    <IconContainer>
                        <SvgRefresh/>
                    </IconContainer>
                </ViewPort>
                <Actions>
                    <IconContainer>
                        <SvgAttachement/>
                    </IconContainer>
                    <IconContainer>
                        <SvgAddSmall/>
                    </IconContainer>
                    <IconContainer>
                        <SvgTrashSmall/>
                    </IconContainer>
                </Actions>
            </View>
            <RefreshMessage>
                <p>You added a new image. <br/>Click on "refresh" to see it</p>
                <ButtonValidate label={'Refresh'} action={() => { props.onClickReload(props.assetId);}}/>
            </RefreshMessage>
        </Container>
    )
}