import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Dash from './Dash'

describe (`Dash component`, () => {
    it('renders a .Dash by default', () => {
        const wrapper = shallow(<Dash />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    
})