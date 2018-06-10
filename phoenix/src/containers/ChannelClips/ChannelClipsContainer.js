import { connect } from 'react-redux';
import ChannelClips from './ChannelClips';
import {requestClipsByBroadcaster} from './actions';
import { lifecycle } from 'recompose';

const mapStateToProps = state => {
    return {
        clips: state.channel.clips,
    }
};

const mapDispatchToProps = dispatch => ({
    getClipsByChannel: (route) => dispatch(requestClipsByBroadcaster(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        const broadcaster = this.props.match.params.channel;
        this.props.getClipsByChannel(broadcaster);
    }
})(ChannelClips));
