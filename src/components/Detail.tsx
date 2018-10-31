import { h, Component } from 'preact'

export interface DetailProps {
    focus: Element
    columns_enabled?: string[]
    columns_checked?: string[]
    changeChecked?: (name: string) => void
}

export default class extends Component<DetailProps> {
    render () {
        const { focus, columns_enabled = [], columns_checked = [], changeChecked } = this.props

        return <div style={{fontSize: 12, padding: 6}}>
            {focus && <table style={{width: '100%'}}>
                {[].slice.call(focus.attributes).map(({name, value}) => <tr>
                    <td>
                        <label>
                            <input type="checkbox"
                                disabled={!columns_enabled.includes(name)}
                                checked={columns_checked.includes(name)}
                                onClick={() => changeChecked(name)}
                            />
                            <span>{name}</span>
                        </label>
                    </td>
                    <td><input type="text" readOnly value={value} style={{
                        border: 0,
                        width: '100%'
                    }} onFocus={function (e) {
                        e['target']['select']()
                    }}/></td>
                </tr>)}
            </table>}
        </div>

    }
}