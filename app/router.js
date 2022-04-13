import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('create-invoice');
  this.route('home');
  this.route('not-found', { path: '/*path'});
  this.route('invoices', function() {
    this.route('not-found-invoice')
    this.route('invoice', { path: '/:invoice_id'});
    this.route('edit', {path: '/:invoice_id/edit'});
    this.route('create');
  });
  this.route('pokemon', function() {
    // this.route('not-found', {path: '/*path'})
    this.route('view', {path: '/:view_id'});
    this.route('view-loading');
    this.route('not-found-pokemon');
    this.route('view-error');
  });
  this.route('clothes', function() {
    this.route('t-shirt');
  });
  this.route('loading');
  this.route('posts');
  this.route('error');
  this.route('pokemon-error');
});
