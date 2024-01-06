import { flatten } from '../src/flatten';

describe('flatten', () => {
	it('should flatten a simple object', () => {
		const obj = {
			name: 'John',
			age: 30,
			address: {
				street: '123 Main St',
				city: 'New York',
				country: 'USA',
			},
		};

		const expected = {
			name: 'John',
			age: 30,
			'address.street': '123 Main St',
			'address.city': 'New York',
			'address.country': 'USA',
		};

		const result = flatten(obj);

		expect(result).toEqual(expected);
	});

	it('should flatten an object with custom delimiter and prefix', () => {
		const obj = {
			name: 'John',
			age: 30,
			address: {
				street: '123 Main St',
				city: 'New York',
				country: 'USA',
			},
		};

		const expected = {
			'prefix.name': 'John',
			'prefix.age': 30,
			'prefix.address.street': '123 Main St',
			'prefix.address.city': 'New York',
			'prefix.address.country': 'USA',
		};

		const options = {
			delimiter: '.',
			prefix: 'prefix.',
		};

		const result = flatten(obj, options);

		expect(result).toEqual(expected);
	});

	it('should flatten an object with empty values', () => {
		const obj = {
			name: 'John',
			age: 30,
			address: {},
		};

		const expected = {
			name: 'John',
			age: 30,
			address: {},
		};

		const result = flatten(obj);

		expect(result).toEqual(expected);
	});

	it('should flatten an empty object', () => {
		const obj = {};

		const expected = {};

		const result = flatten(obj);

		expect(result).toEqual(expected);
	});
});
