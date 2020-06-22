import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Draftling from './Draftling'

describe (`Draftling component`, () => {
    const props = {
        id: '13',
        title: 'test-draftling',
        wordcount: 'sixWordStory',
        genre: 'Horror',
        modified: new Date(2020, 6, 17),
    }

    it ('renders a .Draftling by default', () => {
        const wrapper = shallow( <Draftling />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    it ('renders the Draftling given props', () => {
        const wrapper = shallow(<Draftling {...props} />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })
});