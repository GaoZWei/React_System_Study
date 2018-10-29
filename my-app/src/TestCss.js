import React, { Component, Fragment } from "react";
//import "./TestCss.css";
import "./TestCss1.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TestCss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //show: true
      list: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {/* <div className={this.state.show ? "show" : "hide"}>hello</div> */}{" "}
          {this.state.list.map((item, index) => {
            // console.log(item)
            return (
              <CSSTransition
                // in={this.state.show}
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEntered={el => {
                  el.style.color = "blue";
                }}
                appear={true}
                key={index}
              >
                <div> {item} </div>{" "}
              </CSSTransition>
            );
          })}{" "}
          <button onClick={this.handleToggle}> toggle </button>{" "}
        </TransitionGroup>{" "}
      </Fragment>
    );
  }
  handleToggle() {
    // this.setState({
    //   show: this.state.show ? false : true
    // });
    this.setState(prevState => {
      // console.log(this.state.list)
      return {
        list: [...prevState.list, "item"]
      };
    });
  }
}
export default TestCss;
