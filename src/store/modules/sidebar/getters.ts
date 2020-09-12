import { GetterTree } from 'vuex'
import { SidebarState } from './types'
import { RootState } from '../../types'

export const getters: GetterTree<SidebarState, RootState> = {
  isShow (state) {
    return state.isShow
  }
}
