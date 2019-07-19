import React from 'react';
import Enzyme, { shallow} from "enzyme";
import Dot from "./";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter : new Adapter()});

describe("Dot component", () => {
    test("renders", () => {
        const wrapper = shallow(<Dot enabled={true}/>);
        expect(wrapper.exists()).toBe(true);
    });

    test("method getClassName should return active when enabled property is true", () => {
        const wrapper = shallow(<Dot enabled={true}/>);
        wrapper.instance().getClassName();
        expect(wrapper.props().className).toEqual('active');
    });

    test("method getClassName should return empty response when enabled property is false", () => {
        const wrapper = shallow(<Dot enabled={false}/>);
        wrapper.instance().getClassName();
        expect(wrapper.props().className).toEqual('');
    });
});