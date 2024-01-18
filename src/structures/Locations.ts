export interface Country {
	/** Two letter code representing the country */
	countrycode: string;

	/** Human readable name of country (english only) */
	countryname: string;

	/** Does this country have states. 1 is true 0 is false */
	hasstates: number;
}

export interface State {
	/** Two letter code representing the country of this state */
	countrycode: string;

	/** Number representing the state. Can have leading 0s and must be kept as a string */
	statecode: string;

	/** Human readable name of the state */
	statename: string;
}

export interface City {
	/** Two letter code representing the country of this state */
	countrycode: string;

	/** Number representing the state. Can have leading 0s and must be kept as a string */
	statecode: string;

	/** ID representing the city */
	cityid: number;

	/** Human readable name of the city */
	cityname: string;
}
