import React from 'react';
import PropTypes from 'prop-types';
import ClipModalContainer from './../ClipModal/ClipModalContainer';
import Clip from "../../components/Clips";
import ClipPeriodButtons from './../../components/ClipPeriodButtons';

const GameClips = ({
    clips, clip, toggleClips, isClipsOpen, getClipsByGame
}) => {
    console.log('clips from games: ', clips);
    if (clips.length > 0) {
        return (
            <div style={{marginTop:'70px'}}>
                {/*<header>{clips[0].game}</header>*/}
                <div>
                    <ClipPeriodButtons clips={clips} getClips={getClipsByGame} name={clips[0].game}/>
                    <div>
                        {clips.map((clip) => {
                            return <Clip toggleClips={toggleClips} clip={clip}/>;
                        })}
                    </div>
                </div>
                <ClipModalContainer isClipsOpen={isClipsOpen} toggle={toggleClips} clip={clip}/>
            </div>
        )
    } else {
        return <div style={{fontSize: '70px'}}>404</div>;
    }
};

GameClips.propTypes = {
    clips: PropTypes.array.isRequired,
};

GameClips.defaultProps = {
    clips: [],
};

export default GameClips;
