import config from "../config/config";

export const getTrending = async (media_type = 'all',time_window = 'day') => {

    const {ApiKey, Endpoint} = config;
    const url = `${Endpoint}/trending/${media_type}/${time_window}?apikey=${ApiKey}`;

    const resp = fetch( url );

    const {results} = await (await resp).json();


    return results;

}