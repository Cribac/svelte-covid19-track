/// <reference types="@sveltejs/kit" />

type CountryParams = {
	countryCode: string
};

type CountryJson = {
	body: Record<string, unknown>
};

type CovidJson = {
	confirmed: number,
	date: string,
	deaths: number,
	recovered: number,
};
