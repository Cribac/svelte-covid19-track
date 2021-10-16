/// <reference types="@sveltejs/kit" />

type CountryJson = {
	status: number,
	body: Record<string, unknown>
}

type CovidJson = {
	confirmed: number,
	date: string,
	deaths: number,
	recovered: number,
}
