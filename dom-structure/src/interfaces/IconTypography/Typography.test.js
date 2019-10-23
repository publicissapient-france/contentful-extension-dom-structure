import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import ConnectedTypography, { Typography } from './';
import {} from './styled';

Enzyme.configure({ adapter: new Adapter() });

describe('TEST Category Text ', () => {
    const initialState = {
        style: {
            fonts: [
                {
                    family: 'oneFamily',
                    generatedFontName: 'oneFamily-Regular',
                    typeface: 'sans-serif',
                    weight: [ 'Regular', '400']
                },
                {
                    family: 'twoFamily',
                    generatedFontName: 'twoFamily-Bold',
                    typeface: 'serif',
                    weight: [ 'Bold', '700']
                }
            ]
        }
    };

    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('renders', () => {
        const wrapper = shallow(<ConnectedTypography store={store}/>);
        expect(wrapper.exists()).toBe(true);
    });
});
