import React from 'react';
import {
    ButtonGroup,
    Button,
} from 'reactstrap';

class ClipPeriodButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'all'
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick(clips, active) {
        this.props.getClips(this.props.name, active);
        this.setState({active})
    }
    render() {
        const clips = this.props.clips;

        return (
            <ButtonGroup style={{marginLeft:'20px', marginBottom: '15px', width: '400px'}}>
                <Button color='primary'
                        outline
                        style={{
                            cursor: 'pointer',
                            width: '80px'
                        }}
                        active={this.state.active === 'day'}
                        onClick={() => this.onButtonClick(clips, 'day')}>
                    Day
                </Button>
                <Button color='primary'
                        outline
                        style={{
                            cursor: 'pointer',
                            width: '80px'
                        }}
                        active={this.state.active === 'week'}
                        onClick={() => this.onButtonClick(clips, 'week')}>
                    Week
                </Button>
                <Button color='primary'
                        outline
                        style={{
                            cursor: 'pointer',
                            width: '80px'
                        }}
                        active={this.state.active === 'month'}
                        onClick={() => this.onButtonClick(clips, 'month')}>
                    Month
                </Button>
                <Button color='primary'
                        outline
                        style={{
                            cursor: 'pointer',
                            width: '80px'
                        }}
                        active={this.state.active === 'all'}
                        onClick={() => this.onButtonClick(clips, 'all')}>
                    All
                </Button>
            </ButtonGroup>
        )
    }
}

export default ClipPeriodButtons;