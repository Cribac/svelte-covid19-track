/// <reference types="@sveltejs/kit" />

type CountryParams = {
	countryCode: string
};

type CountryJson = {
	status:number,
	body: Record<string, unknown>
};

type CovidJson = {
	confirmed: number,
	date: string,
	deaths: number,
	recovered: number,
};

interface ApiResult {
	count: number,
	result: CovidJson[],
}
