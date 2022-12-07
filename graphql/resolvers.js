module.exports = {
  Query: {
    getMenu: async (parent, { restaurantId }, { dataSources }) => {
      return dataSources.menuAPI.getMenu(restaurantId);
    },
  },
};
