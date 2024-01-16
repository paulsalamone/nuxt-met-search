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
    config: useRuntimeConfig()
  }),
  getters: {
    updatedRandomObjects() {
      const titles = []
      for(let j = 0; j < this.randomObjects.length; j++){
        console.log('TITLE: ',this.randomObjects[j].title)
        titles.push(this.randomObjects[j].title)
      }

      return titles
    }
  },
  actions: {
    async fetchMetObjects(base: string, objectsUrl: string) {
      console.log("SITE STORE: fetchMetObjects... ")
      try {
        console.log('Store is fetching Objects');
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
    },
    async getRandomObjects(arrayLength: number) {
      console.log('SITE STORE: getRandomObjects...', arrayLength)

      
      console.log('SITE STORE: this.config.public', this.config.public);
      const { apiBase, metObjectsPath } = this.config.public;
      
      for (let i = 0; i < arrayLength; i++) {

        console.log("+++ arrayLength: ", arrayLength)
        console.log("+++ this.metObjectIds.objectIds.length: ", this.metObjectIds.length)


          const randomIndex = Math.floor(Math.random() * this.metObjectIds.length) + 1;

          // now get actual object id:

          const randomObjectId = this.metObjectIds[randomIndex]

          console.log('+++ randomObjectId', randomObjectId)

          try {

            const object = await fetchSingleMetObject(apiBase, metObjectsPath, randomObjectId);
           
            this.randomObjects.push(object);

          } catch (error) {
            console.log('error at choosing random objects', error)
          }
      }

      // for(let j = 0; j < this.randomObjects.length; j++){
      //   console.log('TITLE: ',this.randomObjects[j].title)
      // }

    return this.randomObjects
  },
  },
});
