import React, { Component } from 'react';
import { Row, Col, Card, Button, Input } from 'antd';
import 'antd/dist/antd.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  handleChange = (e) => {
    this.setState({
        username: e.target.value
      });
  }

  connect = () => {
    this.props.connect(this.state.username);
  }

  render() {
    return (
      <div>
        <center>
            <Row>
                <Col span={24}>
                    <Card style={{ width: '80%', padding: '2%', marginTop: '50%' }}>
                        <p><Input placeholder = "Enter Username" disabled = {this.props.disable} onChange = {this.handleChange} /> 
                        <br /><br />
                        <Button type="primary" disabled = {this.props.disable} onClick = {this.connect}>Connect</Button>
                        </p>
                    </Card>
                </Col>
            </Row>
        </center>
      </div>
    );
  }
}

export default User;
