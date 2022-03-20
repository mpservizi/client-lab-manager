export default {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    add() {
      this.count++;
    },
  },
  getters: {
    doppio() {
      return this.count * 2;
    },
  },
};
