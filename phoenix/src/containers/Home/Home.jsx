import React from 'react';
import PropTypes from 'prop-types';
import GamesListContainer from '../GamesList/GamesListContainer';
import TrendingClipsContainer from '../TrendingClips/TrendingClipsContainer';

const Home = () => {
    return (
        <div>
            <TrendingClipsContainer />
            <GamesListContainer />
        </div>
    )
};

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
