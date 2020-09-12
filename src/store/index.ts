// index.ts
import { StoreOptions, createStore } from 'vuex'
import { RootState } from './types'
import { sidebar } from './modules/sidebar'

const storeOptions: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    sidebar
  }
}

export const store = createStore(storeOptions)
