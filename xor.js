const crypto = require('crypto')

function oneTimePadEncrypt( data ) {
	let pad = crypto.randomBytes( data.length );
	let result = new Array( data.length )
	console.log( data, pad ); let i = 0
	for ( let character of data ){
		result[i] = character.charCodeAt(0) ^ pad[i]
		i++;
	} 
	return {result: result, pad: pad};
}

function oneTimePadDecrypt( encryptedData, pad ) {
	let i = 0; let decrypt = new Array( encryptedData.length );
	for ( let character of encryptedData ){
		decrypt[i] = encryptedData[i] ^ pad[i];
		decrypt[i] = String.fromCharCode(decrypt[i])
		i++;
	} decrypt = decrypt.join('');
	return {decryptedData: decrypt};
}

exports.encrypt = oneTimePadEncrypt;
exports.decrypt = oneTimePadDecrypt;
