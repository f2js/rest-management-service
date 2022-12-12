const { RESTDataSource } = require("@apollo/datasource-rest");
const { GraphQLError } = require("graphql");

class menuRESTAPI extends RESTDataSource {
  constructor(userid, userrole) {
    super();
    this.baseURL = "http://localhost:3001/menu/";
    this.context = { userid, userrole };
  }

  checkRole() {
    if (this.context.userrole != "rest") {
      throw new GraphQLError("User is not a restaurant owner");
    }
  }

  async getMenu(restaurantId) {
    this.checkRole();

    const { menu } = await this.get(`${restaurantId}`);
    return menu;
  }

  async updateMenu(restaurantId, menu) {
    if (this.context.userrole != "rest") {
      throw new GraphQLError("User is not a restaurant owner");
    }

    const { menu: updatedMenu } = await this.put(`${restaurantId}`, {
      body: { menu: menu },
    });
    return updatedMenu;
  }

  async addItemToMenu(restaurantId, item) {
    this.checkRole();

    const { message } = await this.post(`${restaurantId}`, {
      body: { item: item },
    });
    return message;
  }

  async updateMinDeliveryPrice(restaurantId, minDeliveryPrice) {
    this.checkRole();

    const { message } = await this.put(`updateDeliveryPrice/${restaurantId}`, {
      body: { minDeliveryPrice: minDeliveryPrice },
    });
    return message;
  }

  async updateAddress(restaurantId, address) {
    this.checkRole();

    const { message } = await this.put(`updateAddress/${restaurantId}`, {
      body: { address: address },
    });
    return message;
  }
}

module.exports = menuRESTAPI;
