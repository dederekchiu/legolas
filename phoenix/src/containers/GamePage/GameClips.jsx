import React from 'react';
import PropTypes from 'prop-types';

const GameClips = ({
    clips
}) => {
    console.log('clips from games: ', clips);
    return (
        <div>
            {clips.length > 0 ?
                clips.map( (clip) => {
                    return (
                        <iframe
                            src={`${clip.embed_url}&autoplay=false`}
                            width='640'
                            height='360'
                            frameBorder='0'
                            scrolling='no'
                            allowFullScreen='true'
                        />
                    );
                })
                :
                null
            }
        </div>
    )
};

GameClips.propTypes = {
    clips: PropTypes.array.isRequired,
};

GameClips.defaultProps = {
    clips: [],
};

export default GameClips;
