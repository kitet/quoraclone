import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('about');
  this.route('contact');
  this.route('signup');
  this.route('signin');
  this.route('askquestion');
  this.route('editquestion', {path:'/editquestion/:id'});
});

export default Router;
