const Enzyme = require('enzyme');
const adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new adapter() });