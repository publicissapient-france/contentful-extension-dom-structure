import React from 'react';
import Enzyme, { shallow, mount} from "enzyme";
import configureStore from 'redux-mock-store';
import ConnectedButtonAddSection, {ButtonAddSection} from "./";
import { Button } from "./styled";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});



describe("TEST ButtonAddSection component", () => {
    const initialState = {};
    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
        store.clearActions();
    })

    test("renders", () => {
        const wrapper = shallow(<ConnectedButtonAddSection store={store} />);
        expect(wrapper.exists()).toBe(true);
    });

});