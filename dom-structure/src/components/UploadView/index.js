import React from "react"
import {
    Subheading,
    Button,
    Icon,
    TextLink
} from "@contentful/forma-36-react-components"
import "./upload-view.css"

export default function UploadView(props) {
    return (
        <div
            className="upload-view viewport centered"
            isDraggingOver={props.isDraggingOver}

        >
            <main>
                <Icon
                    color={props.isDraggingOver ? "secondary" : "muted"}
                    icon="Asset"
                    size="large"
                    className="image-icon"
                />
                <Subheading className="image-icon-label">
                    Drop an image here
                </Subheading>

                {!props.isDraggingOver ? (
                    <nav>
                        <Button buttonType="muted" className="button browse-button">
                            <input
                                className="file-picker"
                                type="file"
                                accept="image/x-png,image/gif,image/jpeg"
                                onChange={props.onDrop}
                            />
                            Select files
                        </Button>
                        <TextLink
                            className="link-existing"
                            onClick={props.onClickNewAsset}
                        >
                            Add new asset
                        </TextLink> <TextLink
                            className="link-existing"
                            onClick={props.onClickLinkExisting}
                        >
                            Link existing asset
                        </TextLink>
                    </nav>
                ) : null}
            </main>
        </div>
    )
}