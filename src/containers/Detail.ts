import { connect, getState, dispatch } from '../store'
import Detail from '../components/Detail'

export default connect(() => {
    let { focus, columns_enabled = [], columns_checked = [], onChange } = getState()
    return {
        focus,
        columns_enabled,
        columns_checked,
        changeChecked: (name) => dispatch(state => {
            const index = columns_checked.indexOf(name);
            if (index === -1) {
                columns_checked = columns_checked.concat(name)
            } else {
                columns_checked = columns_checked.slice(0, index).concat(columns_checked.slice(index + 1))
            }

            if (focus) {
                let data = {}
                columns_checked.map(k => {data[k] = focus.getAttribute(k)})
                onChange &&onChange(data, focus)
            }

            return {...state, columns_checked}
        })
    }
})(Detail)