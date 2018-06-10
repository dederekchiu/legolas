import { connect } from 'react-redux';
import GameClips from './GameClips';
import {requestClipsByBroadcaster, requestClipsByGame} from './actions';
import { lifecycle } from 'recompose';

const mapStateToProps = state => {
    return {
        clips: state.games.clips,
    }
};

const mapDispatchToProps = dispatch => ({
    getAllChannels: (route) => dispatch(requestClipsByGame(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        const game = this.props.match.params.game;
        this.props.getAllChannels(game);
    }
})(GameClips));
