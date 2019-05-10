import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: ''
    };
  }

  handleChange = (val) => {
    this.props.press(val);
  }

  render() {
    var data = this.props.play;
    return (
      <div style={{ padding: '10%' }}>
        <Row>
            <Col span={8} disable={true}>
                <Card style={{ width: '90%', background: 'aqua', marginBottom: '10%' }} onClick={() => this.handleChange('0')}>
                  {data[0]}
                </Card>
            </Col>
            <Col span={8}>
                <Card style={{ width: '90%', background: 'aqua', marginBottom: '10%' }} onClick={() => this.handleChange('1')}>
                  {data[1]}
                </Card>
            </Col>
            <Col span={8}>
                <Card style={{ width: '90%', background: 'aqua', marginBottom: '10%' }}  onClick={() => this.handleChange('2')}>
                  {data[2]}
                </Card>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <Card style={{ width: '90%', background: 'aqua', marginBottom: '10%' }}  onClick={() => this.handleChange('3')}>
                  {data[3]}
                </Card>
            </Col>
            <Col span={8}>
                <Card style={{ width: '90%', background: 'aqua', marginBottom: '10%' }}  onClick={() => this.handleChange('4')}>
                  {data[4]}
                </Card>
            </Col>
            <Col span={8}>
                <Card style={{ width: '90%', background: 'aqua', marginBottom: '10%' }}  onClick={() => this.handleChange('5')}>
                  {data[5]}
                </Card>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <Card style={{ width: '90%', background: 'aqua', marginBottom: '10%' }}  onClick={() => this.handleChange('6')}>
                  {data[6]}
                </Card>
            </Col>
            <Col span={8}>
                <Card style={{ width: '90%', background: 'aqua', marginBottom: '10%' }}  onClick={() => this.handleChange('7')}>
                  {data[7]}
                </Card>
            </Col>
            <Col span={8}>
                <Card style={{ width: '90%', background: 'aqua', marginBottom: '10%' }}  onClick={() => this.handleChange('8')}>
                  {data[8]}
                </Card>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Match;
