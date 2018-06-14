import React from 'react';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';

import SymptomSelector from './SymptomSelector';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
describe('<SymptomSelector />', () => {
    it('Renders without crashing', () => {
        shallow(<SymptomSelector/>);
    });
  })