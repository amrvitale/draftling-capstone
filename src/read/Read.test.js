import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Read from './Read'

describe (`Read component`, () => {
    it('renders a .Read by default', () => {
        const wrapper = shallow(<Read />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})