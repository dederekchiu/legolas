import { connect } from 'react-redux';
import GamePage from './GamePage';
import {requestClipsByBroadcaster, requestClipsByGame} from './actions';
import { lifecycle } from 'recompose';

const mapStateToProps = state => {
    return {
        clips: state.gamesClip.clips,
    }
};

const mapDispatchToProps = dispatch => ({
    getClipsByGame: (route) => dispatch(requestClipsByGame(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        const game = this.props.match.params.game;
        this.props.getClipsByGame(game);
    }
})(GamePage));
