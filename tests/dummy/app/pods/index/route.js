import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(/* transition */) {
    this.transitionTo('docs.usage'); // Implicitly aborts the on-going transition.
  }
});
