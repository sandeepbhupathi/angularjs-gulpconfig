(function() {
  'use strict';

  angular
    .module('sampleAngularapp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when("/albums", {
        templateUrl: 'app/albumlist/album_list.html',
        controller: 'AblumListController',
        controllerAs: 'ablumList'
      }).when("/",  { redirectTo: "/albums" 
      }).when("/album/:album_name",{
    	  templateUrl: 'app/albumviewer/album_viewer.html',
          controller: 'AlbumViewerController',
          controllerAs: 'albumviewer'
      }).when("/album/:album_name/photos/:photo_filename",  
    	{ controller: "PhotoViewerController", 
    	  templateUrl: "app/photoviewer/photo_viewer.html",
    	  controllerAs: 'photoviewer'})
      .otherwise({
        redirectTo: '/'
      });
  }

})();
