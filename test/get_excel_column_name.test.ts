import { getExcelColumnName } from '../src/get_excel_column_name';

describe('getExcelColumnName', () => {
	it('should return "A" for column number 1', () => {
		const colNumber = 1;
		const expected = 'A';
		const result = getExcelColumnName(colNumber);
		expect(result).toEqual(expected);
	});

	it('should return "Z" for column number 26', () => {
		const colNumber = 26;
		const expected = 'Z';
		const result = getExcelColumnName(colNumber);
		expect(result).toEqual(expected);
	});

	it('should return "AA" for column number 27', () => {
		const colNumber = 27;
		const expected = 'AA';
		const result = getExcelColumnName(colNumber);
		expect(result).toEqual(expected);
	});

	it('should return "AZ" for column number 52', () => {
		const colNumber = 52;
		const expected = 'AZ';
		const result = getExcelColumnName(colNumber);
		expect(result).toEqual(expected);
	});

	it('should return "BA" for column number 53', () => {
		const colNumber = 53;
		const expected = 'BA';
		const result = getExcelColumnName(colNumber);
		expect(result).toEqual(expected);
	});

	// Add more test cases here...
});
