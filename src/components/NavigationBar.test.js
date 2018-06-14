import React from 'react';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';

import NavigationBar from './NavigationBar';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
describe('<NavigationBar />', () => {
    it('Renders without crashing', () => {
        shallow(<NavigationBar/>);
    });
  })