import { connect, getState, dispatch } from '../store'
import Screen from '../components/Screen'
import { onFocus, onExpend } from '../action'

const boundContains = (bounds, x, y): boolean => {
    const [left, top, right, bottom] = bounds.match(/\d+/g).map(Number)
    return x >= left && x <= right && y >= top && y <= bottom
}

let onMouseMove
let onMouseEnter
let onClick
export default connect(({HEIGHT}) => {
    const { screenShot, width, height, focus, doc, expends } = getState()
    if (!onMouseMove && doc) {
        let elements = doc.querySelectorAll('[bounds]')
        const zoom = height / HEIGHT
        let canMove = false

        onMouseMove = (e: MouseEvent) => {
            if (!canMove) return
            const { offsetX, offsetY } = e
            if (focus && boundContains(focus, offsetX * zoom, offsetY * zoom)) {
                return
            }
            for (let i = elements.length - 1; i > 0; i--) {
                const ele = elements[i]
                if (boundContains(ele.getAttribute('bounds'), offsetX * zoom, offsetY * zoom)) {
                    if (ele != focus) {
                        onFocus(ele)
                    }
                    if (!expends.has(ele)) {
                        onExpend(ele)
                    }
                    return
                }
            }
        }

        onMouseEnter = () => {
            canMove = true
        }

        onClick = () => {
            canMove = !canMove
        }
    }
    return {
        screenShot, width, height, focus, doc,
        onMouseMove, onMouseEnter, onClick
    }
})(Screen)