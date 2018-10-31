import { Config } from './interfaces'
import { dispatch } from './store'
import { h, render, VNode, Component } from 'preact'
import Layout from './containers/Layout'

export const renderContainer = (cfg: Config) => {
    const { el, ...props } = cfg
    const { height } = el.getBoundingClientRect()
    render(<Container {...props}  HEIGHT={height}/>, el)
}

export class Container extends Component<Config> {

    init = (props: Config) => {
        const { loadXML, screenShot, onload, onClick, onInput, onerror = e => alert('xml 加载失败！\n' + e.toString()) } = props
        const img = new Image()
        dispatch(state => ({...state, needReload: true, doc: null}))
        img.addEventListener('load', function (e) {
            const { width, height } = img
            onload && onload(img)
            loadXML().then(doc => {
                const [x, y, w, h] = doc.querySelector('[bounds]').getAttribute('bounds').match(/\d+/g)
                dispatch(state => ({
                    ...state,
                    width: Number(w), height: Number(w) * height / width,
                    doc,
                    src: img.src,
                    focus: null,
                    onClick,
                    onInput,
                    expends: new Set<Element>()
                }))
            }).catch(onerror)
        })
        screenShot().then((src) => {
            img.src = src;
        })
    }

    componentDidMount () {
        this.init(this.props)
    }
    
    componentWillReceiveProps (nextProps) {
        this.init(nextProps)
    }
    

    render () {
        return <Layout HEIGHT={this.props.HEIGHT}/>
    }
}