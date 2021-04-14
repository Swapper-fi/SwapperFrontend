import { shallow } from 'enzyme'
import App from '../screens/App';

// test('Check if navigation bar exists', () => {
//   const wrapper = shallow(<App />)
//   const navbar = wrapper.find(".navBar")
//   expect(navbar).toHaveLength(1)
// })

// test('Navbar should have two children', () => {
//   const wrapper = shallow(<App />)
//   const navbar = wrapper.find(".navBar")
//   expect(navbar.children()).toHaveLength(2)
// })

// test('Navbar should have the div which contains the menu items', () => {
//   const wrapper = shallow(<App />)
//   const navbar = wrapper.find(".navBar")
//   const list = navbar.childAt(0)
//   expect(list).toHaveLength(1)
//   expect(list.children()).toHaveLength(5)

// })

// test('Navbar should have the version container', () => {
//   const wrapper = shallow(<App />)
//   const navbar = wrapper.find(".navBar")
//   const versionContainer = navbar.childAt(1)
//   expect(versionContainer).toHaveLength(1)
//   expect(versionContainer.children()).toHaveLength(2)
// })