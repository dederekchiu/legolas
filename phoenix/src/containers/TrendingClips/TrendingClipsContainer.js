import { connect } from 'react-redux';
import { requestTrendingClips, toggleClips } from './actions';
import { lifecycle } from 'recompose';
import TrendingClips from './TrendingClips';

const mapStateToProps = state => {
    return {
        trendingClips: state.trending.clips,
        isClipsOpen: state.trending.openClips,
        clip: state.trending.clip
    }
};

const mapDispatchToProps = dispatch => ({
    getTrendingClips: () => dispatch(requestTrendingClips()),
    toggleClips: (clip) => dispatch(toggleClips(clip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        this.props.getTrendingClips();
    }
})(TrendingClips));
