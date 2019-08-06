import React from "react"
import {
    Asset
} from "@contentful/forma-36-react-components"
import {
    Container,
    Actions,
    Warning,
    DataContainer,
    Details,
    IconContainer,
    Preview,
    Field, Modifier
} from "./styled";
import SvgAttachement from '../svg/SvgAttachement';
import SvgAddSmall from '../svg/SvgAddSmall';
import SvgTrashSmall from '../svg/SvgTrashSmall';

export default function FileView(props) {
    const file = props.file
    const type = file.contentType.split("/")[0]
    const bg = {backgroundImage: `url(${file.url})`}

    return (
        <Container
            className={`file-view  ${
                type === "image" ? "image-file" : "non-image-file"
                }`}
        >
            {!props.valid ? (
                <Warning>
                    <strong>WARNING : </strong><br/>
                    The selected asset does NOT exist anymore on Media
                </Warning>
            ) : (
                null
            )}
            <DataContainer>
                <div>
                    {type === "image" ? (
                        <Preview style={bg}/>
                    ) : (
                        <Preview>
                            <Asset type={type} className="file-type-icon"/>
                        </Preview>
                    )}
                    {
                        /*<Modifier>
                            <ButtonBasic action={props.onClickEdit} label={'Edit'}/>
                            <ButtonBasic onClick={props.onClickReload} label={'Reload'}/>
                        </Modifier>*/
                    }

                </div>
                <Actions>
                    <IconContainer onClick={props.onClickLinkExisting}>
                        <SvgAttachement/>
                    </IconContainer>
                    <IconContainer onClick={props.onClickNewAsset}>
                        <SvgAddSmall/>
                    </IconContainer>
                    <IconContainer className="delete" onClick={props.onClickRemove}>
                        <SvgTrashSmall/>
                    </IconContainer>
                </Actions>

            </DataContainer>
            <Details>
                <div>

                </div>
            </Details>
        </Container>
    )
}