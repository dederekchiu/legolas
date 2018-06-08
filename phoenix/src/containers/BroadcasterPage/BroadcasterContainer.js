import { connect } from 'react-redux';
import BroadcasterPage from './BroadcasterPage';
import {requestClipsByBroadcaster} from './actions';
import { lifecycle } from 'recompose';

const mapStateToProps = state => {
    return {
        clips: state.broadcasterClips.clips,
    }
};

const mapDispatchToProps = dispatch => ({
    getClipsByBroadcaster: (route) => dispatch(requestClipsByBroadcaster(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        const broadcaster = this.props.match.params.broadcaster;
        this.props.getClipsByBroadcaster(broadcaster);
    }
})(BroadcasterPage));
