import React from 'react';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';

import Login from './Login';
import Adapter from 'enzyme-adapter-react-16';
import { SymptomOption } from './SymptomOption';

Enzyme.configure({ adapter: new Adapter() })
describe('<SymptomOption />', () => {
    it('Renders without crashing', () => {
        shallow(<SymptomOption />);
    });
  })