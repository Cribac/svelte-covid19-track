/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import Index from '../../routes/index.svelte';
import { render } from '@testing-library/svelte';

describe("Index route works", () => {
	test('Welcome', () => {
		const { getByText } = render(Index);
		expect(getByText(/Welcome to svelte-covid19-track/)).toBeInTheDocument();
	});
});
