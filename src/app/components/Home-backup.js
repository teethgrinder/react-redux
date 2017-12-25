import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status : 0,
      homeLink: props.initialLinkName
    };
    setTimeout(() => {
      this.setState({
        status: 1
      })
    },3000);
    console.log("Constructor")
  }
  componentWillMount(){
    console.log("Component will mount");
  }
  componentDidMount(){
    console.log("Component did mount");
  }
  componentWillReceiveProps(nextProps){
    console.log("Component will receive props", nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("Should Component Update", nextProps,nextState);
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log("Component Will Update", nextProps,nextState);
  }
  componentDidUpdate(prevProps,prevState){
    console.log("Component Did Update", prevProps,prevState);
  }
  componentWillUnmount(){
    console.log("Component Will Unmount");
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
    console.log(this.state.age);
  }

  onChangeLink(){
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event) {
      this.setState({
        homeLink: event.target.value
      });
  }
  render() {
    return (

       <div>
         <h3>Home</h3>
         /*
          <p> I am new component </p>
          <p>Your name is {this.props.name}, your age is {this.state.age}</p>
          <p>Status: {this.state.status}</p>
          <hr/>
          <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
          <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
          <hr/>
          <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
          <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Home Link</button>
          */
      </div>
    );
  }
}
Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  greet: PropTypes.func,
  initialLinkName: PropTypes.string
}
