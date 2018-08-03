import { Config } from './interfaces'
import { dispatch } from './store'
import { h, render, VNode } from 'preact'
import Layout from './containers/Layout'

export const renderContainer = (cfg: Config) => {
    const { el, ...props } = cfg
    const { height } = el.getBoundingClientRect()
    render(<Container {...props}  HEIGHT={height}/>, el)
}

export const Container = (cfg: Config) => {
    const { HEIGHT, loadXML, screenShot, onload, onerror = e => alert(e.toString()) } = cfg
    const img = new Image()
    img.addEventListener('load', function (e) {
        onload && onload(img)
        const { width, height } = img
        loadXML().then(doc => {
            dispatch(state => ({
                ...state,
                width, height,
                screenShot,
                doc,
                focus: null,
                expends: new Set<Element>()
            }))
        }).catch(onerror)
    })
    dispatch(state => ({needReload: true}))
    img.src = screenShot
    return <Layout HEIGHT={HEIGHT}/>
}