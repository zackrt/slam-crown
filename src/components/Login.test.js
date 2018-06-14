import React from 'react';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';

import Login from './Login';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
describe('<Login />', () => {
    it('Renders without crashing', () => {
        shallow(<Login />);
    });
  })