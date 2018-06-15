import React from 'react';
import PropTypes from 'prop-types';
import ClipModalContainer from './../ClipModal/ClipModalContainer';
import Clips from "../../components/Clips";

const TrendingClips = ({
    trendingClips, toggleClips, isClipsOpen, clip,
}) => {
    if (trendingClips.length > 0) {
        return (
            <div style={{
                marginTop: '70px',
            }}>
                <div>
                    <span
                        style={{
                            marginLeft: '20px',
                            fontFamily: 'Artifika',
                            fontSize: '22px',
                            display: 'block'
                        }}
                    >
                        Trending
                    </span>

                    {trendingClips.map((clip) => {
                            return <Clips toggleClips={toggleClips} clip={clip}/>
                    })}
                </div>
                <ClipModalContainer isClipsOpen={isClipsOpen} toggle={toggleClips} clip={clip}/>
            </div>
        )
    } else {
        return <div>404</div>;
    }
};

TrendingClips.propTypes = {
    trendingClips: PropTypes.array.isRequired,
};

TrendingClips.defaultProps = {
    trendingClips: [],
};

export default TrendingClips;
