const fs = require("fs");

var results=[];
const phones = [];
const emails = [];

function loadContactsList(){
     results = fs.readFileSync('data.txt', 'utf8').toString().split('\n');

}

function parseContactsList(){
    for( i = 0; i < results.length; i++) {
        res = results[i].split(" ");
         phones[i] = res[0];
         emails[i] = res[1];
     }
}

function printContactsPhoneList() {
    for(i=0; i<phones.length; i++){
        var index= i+1;
        console.log(index,') ', phones[i]);
    }
}

function printContactsEmailList() {
    for(i=0; i<emails.length; i++){
        var index= i+1;
        console.log(index,') ', emails[i]);
    }
}

loadContactsList();
parseContactsList();
printContactsPhoneList();
printContactsEmailList();