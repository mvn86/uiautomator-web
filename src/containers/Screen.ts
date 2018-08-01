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
        let running = false
        let canMove = false

        onMouseMove = (e: MouseEvent) => {
            if (running || !canMove) return
            running = true
            setTimeout(function () {
                running = false
            }, 300)

            const { offsetX, offsetY } = e
            for (let i = elements.length - 1; i > 0; i--) {
                if (boundContains(elements[i].getAttribute('bounds'), offsetX * zoom, offsetY * zoom)) {
                    onFocus(elements[i])
                    if (!expends.has(elements[i])) {
                        onExpend(elements[i])
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