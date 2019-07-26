import React from "react"
import { Icon } from "@contentful/forma-36-react-components"
import { Container, ViewPort, IconContainer } from "./styled"

import SvgAdd from '../svg/SvgAdd'
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
                <nav>
                    <IconContainer  onClick={props.onClickNewAsset}>
                        <SvgAdd/>
                    </IconContainer>
                    <IconContainer  onClick={props.onClickLinkExisting}>
                        <SvgAttachement/>
                    </IconContainer>
                </nav>
            ) : null}
        </Container>
    )
}