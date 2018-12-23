var crypto = require('crypto-js');

var secretMessage = 'this is the secret message';
var secretKey = 'ritik123';

//encrypt message

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
console.log('Encrypted Message: ' +  encryptedMessage);

//decrypt message

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);

console.log('the decrypted message is: '+ decryptedMessage);

//challenge

var secret = {
    name: 'ritik',
    secretName: '007'
}
var secretString = JSON.stringify(secret);

//encryption 
var encryptedString = crypto.AES.encrypt(secretString, secretKey);
console.log('Encrypted Message: ' + encryptedString);

//decryption

var byte = crypto.AES.decrypt(encryptedString, secretKey);
var decryption = byte.toString(crypto.enc.Utf8);

console.log('Decrypted Message: ' + decryption);
var original = JSON.parse(decryption);
console.log(original);