export const minesInitialState = {
  isGameActive: false,
  isBusted: false,
};

export const MINESACTION = {
  STARTGAME: "startgame",
  CASHOUT: "cashout",
  ISBUSTED: "busted",
};

export const minesReducer = (state, action) => {
  switch (action.type) {
    case MINESACTION.STARTGAME:
      return {
        ...state,
        isGameActive: true,
        isBusted: false,
      };
    case MINESACTION.CASHOUT:
      return {
        ...state,
        isGameActive: false,
        isBusted: false,
      };
    case MINESACTION.ISBUSTED:
      return {
        ...state,
        isGameActive: false,
        isBusted: true,
      };
  }
};
