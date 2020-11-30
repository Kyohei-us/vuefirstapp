import axios from "axios";

class FoodNutrient {
    constructor(foodName) {
        this.foodName = foodName;
        this.foodId = null;
        this.foodCalorie = null;
    }


    async retrieveFoodId() {

        const result = await axios.get(
          "https://cors-anywhere.herokuapp.com/" +
            "https://api.nal.usda.gov/fdc/v1/foods/search?query=" +
            this.foodName +
            "&api_key=73zPhgef5LpbdTewfnctHEenbJOl5azI7KQB9vBk",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )

        return result;
        // .then((response) => {
        //   console.log(response);
        //   this.foodId = response.data.foods[0].fdcId;
        // //   console.log(this.foodId);
        //   return this.foodId;
        // })
        // .catch(function(error) {
        //   console.log(error);
        // });

    }

    // foodIdGetter(){
    //     console.log(this.foodId);
    //     return this.foodId;
    // }

    async retrieveFoodCalorie(){

        const result = await axios.get(
            "https://cors-anywhere.herokuapp.com/" +
              "https://api.nal.usda.gov/fdc/v1/food/" +
              this.foodId +
              "?api_key=73zPhgef5LpbdTewfnctHEenbJOl5azI7KQB9vBk",
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            }
          )

        return result;

        // var counter = 0;

        // var timer = setInterval(async function () {

        //     console.log("turn no. " + counter);

        //     // if (this.foodId == null) {
        //     //     console.log('food id is null');
        //     // }

        //     if (counter >= 3 || foodIdfake != null) {
        //         clearInterval(timer);
                

        //         // .then((response) => {
        //         //   console.log(response);
        //         //   var nutrientsArr = response.data.foodNutrients;
        //         //   var energyIndex = 0
        
        //         //     for (var i = 0,len = nutrientsArr.length; i < len; i++) {
        //         //         if ( nutrientsArr[i].nutrient.name === "Energy" ) { // strict equality test
        //         //             energyIndex = i;
        //         //         }
        //         //     }
        
        //         //     this.foodCalorie = nutrientsArr[energyIndex].nutrient.number;
        //         //     return this.foodCalorie;
        
        //         // })
        //         // .catch(function(error) {
        //         //   console.log(error);
        //         // });
        //     }   counter++;

        // }, 1000);

    }

}
export default FoodNutrient;