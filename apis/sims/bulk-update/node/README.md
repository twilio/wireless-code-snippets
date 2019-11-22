# Wireless Bulk Update SIMs

This repository provides a Node.JS script and excel sheet to bulk update SIMs on a Twilio account. Note that SIMs cannot be transferred between accounts with this script.

Additional documentation can be found at [Twilio Programmable Wireless REST API: SIMs](https://www.twilio.com/docs/api/wireless/rest-api/sim).

## How to install script
1. Have [Node.JS](https://nodejs.org/en/) installed
1. Download contents of this repository to local directory
1. Navigate to your local directory in a terminal
2. Type `npm install` in a terminal

## How to use the files in this repository
1. Open `app.js` in your IDE of choice
1. Insert your [Account Sid](https://support.twilio.com/hc/en-us/articles/223136027-Auth-Tokens-and-how-to-change-them) on line 3
2. Insert your [Auth Token](https://support.twilio.com/hc/en-us/articles/223136027-Auth-Tokens-and-how-to-change-them) on line 4
1. Save `app.js`
1. Open `Twilio Programmable Wireless - SIMs.xlsx` in Google Sheets, Excel, or any other spreadsheet tool
1. Enter one SIM per row
1. Only enter information in a row that you wish to update
1. Sim Sids are required
1. Export the spreadsheet as a `.csv` file
1. Save the `.csv` file in the same folder as the `app.js` file
1. `app.js` looks for the filename `Twilio Programmable Wireless - SIMs.csv` by default
1. Type `npm start` in a terminal where the files in this repository are located

## That's it
Learn what each column means in the [Programmable Wireless SIM documentation](https://www.twilio.com/docs/wireless/api/sim-resource). This snippet is in Node.JS but can be done in any language via [REST APIs](https://www.twilio.com/docs/api/wireless/rest-api) or [Helper Libraries](https://www.twilio.com/docs/api/wireless/sdks).

