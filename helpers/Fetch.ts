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

    console.log("Fetch.ts : fetchMetObjects error")

  }
}


export function getRandomId(metObjectIds: any) {
  const randomIndex = Math.floor(Math.random() * metObjectIds.length) + 1;
  const randomObjectId = metObjectIds[randomIndex]
  return randomObjectId
}

export async function fetchSingleMetObject(base: string, path: string, metObjectIds: any){

  try {
    let hasPrimarySmallImage = false;
    let json;

    do {
      const url = `${base}${path}/${getRandomId(metObjectIds)}`;
      json = await fetch(url).then((response) => response.json());

      hasPrimarySmallImage = json.primaryImageSmall && json.primaryImageSmall !== '';
    } while (!hasPrimarySmallImage);


    return json



  } catch (error) {
    console.log("Fetch.ts : fetchSingleMetObject error")
  }

}