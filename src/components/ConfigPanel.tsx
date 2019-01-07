import { h, Component } from 'preact'

export interface ConfigProps {
    clickable_filter: boolean
    change_clickable_filter: (bool: boolean) => void
}

export default class extends Component<ConfigProps> {
    render () {
        const { clickable_filter, change_clickable_filter } = this.props
        return <div style={{
            position: 'absolute',
            right: -1,
            top: -1,
            padding: 6,
            fontSize: 12,
            background: 'rgba(255, 255, 255, .9)',
            overflow: 'auto',
            border: '1px solid rgb(204, 204, 204)'
        }}>
            <label style={{cursor: 'pointer'}}>
                <input
                    type="checkbox"
                    checked={clickable_filter}
                    onClick={() => change_clickable_filter(!clickable_filter)}
                    style="vertical-align: -3px;"/>
                <span>过滤不可点击元素</span>
            </label>
        </div>
    }
}