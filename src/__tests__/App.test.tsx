import { shallow } from 'enzyme'
import App from '../screens/App';

test('Check if navigation bar exists', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(".navBar")).toBeTruthy()
})
