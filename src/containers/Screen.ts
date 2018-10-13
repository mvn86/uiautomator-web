import { connect, getState, dispatch } from '../store'
import Screen from '../components/Screen'
import { onFocus, onExpend } from '../action'
import { Bounds, ScreenNode } from '../interfaces'

const boundContains = (bounds: Bounds, x, y): boolean => {
    const {left, top, right, bottom} = bounds
    return x >= left && x <= right && y >= top && y <= bottom
}

let onMouseMove
let onMouseEnter
let onClick
export default connect(({HEIGHT}) => {
    const { screenShot, width, height, focus, doc, expends, needReload, onClick: onClickCfg } = getState()
    if (needReload && doc) {
        dispatch(state => ({...state, needReload: false}))
        const zoom = height / HEIGHT
        let canMove = false

        let elements: ScreenNode[] = [].map.call(doc.querySelectorAll('[bounds]'), node => {
            const [left, top, right, bottom] = node.getAttribute('bounds').match(/\d+/g).map(Number)
            return {
                bounds: { left, top, right, bottom },
                size: (right - left) * (bottom - top),
                node
            }
        }).sort((a, b) => a.size - b.size)

        onMouseMove = (e: MouseEvent) => {
            if (!canMove) return
            const { offsetX, offsetY } = e
            for (let i = 0; i < elements.length; i++) {
                const { node, bounds } = elements[i]
                if (boundContains(bounds, offsetX * zoom, offsetY * zoom)) {
                    if (node === focus) {
                        return
                    }
                    
                    onFocus(node)
                    if (!expends.has(node)) {
                        onExpend(node)
                    }
                    return
                }
            }
        }

        onMouseEnter = () => {
            canMove = true
        }

        onClick = (e) => {
            canMove = !canMove
            const { focus } = getState()
            onClickCfg(e, focus)
        }
    }
    return {
        screenShot, width, height, focus, doc,
        onMouseMove, onMouseEnter, onClick
    }
})(Screen)