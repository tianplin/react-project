
import React from 'react';
import "../../assets/css/login.css"
import background from "../../assets/image/background.jpeg"
import { Button,Input } from 'antd';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            backgroundStyle:{
                width: "100%",
                height: "100%",
              // makesure here is String确保这里是一个字符串，以下是es6写法
                backgroundImage: `url(${background})`
            },
            xxx:""
        }

    }

render(){
    return (
        <div className="login" style={this.state.backgroundStyle}>
            <div className="form">
            <Input placeholder="Basic usage" />

            </div>
        </div>
    )
}
}

export default Home