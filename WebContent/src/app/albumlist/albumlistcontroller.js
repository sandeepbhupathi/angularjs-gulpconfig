(function (){
	'use strict';

	  angular
	    .module('sampleAngularapp')
	    .controller('AblumListController', AblumListController);
	  
	function AblumListController($window){
		var vm = this;
		vm.adding_album = {};
        vm.add_error_text = '';

        vm.albums = [ 
            { name: 'madrid1309', title: 'Weekend in Madrid', date: '2013-09-01', description: 'My favourite trip' },
            { name: 'iceland1404', title: 'Holiday in Iceland', date: '2014-04-15', description: 'This place is cold' },
            { name: 'thailand1210', title: 'Surfing in Thailand', date: '2012-10-01', description: 'So hot!' },
            { name: 'australia1207', title: 'Wedding in Australia', date: '2012-07-31', description: 'So many kangaroos and koalas!' }
        ];

        vm.addAlbum = addAlbum;
        vm.downloadFile = downloadFile;
        
        function addAlbum(album_data) {
        	if (!album_data.title) 
        		vm.add_error_text = "Missing title";
            else if (!album_data.date)
                vm.add_error_text = "You must specify a date (yyyy/mm/dd)";
            else if (!album_data.description)
                vm.add_error_text = "Missing description";
            else if (!album_data.name)
                vm.add_error_text = "Short album name must be at least 6 chars (ironic, yes)";
            else {
                try {
                    var d = new Date(album_data.date.trim());
                    if (isNaN(d.getTime())) throw new Error("invalid date");
                    vm.albums.push(album_data);
                    vm.adding_album = {};
                    vm.add_error_text = '';
                } catch (e) {
                    vm.add_error_text = "You must specify a valid date (yyyy/mm/dd)";
                }
            }
        }
        
        function downloadFile(){
        	var sheet = xlsx({
        	      creator: 'John Doe',
        	      lastModifiedBy: 'Meg White',
        	      worksheets: [{
        	        data: [
        	          ['green', 'white', {value:'orange', autoWidth:true}, 'blue', 'red'],
        	          ['1', '2', '3', '4', '5'],
        	          [6, 7, 8, 9, 10]
        	        ],
        	        table: true,
        	        name: 'Sheet 1'
        	      },{
        	        data: [
        	          ['formatting test'],
        	          [{formatCode: '0.00', value:'1'}, 
        	           {italic:1, bold:1, formatCode:'General',hAlign:'center',vAlign: 'center', borders:{bottom:'DEE31D'}, 
        	        	  value:'B1dnjkdsnfknkjsdnkwnfksksnksnkjweefnkwewkjenewfknn'}, 
        	           {borders:{bottom:64}, value:'C1'},
        	           {fontName: 'Arial', value:'D1'},
        	           {fontSize: 8, value:'E1'}, 
        	           {italic:1, bold:1, value: 'F1'}
        	          ]
        	        ],
        	        name: 'Sheet 2'
        	      },{
        	        data: [
        	          ['merge test'],
        	          ['A1', {colSpan:3, value:'B1'}, 'E1'],
        	          [{rowSpan: 3, value:'A2', vAlign: 'center', hAlign: 'center'}, 'B2', 'C2', 'D2', 'E2'],
        	          ['B3', 'C3', 'D3', 'E3']
        	        ],
        	        name: 'Sheet 3'
        	      }]
        	    });
        	$window.open(sheet.href());
        	console.log("download file");
        }
       
	}
})();