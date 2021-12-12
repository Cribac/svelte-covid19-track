/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import about from '../../routes/about.svelte';
import { render } from '@testing-library/svelte';

describe("About route works", () => {
	test('About', () => {
		const { getByText } = render(about);
		expect(getByText('About')).toBeInTheDocument();
	});
});
