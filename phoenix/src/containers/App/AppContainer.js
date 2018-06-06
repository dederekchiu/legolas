import { connect } from 'react-redux';
import App from './App';
import { requestClips }  from './actions';
import { lifecycle } from 'recompose';

const mapStateToProps = state => {
    return {
        clips: state.app.clips,
    }
};

const mapDispatchToProps = dispatch => ({
    get: (route) => dispatch(requestClips(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        const game = this.props.match.params.id;
        this.props.get(game);
    }
})(App));
