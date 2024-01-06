import { unflatten } from '../src/unflatten';

describe('unflatten', () => {
	it('should unflatten a simple object', () => {
		const obj = {
			name: 'John',
			age: 30,
			'address.street': '123 Main St',
			'address.city': 'New York',
			'address.country': 'USA',
		};

		const expected = {
			name: 'John',
			age: 30,
			address: {
				street: '123 Main St',
				city: 'New York',
				country: 'USA',
			},
		};

		const result = unflatten(obj);

		expect(result).toEqual(expected);
	});

	it('should unflatten an object with custom delimiter', () => {
		const obj = {
			'prefix.name': 'John',
			'prefix.age': 30,
			'prefix.address.street': '123 Main St',
			'prefix.address.city': 'New York',
			'prefix.address.country': 'USA',
		};

		const expected = {
			prefix: {
				name: 'John',
				age: 30,
				address: {
					street: '123 Main St',
					city: 'New York',
					country: 'USA',
				},
			},
		};

		const options = {
			delimiter: '.',
		};

		const result = unflatten(obj, options);

		expect(result).toEqual(expected);
	});

	it('should unflatten an object with empty values', () => {
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

		const result = unflatten(obj);

		expect(result).toEqual(expected);
	});

	it('should unflatten an empty object', () => {
		const obj = {};

		const expected = {};

		const result = unflatten(obj);

		expect(result).toEqual(expected);
	});
});
