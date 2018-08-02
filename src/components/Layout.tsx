import { h, Component } from 'preact'
import Screen from '../containers/Screen'
import Hierarchy from '../containers/Hierarchy'
import Detail from '../containers/Detail'

export default ({doc, WIDTH = 960, HEIGHT = 750}) => !doc ? <h2>Loading...</h2> : <div style={{
    position: 'relative',
    width: WIDTH,
    height: HEIGHT,
    border: '1px solid #ccc'
}}>
    <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: WIDTH / 2,
        height: HEIGHT,
        background: '#272822'
    }}><Screen HEIGHT={HEIGHT}/></div>
    <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: WIDTH / 2,
        height: HEIGHT
    }}>
        <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: WIDTH / 2,
            height: HEIGHT / 2,
            overflow: 'auto'
        }}><Hierarchy /></div>
        <div style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: WIDTH / 2,
            height: HEIGHT / 2,
            borderTop: '1px solid #ccc',
            overflow: 'auto'
        }}><Detail /></div>
    </div>
</div>