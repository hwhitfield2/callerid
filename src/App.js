import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import IDname from './IDname';

const account_sid = "put your account_sid here";
const auth_token = "put your auth_token here";

class App extends React.Component {
    state = {callerid2: ""};

    onSearchSubmit = async props => {
        const response = await axios.get('https://api.opencnam.com/v3/phone/+1' + props + '?account_sid=' + account_sid + '&auth_token=' + auth_token);
        this.setState({callerid2: response.data.name});
    };

    render() {
        return(
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <IDname idname={this.state.callerid2}/>
            </div>
        )
    }
}

export default App;