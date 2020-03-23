
import React from 'react';
import "../../assets/css/login.css"
import background from "../../assets/image/background.jpeg"
import { Button,Input, message } from 'antd';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            backgroundStyle:{
                width: "100%",
                height: "100%",
              // makesure here is String确保这里是一个字符串，以下是es6写法
                backgroundImage: `url(${background})`
            },
            user:"",
            pwd:""
        }

    }
    userChange(e){
    //user在state中
       this.setState({
           user:e.target.value
       })
    }
    pwdChange(e){
       this.setState({
        pwd:e.target.value
       })
    }
    //提交
    submit(){
        console.log("提交")

        if(this.state.user===""){
            message.error('请输入用户名称');
            return
        }
        if(this.state.pwd===""){
            message.error("请输入密码")
            return
        }

        const hide = message.loading('正在登录中。。。', 0);

        // Dismiss manually and asynchronously
        setTimeout(hide, 2500);
        
        setTimeout(()=>{
            message.success('登录成功！');
             this.props.history.push("home")
        },2600)
        //路径跳转
       
    }

    render(){
    return (
        <div className="login" style={this.state.backgroundStyle}>
            <div className="form">
               <Input placeholder="请输入用户名称" onChange={this.userChange.bind(this)} value={this.state.user} size="large"   style={{"width":"350px"}} /> 
                <div style={{'height':"20px"}}></div>
               <Input.Password placeholder="密码"  onChange={this.pwdChange.bind(this)}    size="large"  style={{"width":"350px"}}/> 
               <Button size="large" type="primary"  onClick={this.submit.bind(this)} style={{width:'350px',marginTop:"50px"}}>登录</Button>
            </div>
        </div>
    )
}
}

export default Login