import React from "react"
import { Icon } from "@contentful/forma-36-react-components"
import { Container, ViewPort, IconContainer, Actions } from "./styled"

import SvgAddSmall from '../svg/SvgAddSmall'
import SvgAttachement from '../svg/SvgAttachement'

export default function UploadView(props) {
    return (
        <Container>
            <ViewPort isDraggingOver={props.isDraggingOver} >
                    <Icon
                        color={props.isDraggingOver ? "secondary" : "muted"}
                        icon="Asset"
                        size="large"
                        className="image-icon"
                    />
            </ViewPort>
            {!props.isDraggingOver ? (
                <Actions>
                    <IconContainer  onClick={props.onClickLinkExisting}>
                        <SvgAttachement/>
                    </IconContainer>
                    <IconContainer  onClick={props.onClickNewAsset}>
                        <SvgAddSmall/>
                    </IconContainer>
                </Actions>
            ) : null}
        </Container>
    )
}