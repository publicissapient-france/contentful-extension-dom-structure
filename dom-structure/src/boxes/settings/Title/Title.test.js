import React from 'react';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import ConnectedTitle, {Title} from "./";

Enzyme.configure({adapter: new Adapter()});


describe("TEST Title ", () => {

    const initialState = { };

    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState)
    })


    it("renders", () => {
        const wrapper = shallow(<ConnectedTitle store={store} indexComponent={0} indexSection={0} name={'Title'}/>);
        expect(wrapper.exists()).toBe(true);
    });


});