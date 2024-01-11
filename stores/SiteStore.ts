import { defineStore } from 'pinia'
import type { State } from './types'

export const useSiteStore = defineStore('site', {
    state: (): State => ({
        test: "test 12345"
    }),
})