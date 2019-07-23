import React from 'react';
import Enzyme, { shallow, mount} from "enzyme";
import ColorsList from "./";
import { List, BlockColor } from "./styled";
import { IconAdd } from "../../style/styledComponentsBoxes";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter : new Adapter()});


const items = [
    {
        name : 'one',
        hex : '#111111',
        slug : '1'
    },
    {
        name : 'two',
        hex : '#222222',
        slug : '2'
    }
]

describe("TEST ColorsList component", () => {
    test("renders", () => {
        const wrapper = shallow(<ColorsList />);
        expect(wrapper.exists()).toBe(true);
    });

    test("should return warning message if no color are passed to props", () => {
        const wrapper = shallow(<ColorsList/>)
        expect(wrapper.contains(<p>No color available</p>)).toBeTruthy();

    })

    test("should contains a List", () => {
        const action = jest.fn();
        const isSelected = jest.fn();
        const wrapper = shallow(<ColorsList colors={items} action={action} isSelected={isSelected} />)
        expect( wrapper.find(List).exists()).toBe(true)
    })

    test("should contains a List with same length of colors passed on props", () => {
        const action = jest.fn();
        const isSelected = jest.fn();
        const wrapper = shallow(<ColorsList colors={items} action={action} isSelected={isSelected} />)

        expect( wrapper.find(List).children(BlockColor).exists()).toBe(true)
        expect( wrapper.find(List).children(BlockColor)).toHaveLength(items.length);
    })

    test("should contains a List with first child which have NameColor with text correspond to the name of first element of items", () => {
        const action = jest.fn();
        const isSelected = jest.fn();
        const wrapper = shallow(<ColorsList colors={items} action={action} isSelected={isSelected} />)
        expect(wrapper.find(List).children(BlockColor).get(0).props.children[1].props.children).toEqual(items[0].slug);
    })


    test("should contains the icon Add if property availableAdding is true", () => {
        const action = jest.fn();
        const isSelected = jest.fn();
        const wrapper = shallow(<ColorsList colors={items} action={action} isSelected={isSelected} availableAdding/>)
        expect( wrapper.find(IconAdd).exists()).toBe(true);

    })


});