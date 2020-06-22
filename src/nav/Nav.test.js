import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Nav from './Nav'

describe (`Nav component`, () => {
    it('renders a .Nav by default', () => {
        const wrapper = shallow(<Nav />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})