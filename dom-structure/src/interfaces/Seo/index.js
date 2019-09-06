import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { tags } from '../../config/defaultConfig';

import Dot from '../../components/Dot/index';
import { hasNotSamePropertyValue } from '../../utils/functions';
import { ChoiceSeo, Field } from './styled';

class Seo extends Component {
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

    updateSeo = (prop, value) => {
        this.setState({
            ...this.state,
            seo: {
                ...this.state.seo,
                [prop]: value,
            }
        }, () => {
            this.props.updateStateProps('seo', this.state.seo);
        });
    }

    render () {
        const { storeValueSeo, seo, defaultSeo, hidden } = this.props;
        if (!seo) return null;
        return (
            <ChoiceSeo className={hidden ? 'hidden' : ''}>
                <div>
                    <Field>
                        <Dot enabled={hasNotSamePropertyValue(defaultSeo, seo, 'tag')}/>
                        <select
                            value={seo.tag}
                            className={hasNotSamePropertyValue(storeValueSeo, seo, 'tag') ? 'updated' : ''}
                            onChange={e => {
                                this.updateSeo('tag', e.target.value);
                            }}>
                            {tags.map(tag => <option value={tag} key={tag}>{tag}</option>)}
                        </select>
                    </Field>
                </div>
            </ChoiceSeo>
        );
    }
}

Seo.protoTypes = {
    seo: PropTypes.shape({
        tag: PropTypes.oneOf(tags)
    }),
    defaultSeo: PropTypes.shape({
        tag: PropTypes.oneOf(tags)
    }),
    storeValueSeo: PropTypes.shape({
        tag: PropTypes.oneOf(tags)
    }),
    hidden: PropTypes.bool

};

export default connect()(Seo);
