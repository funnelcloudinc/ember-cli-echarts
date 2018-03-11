import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    this.route('index');
    this.route('usage');
    this.route('quickstart');
    this.route('examples', function() {
      this.route('chart-simple');
      this.route('chart-loading');
      this.route('chart-events');
      this.route('chart-themes');
      this.route('chart-dynamic');
      this.route('chart-graph');
      this.route('chart-calendar');
    });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
