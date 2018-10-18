import { h, Component } from 'preact'

export interface ScreenProps {
    screenShot: Promise<string>
    width: number
    height: number
    HEIGHT: number
    focus: Element
    onMouseMove: (e: MouseEvent) => void
    onMouseEnter: (e: MouseEvent) => void
    onClick: (e: MouseEvent) => void
    onInput: (value: string, node: Element) => void
}

export default class extends Component<ScreenProps, {src?: string, focus}> {

    componentDidMount () {
        const { screenShot } = this.props
        const t = this
        screenShot.then(src => t.setState({src}))
    }
    
    componentWillReceiveProps (nextProps) {
        const { screenShot } = nextProps
        const t = this
        screenShot.then(src => t.setState({src}))
    }
    
    onClick = (e) => {
        const { focus, onClick } = this.props
        if (focus.getAttribute('class') === 'android.widget.EditText') {
            this.setState({
                focus
            })
        }
        onClick && onClick(e)
    }

    render () {
        const { width, height, HEIGHT, focus, onMouseMove, onMouseEnter, onInput = () => {} } = this.props
        const { src } = this.state
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
            <textarea style={Object.assign({zIndex: 2, display: this.state.focus === focus ? 'block' : 'none'}, innerStyle)} onInput={(e) => onInput(e.target['value'], focus)}></textarea>
            <div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} onClick={this.onClick}></div>
        </div>

    }
}