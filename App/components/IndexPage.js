import React, {Component} from 'react';
import { DatePicker } from 'antd';

class IndexPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    render() {
        return (
            <DatePicker style={{ margin: 20 }} />
        );
    }
}

export default IndexPage;