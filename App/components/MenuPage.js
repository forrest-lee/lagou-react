import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router'
import 'antd/dist/antd.css';

import {
    Menu,
    Button,
    Table,
    Spin,
    Form,
    Input,
    Row,
    Col,
    Icon,
    DatePicker
} from 'antd';

const FormItem = Form.Item;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MenuPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {}

    render() {
        if (this.state.loading) {
            // return (
            //     <Spin />
            // );
        }

        return (
            <div style={{
                marginTop: 20
            }}>
            <Row>
                    <Col span={6}>
                        <Menu onClick={this.handleClick} style={{
                            width: 240
                        }} defaultOpenKeys={['sub1']} selectedKeys={[this.state.current]} mode="inline">
                            <SubMenu key="sub1" title={< span > <Icon type="mail"/> < span > 信息检索 < /span></span >}>
                                <MenuItemGroup title="职位">
                                    <Menu.Item key="3"><Link to={`/position`}>全部职位</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to={`/keywords`}>热门职位</Link></Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="公司">
                                    <Menu.Item key="1">全部公司</Menu.Item>
                                    <Menu.Item key="2">热门公司</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <SubMenu key="sub2" title={< span > <Icon type="appstore"/> < span > 数据趋势 < /span></span >}>
                                <Menu.Item key="5">编程语言趋势</Menu.Item>
                                <Menu.Item key="6">薪水涨幅趋势</Menu.Item>
                                <SubMenu key="sub3" title="其他">
                                    <Menu.Item key="7">自定义趋势</Menu.Item>
                                    <Menu.Item key="8">提交数据</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4" title={< span > <Icon type="setting"/> < span > 设置 < /span></span >}>
                                <Menu.Item key="9">便好设置</Menu.Item>
                                <Menu.Item key="10">个人信息</Menu.Item>
                                <Menu.Item key="11">个人简历</Menu.Item>
                                <Menu.Item key="12">联系我们</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={18}>
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MenuPage;
