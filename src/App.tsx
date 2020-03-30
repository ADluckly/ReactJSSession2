import 'antd/dist/antd.css';
import * as React from 'react';
import './App.css';
import { Row, Col, InputNumber, Switch, Slider, Select, DatePicker, Button } from 'antd';

const { Option } = Select;
class App extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="App-body">
        <Row justify="space-around" align="middle">
          <Col span={4} className="title">
            数字输入框:
          </Col>
          <Col span={1}></Col>
          <Col span={19}>
            <InputNumber style={{width: 100}} />台机器
            <a>链接文字</a>
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
          <Col span={4} className="title">
            开关:
          </Col>
          <Col span={1}></Col>
          <Col span={19}>
            <Switch defaultChecked></Switch>
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
          <Col span={4} className="title">滑动输入条</Col>
          <Col span={1}></Col>
          <Col span={19}>
            <Slider defaultValue={30}></Slider>
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
          <Col span={4} className="title">选择器</Col>
          <Col span={1}></Col>
          <Col span={19}>
            <Select defaultValue="A" style={{width: 100}}>
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
              <Option value="D">D</Option>
            </Select>
          </Col>
        </Row>
        <Row justify="space-around" align="middle">
          <Col span={4} className="title">
            日期选择框
          </Col>
          <Col span={1}></Col>
          <Col span={19}>
            <DatePicker></DatePicker>
          </Col>
        </Row>
        <Row>
          <Col span={5}></Col>
          <Col span={19}>
            <Button type="primary" style={{marginRight: 10}}>确定</Button>
            <Button>取消</Button>
          </Col>
        </Row>
      </div>
      
    )
  }
}

export default App;
