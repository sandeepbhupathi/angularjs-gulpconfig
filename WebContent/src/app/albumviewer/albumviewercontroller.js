(function (){
	'use strict';

	  angular
	    .module('sampleAngularapp')
	    .controller('AlbumViewerController', AlbumViewerController );
	  
	function AlbumViewerController ($routeParams){
		var vm = this;
		vm.album_name = $routeParams.album_name;
		vm.photos;
		vm.page_loading_error="";
		switch ($routeParams.album_name) {
        case "madrid1309":
          vm.photos = [ 
              { filename: "madrid1309-001.jpg",
                date: "2013/09/05",
                description: "I love this place" },
              { filename: "madrid1309-002.jpg",
                date: "2013/09/05",
                description: "so much winning!!!" } ];
          break;
      default:
          vm.page_loading_error = "I don't know about that album yet, sorry";
      }
	}
})();