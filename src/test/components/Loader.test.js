import React from 'react';
import { shallow } from 'enzyme';
import Loader from "../../components/LoadingPage";

test('should render loader', () => {
  const result = shallow(<Loader />)
  expect(result).toMatchSnapshot();
});