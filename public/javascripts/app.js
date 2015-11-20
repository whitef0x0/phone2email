Zepto(function($){
  
	$('#phoneNumber').on('change', function(event){
		var phoneNumber = $('#phoneNumber').val();
		$.get('/lookupPhone/'+phoneNumber, function(response, status){
			console.log(response);
			$('#email').text(response.email);
			$('#carrier').text(response.carrier);
			$('#country').text(response.country);
		});
	});

});