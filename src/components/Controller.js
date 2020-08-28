import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import {
  addUser,
  double,
  onlyMillionaire,
  totalWealth,
  sort
} from "../actions";

class Controller extends Component {
  render() {
    //console.log(this.props);
    return (
      <Fragment>
        <aside>
          <button id="add-user" onClick={() => this.props.addUser()}>
            Add User
          </button>
          <button id="double" onClick={() => this.props.double()}>
            double
          </button>
          <button
            id="show-millionaires"
            onClick={() => this.props.onlyMillionaire()}
          >
            show only millionaires
          </button>
          <button id="sort" onClick={() => this.props.sort()}>
            Sort by Richest
          </button>
          <button
            id="calculate-wealth"
            onClick={() => this.props.totalWealth()}
          >
            calculate entire wealth
          </button>
        </aside>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { addingUsers: state.addingUsers };
};

export default connect(mapStateToProps, {
  addUser: addUser,
  double: double,
  onlyMillionaire: onlyMillionaire,
  totalWealth: totalWealth,
  sort: sort
})(Controller);
