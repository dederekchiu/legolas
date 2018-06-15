import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import GameClips from './GameClips';
import { requestClipsByGame } from './actions';
import { lifecycle } from 'recompose';
import {toggleClips} from "../TrendingClips/actions";
import {requestClipsByBroadcaster} from "../ChannelClips/actions";

const mapStateToProps = state => {
    return {
        isClipsOpen: state.trending.openClips,
        clip: state.trending.clip,
        clips: state.games.clips
    }
};

const mapDispatchToProps = dispatch => ({
    getClipsByGame: (route, period) => dispatch(requestClipsByGame(route, period)),
    toggleClips: (clip) => dispatch(toggleClips(clip)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentWillReceiveProps (nextProps) {
        if (nextProps.match.params.game !== this.props.match.params.game) {
            const game = nextProps.match.params.game;
            this.props.getClipsByGame(game);
        }
    },
    componentDidMount() {
        const game = this.props.match.params.game;
        this.props.getClipsByGame(game);
    }
})(GameClips)));
