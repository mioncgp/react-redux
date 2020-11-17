import React from "react";
import { connect } from "react-redux";
import { CLEAR_ROBOTS } from "../redux/actions";

const Navbar = ({ dispatch }) => {
  return (
    <nav>
      <div className="nav-center">
        <h3 className="header-title">Robot Army Redux</h3>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: CLEAR_ROBOTS })}
        >
          Delete All
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Navbar);
