import React from 'react';
import Enzyme, { shallow, mount} from "enzyme";
import configureStore from 'redux-mock-store';
import ConnectedAddingSection, {AddingSection} from "./index";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});



describe("TEST AddingSection component", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
        store.clearActions();
    })

    test("renders", () => {
        const wrapper = shallow(<ConnectedAddingSection store={store} />);
        expect(wrapper.exists()).toBe(true);
    });

});