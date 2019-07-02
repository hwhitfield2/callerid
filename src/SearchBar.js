import React from 'react';

class SearchBar extends React.Component {
    state = {callerid: ''};
    
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.callerid);
    }

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <h1 className='ui center aligned header'>Please Enter Phone Number</h1>
                    <input 
                        type="text" 
                        value={this.state.callerid} 
                        onChange={e => this.setState({ callerid: e.target.value})} 
                    />
                    <button type='submit' className='ui blue button swag'>Submit</button>
                </div>
            </form>
        </div>
        );
    }

}

export default SearchBar;