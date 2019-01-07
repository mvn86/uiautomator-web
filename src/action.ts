import { dispatch, getState } from './store'

export const onFocus = (focus: Element) => dispatch((state) => {
    const { onChange, columns_checked, clickable_filter } = state
    if (clickable_filter && focus.getAttribute('clickable') === 'false') {
        return state
    }
    let data = {}
    columns_checked.map(k => {data[k] = focus.getAttribute(k)})
    onChange && onChange(data, focus)
    return {
        ...state,
        focus
    }
})

export const onExpend = (node: Element) => {
    const { expends, ...state } = getState()
    const newExpends = new Set(expends)
    if (newExpends.has(node)) {
        newExpends.delete(node)
    } else {
        let t = node
        do {
            newExpends.add(t)
            t = t.parentElement
        } while (t)
    }
    dispatch(() => {
        return {
            ...state,
            expends: newExpends
        }
    })
}