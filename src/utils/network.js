const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people/'

export const getAPIResource = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.error('Could not fetch', response.status);
        }
        return await response.json();
    } catch (error) {
        console.error('Counld not fetch data', error.message);
        return false;
    }
    
}

(async () => {
    const people = await getAPIResource(`${SWAPI_ROOT}${SWAPI_PEOPLE}`);
    console.log(people);
})();