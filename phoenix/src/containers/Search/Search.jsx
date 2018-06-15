import React from 'react';
import PropType from 'prop-types';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Popover,
    PopoverHeader,
    PopoverBody,
} from 'reactstrap';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import { MdSearch } from 'react-icons/lib/md';
import { Link } from 'react-router-dom';

let typingTimer;
const DONE_TYPING_TIMEOUT = 750;


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
        this.onSearchGameClick = this.onSearchGameClick.bind(this);
    }

    keyUp = () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(
            () => this.props.getGamesBySearch(this.state.search),
            DONE_TYPING_TIMEOUT
        );
    };

    keyDown = () => {
        clearTimeout(typingTimer);
    };

    onSearchGameClick = () => {
        this.props.resetListOfGames();
        this.setState({search: ''});
    };


    render() {
        return (
            <InputGroup id="Popover1">
                <InputGroupAddon addonType="prepend">
                    <MdSearch/>
                </InputGroupAddon>
                <Input
                    value={this.state.search}
                    style={{
                        width: '300px',
                    }}
                    onChange={ (e) => this.setState({search: e.target.value})}
                    onKeyUp={this.keyUp}
                    onKeyDown={this.keyDown}
                />
                <Popover placement='bottom'
                         isOpen={(this.props.listOfSearchGames.length !== 0) && this.state.search.length > 2}
                         target="Popover1">
                    <PopoverHeader>Games</PopoverHeader>
                    <PopoverBody style={{height: '300px', overflowY: 'scroll'}}>
                        {
                            this.props.listOfSearchGames.map(game => {
                                const link = `/game/${game}`;
                                return (
                                    <div
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        onClick={this.onSearchGameClick}
                                    >
                                        <Link to={link}>
                                            {game}
                                            <hr />
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </PopoverBody>
                </Popover>

            </InputGroup>
        );
    }
}

Search.defaultProps = {
    listOfSearchGames: []
};

export default Search;