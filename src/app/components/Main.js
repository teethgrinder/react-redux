import React from "react";
import {withRouter} from "react-router";
import { Switch, Route } from 'react-router-dom';
import {Home} from "./Home";
import {User} from "./User";
export const Main = (props) => {

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                      <Switch>
                        <Route exact path='/' component={Main} changeUsername={() => this.props.setName("Anna")}/>
                        <Route path='/user/:name' component={User} component={User}/>
                      </Switch>
                    </div>
                </div>

            </div>
        );
    }

    export default Main
