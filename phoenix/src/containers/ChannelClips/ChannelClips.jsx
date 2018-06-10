import React from 'react';
import PropTypes from 'prop-types';

const ChannelClips = ({
    clips
}) => {
    console.log('clips from broadcaster', clips);
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

ChannelClips.propTypes = {
    clips: PropTypes.array.isRequired,
};

ChannelClips.defaultProps = {
    clips: [],
};

export default ChannelClips;
