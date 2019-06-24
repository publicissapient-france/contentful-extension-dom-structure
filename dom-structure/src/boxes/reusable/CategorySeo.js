import React, { Component } from 'react';
import { Dot
} from '../../style/styledComponentsBoxes';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { seoTag } from '../../config/defaultConfig';

export const ChoiceSeo = styled.div`
   display : flex;
   padding: 10px 0;
   
`;

export const Field = styled.div`
    display : flex;  
`;
class CategorySeo extends Component {
    constructor (props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount = () => {
    };

    render () {
        const { seo } = this.props;

        return (
            <ChoiceSeo>
                <div>
                    <Field>
                        <Dot>
                            <div></div>
                        </Dot>
                        <select
                            value={ seo || 'h1'}
                            onChange={e => {
                                this.props.updateSeo(e.target.value);
                            }}>
                            <option></option>
                            {seoTag.map(tag => <option value={tag} key={tag}>{tag}</option>)}
                        </select>
                    </Field>
                </div>
            </ChoiceSeo>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(CategorySeo);
