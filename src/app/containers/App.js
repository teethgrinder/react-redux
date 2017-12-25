import React from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';

import {Header} from '../components/Header';
import {User} from '../components/User';
import {Main} from '../components/Main';
import {Home} from '../components/Home';
import {setName} from "../actions/userActions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {

  render() {
    return (

      <div className="container">
        <Header/>
        <Main/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App)
//
// import { Root } from "./components/Root";
// import { Home } from "./components/Home";
// import { User } from "./components/User";
//
// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Root>
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route path="/user/:id" component={User} />/
//               <Route path="/home" component={Home} />
//             </Switch>
//           </Root>
//         </div>
//       </Router>
//     )
//   }
// }
//
// render(<App/>, window.document.getElementById("app"));

// const App = () => (
//   <div>
//     <Header />
//     <Main />
//   </div>
// )
//
// export default App
