import { connect } from 'react-redux';
import { requestListOfGames } from './actions';
import { lifecycle } from 'recompose';
import GamesList from './GamesList';

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
})(GamesList));
