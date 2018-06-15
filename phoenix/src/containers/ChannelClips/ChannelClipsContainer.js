import { connect } from 'react-redux';
import ChannelClips from './ChannelClips';
import {requestClipsByBroadcaster} from './actions';
import { lifecycle } from 'recompose';
import {toggleClips} from "../TrendingClips/actions";


const mapStateToProps = state => {
    return {
        isClipsOpen: state.trending.openClips,
        clip: state.trending.clip,
        clips: state.channel.clips,
    }
};

const mapDispatchToProps = dispatch => ({
    getClipsByChannel: (route, period) => dispatch(requestClipsByBroadcaster(route, period)),
    toggleClips: (clip) => dispatch(toggleClips(clip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        const broadcaster = this.props.match.params.channel;
        this.props.getClipsByChannel(broadcaster);
        // TODO: get channel information

    }
})(ChannelClips));
