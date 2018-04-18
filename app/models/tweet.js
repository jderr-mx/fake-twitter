import DS from 'ember-data';

export default DS.Model.extend({
  handle: DS.attr(),
  text: DS.attr(),
  date: DS.attr()
});
