import FoodNutrient from "./FoodNutrient"

class MiddleFoodNutrient{

    fnList = []

    async getFoodId(foodName){
        const fn1 = new FoodNutrient(foodName);
        this.fnList.push(fn1);
        const result = await fn1.retrieveFoodId();
        fn1.foodId = result.data.foods[0].fdcId;
        return fn1.foodId;
    }

    async getFoodCalorie(foodName, foodId){
        const fn1 = new FoodNutrient(foodName);
        fn1.foodId = foodId;
        // console.log(fn1.foodId + " fn1 food id");
        const result = await fn1.retrieveFoodCalorie();
        
        console.log(result);

        var nutrientsArr = result.data.foodNutrients;
        var energyIndex = 0

        for (var i = 0,len = nutrientsArr.length; i < len; i++) {
            if ( nutrientsArr[i].nutrient.name === "Energy" ) { // strict equality test
                energyIndex = i;
            }
        }

        fn1.foodCalorie = nutrientsArr[energyIndex].amount;
        // console.log(fn1.foodCalorie + " food calorie");
        return fn1.foodCalorie;
    }
}
export default MiddleFoodNutrient;