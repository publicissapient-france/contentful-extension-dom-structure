import React, { Component } from 'react';
import { Dot
} from '../../style/styledComponentsBoxes';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { tags } from '../../config/defaultConfig';

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
        console.log('props tag', this.props.seoTag);
    };

    render () {
        const { storeValueSeo, seoTag } = this.props;
        return (
            <ChoiceSeo>
                <div>
                    <Field>
                        <Dot>
                            <div></div>
                        </Dot>
                        <select
                            value={ seoTag }
                            className={storeValueSeo && seoTag !== storeValueSeo.tag ? 'updated' : ''}
                            onChange={e => {
                                this.props.updateSeoTag(e.target.value);
                            }}>
                            {tags.map(tag => <option value={tag} key={tag}>{tag}</option>)}
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
