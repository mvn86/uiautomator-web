import { Config } from './interfaces'
import { dispatch } from './store'
import { h, render } from 'preact'
import Layout from './containers/Layout'

export default (cfg: Config) => {

    const { loadXML, screenShot, el, onload, onerror = e => alert(e.toString()) } = cfg

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
                expends: new Set<Element>()
            }))
        }).catch(onerror)
    })
    img.addEventListener('error', onerror)
    img.src = screenShot
    render(h(Layout, {}), el)
}
