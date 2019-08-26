import React, {Component} from "react"
import {
    Asset, Icon
} from "@contentful/forma-36-react-components"
import {
    Container,
    Preview,
    ViewPort
} from "./styled";

class AssetPreview extends Component{

    render(){
        const { asset, locale } = this.props
        const file = asset && asset.fields  && asset.fields.file  ? asset.fields.file[locale] : null;
        const type = file ? file.contentType.split("/")[0] : null;
        const bg = file ? {backgroundImage: `url(${file.url})`} : '';

        return (
            <Container
                className={`file-view  ${
                    type === "image" ? "image-file" : "non-image-file"
                    }`}
            >
                {
                    !file ? <ViewPort>
                            <Icon
                                color={"muted"}
                                icon="Asset"
                                size="large"
                                className="image-icon"
                            />
                        </ViewPort>
                     :  <Preview style={bg}/>



                }

            </Container>
        )
    }

}

export default AssetPreview;