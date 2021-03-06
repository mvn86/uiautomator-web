import { connect, getState, dispatch } from '../store'
import Screen from '../components/Screen'
import { onFocus, onExpend } from '../action'
import { Bounds, ScreenNode } from '../interfaces'

const boundContains = (bounds: Bounds, x, y): boolean => {
    const {left, top, right, bottom} = bounds
    return x >= left && x <= right && y >= top && y <= bottom
}

let onMouseMove
let onClick
let onInputFocus
let onInputChange
export default connect(({HEIGHT}) => {
    const { src, width, height, focus, doc, expends, needReload, onClick: onClickCfg, onSwipe, onInput, contentmenu, clickable_filter } = getState()
    if (needReload && doc) {
        dispatch(state => ({...state, needReload: false}))
        const zoom = height / HEIGHT
        let canMove = true

        let elements: ScreenNode[] = [].map.call(doc.querySelectorAll('[bounds]'), node => {
            const [left, top, right, bottom] = node.getAttribute('bounds').match(/\d+/g).map(Number)
            return {
                bounds: { left, top, right, bottom },
                size: (right - left) * (bottom - top),
                node
            }
        }).sort((a, b) => a.size - b.size)

        let swipe: {
            begin: number,
            end?: number,
            from: MouseEvent,
            to?: MouseEvent
        };
        let during

        addEventListener('mousedown', (e: MouseEvent) => {
            swipe = {
                begin: Date.now(),
                from: e
            }
        })
        addEventListener('mouseup', (e: MouseEvent) => {
            const { from, to, begin, end } = Object.assign({}, swipe, { end: Date.now(), to: e })
            const offsetX = to.offsetX - from.offsetX
            const offsetY = to.offsetY - from.offsetY
            during = end - begin
            if ( Math.abs(offsetX) + Math.abs(offsetY) > 100 ) {
                onSwipe && onSwipe(from, to, during)
            }
            swipe = null
        })
        onMouseMove = (e: MouseEvent) => {
            if (!canMove) return
            const { offsetX, offsetY } = e
            for (let i = 0; i < elements.length; i++) {
                const { node, bounds } = elements[i]
                if (clickable_filter && node.getAttribute('clickable') === 'false') {
                    continue
                }
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
        onClick = (e) => {
            const { focus, columns_checked = [] } = getState()
            if (canMove && focus) {
                let data = {}
                columns_checked.map(k => {data[k] = focus.getAttribute(k)})
                onClickCfg &&　onClickCfg(Object.assign({during}, e), data, focus)
            }
            canMove = !canMove
        }
        onInputFocus = (e) => {
            canMove = false
        }
        onInputChange = (value, focus) => {
            const { columns_checked = [] } = getState()
            if (focus) {
                let data = {}
                columns_checked.map(k => {data[k] = focus.getAttribute(k)})
                onInput && onInput(value, data, focus)
            }
        }
    }
    return {
        src, width, height, focus, doc,
        onMouseMove, onClick, onInput: onInputChange, onInputFocus,
        contentmenu
    }
})(Screen)