import { Config } from './interfaces'
import { dispatch } from './store'
import { h, render, VNode, Component } from 'preact'
import Layout from './containers/Layout'

export { h, render }
export const renderContainer = (cfg: Config) => {
    const { el, ...props } = cfg
    const { height } = el.getBoundingClientRect()
    render(<Container {...props}  HEIGHT={height}/>, el)
}

export class Container extends Component<Config> {

    init = (props: Config) => {
        const { loadXML, screenShot, onload, onClick, onChange, onInput, onSwipe, columns_enabled, columns_checked, contentmenu, onerror = e => alert('img 或 xml 加载失败！\n' + e.toString()) } = props
        const img = new Image()
        dispatch(state => ({...state, needReload: true, doc: null}))
        img.addEventListener('load', function (e) {
            const { width, height } = img
            onload && onload(img)
            loadXML().then(doc => {
                const model = doc.querySelector('[bounds]')
                const attributes = [].slice.call(model.attributes).map(({name}) => name)
                const [x, y, w, h] = model.getAttribute('bounds').match(/\d+/g)
                dispatch(state => ({
                    ...state,
                    width: Number(w), height: Number(w) * height / width,
                    doc,
                    src: img.src,
                    focus: null,
                    onChange,
                    onClick,
                    onInput,
                    onSwipe,
                    columns_enabled: columns_enabled || attributes,
                    columns_checked: columns_checked || attributes,
                    contentmenu,
                    expends: new Set<Element>()
                }))
            }).catch(onerror)
        })
        img.addEventListener('error', onerror)
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