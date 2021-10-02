export async function get({ params }) {
	const { countryCode } = params;
	const request = await fetch(`https://covidapi.info/api/v1/country/${countryCode}`);
	const result = await request.json();

	return {
		body: { result },
	};
}