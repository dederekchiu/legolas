import { connect } from 'react-redux';
import { requestTrendingClips } from './actions';
import { lifecycle } from 'recompose';
import TrendingClips from './TrendingClips';

const mapStateToProps = state => {
    return {
        trendingClips: state.trending.clips
    }
};

const mapDispatchToProps = dispatch => ({
    getTrendingClips: () => dispatch(requestTrendingClips())
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        this.props.getTrendingClips();
    }
})(TrendingClips));
