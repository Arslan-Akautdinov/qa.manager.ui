import { ActionTree } from 'vuex'
import { SidebarState } from './types'
import { RootState } from '../../types'

export const actions: ActionTree<SidebarState, RootState> = {
  switchView ({ commit }): void {
    commit('showChange')
  }
}
