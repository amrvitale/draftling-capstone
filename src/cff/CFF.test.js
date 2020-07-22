import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CFF from './CFF';

describe (`CFF component`, () => {
    it('renders a .CFF by default', () => {
        const wrapper = shallow(<CFF />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})