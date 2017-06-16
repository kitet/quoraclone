import Ember from 'ember';

export default Ember.Route.extend({
    map: Ember.inject.service('google-map'),
    afterModel() {
        //console.log('me');
        var container = this.$('.map-display');
        console.log(container);
        var options = {
            center: this.get('map').center(1.3005323, 36.7823955),
            zoom: 15
        };
        this.get('map').findMap(container, options);
    },
});