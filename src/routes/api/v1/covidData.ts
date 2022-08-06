export async function GET():Promise<CovidApiJson> {
	const request: Response = await fetch('https://pomber.github.io/covid19/timeseries.json');
	if (request.ok) {
		const result: ApiResult = await request.json();
		return {
			status: request.status,
			body: {
				result,
			},
		};
	} else {
		return {
			status: request.status,
			body: {}
		};
	}
}
