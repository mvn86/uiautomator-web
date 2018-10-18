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
    const { HEIGHT, loadXML, screenShot, onload, onClick, onInput, onerror = e => alert('xml 加载失败！\n' + e.toString()) } = cfg
    const img = new Image()
    img.addEventListener('load', function (e) {
        const { width, height } = img
        onload && onload(img)
        loadXML.then(doc => {
            const [x, y, w, h] = doc.querySelector('[bounds]').getAttribute('bounds').match(/\d+/g)
            dispatch(state => ({
                ...state,
                width: Number(w), height: Number(w) * height / width,
                screenShot,
                doc,
                focus: null,
                onClick,
                onInput,
                expends: new Set<Element>()
            }))
        }).catch(onerror)
    })
    dispatch(state => ({needReload: true}))
    Promise.resolve(screenShot).then((src) => img.src = src)
    
    return <Layout HEIGHT={HEIGHT}/>
}