import { defineStore } from 'pinia';
import type { SiteStore } from './types';
import { fetchMetObjects as fetchMetObjectsHelper, fetchSingleMetObject } from '../helpers/Fetch';
import { useRuntimeConfig } from '#imports'

export const useSiteStore = defineStore('site', {
  state: (): SiteStore => ({
    test: 'test 12345',
    metObjectIds: [],
    objectsTotal: 0,
    randomObjects: [],
    config: useRuntimeConfig(),
    loaded: false,
    hasRandomArt: false
  }),
  actions: {
    async fetchMetObjects(base: string, objectsUrl: string) {

      if(!this.hasRandomArt){
        try {
          const response = await fetchMetObjectsHelper(base, objectsUrl);
          this.metObjectIds = response.objectIDs;
          this.objectsTotal = response.total;
  
          if (this.metObjectIds && Array.isArray(this.metObjectIds) && this.metObjectIds.length > 0) {
          await this.getRandomObjects(3); // Assuming getRandomObjects is properly updated to work with objectIDs array.
        }
  
        } catch (error) {
          console.error('SITE STORE: Error fetching objects', error);
        }
  
        return this.metObjectIds
      } 
 
    },
    async getRandomObjects(arrayLength: number) {
   

      
   
      const { apiBase, metObjectsPath } = this.config.public;
      
      for (let i = 0; i < arrayLength; i++) {

        


          // const randomIndex = Math.floor(Math.random() * this.metObjectIds.length) + 1;

          // // now get actual object id:

          // const randomObjectId = this.metObjectIds[randomIndex]


          try {

            const object = await fetchSingleMetObject(apiBase, metObjectsPath, this.metObjectIds);
           
            this.randomObjects.push(object);

          } catch (error) {
            console.log('error at choosing random objects', error)
          }

          if(this.randomObjects.length === 3){
            this.loaded = true

            // TODO: push to local storage
            this.hasRandomArt = true

            const serializedObj = JSON.stringify(this.randomObjects);
            // Store the serialized object string into local storage with the specified key

            // console.log('serializedObj', serializedObj)

            // console.log('typeof window !== "undefined"', typeof window !== "undefined")

              // console.log('saving')
              // localStorage.setItem("savedRandomArt", serializedObj);
         



          }
      }

      // for(let j = 0; j < this.randomObjects.length; j++){
      //   console.log('TITLE: ',this.randomObjects[j].title)
      // }

    return this.randomObjects
  },
  },
});
