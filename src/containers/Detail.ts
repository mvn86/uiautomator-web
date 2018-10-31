import { connect, getState, dispatch } from '../store'
import Detail from '../components/Detail'

export default connect(() => {
    const { focus, columns_enabled = [], columns_checked = [] } = getState()
    return {
        focus,
        columns_enabled,
        columns_checked,
        changeChecked: (name) => dispatch(state => {
            const index = columns_checked.indexOf(name);
            if (index === -1) {
                return {...state, columns_checked: columns_checked.concat(name)}
            } else {
                return {...state, columns_checked: columns_checked.slice(0, index).concat(columns_checked.slice(index + 1))}
            }
        })
    }
})(Detail)