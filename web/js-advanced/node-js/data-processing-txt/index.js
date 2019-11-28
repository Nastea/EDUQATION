const fs = require("fs");

var results = [];
const phones = [];
const emails = [];

function loadContactsList() {
    results = fs.readFileSync('data.txt', 'utf8').toString().split('\n');

}

function parseContactsList(val) {
    phones.push(val.split(" ")[0]);
    emails.push(val.split(" ")[1]);
}

var index = 0;
function printContactsPhoneList(val) {
    index++;
    console.log(index, ')', val);
}

function printContactsEmailList(val) {
    index++;
    console.log(index, ')', val);
}

loadContactsList();

results.forEach(parseContactsList);
phones.forEach(printContactsPhoneList);
emails.forEach(printContactsEmailList);

