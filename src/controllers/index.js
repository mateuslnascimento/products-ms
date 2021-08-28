import services from '../services/index.js';
import factory from './factory.js';
import validators from '../validators/index.js';

const dependencies = {

};

export default factory({ services: services(dependencies), validators });
