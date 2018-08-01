import { Store } from './interfaces'
import createStore, { IPreact, DispatchAction, Connect } from 'ipreact'

const { dispatch, connect, getState }: IPreact<Store> = createStore()({
})

export { dispatch, connect, getState }