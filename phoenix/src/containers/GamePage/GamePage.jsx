import React from 'react';
import PropTypes from 'prop-types';

const GamePage = ({
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

GamePage.propTypes = {
    clips: PropTypes.array.isRequired,
};

GamePage.defaultProps = {
    clips: [],
};

export default GamePage;
