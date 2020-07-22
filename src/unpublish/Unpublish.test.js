import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Unpublish from './Unpublish';

describe (`Unpublish component`, () => {
    it('renders a .Unpublish by default', () => {
        const wrapper = shallow(<Unpublish />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})