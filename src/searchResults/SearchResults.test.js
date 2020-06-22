import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchResults from './SearchResults'

describe (`SearchResults component`, () => {
    it('renders a .SearchResults by default', () => {
        const wrapper = shallow(<SearchResults />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    
})