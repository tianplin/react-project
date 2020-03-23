
import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import "./css/appbar.css"


const { SubMenu } = Menu;



class Appbar extends React.Component{
    constructor(props){
        super(props)

        console.log(this.props.title)
        this.state={

        }

    }


    //提交
    submit(){

    }

    render(){
      return (
        <div className="appbar">
        <div className="appbarName">xxx后台管理系统</div>
       <Menu
         style={{ width: 256 }}
        //  defaultSelectedKeys={['0']}
        //  defaultOpenKeys={['sub1']}
         mode="inline"
         >

         <Menu.Item key="0">
          <AppstoreOutlined/>
          首页
          </Menu.Item>

          <Menu.Item key="9">
          <SettingOutlined/>
          设置
          </Menu.Item>

         <SubMenu key="sub1"
         //内联自定义样式
          title={
            <span>
              <MailOutlined />
              <span>案例</span>
            </span>
          }
        >
        <Menu.Item key="1">表格</Menu.Item>
        <Menu.Item key="2">表单</Menu.Item>
        </SubMenu>

         </Menu>
      </div>
          );
}
}

export default Appbar