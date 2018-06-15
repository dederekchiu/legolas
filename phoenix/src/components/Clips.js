import React from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
} from 'reactstrap';


const Clips = ({
    toggleClips, clip,
}) => {
    return (
        <Card className='text-center' style={{
            marginLeft: '20px',
            marginBottom: '10px',
            display: 'inline-block'
        }}>
            <img
                src={clip.thumbnails.medium}
                style={{
                    cursor: 'pointer',
                }}
                width='320'
                height='180'
                onClick={() => toggleClips(clip.embed_url)}
            />
            <CardBody style={{padding: '.7rem', width: '320px'}}>
                <CardTitle style={{
                    fontSize: '20px',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}>
                    {clip.title}
                </CardTitle>
                <CardText style={{fontSize: '12px'}}>{clip.game}</CardText>
            </CardBody>
        </Card>
    )
};

export default Clips;