import { connect } from 'react-redux';
import App from './App';
import {requestClipsByBroadcaster, requestClipsByGame} from './actions';
import { lifecycle } from 'recompose';

const mapStateToProps = state => {
    return {
        clips: state.app.clips,
    }
};

const mapDispatchToProps = dispatch => ({
    // getClipsByGame: (route) => dispatch(requestClipsByGame(route)),
    // getClipsByBroadcaster: (route) => dispatch(requestClipsByBroadcaster(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
    }
})(App));
