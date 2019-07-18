import React from 'react';
import Enzyme, { shallow, mount} from "enzyme";
import IconActing from "./";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter : new Adapter()});

const mockObject1 = {
    transform : 'uppercase'
}
const mockObject2 = {
    transform : null
}
const mockTargetProperty = 'transform';

describe("IconActing component", () => {
    test("renders", () => {
        const wrapper = shallow(<IconActing objectA={mockObject1} objectB={mockObject2} targetProperty={mockTargetProperty} value={'uppercase'}/>);
        expect(wrapper.exists()).toBe(true);
    });

    test("method getClassName should return updated when target property of objectA and objectB are not equal , target property of objectA is equal to value passed on props", () => {
        const wrapper = shallow(<IconActing objectA={mockObject2} objectB={mockObject1} targetProperty={mockTargetProperty} value={'uppercase'}/>);
        wrapper.instance().getClassName();
        expect(wrapper.props().className).toEqual('updated');
    });
    test("method getClassName should return active when target property of objectA and objectB are equal , target property of objectA is equal to value passed from props", () => {
        const wrapper = shallow(<IconActing objectA={mockObject1} objectB={mockObject1} targetProperty={mockTargetProperty} value={'uppercase'}/>);
        wrapper.instance().getClassName();
        expect(wrapper.props().className).toEqual('active');
    });
    test("method getClassName should return empty when target property of objectA and objectB are equal , target property of objectA is not equal to value passed on props", () => {
        const wrapper = shallow(<IconActing objectA={mockObject1} objectB={mockObject1} targetProperty={mockTargetProperty} value={'capitalize'}/>);
        wrapper.instance().getClassName();
        expect(wrapper.props().className).toEqual('');
    });

    test("prop objectA passed to props should be the same after the render of component", () => {
        const wrapper = mount(<IconActing objectA={mockObject1} objectB={mockObject2} targetProperty={mockTargetProperty} value={'uppercase'}/>)
        expect(wrapper.props().objectA).toEqual(mockObject1);
    })

    test("function action() should be call on click of component and null is not allowed with argument value passed from props", () => {
        const onClick = jest.fn();
        const wrapper = mount(<IconActing objectA={mockObject1} objectB={mockObject2} targetProperty={mockTargetProperty} value={'uppercase'} action={onClick}/>)
        wrapper.simulate('click');
        expect(onClick).toBeCalledWith(mockTargetProperty, 'uppercase');
    })
    test("function action() should be call on click of component, when targetProperty of ObjectB not equal to value and null is allowed, with argument value passed from props", () => {
        const onClick = jest.fn();
        const wrapper = mount(<IconActing objectA={mockObject1} objectB={mockObject2} targetProperty={mockTargetProperty} value={'uppercase'} action={onClick} nullAllowed/>)
        wrapper.simulate('click');
        expect(onClick).toBeCalledWith(mockTargetProperty, 'uppercase');
    })
    test("function action() should be call on click of component, with targetProperty of ObjectB equal to value and null is allowed, with argument null", () => {
        const onClick = jest.fn();
        const wrapper = mount(<IconActing objectA={mockObject2} objectB={mockObject1} targetProperty={mockTargetProperty} value={'uppercase'} action={onClick} nullAllowed/>)
        wrapper.simulate('click');
        expect(onClick).toBeCalledWith(mockTargetProperty, null);
    })

});