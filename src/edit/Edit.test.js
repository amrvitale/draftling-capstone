import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Edit from './Edit'

describe (`Edit component`, () => {
    it('renders a .Edit by default', () => {
        const wrapper = shallow(<Edit />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})