import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import DraftlingPage from './DraftlingPage'

describe (`DraftlingPage component`, () => {
    it('renders a .DraftlingPage by default', () => {
        const wrapper = shallow(<DraftlingPage />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})