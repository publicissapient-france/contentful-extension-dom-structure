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

    componentDidMount = () => {
        this.setState({
            seo: this.props.seo
        });
    };

    componentDidUpdate = prevProps => {
        if (this.props.seo !== prevProps.seo) {
            this.setState({
                ...this.state,
                seo: this.props.seo
            });
        }
    }


    render () {
        const { storeValueSeo, seo, defaultSeo } = this.props;
        if(!seo) return null
        return (
            <ChoiceSeo>
                <div>
                    <Field>
                        <Dot className={defaultSeo.tag && seo.tag != defaultSeo.tag ? 'active ': ''}/>
                        <select
                            value={ seo.tag }
                            className={storeValueSeo && !_.isEqual(seo.tag, storeValueSeo.tag) ? 'updated' : ''}
                            onChange={e => {
                                this.setState({
                                    ...this.state,
                                    seo: {
                                        ...this.state.seo,
                                        tag: e.target.value,
                                    }
                                }, () => {
                                    this.props.updateStateProps('seo', this.state.seo);
                                })

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
