// 1. Import Angular
import angular from 'angular';

// Import Controller
import MyController from './controller/mycontroller';

// 2. Create a Module
angular.module('app', [])

// Controller attached to Module
// angular.module('app').controller('MyController', MyController);  >>>
.controller('MyController', MyController);

