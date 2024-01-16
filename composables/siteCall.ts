import { useRuntimeConfig } from '#imports'


export async function useGetConfig () {

const config = useRuntimeConfig()
    return config
}