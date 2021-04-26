import Vue from "vue";
import Vuex from "vuex";
// import products from "../mock/products.json";

Vue.use(Vuex);

const state = {
  ClientId: '',
  CONFIGS: {},
  fees: 0,
  sellerId: 0,
  products: [],
  cart: [],

  cartProductsNames: [],
  cartProductsValues: [],
  cartProductsQtys: [],
};

const getters = {
  ClientId: (state) => state.ClientId,
  CONFIGS: (state) => state.CONFIGS,
  fees: (state) => state.fees,
  sellerId: (state) => state.sellerId,
  products: (state) => state.products,
  cart: (state) => state.cart,
  cartProductsNames: (state) => state.cartProductsNames.join('%3B'),
  cartProductsValues: (state) => state.cartProductsValues.join('%3B'),
  cartProductsQtys: (state) => state.cartProductsQtys.join('%3B')
};

const actions = {
  addClientId({ commit }, ID) {
    commit("setClientId", ID);
  },
  addFees({ commit }, fees) {
    commit("setFees", fees);
  },
  addSellerId({ commit }, id){
    commit("addSellerId", id);
  },
  addProducts({ commit }, products) {
    commit("addProducts", products);
  },
  getProducts({ commit }) {
    commit("getProductData");
  },
  addItemToCart({ commit }, item) {
    commit("addToCart", item);
  },
  removeItemFromCart({ commit }, id) {
    commit("removeFromCart", id);
  },
  addQty({ commit }, id) {
    commit("addQty", id);
  },
  reduceQty({ commit }, id) {
    commit("reduceQty", id);
  },
  emptyCart({ commit }) {
    commit("emptyCart");
  },
  getCartProductName({ commit }){
    commit("getCartProductName");
  },
  getCartProductsValues({ commit }){
    commit("getCartProductsValues");
  },
  getCartProductsQtys({ commit }){
    commit("getCartProductsQtys");
  },
  addConfigs({ commit }, configs){
    commit("setConfigs", configs);
  }
};
const mutations = {
  setFees(state, fees){
    state.fees = fees;
  },
  addSellerId(state, id){
    state.sellerId = id.filter(elem => elem.id).map(elem => elem.id)[0];
  },
  addProducts(state, products){
    state.products = products
  },
  getProductData(state, products) {
    state.products = products;
  },
  addToCart(state, item) {
    const productInCart = state.cart.find((product) => product.id === item.id);
    if (!productInCart) {
      state.cart.push({ ...item, qty: 1 });
    } else {
      productInCart.qty++;
    }
  },
  removeFromCart(state, id) {
    state.cart = state.cart.filter((item) => item.id !== id);
  },
  addQty(state, id) {
    const productInCart = state.cart.find((product) => product.id === id);
    productInCart.qty++;
  },
  reduceQty(state, id) {
    const productInCart = state.cart.find((product) => product.id === id);
    if (productInCart.qty > 1) {
      productInCart.qty--;
    } else {
      state.cart.splice(state.cart.indexOf(productInCart, 1));
    }
  },
  emptyCart(state) {
    state.cart = []
  },
  getCartProductName(state){
    state.cartProductsNames = state.cart.map(function(item){
      return item.title;
    })
  },
  getCartProductsValues(state){
    state.cartProductsValues = state.cart.map(function(item){
      return item.price;
    })
  },
  getCartProductsQtys(state){
    state.cartProductsQtys = state.cart.map(function(item){
      return item.qty;
    })
  },
  setConfigs(state, configs){
    state.CONFIGS = configs;
  },
  setClientId(state, ID){
    state.ClientId = ID
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
