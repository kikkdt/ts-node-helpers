/**
 * Converts a column number to its corresponding Excel column name.
 *
 * @param colNumber The column number to convert.
 * @returns The Excel column name.
 */
export function getExcelColumnName(colNumber: number) {
	const LETTERS_IN_ALPHABET = 26;
	const ASCII_OFFSET = 65;
	let dividend = colNumber;
	let columnName = '';

	while (dividend > 0) {
		const modulo = (dividend - 1) % LETTERS_IN_ALPHABET;
		columnName = String.fromCharCode(ASCII_OFFSET + modulo) + columnName;
		dividend = Math.floor((dividend - modulo) / LETTERS_IN_ALPHABET);
	}

	return columnName;
}
