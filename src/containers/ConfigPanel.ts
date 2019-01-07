import { connect, getState, dispatch } from '../store'
import ConfigPanel, { ConfigProps } from '../components/ConfigPanel'

export default connect((): ConfigProps => {
    const { clickable_filter } = getState()
    return {
        clickable_filter,
        change_clickable_filter: (clickable_filter) => dispatch(state => {
            return {
                ...state, clickable_filter
            }
        })
    }
})(ConfigPanel)