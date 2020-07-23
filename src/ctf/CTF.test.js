import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CTF from './CTF';

describe (`CTF component`, () => {
    it('renders a .CTF by default', () => {
        const wrapper = shallow(<CTF crit={{plot: "test", pov: "first person", characters: "Angela", dialogue: "hello", gramspell:"none", overall:"good work!"}}/>)
        expect (toJson(wrapper)).toMatchSnapshot()
    })  
})