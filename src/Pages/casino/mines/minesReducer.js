const array = new Array(25).fill(0);

export const minesInitialState = {
  isLoading: false,
  isGameActive: false,
  stake: 5,
  bombs: 3,
  multiplier: 1,
  payout: 0,
  isBusted: false,
  hasCashedout: false,
  minesGame: array,
};

export const MINESACTION = {
  STARTGAME: "startgame",
  CASHOUT: "cashout",
  ISBUSTED: "busted",
  CORRECTPICK: "correctpick",
  UPDATEBOMBS: "updatebombs",
  UPDATESTAKE: "updatestake",
};

export const minesReducer = (state, action) => {
  switch (action.type) {
    case MINESACTION.STARTGAME:
      return {
        ...state,
        isGameActive: true,
        isBusted: false,
        minesGame: action.payload,
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
        isBusted: true,
        isLoading: false,
        isGameActive: false,
        multiplier: 1,
        payout: 0,
        hasCashedout: false,
        minesGame: action.payload,
      };
    case MINESACTION.CORRECTPICK:
      return {
        ...state,
        multiplier: action.multiplier,
        payout: action.payout,
        minesGame: action.payload,
      };
    case MINESACTION.UPDATEBOMBS:
      return {
        ...state,
        bombs: action.bombs,
      };
    case MINESACTION.UPDATESTAKE:
      return {
        ...state,
        stake: action.stake,
      };
  }
};
