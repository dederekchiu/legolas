import { connect } from 'react-redux';
import { searchGame, resetListOfGames } from './actions';
import { lifecycle } from 'recompose';
import Search from './Search';

const mapStateToProps = state => ({
    listOfSearchGames: state.search.listOfSearchGames,
});

const mapDispatchToProps = dispatch => ({
    getGamesBySearch: (searchGameText) => dispatch(searchGame(searchGameText)),
    resetListOfGames: () => dispatch(resetListOfGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
    }
})(Search));
