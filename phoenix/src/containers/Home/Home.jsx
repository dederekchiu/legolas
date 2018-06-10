import React from 'react';
import PropTypes from 'prop-types';
import GamesListContainer from '../GamesList/GamesListContainer';
import TrendingClipsContainer from '../TrendingClips/TrendingClipsContainer';
import ChannelsContainer from '../ChannelsList/ChannelsListContainer';

const Home = () => {
    return (
        <div>
            <TrendingClipsContainer />
            <GamesListContainer />
            <ChannelsContainer />
        </div>
    )
};

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
