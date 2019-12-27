const crypto = require('crypto')
const xor = require('./xor.js')
const math = require ('mathjs')

// AES accepts only keys of 128, 192 or 256 bits in size
function generateEncryptionKey( keysize ) {
	var acceptedValues = [128,192,256];
	if ( keysize in acceptedValues === false ){
		console.log( 'Keysize value not valid' )
		return 0;
	}
	return crypto.randomBytes( keysize / 8 ); // A byte is 8 bits long
}

function bytesToMatrix ( data ) {
	if ( data.length % 2 !== 0 ) {
		console.log('Data size invalid for block ciphers!')
		return 0;
	}
	var matrix = math.ones(math.sqrt(data.length))
	var columnSize = math.sqrt(data.length);
	for (let i = 0; i < columnSize; i++){
		for (let j = 0; i < columnSize; i++){
			matrix[j][i] = data[j*columnSize + i]
		}
	} return matrix;

function AESEncrypt ()
function AESDecrypt ()
