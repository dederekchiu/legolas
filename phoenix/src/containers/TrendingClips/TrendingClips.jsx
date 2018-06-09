import React from 'react';
import PropTypes from 'prop-types';

const TrendingClips = ({
    trendingClips
}) => {
    return (
        <div style={{marginBottom: '20px'}}>
            <span
                style={{
                    marginLeft:'5px',
                    fontFamily: 'Artifika',
                    fontSize: '22px',
                }}
            >
                Trending
            </span>
            <div style={{backgroundColor: 'yellow'}}>
                <br/>
                {trendingClips.length > 0 ?
                    trendingClips.map((clip) => {
                        return (
                            <iframe
                                src={`${clip.embed_url}&autoplay=false`}
                                style={{
                                    marginLeft: '5px',
                                    marginBottom: '5px',
                                }}
                                width='320'
                                height='180'
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
        </div>
    )
};

TrendingClips.propTypes = {
    trendingClips: PropTypes.array.isRequired,
};

TrendingClips.defaultProps = {
    trendingClips: [],
};

export default TrendingClips;
