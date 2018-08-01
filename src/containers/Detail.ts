import { connect, getState } from '../store'
import Detail from '../components/Detail'

export default connect(() => {
    const { focus } = getState()
    return {
        focus
    }
})(Detail)