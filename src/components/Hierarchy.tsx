import { h, Component } from 'preact'

export interface HierarchyProps {
    doc: Document
    focus?: Element
    expends?: Set<Element>
    onFocus?: (node: Element) => void
    onExpend?: (node: Element) => void
}

export interface HierarchyState {
}

const getClass = (node: Element) => {
    const clazz = node.getAttribute('class')
    return clazz && clazz.split('.').pop()
}

export default class extends Component<HierarchyProps, HierarchyState> {

    loop = (node: Element, root?: boolean) => {
        const { focus, expends, onExpend, onFocus } = this.props
        const { loop } = this
        const className = getClass(node)
        return <li style={{
            paddingLeft: 12
        }}>
            <div tabIndex={-1} style={{
                cursor: 'pointer',
                lineHeight: 2,
                background: focus === node ? '#d2d2d2' : null
            }} onClick={() => onExpend(node)}>
                {node.children.length ? <b>{expends.has(node) ? '▾' : '▸'}</b> : ' '}
                &nbsp;
                {root ? 'ROOT' : <span onClick={() => onFocus(node)} >
                    ({node.getAttribute('index')}) {className} {node.getAttribute('bounds')}
                </span>}
            </div>
            {expends.has(node) && <ul style={{
                padding: 0,
                listStyle: 'none'
            }}>
                {[].slice.call(node.children).map((name, i) => loop(name))}
            </ul>}
        </li>
    }
    render () {
        const { loop } = this
        const { doc } = this.props
        const root = doc.documentElement

        return <ul style={{
            fontSize: 12,
            padding: 0,
            listStyle: 'none'
        }}>
            {loop(root, true)}
        </ul>
    }
}