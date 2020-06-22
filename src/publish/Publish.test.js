import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Publish from './Publish'

describe (`Publish component`, () => {
    it('renders a .Publish by default', () => {
        const wrapper = shallow(<Publish />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})