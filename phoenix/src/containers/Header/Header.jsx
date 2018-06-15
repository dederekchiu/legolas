import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../Search/SearchContainer';

const Header = () => {
    return (
        <div style={{
            position: 'fixed',
            zIndex: 10,
            top: 0,
            margin: '0 auto',
        }}>
            <div
                style={{
                    width: '100vw',
                    height: '62px',
                    backgroundColor: '#4286f4',
                }}
            >
                <Link to='/'>
                    <div style={{
                        marginLeft: '10px',
                        fontFamily: 'Audiowide',
                        fontSize: '42px',
                        display: 'inline-block',
                        color: 'white'
                    }}>
                        clipIt
                    </div>
                </Link>
                <div style={{
                    display: 'inline-block',
                    marginLeft: '20px',
                    verticalAlign: 'middle',
                    marginBottom: '20px',
                }}>
                    <SearchContainer/>
                </div>
            </div>
        </div>
    );
};

export default Header;