import { h, Component } from 'preact'
import Screen from '../containers/Screen'
import Hierarchy from '../containers/Hierarchy'
import Detail from '../containers/Detail'

export interface LayoutProps {
    doc
    HEIGHT: number
} 
export default class extends Component<LayoutProps> {
    render () {
        const { doc, HEIGHT } = this.props
        return !doc ? <h2>Loading...</h2> : <div style={{
            position: 'relative',
            width: '100%',
            height: HEIGHT,
            border: '1px solid #ccc'
        }}>
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '50%',
                height: HEIGHT,
                background: '#272822'
            }}><Screen HEIGHT={HEIGHT}/></div>
            <div style={{
                position: 'absolute',
                right: 0,
                top: 0,
                width: '50%',
                height: HEIGHT
            }}>
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '66.67%',
                    overflow: 'auto'
                }}><Hierarchy /></div>
                <div style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '33.33%',
                    borderTop: '1px solid #ccc',
                    overflow: 'auto'
                }}><Detail /></div>
            </div>
        </div>
    }
}