import { connect } from 'react-redux';
import Channels from './ChannelsList';
import { requestAllChannels } from './actions';
import { lifecycle } from 'recompose';

const mapStateToProps = state => {
    return {
        channels: state.channels.channels,
    }
};

const mapDispatchToProps = dispatch => ({
    getAllChannels: () => dispatch(requestAllChannels()),
});

export default connect(mapStateToProps, mapDispatchToProps)(lifecycle({
    componentDidMount() {
        this.props.getAllChannels();
    }
})(Channels));
