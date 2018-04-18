import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  handle() {
    return faker.internet.userName();
  },
  text() {
    return faker.lorem.sentence();
  }
});
