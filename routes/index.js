var express = require('express'),
	router = express.Router(),
	LookupsClient = require('twilio').LookupsClient,
	smsAddress = require('sms-address');

var client = new LookupsClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Phone2Email' });
});

/* Lookup Phone number */
router.get('/lookupPhone/:number', function(req, res, next) {
  	var phoneNumber = req.params.number;

	client.phoneNumbers('+'+phoneNumber).get({
		type: 'carrier',
	}, function(error, number) {
		if(error){
			console.log(error);
			next(error);
		}
		console.log(number);
		if(number.carrier.type !== 'voip'){
			var result = {
		    	carrier: number.carrier.name,
		    	email: smsAddress(phoneNumber, number.carrier.name),
		    	country: number.country_code,
		    };

		    res.json(result);

		}else{
			res.status(400).send({message: 'Error, phone number must be mobile or landline number ONLY.'})
		}

	});


});

module.exports = router;
