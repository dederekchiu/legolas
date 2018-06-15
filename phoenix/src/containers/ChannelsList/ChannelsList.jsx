import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

const Channels = ({
    channels,
}) => {
    return (
        <div style={{
            clear: 'left'
        }}>
            <span
                style={{
                    marginLeft:'5px',
                    fontFamily: 'Artifika',
                    fontSize: '22px',
                }}
            >
                Channels
            </span>
            <br />
            <div>
                {
                    channels.map((channel) => {
                        const link = `/channel/${channel.name}`;
                        return (
                            <div key={`${channel.name}_${channel.logo}`} >
                                <Link
                                    to={link}
                                    style={{
                                        marginLeft: '5px',
                                        float: 'left',
                                    }}
                                >
                                    <img src={channel.logo} width={136} height={190} />
                                </Link>
                            </div>
                        );

                    })
                }
            </div>
        </div>
    )
};

Channels.propTypes = {
    channels: PropTypes.array.isRequired,
};

Channels.defaultProps = {
    channels: [],
};

export default Channels;
