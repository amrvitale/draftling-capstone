import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Search from './Search'

describe (`Search component`, () => {
    it('renders a .Search by default', () => {
        const wrapper = shallow(<Search />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})