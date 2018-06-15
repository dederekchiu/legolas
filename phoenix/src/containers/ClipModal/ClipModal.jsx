import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ClipModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 200
        };
        this.resizeBrowser = this.resizeBrowser.bind(this);
    }

    resizeBrowser() {
        this.setState({width: window.innerWidth - ((window.innerWidth > 900) ? 120 : 0) });
    }

    render() {
        return (
            <Modal
                toggle={this.props.toggle}
                isOpen={this.props.isClipsOpen}
                onOpened={() => {
                    this.setState({width: window.innerWidth - ((window.innerWidth > 900) ? 120 : 0) });
                    window.addEventListener('resize', this.resizeBrowser);
                }}
                onClosed={() => {
                    window.removeEventListener('resize', this.resizeBrowser);
                }}
                backdrop={true}
                backdropTransition={{ timeout: 10 }}
                modalTransition={{ timeout: 20 }}
                style={{
                    position: 'absolute',
                    border: 'none',
                    background: 0,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                contentClassName='modal-transparent'
                backdropClassName='modal-backdrop-clips'
            >
                <ModalBody>
                    <iframe
                        src={this.props.clip}
                        style={{
                            background: 'none',
                            border: 'none',
                            marginLeft: '5px',
                            marginBottom: '5px',
                        }}
                        width={this.state.width}
                        height={this.state.width/1.7826}
                        frameBorder='0'
                        allowFullScreen='true'
                    />
                </ModalBody>
            </Modal>
        )
    }
}

// const ClipModal = ({
//     twitchUrl, clipModalOpen, isClipsOpen, toggle, clip,
// }) => {
//     return (
//         <Modal
//             toggle={toggle}
//             isOpen={isClipsOpen}
//             onOpened={() => {
//                 window.addEventListener('resize', () => {x=window.innerWidth})
//             }}
//             onClosed={() => {
//                 window.removeEventListener('resize');
//             }}
//             backdrop={true}
//             backdropTransition={{ timeout: 10 }}
//             modalTransition={{ timeout: 20 }}
//             style={{
//                 position: 'absolute',
//                 border: 'none',
//                 background: 0,
//                 left: '50%',
//                 top: '50%',
//                 transform: 'translate(-50%, -50%)',
//             }}
//             contentClassName='modal-transparent'
//             backdropClassName='modal-backdrop-clips'
//         >
//             <ModalBody>
//                 <iframe
//                     src={clip}
//                     style={{
//                         background: 'none',
//                         border: 'none',
//                         marginLeft: '5px',
//                         marginBottom: '5px',
//                     }}
//                     width={x}
//                     frameBorder='0'
//                     allowFullScreen='true'
//                 />
//             </ModalBody>
//         </Modal>
//     )
// };

export default ClipModal;
