// SNA
const check =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
  };

export default check;
