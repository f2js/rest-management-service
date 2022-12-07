const { RESTDataSource } = require("@apollo/datasource-rest");

class menuRESTAPI extends RESTDataSource {
  baseURL = "http://localhost:3000/menu/";

  async getMenu(restaurantId) {
    const { menu } = await this.get(`${restaurantId}`);
    console.log(menu);
    return menu;
  }
}

module.exports = menuRESTAPI;
