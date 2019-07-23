import React from 'react';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';


import ConnectedCategoryColor, {CategoryColor} from "./";
import {FieldsError, ChoiceColor} from "./styled";

Enzyme.configure({adapter: new Adapter()});


describe("TEST Category Color ", () => {
    const color = {
        name: 'Grey',
        hex: '#F0F0F0',
        shade: '10',
    }
    const initialState = {
        style:
            {
                colors: {
                    basic: [
                        {
                            name: 'Grey',
                            hex: '#F0F0F0',
                            shade: '10',
                            slug: 'Grey-10',
                            rgb: '(240,240,240)'
                        },
                        {
                            name: 'Grey',
                            hex: '#FAFAFA',
                            shade: '5',
                            slug: 'Grey-5',
                            rbg: '(250,250,250)'
                        }

                    ]
                }
            }
    }

    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState)
    })


    it("renders", () => {
        const wrapper = shallow(<ConnectedCategoryColor store={store}/>);
        expect(wrapper.exists()).toBe(true);
    });

    it('should return Error if no colors on store', () => {
        const emptyState = {
            style: {}
        };
        const emptyStore = mockStore(emptyState);
        const wrapper = mount(<ConnectedCategoryColor color={color} store={emptyStore}/>);
        expect(wrapper.find(FieldsError).exists()).toBe(true)

    });

    it('should render Choice color view', () => {
        const wrapper = mount(<Provider store={store}><ConnectedCategoryColor openView color={color}
                                                                              store={store}/></Provider>);
        expect(wrapper.find(ChoiceColor).exists()).toBe(true);

    });



});