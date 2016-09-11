(function (){
	'use strict';

	  angular
	    .module('sampleAngularapp')
	    .controller('PhotoViewerController', PhotoViewerController  );
	  
	function PhotoViewerController  ($routeParams){
		var vm = this;
		vm.album_name = $routeParams.album_name;
        vm.photo_filename = $routeParams.photo_filename;
      }
})();