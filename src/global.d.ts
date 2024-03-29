/// <reference types="@sveltejs/kit" />

type CountryParams = {
	countryCode: string,
};

type Country = {
	name: string,
	countryCode: string,
	countryCodeAlpha3: string,
	phone: string,
	currency: string,
	stateProvinces: Array<{ name: string }>,
}

type CovidApiJson = {
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

type ChartDataSet = {
	name: string,
	values: number[],
}

interface ChartData {
	labels: string[],
	datasets: ChartDataSet[],
}
