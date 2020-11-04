import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { tags } from '../../config/defaultConfig';

import Dot from '../../components/Dot/index';
import { hasNotSamePropertyValue } from '../../utils/functions';
import { ChoiceSeo, Field } from './styled';

const Seo = ({seo, storeValueSeo, defaultSeo, hidden, updateStateProps}) => {
    const [innerSeo, setInnerSeo] = useState(seo);

    useEffect(() => {
        setInnerSeo(seo);
    }, [seo]);

    useEffect(() => {
        updateStateProps('seo', innerSeo);
    }, [innerSeo]);

    const updateSeo = (prop, value) => {
        setInnerSeo(prev => ({
            ...prev,
            [prop]: value
        }))
    }

    if (!seo) return null;
    return (
        <ChoiceSeo className={hidden ? 'hidden' : ''}>
            <div>
                <Field>
                    <Dot enabled={hasNotSamePropertyValue(defaultSeo, seo, 'tag')}/>
                    <select
                        value={seo.tag}
                        className={hasNotSamePropertyValue(storeValueSeo, seo, 'tag') ? 'updated' : ''}
                        onChange={e => updateSeo('tag', e.target.value)}>
                        {tags.map(tag => <option value={tag} key={tag}>{tag}</option>)}
                    </select>
                </Field>
            </div>
        </ChoiceSeo>
    );
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
    hidden: PropTypes.bool,
    updateStateProps: PropTypes.func

};

export default connect()(Seo);
