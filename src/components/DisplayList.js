import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

class DisplayList extends Component {
  getUser() {
    //console.log(this.props.addingUsers);
    //const { name, money } = this.props.addingUsers;
    return this.props.addingUsers.map((user, idx) => {
      return (
        <div key={idx} className="person__item">
          <strong>{user.name}</strong>
          {user.money}
        </div>
      );
    });
  }

  render() {
    this.getUser();
    return (
      <Fragment>
        <main id="main">
          <h2>
            <strong>Person</strong>Wealth
          </h2>
          <div className="person">{this.getUser()}</div>
        </main>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  //console.log(state);
  return { addingUsers: state.addingUsers };
};
export default connect(mapStateToProps)(DisplayList);
