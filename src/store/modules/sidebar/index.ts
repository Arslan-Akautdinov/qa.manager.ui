import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { SidebarState } from './types'
import { RootState } from '../../types'

export const state: SidebarState = {
  isShow: true
}

const namespaced = true

export const sidebar: Module<SidebarState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
