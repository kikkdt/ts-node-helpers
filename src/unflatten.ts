interface UnflattenOptions {
	delimiter?: string;
}

/**
 * Converts a flattened object into a nested object based on a specified delimiter.
 *
 * @param obj - The flattened object to unflatten.
 * @param options - Optional configuration options.
 * @returns The unflattened nested object.
 */
export const unflatten = (
	obj: Record<string, any>,
	options: UnflattenOptions = {},
): Record<string, any> => {
	const { delimiter = '.' } = options;
	const result: Record<string, any> = {};

	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			const keys = key.split(delimiter);
			const lastKeyIndex = keys.length - 1;
			let currentLevel = result;

			for (let i = 0; i < keys.length; i++) {
				const nestedKey = keys[i];
				if (!currentLevel[nestedKey]) {
					currentLevel[nestedKey] = i === lastKeyIndex ? obj[key] : {};
				}
				currentLevel = currentLevel[nestedKey];
			}
		}
	}

	return result;
};
