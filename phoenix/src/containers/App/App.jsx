import React from 'react';
import PropTypes from 'prop-types';

const App = ({
    clips
}) => {
    console.log('app shouldnt load', clips);
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

App.propTypes = {
    clips: PropTypes.array.isRequired,
};

App.defaultProps = {
    clips: [],
};

export default App;
