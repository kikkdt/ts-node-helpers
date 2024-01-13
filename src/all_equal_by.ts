/**
 * Checks if all elements in an array are equal based on a provided function.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The array to check.
 * @param {(val: T) => any} fn - The function used to determine equality.
 * @returns {boolean} Returns `true` if all elements are equal, `false` otherwise.
 */
export const allEqualBy = <T>(arr: T[], fn: (val: T) => any): boolean => {
	const memo: Map<T, any> = new Map();
	const firstValue = memoize(fn, arr[0], memo);

	return arr.every((val) => memoize(fn, val, memo) === firstValue);
};

/**
 * The memoize function is introduced to cache the results of function calls.
 * The results are stored in a Map (memo), and before calling the actual function (fn), it checks if the result is
 * already memoized for a given argument (arg). If so, it returns the memoized result; otherwise, it calculates the
 * result, stores it in the Map, and then returns the result.
 *
 * @NOTE Keep in mind that while memoization can improve performance for expensive calculations, it also introduces
 * additional memory overhead. The effectiveness of memoization depends on the specific characteristics of your use case,
 * so it's recommended to measure the performance impact for your particular scenario.
 *
 * @template T The type of the argument.
 * @param {Function} fn The function to memoize.
 * @param {T} arg The argument to pass to the function.
 * @param {Map<T, any>} memo The memoization map.
 * @returns {any} The memoized result of the function.
 */
const memoize = <T>(fn: (val: T) => any, arg: T, memo: Map<T, any>): any => {
	if (!memo.has(arg)) {
		memo.set(arg, fn(arg));
	}
	return memo.get(arg);
};
