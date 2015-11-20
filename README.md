Phone2Email
==========

Current stable version: v0.0.2

A package that converts a phone number to its respect sms gateway email. Uses twilio API for carrier lookups and sms-address for email lookups

See live demo here: [http://phone2email.xyz](http://phone2email.xyz)


## Quickstart

Install dependencies first.
```bash
$ npm install
$ bower install
```

Make sure to replace `process.env.TWILIO_ACCOUNT_SID` and `process.env.TWILIO_AUTH_TOKEN` with your respective Twilio accountSID and authToken.

To run:
```bash
$ npm run-scripts start
```

Your application should run on port 3000, so in your browser just go to [http://localhost:3000](http://localhost:3000)

