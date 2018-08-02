import { h, Component } from 'preact'

export interface ScreenProps {
    screenShot: string
    width: number
    height: number
    HEIGHT: number
    focus: Element
    onMouseMove: (e: MouseEvent) => void
    onMouseEnter: (e: MouseEvent) => void
    onClick: (e: MouseEvent) => void
}

export default class extends Component<ScreenProps> {
    render () {
        const { screenShot, width, height, HEIGHT, focus, onMouseMove, onMouseEnter, onClick } = this.props
        const zoom = HEIGHT / height
        const style = {
            position: 'relative',
            margin: '0 auto',
            height: zoom * height,
            width: zoom * width,
            background: `url(${screenShot}) no-repeat center center`,
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

        return <div style={style} onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} onClick={onClick}>
            <div style={Object.assign({ transition: 'all .2s ease' }, innerStyle)}></div>
            <div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}></div>
        </div>

    }
}