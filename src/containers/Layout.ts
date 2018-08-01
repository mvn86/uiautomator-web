import { connect, getState } from '../store'
import Layout from '../components/Layout'

export default connect(() => {
    const { doc } = getState()
    return {
        doc
    }
})(Layout)