import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Welcome from './Welcome';

describe (`Welcome component`, () => {
    it('renders a .Welcome by default', () => {
        const wrapper = shallow(<Welcome />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})