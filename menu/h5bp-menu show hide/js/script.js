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
    		$('#innerMenu').show('slow');
  		}, 
  		function () {
    		//alert('out');
    		$('#innerMenu').hide('slow');
  	}); 

});