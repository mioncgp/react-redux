import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";

const CartContainer = ({ users = [], total, health }) => {
  if (users.length === 0) {
    return (
      <section className="cart ">
        {/* cart header */}
        <header>
          <h2 style={{ color: "yellow", marginTop: "30%" }}>
            Your Robots Army
          </h2>
          <h3 className="empty-cart" style={{ color: "yellow" }}>
            is currently empty
          </h3>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <div className="cart-total">
          <h4 className="total-title">
            Total Robots <span className="total-number">{total}</span>
          </h4>
        </div>
        <hr></hr>
        <div className="cart-total">
          <h4 className="total-title">
            Total Health of Army <span className="total-number">{health}</span>
          </h4>
        </div>
      </header>
      {/* cart items */}
      <article className="flex-container">
        {users.map((user) => {
          return <CartItem key={user.id} {...user} />;
        })}
      </article>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { users, total, health } = state;
  return {
    users,
    total,
    health,
  };
};

export default connect(mapStateToProps)(CartContainer);
