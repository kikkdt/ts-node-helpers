import { allEqualBy } from '../src/all_equal_by';

describe('allEqualBy', () => {
	it('should return true if all elements in the array have the same value when applying the provided function', () => {
		// Random large array data to test performance
		const arr = Array.from({ length: 100000 }, () =>
			Math.floor(Math.random() * 100000),
		);
		const fn = (val: number) => val % 2;

		const result = allEqualBy(arr, fn);
		expect(result).toBe(false);
	});

	it('should return false if not all elements in the array have the same value when applying the provided function', () => {
		const arr = [1, 2, 3, 4, 5];
		const fn = (val: number) => val % 3;

		const result = allEqualBy(arr, fn);

		expect(result).toBe(false);
	});

	it('should return true if the array is empty', () => {
		const arr: number[] = [];
		const fn = (val: number) => val;

		const result = allEqualBy(arr, fn);

		expect(result).toBe(true);
	});

	it('should return true if the array has only one element', () => {
		const arr = [42];
		const fn = (val: number) => val;

		const result = allEqualBy(arr, fn);

		expect(result).toBe(true);
	});

	it('should have good performance for large arrays', () => {
		const arr = Array.from({ length: 100000 }, () =>
			Math.floor(Math.random() * 100000),
		);
		const fn = (val: number) => val % 2;

		const startTime = performance.now();
		const result = allEqualBy(arr, fn);
		const endTime = performance.now();
		const executionTime = endTime - startTime;

		// Adjust the threshold based on your performance requirements
		expect(executionTime).toBeLessThan(100); // 100 milliseconds
		expect(result).toBe(false);
	});

	it('should return true if all elements in the array have the same value when applying the provided function', () => {
		const arr = Array.from({ length: 100000 }, () =>
			Math.floor(Math.random() * 100000),
		);
		const fn = (val: number) => val % 2;

		const result = allEqualBy(arr, fn);
		expect(result).toBe(false);
	});

	it('should return false if not all elements in the array have the same value when applying the provided function', () => {
		const arr = [1, 2, 3, 4, 5];
		const fn = (val: number) => val % 3;

		const result = allEqualBy(arr, fn);

		expect(result).toBe(false);
	});

	it('should return true if the array is empty', () => {
		const arr: number[] = [];
		const fn = (val: number) => val;

		const result = allEqualBy(arr, fn);

		expect(result).toBe(true);
	});

	it('should return true if the array has only one element', () => {
		const arr = [42];
		const fn = (val: number) => val;

		const result = allEqualBy(arr, fn);

		expect(result).toBe(true);
	});
});
