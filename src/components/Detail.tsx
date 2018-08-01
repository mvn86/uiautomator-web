import { h, Component } from 'preact'

export interface DetailProps {
    focus: Element
}

export default class extends Component<DetailProps> {
    render () {
        const { focus } = this.props

        return <div style={{fontSize: 12, padding: 6}}>
            {focus && <table style={{width: '100%'}}>
                {[].slice.call(focus.attributes).map(({name, value}) => <tr>
                    <td>{name}</td>
                    <td>{value}</td>
                </tr>)}
            </table>}
        </div>

    }
}