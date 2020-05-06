'use strict';
const yelp = require('yelp-fusion');
const apiKey = 'BrwCyJPcn_OKdtNSBEzRK7qQI3hL0_MjsR8IotcI1HXMuUbmSC7jHWBENuwNhfWeyaxVauSVFC15fqf3BmiWh5qDkAX5_9Rt5vPkQHVEgWI4CFooiEFJpKl7Ll6sXnYx';

var yelpController = {
    chicagoSearch: function (spotName) {
        const searchRequest = {
            term: `${spotName}`,
            location: 'chicago, il'
        };
        const client = yelp.client(apiKey);
        client.search(searchRequest).then(response => {
            const firstResult = response.jsonBody.businesses[0];
            console.log("Hi");
            const prettyJson = JSON.stringify(firstResult, null, 4);
            console.log(prettyJson);
            return prettyJson;
        }).catch(e => {
            console.log(e);
            return e;
        });
    },

}

module.exports = yelpController