// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';


import '/imports/ui/theme/layout/layout.scss';
// // Main app
// import App from '/imports/ui/App.vue';

//test App
// import Test from '/imports/ui/test.vue';
//
//Registration App
import Registration from '/imports/ui/Registration.vue';

//Admin App
import Admin from '/imports/ui/Admin.vue';

Meteor.startup(() => {
  // new Vue({
  //   render: h => h(App),
  // }).$mount('app');

  // new Vue({
  //   render: h => h(Test),
  // }).$mount('test');
  //
  new Vue({
    render: h => h(Registration),
  }).$mount('registration');

  new Vue({
    render: h => h(Admin),
  }).$mount('admin');
});
