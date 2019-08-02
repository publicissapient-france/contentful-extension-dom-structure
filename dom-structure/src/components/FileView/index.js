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
    Title,
    Status,
    IconContainer,
    Preview,
    Field, Information, Modifier
} from "./styled";
import SvgLink from '../svg/SvgLink';
import SvgAdd from '../svg/SvgAdd';
import SvgTrash from '../svg/SvgTrash';
import SvgInformation from '../svg/SvgInformation';
import ButtonBasic from '../ui/ButtonBasic';

export default function FileView(props) {
    const title = props.title;
    const file = props.file
    const type = file.contentType.split("/")[0]
    const prettySize = `${(file.details.size / 1000000).toFixed(2)} MB`
    const bg = { backgroundImage: `url(${file.url})`}

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
                    <Modifier>
                        <ButtonBasic action={props.onClickEdit} label={'Edit'}/>
                        <ButtonBasic onClick={props.onClickReload} label={'Reload'}/>
                    </Modifier>
                </div>
                <Actions>
                    <IconContainer onClick={props.onClickLinkExisting}>
                        <SvgLink/>
                    </IconContainer>
                    <IconContainer onClick={props.onClickNewAsset}>
                        <SvgAdd/>
                    </IconContainer>
                    <IconContainer
                        className={['informations',props.openInformations ? 'active' : '', !props.validInformations ? 'invalid' : '']}
                        onClick={props.toggleOpenInformations}>
                        <SvgInformation/>
                    </IconContainer>
                    <IconContainer className="delete" onClick={props.onClickRemove}>
                        <SvgTrash/>
                    </IconContainer>
                </Actions>
                <Details className={!props.openInformations ? 'hidden' : ''}>
                    <div>
                        <Field>
                            <label>Alt (required)</label>
                            <input type={'text'}
                                   value={props.alt}
                                   onChange={e => {
                                       props.updateStateTranslatedProps('alt', e.target.value, props.index);
                                   }}/>
                        </Field>
                        <Field>
                            <label>Description</label>
                            <input type={'text'}
                                   value={props.description}
                                   onChange={e => {
                                       props.updateStateTranslatedProps('description', e.target.value, props.index);
                                   }}/>
                        </Field>
                    </div>
                    <main>
                        <div>
                            {title ? (
                                <Information>
                                    <label>title</label>
                                    <p>{title}</p>
                                </Information>
                            ) : null}

                            <Information>
                                <label>Dimensions</label>
                                {type === "image" ? (
                                    <p>
                                        {file.details.image.width}x
                                        {file.details.image.height}
                                    </p>
                                ) : null}
                            </Information>
                            <Information>
                                <label>Size</label>
                                <p>{prettySize}</p>
                            </Information>
                            <Information>
                                <label>Type</label>
                                <p>{file.contentType}</p>
                            </Information>
                        </div>
                        <div>
                            <label>Status</label>
                            <p>
                                <Status className={props.isPublished ? "published" : "draft"}>
                                    {props.isPublished ? "Published" : "Draft"}
                                </Status></p>
                        </div>
                    </main>
                </Details>
            </DataContainer>
        </Container>
    )
}