
import React from 'react';
import "../../assets/css/home.css"
import Appbar from "../../components/Appbar"
import Head from "../../components/Head"


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }

    }
    handleClick = e => {
        console.log('click ', e);
      }
    //提交
    submit(){
    
    }

    render(){
        return (
              <div className="home">
                   <Appbar title={"菜单"}/>
                     <div className="content-wrap">
                    
                     <Head/>
                   </div>
             </div>
             
          );
}
}

export default Home