import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostDraftling from './PostDraftling';

describe (`PostDraftling component`, () => {
    it('renders a .PostDraftling by default', () => {
        const wrapper = shallow(<PostDraftling />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })   
})