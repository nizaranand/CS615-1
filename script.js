/* Author:

*/

$(document).ready(function(){

	$('#innerMenu').hide();

	/* $('#outerMenu').hover(function(){$('#innerMenu').show();}, function(){$('#innerMenu').hide();} 

	); */

	/*$('#outerMenu').hover(
  		function () {
    		$('#innerMenu').show();
  		}, 
  		function () {
    		$('#innerMenu').hide();
  	}); */

  	$('#outerMenu').hover(
  		function () {
    		//alert('on');
    		$('#innerMenu').show();
  		}, 
  		function () {
    		//alert('out');
    		$('#innerMenu').hide();
  	}); 

});
	



