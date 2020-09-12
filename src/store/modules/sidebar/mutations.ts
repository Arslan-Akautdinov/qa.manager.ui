// profile/mutations.ts
import { MutationTree } from 'vuex'
import { SidebarState } from './types'

export const mutations: MutationTree<SidebarState> = {
  showChange (state) {
    state.isShow = !state.isShow
  }
}
