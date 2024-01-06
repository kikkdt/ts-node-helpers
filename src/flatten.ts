interface FlattenOptions {
	delimiter?: string;
	prefix?: string;
}

/**
 * Flattens an object
 *
 * @param obj - The object to flatten.
 * @param options - The options for flattening.
 * @returns The flattened object.
 */
export const flatten = (
	obj: Record<string, any>,
	options: FlattenOptions = {},
): Record<string, any> => {
	const { delimiter = '.', prefix = '' } = options;
	const result: Record<string, any> = {};

	/**
	 * @NOTE:
	 * A stack is used to keep track of the objects to be flattened.
	 * The loop continues until the stack is empty, processing each object and updating the result accordingly.
	 * This non-recursive approach can be more memory-efficient and performant, especially for deeply nested objects.
	 */
	const stack: Array<{ obj: Record<string, any>; currentPrefix: string }> = [
		{ obj, currentPrefix: prefix },
	];

	while (stack.length > 0) {
		const { obj, currentPrefix } = stack.pop()!;

		for (const [key, value] of Object.entries(obj)) {
			const currentKey = currentPrefix + key;

			if (
				typeof value === 'object' &&
				value !== null &&
				Object.keys(value).length > 0
			) {
				stack.push({ obj: value, currentPrefix: currentKey + delimiter });
			} else {
				result[currentKey] = value;
			}
		}
	}

	return result;
};
