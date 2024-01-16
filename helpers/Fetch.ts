import { $fetch } from 'ofetch';

export async function fetchMetObjects(base: string, objectsUrl: string) {
  console.log('Fetch.ts: fetchMetObjects.....');

  const url = `${base}${objectsUrl}`;

  try {
    const json = await $fetch(url);
    console.log("OBJECTS JSON: ", json)
    if(json){
      console.log("+++ JSON IST DA")
    }
    return json;
  } catch (error) {
    // console.error('Error fetching from URL:', url, error);

    console.log("Fetch.ts : fetchMetObjects error")

    // throw error;
  }
}

export async function fetchSingleMetObject(base: string, path: string, id: number){

  const url = `${base}${path}/${id}`;

  console.log('+++ path', path)
  console.log('Fetch.ts: fetchSingleMetObject... :', url)
  try {
    const json = await $fetch(url);
    return json;
  } catch (error) {
    // console.error('Fetch.ts: Error fetching from URL:', url, error);
    console.log("Fetch.ts : fetchSingleMetObject error")
    // throw error;
  }

}