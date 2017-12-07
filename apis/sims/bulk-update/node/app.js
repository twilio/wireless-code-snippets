'use strict';

const   accountSid  = 'ACCOUNT_SID_HERE',
        authToken   = 'AUTH_TOKEN_HERE',
        _           = require('lodash'),
        csv         = require('fast-csv'),
        client      = require('twilio')(accountSid, authToken);

let sims = [];
csv.fromPath('Twilio Programmable Wireless - SIMs.csv', {headers: true})
    .on('data', data => {
        sims.push(data);
    })
    .on('end', () => {
        if (Array.isArray(sims) && sims.length) {
            _.forEach(sims, (sim) => updateSim(sim));
        }
    }
);

function updateSim(sim) {
    if (_.isEmpty(sim.sid)) {
        console.error('Sim Sid cannot be empty. Skipping...');
        return;
    }
    console.log(`Updating SIM ${sim.sid}...`);
    let trimSim = _.omitBy(sim, _.isEmpty);
    client.wireless
        .sims(sim.sid)
        .update(trimSim)
        .then(response => {
            console.log(`Finished updating SIM ${sim.sid}...`);
        })
        .catch(err => {
            console.log(`Error updating SIM ${sim.sid}\n${err}`);
        });
}