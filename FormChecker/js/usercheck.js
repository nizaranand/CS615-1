$(document).ready(function () {

	$('#email').keyup( function() {
	  //alert('Handler for .keyup() called.');
	  var email = $(this).val();
	  $('#emailStatus').text(' Validating ...');
	  
		if(email != '')
		{
			$.post('emailCheck.php', {email: email}, function(data){
				$('#emailStatus').text(data);
			});
		}
		else
		{
			$('#emailStatus').text('');
		}
	});
});

function checkform ( form )
{
  
  /*if (form.email.value == "") {
    alert( "Please enter your email address." );
    form.email.focus();
    return false ;
  }*/

  if (form.email.value==null || form.email.value=="")
  {
  	alert( "Please enter your email address." );
    form.email.focus();
    return false ;
  }

  if (form.email.value==null || form.password.value == "") {
    alert( "Please enter your password." );
    form.password.focus();
    return false ;
  }

  return true ;
}