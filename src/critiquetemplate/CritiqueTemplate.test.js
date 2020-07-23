import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CritiqueTemplate from './CritiqueTemplate'

describe (`CritiqueTemplate component`, () => {
    it('renders a .CritiqueTemplate by default', () => {
        const wrapper = shallow(<CritiqueTemplate />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    
})