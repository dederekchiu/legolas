import { connect } from 'react-redux';
import BroadcasterPage from './BroadcasterPage';
import {requestClipsByBroadcaster} from './actions';
import { lifecycle } from 'recompose';

const mapStateToProps = state => {
    return {
        clips: state.app.clips,
    }
};

const mapDispatchToProps = dispatch => ({
    getClipsByBroadcaster: (route) => dispatch(requestClipsByBroadcaster(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        const broadcaster = this.props.match.params.broadcaster;
        console.log('bbbb: ', broadcaster);
        this.props.getClipsByBroadcaster(broadcaster);
    }
})(BroadcasterPage));
