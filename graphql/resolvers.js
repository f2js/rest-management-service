module.exports = {
  Query: {
    getMenu: async (parent, { restaurantId }, { dataSources }) => {
      return dataSources.menuAPI.getMenu(restaurantId);
    },
  },
  Mutation: {
    updateMenu: async (parent, { restaurantId, menu }, { dataSources }) => {
      return dataSources.menuAPI.updateMenu(restaurantId, menu);
    },
    addItemToMenu: async (parent, { restaurantId, item }, { dataSources }) => {
      return dataSources.menuAPI.addItemToMenu(restaurantId, item);
    },
    updateMinDeliveryPrice: async (
      parent,
      { restaurantId, minDeliveryPrice },
      { dataSources }
    ) => {
      return dataSources.menuAPI.updateMinDeliveryPrice(
        restaurantId,
        minDeliveryPrice
      );
    },
    updateAddress: async (
      parent,
      { restaurantId, address },
      { dataSources }
    ) => {
      return dataSources.menuAPI.updateAddress(restaurantId, address);
    },
  },
};
