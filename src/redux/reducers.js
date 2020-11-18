import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_ROBOTS,
  FETCH_USERS,
} from "./actions";

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_USERS:
      const acc = action.payload.reduce(
        (acc, cur) => {
          acc.total += cur.amount;
          acc.health += cur.health;
          return acc;
        },
        { health: 0, total: 0 }
      );

      return {
        ...state,
        users: action.payload,
        total: acc.total,
        health: acc.health,
      };

    case CLEAR_ROBOTS:
      return { ...state, users: [] };

    case REMOVE:
      let healthRemove;

      let usersRemoved = state.users.filter((user) => {
        if (user.id !== action.payload.id) {
          return user;
        } else {
          healthRemove = user.health;
        }
      });

      return {
        ...state,
        users: usersRemoved,
        health: (state.health -= healthRemove),
        total: (state.total -= 1),
      };

    case INCREASE:
      let health;
      const tempUsers = state.users.map((user) => {
        if (user.id === action.payload.id) {
          health = user.health;
          user = { ...user, amount: user.amount + 1 };
        }
        return user;
      });
      return {
        ...state,
        users: tempUsers,
        total: (state.total += 1),
        health: (state.health += health),
      };

    case DECREASE:
      let healthDec;
      let tempUsersDecrease = [];
      if (action.payload.amount <= 1) {
        tempUsersDecrease = state.users.filter((user) => {
          if (user.id !== action.payload.id) {
            return user;
          } else {
            healthDec = user.health;
          }
        });
      } else {
        tempUsersDecrease = state.users.map((user) => {
          if (user.id === action.payload.id) {
            healthDec = user.health;
            user = { ...user, amount: user.amount - 1 };
          }
          return user;
        });
      }
      return {
        ...state,
        users: tempUsersDecrease,
        total: (state.total -= 1),
        health: (state.health -= healthDec),
      };

    default:
      return state;
  }
}
