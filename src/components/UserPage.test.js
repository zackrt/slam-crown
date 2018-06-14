import React from 'react';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';

import UserPage from './UserPage';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
describe('<UserPage />', () => {
    it('Renders without crashing', () => {
        shallow(<UserPage />);
    });
  })