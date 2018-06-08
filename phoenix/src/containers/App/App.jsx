import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.jsx'

const App = ({
    listOfGames
}) => {
    return (
        <div>
            <Header/>
            {
                listOfGames.map((game) => {
                    const link = `/game/${game.name}`;
                    return (
                        <div key={`${game.name}_${game.smallIcon}`}>
                            <Link
                                to={link}
                                style={{
                                    float: 'left',
                                    marginLeft: '5px',
                                }}
                            >
                                <img src={game.mediumIcon} />
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    )
};

App.propTypes = {
    listOfGames: PropTypes.array.isRequired,
};

App.defaultProps = {
    listOfGames: [],
};

export default App;
