import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MyDraftlings from './MyDraftlings';

describe (`MyDraftlings component`, () => {
    it('renders a .MyDraftlings by default', () => {
        const wrapper = shallow(<MyDraftlings draftlings={[]} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })  
})