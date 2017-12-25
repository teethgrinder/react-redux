import React from 'react';

export const User = (props) => {
    return (
      <div>
        <h3>User Page</h3>
        <p>User Id: {props.username}</p>
          <div className="row">
              <div className="col-xs-12">
                  <button
                      className="btn btn-primary"
                      onClick={() => props.changeUsername('Anna')}>Change the Username</button>
              </div>
          </div>
        <button   className="btn btn-primary">Home</button>
      </div>
    );
}
