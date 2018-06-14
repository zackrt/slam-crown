import React from 'react';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';

import SignUp from './SignUpForm';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
describe('<SignUp />', () => {
    it('Renders without crashing', () => {
        shallow(<SignUp/>);
    });
  })