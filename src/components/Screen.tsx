import { h, Component, VNode } from 'preact'

export interface ScreenProps {
    src
    width: number
    height: number
    HEIGHT: number
    focus: Element
    onMouseMove: (e: MouseEvent) => void
    onClick: (e: MouseEvent) => void
    onInput: (value: string, node: Element) => void
    onInputFocus: () => void
    contentmenu?: VNode
}

export default class extends Component<ScreenProps, {src?: string, focus, showMenu?: boolean}> {
    state = {
        src: null,
        focus: null,
        showMenu: false
    }
    componentDidMount () {
        const { src } = this.props
        this.setState({src})
    }
    
    componentWillReceiveProps (nextProps: ScreenProps) {
        const { src } = nextProps
        this.setState({src})
    }

    showContentMenu = (e) => {
        e.preventDefault()
        this.setState({showMenu: !this.state.showMenu})
    }
    hideContentMenu = () => {
        this.setState({showMenu: false})
    }

    render () {
        const { showContentMenu, hideContentMenu } = this
        const { width, height, HEIGHT, focus, onMouseMove, onClick, onInputFocus, onInput = () => {}, contentmenu } = this.props
        const { src, showMenu } = this.state
        const zoom = HEIGHT / height
        const style = {
            display: 'block',
            position: 'relative',
            margin: '0 auto',
            height: zoom * height,
            width: zoom * width,
            backgroundSize: '100% 100%'
        }

        let innerStyle

        if (focus) {
            const [left, top, right, bottom] = focus.getAttribute('bounds').match(/\d+/g).map(Number);
            
            innerStyle = {
                position: 'absolute',
                left: zoom * left,
                top: zoom * top,
                width: zoom * (right - left),
                height: zoom * (bottom - top),
                border: '1px solid red'
            }
        }

        return <div style={style}>
            <img src={src} style={style}/>
            <div style={Object.assign({ transition: 'all .2s ease' }, innerStyle)}></div>
            <textarea onFocus={onInputFocus} style={Object.assign({
                resize: 'none',
                zIndex: 2,
                display: focus && focus.getAttribute('class') === 'android.widget.EditText' ? 'block' : 'none'
            }, innerStyle)} onInput={(e) => onInput(e.target['value'], focus)}></textarea>
            <div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} onMouseMove={onMouseMove} onClick={onClick} onContextMenu={showContentMenu}></div>
            {contentmenu && showMenu && innerStyle && <div style={{
                position: 'absolute',
                zIndex: 2, border: 0,
                top: innerStyle.top + innerStyle.height,
                left: innerStyle.left
            }} onClick={hideContentMenu}>{contentmenu}</div>}
        </div>

    }
}