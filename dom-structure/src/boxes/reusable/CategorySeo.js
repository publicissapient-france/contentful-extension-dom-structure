import React, { Component } from 'react';
import { Dot
} from '../../style/styledComponentsBoxes';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { tags } from '../../config/defaultConfig';
import _ from 'lodash';

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

        this.state = {};
    }

    componentDidMount = () => {};

    render () {
        const { storeValueSeo, seoTag } = this.props;
        return (
            <ChoiceSeo>
                <div>
                    <Field>
                        <Dot/>
                        <select
                            value={ seoTag }
                            className={!_.isEqual(seoTag, storeValueSeo) ? 'updated' : ''}
                            onChange={e => {
                                this.props.updateStateProps('seoTag', e.target.value);
                            }}>
                            {tags.map(tag => <option value={tag} key={tag}>{tag}</option>)}
                        </select>
                    </Field>
                </div>
            </ChoiceSeo>
        );
    }
}


export default connect()(CategorySeo);
