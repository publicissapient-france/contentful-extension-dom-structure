import React from 'react';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';


import ConnectedSeo, {Seo} from "./index";
import {} from "./styled";

Enzyme.configure({adapter: new Adapter()});


describe("TEST Category Seo ", () => {

    const initialState = {};

    const seo = {
        tag: 'h4'
    }

    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState)
    })


    it("renders", () => {
        const wrapper = shallow(<ConnectedSeo store={store}/>);
        expect(wrapper.exists()).toBe(true);
    });


});