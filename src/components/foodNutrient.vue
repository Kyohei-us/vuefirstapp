<template>
  <div class="get-cal">
    <!-- <Menu itemName="aitemu" /> -->
    <div>{{ msg }}</div>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <!-- <button v-on:click="getFoodId2">get food id</button> -->
    <!-- <p>This is the food id: <span class="results">{{ foodIdResult }}</span></p> -->
    <button v-on:click="getFoodCalorie2">get calorie</button>
    <p>This is the calorie: <span class="results">{{ foodCalorie }}</span> kcal</p>

    <div v-if="items.length > 0">
      <ul id="array-rendering" class="viewItems">
        <li v-for="item in items" v-bind:key="item.name">
          <div class="viewItem">
            <label>{{ item.name }} : {{ item.calorie }} kcal</label>
            <button class="removeFoodItem" v-on:click="removeFoodItem(item)">Destroy</button>
          </div>
        </li>
      </ul>
      <p>Total Calories: {{totalCalories}}</p>
    </div>
    <div v-else>items not long enough.</div>

    <div>to do is: {{ todosList }}</div>
  </div>
</template>

<script>
// import Menu from "./menu.vue";
// import axios from "axios";
// import FoodNutrient from "../assets/js/FoodNutrient"
import MiddleFoodNutrient from "../assets/js/MiddleFoodNutrient"

export default {
  name: "FoodNutrient",
  props: {
    msg: String,
  },
  methods: {
    
    removeFoodItem: function(item){
      this.items.splice(this.items.indexOf(item), 1);
    },

    getFoodId2: async function(){
        const mfn1 = new MiddleFoodNutrient();
        const result = await mfn1.getFoodId(this.message);
        this.foodIdResult = result;
        // console.log("Food id for: " + this.message + " is: " + this.foodIdResult);
    },

    getFoodCalorie2: async function(){
        const mfn1 = new MiddleFoodNutrient();
        const foodId = await mfn1.getFoodId(this.message);
        const result = await mfn1.getFoodCalorie(this.message, foodId);
        this.foodCalorie = result;
        // console.log("Food calorie for: " + this.message + " id is: " + this.foodIdResult +" is: " + this.foodCalorie);
        this.items.push({name: this.message, calorie: this.foodCalorie});
    },

    // getFoodId: function() {
    //   // console.log(this.message);
    //   axios
    //     .get(
    //       "https://cors-anywhere.herokuapp.com/" +
    //         "https://api.nal.usda.gov/fdc/v1/foods/search?query=" +
    //         this.message +
    //         "&api_key=73zPhgef5LpbdTewfnctHEenbJOl5azI7KQB9vBk",
    //       {
    //         headers: {
    //           "Access-Control-Allow-Origin": "*",
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       console.log(response);
    //       this.foodIdResult = response.data.foods[0].fdcId;
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },

    // getCalorie: function() {
    //   // console.log(this.message);
    //   axios
    //     .get(
    //       "https://cors-anywhere.herokuapp.com/" +
    //         "https://api.nal.usda.gov/fdc/v1/food/" +
    //         this.foodIdResult +
    //         "?api_key=73zPhgef5LpbdTewfnctHEenbJOl5azI7KQB9vBk",
    //       {
    //         headers: {
    //           "Access-Control-Allow-Origin": "*",
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       console.log(response);
    //       var nutrientsArr = response.data.foodNutrients;
    //       var energyIndex = 0

    //         for (var i = 0,len = nutrientsArr.length; i < len; i++) {
    //             if ( nutrientsArr[i].nutrient.name === "Energy" ) { // strict equality test
    //                 energyIndex = i;
    //             }
    //         }

    //         this.foodCalorie = nutrientsArr[energyIndex].nutrient.number;

    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
  },
  computed: {
      totalCalories: function(){
        var total = 0;
        this.items.forEach(item => {
          if (typeof(item.calorie) != "number"){
            item.calorie = parseInt(item.calorie);
          }
          total += item.calorie;
        });
          return total;
      }
  },
  components: {
    // Menu,
  },
  data() {
    return {
      todosList: null,
      message: "peach",
      foodNutrientsOb: [],
      foodIdResult: null,
      foodCalorie: "",
      items: [],
    };
  },
  // mounted() {
  //   axios
  //     .get(
  //       "https://cors-anywhere.herokuapp.com/" +
  //         "https://lyricsapiforme.herokuapp.com/?data=" +
  //         "adhd",
  //       {
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       this.todosList = response.data.data;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.get-cal {
  align-items: center;
}
span.results {
  color: #0a4fce;
}
.viewItems {
  justify-content: center;
  /* display: flex; */
  align-items: center;
}
.viewItems > li {
  background: #0ab60a;
  margin: 10px 10px;
  display: inline;
  width: 200px;
}
.viewItems > ul {
  display: block;
}
.viewItem > *{
  margin: 5px;
}
</style>
