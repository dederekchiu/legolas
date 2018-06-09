import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.jsx'

const GamesList = ({
    listOfGames
}) => {
    return (
        <div style={{backgroundColor: 'purple'}}>
            <span
                style={{
                    marginLeft:'5px',
                    fontFamily: 'Artifika',
                    fontSize: '22px',
                }}
            >
                Games
            </span>
                <br/>
                {
                    listOfGames.map((game) => {
                        const link = `/game/${game.name}`;
                        return (
                            <div key={`${game.name}_${game.smallIcon}`}>
                                <Link
                                    to={link}
                                    style={{
                                        display: 'inline-block',
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

GamesList.propTypes = {
    listOfGames: PropTypes.array.isRequired,
};

GamesList.defaultProps = {
    listOfGames: [],
};

export default GamesList;
