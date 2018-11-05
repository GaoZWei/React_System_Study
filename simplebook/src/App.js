import React, {Component} from 'react';
import Header from './common/header'
import { Globalstyle } from './style'
import {Iconstyle} from './statics/iconfont/iconfont'
class App extends Component{
    render(){
        return(
            <div>
                <Globalstyle/>
                <Iconstyle/>
                <Header/>
            </div>
        )
    }
}
export default App;