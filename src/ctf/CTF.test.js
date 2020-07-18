import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CTF from './CTF'

describe (`CTF component`, () => {
    it('renders a .CTF by default', () => {
        const wrapper = shallow(<Search />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})