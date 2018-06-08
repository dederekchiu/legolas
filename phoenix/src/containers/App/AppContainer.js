import { connect } from 'react-redux';
import { requestListOfGames } from './actions';
import { lifecycle } from 'recompose';
import App from './App';

const mapStateToProps = state => {
    return {
        listOfGames: state.listOfGames.games,
    }
};

const mapDispatchToProps = dispatch => ({
    getAllGames: () => dispatch(requestListOfGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        this.props.getAllGames();
    }
})(App));
