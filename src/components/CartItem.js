import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { REMOVE, INCREASE, DECREASE } from "../redux/actions";

const element = <FontAwesomeIcon icon={faHeart} />;

const CartItem = ({
  id,
  username,
  health,
  remove,
  increase,
  decrease,
  amount,
}) => {
  return (
    <div className="cart-item">
      <img src={`https://robohash.org/${id}`} alt={username} />
      <div>
        <h4 className="username">{username}</h4>
        <h4 className="item-price">
          <div className="health">{element}</div>
          <div className="health-num">{health}</div>
        </h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>
          X
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount" style={{ fontSize: "2rem", color: "purple" }}>
          {amount}
        </p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id: ownProps.id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id: id } }),
    decrease: () =>
      dispatch({ type: DECREASE, payload: { id: id, amount: amount } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
