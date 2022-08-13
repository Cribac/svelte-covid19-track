import countriesJson from '../data/countries.json.js';

/**
 * Class to handle country data retrieved from the country json file.
 */
export class CountryService {
	static getCountryByCode(countryCode: string): Country {
		return countriesJson.find(c => c.countryCodeAlpha3.toLowerCase() === countryCode);
	}
}
