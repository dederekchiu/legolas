import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{
            overflow: 'hidden',
        }}>
            <div
                style={{
                    width: '100vw',
                    height: '56px',
                    backgroundColor: '#c1eff2',
                    marginBottom: '20px',
                    display: 'inline-block'
                }}
            >
                <Link to='/'>
                    <div style={{
                        marginLeft: '10px',
                        fontFamily: 'Audiowide',
                        fontSize: '42px',
                        display: 'inline-block',
                    }}>
                        clipIt
                    </div>
                </Link>

                <div style={{display: 'inline-block', marginLeft: '40px'}}>
                    <Link to='/'>
                        <a style={{
                            fontSize: '24px',
                            fontFamily: 'Artifika',
                            marginRight: '20px',

                        }}>
                            Popular
                        </a>
                    </Link>
                    <Link to='/'>
                        <a style={{
                            fontSize: '24px',
                            fontFamily: 'Artifika',
                            marginRight: '20px',

                        }}>
                            Trending
                        </a>
                    </Link>
                    <Link to='/'>
                        <a style={{
                            fontSize: '24px',
                            fontFamily: 'Artifika',
                            marginRight: '20px',
                        }}>
                            Discover
                        </a>
                    </Link>
                </div>

                <input
                    type='text'
                    placeholder='Search..'
                    style={{
                        marginTop: '12px',
                        padding: '6px',
                        border: 'none',
                    }}
                />

            </div>
        </div>
    );
};

export default Header;