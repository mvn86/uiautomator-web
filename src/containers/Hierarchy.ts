import { connect, getState, dispatch } from '../store'
import Hierarchy from '../components/Hierarchy'
import { onFocus, onExpend } from '../action'

export default connect(() => {
    const { doc, focus, expends } = getState()
    return {
        doc, focus, onFocus, expends, onExpend
    }
})(Hierarchy)