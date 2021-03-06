import Vue from "vue";
import Router from "vue-router";
import route111 from "./components/route111";
import HelloWorld from "./components/HelloWorld";
import foodNutrient from "./components/foodNutrient"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorld,
    },
    {
      path: "/route111",
      name: "route111",
      component: route111,
    },
    {
      path: "/foodNutrient",
      name: "foodNutrient",
      component: foodNutrient,
    }
  ],
});
