import { connect } from 'react-redux';
import { toggleClipModal } from './actions';
import { lifecycle } from 'recompose';
import ClipModal from './ClipModal';

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => ({
    toggleClipModal: () => dispatch(toggleClipModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClipModal);
