import React from "react"
import {
    Asset
} from "@contentful/forma-36-react-components"
import {Container, Actions, Warning, DataContainer, Details, Title, Status} from "./styled";
import {ButtonBasic, ButtonDelete} from "../../style/styledComponents";

export default function FileView(props) {
    const title = props.title;
    const description = props.description;
    const file = props.file
    const type = file.contentType.split("/")[0]
    const prettySize = `${(file.details.size / 1000000).toFixed(2)} MB`
    const bg = {
        backgroundImage: `url(${file.url})`
    }

    return (
        <Container
            className={`file-view  ${
                type === "image" ? "image-file" : "non-image-file"
                }`}
            isDraggingOver={props.isDraggingOver}
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
                {type === "image" ? (
                    <header style={bg}/>
                ) : (
                    <header>
                        <Asset type={type} className="file-type-icon"/>
                    </header>
                )}
                <Details>
                    <main>
                        {title ? (
                            <Title className="filename"><strong>Title :</strong> {title}</Title>
                        ) : null}
                        {description ? (
                            <p><strong>Description:</strong> {description}</p>
                        ) : null}
                        <p><strong>File name:</strong> {file.fileName}</p>
                        {type === "image" ? (
                            <p>
                                <strong>Dimensions:</strong> {file.details.image.width}x
                                {file.details.image.height}
                            </p>
                        ) : null}
                        <p><strong>Size:</strong> {prettySize}</p>
                        <p><strong>Type:</strong> {file.contentType}</p>
                        <p><strong>Status: </strong>
                            <Status className={props.isPublished ? "published" : "draft"}>
                                {props.isPublished ? "Published" : "Draft"}
                            </Status></p>
                    </main>

                </Details>

            </DataContainer>
            <Actions>
                <ButtonBasic onClick={props.onClickEdit}>
                    Edit
                </ButtonBasic>
                <ButtonBasic onClick={props.onClickReload}>
                    Reload
                </ButtonBasic>
                <ButtonDelete onClick={props.onClickRemove}>
                    Remove
                </ButtonDelete>
            </Actions>
        </Container>
    )
}