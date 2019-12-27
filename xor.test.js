const xor = require('./xor.js')

test('Encrypted data is not original data',() => {
	let data = Math.random().toString(36).substring(7);
	let encyption = xor.encrypt( data );
	expect(data).not.toBe(encyption.result)
})

test('Decrypted data is equal to original data', () => {
	let data = Math.random().toString(36).substring(7);
	let encryption = xor.encrypt( data );
	let decrypted = xor.decrypt( encryption.result, encryption.key )
	expect( decrypted.result ).toBe( data );
})
