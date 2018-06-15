import React from 'react';
import PropTypes from 'prop-types';
import ClipModalContainer from './../ClipModal/ClipModalContainer';
import Clip from './../../components/Clips';
import {
    Button,
    ButtonGroup,
} from 'reactstrap';
import ClipPeriodButtons from './../../components/ClipPeriodButtons';

const ChannelClips = ({
    clips, clip, toggleClips, isClipsOpen, getClipsByChannel,
}) => {
    console.log('clips from broadcaster', clips);
    if (clips.length > 0) {
        return (
            <div style={{marginTop:'70px'}}>
                {/*<div style={{*/}
                    {/*marginBottom: '20px',*/}
                    {/*marginLeft: '20px'*/}
                {/*}}>*/}
                    {/*<header style={{fontSize: '32px'}}>*/}
                        {/*{clips[0].broadcaster.name}*/}
                    {/*</header>*/}
                    {/*<img src={clips[0].broadcaster.logo}/>*/}
                {/*</div>*/}
                <div>
                    <ClipPeriodButtons clips={clips} getClips={getClipsByChannel} name={clips[0].broadcaster.name}/>
                    <div>
                        {
                            clips.map((clip) => {
                                return <Clip toggleClips={toggleClips} clip={clip}/>;
                            })
                        }
                    </div>
                </div>
                <ClipModalContainer isClipsOpen={isClipsOpen} toggle={toggleClips} clip={clip}/>
            </div>
        )
    } else {
        return <div>404</div>;
    }
};

ChannelClips.propTypes = {
    clips: PropTypes.array.isRequired,
};

ChannelClips.defaultProps = {
    clips: [],
};

export default ChannelClips;
