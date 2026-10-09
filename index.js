var recipe = document.getElementById("recipe-card");
var recipeDesc = document.getElementById("recipe-desc");
var ingredients =document.getElementById("ingredients");
var img ;

var meals=[
{ recipe:'Vegetable Curry',
recipeDesc:`Hearty vegetarian curry with coconut milk `,
ingredients: [
 "potatoes, cubed ",
"cauliflower, florets",
 "carrots, sliced",
"can chickpeas",
"400ml coconut milk",
"tablespoons curry powder",
"onion, diced" ,
"cloves garlic, minced",
"Fresh spinach " ] ,
instraction:[
"Add potatoes and carrots, cook for 5 minutes." ,
"Pour in coconut milk and 1 cup water. Bring to simmer." ,
"Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
"Stir in fresh spinach and cook until wilted..",
"Serve hot over basmati rice or with naan bread."
],
nutrition:{
  Calories:"380 kcal" ,
  Carbohydrates:"48g",
  Fiber :"12g",
  Protein:"14g",
  Fat:"16g",
  Sodium:"480mg"
},
tips:[
"Add vegetables in order of cooking time needed" ,
"Adjust curry powder amount to taste" ,
"Use full-fat coconut milk for creamier curry" ,
"Add protein like tofu or paneer if desired",
],
img:"./img/photo-1585032226651-759b368d7246.avif" ,
text:{
PrepTime:"20 min",
CookTime:"30 min",
Servings:"4 people"
} ,},


 {recipe:'BBQ Pulled Pork',
    recipeDesc:`Slow-cooked tender pork in smoky barbecue sauce `,
ingredients:[
"1kg pork shoulder" ,
 "1 cup BBQ sauce " ,
 "1/2 cup apple cider vinegar" ,
 "2 tablespoons brown sugar " ,
 "1 tablespoon paprika" ,
 "1 tablespoon garlic powder",
 " Burger buns " ,
 "Coleslaw for serving" ,
 "Try Another R " ],
 instraction:[
"Mix tamarind paste, fish sauce, and palm sugar to make the sauce." ,
"Heat wok over high heat. Scramble eggs and set aside." ,
"Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
"Add scrambled eggs and bean sprouts. Toss everything together.",
"Serve topped with crushed peanuts, lime wedges, and cilantro."
],
nutrition:{
  Calories:"540 kcal" ,
  Carbohydrates:"62g",
  Fiber :"4g",
  Protein:"32g",
  Fat:"16g",
  Sodium:"1120mg"
},
tips:[
"Don't oversoak noodles or they'll be mushy" ,
"Cook on high heat for authentic wok flavor" ,
"Balance sweet, sour, and salty flavors" ,
"Prepare all ingredients before starting to cook",
],
img:"./img/photo-1529692236671-f1f6cf9683ba.avif" ,
text:{
PrepTime:"15 min" ,
CookTime:"35 min",
Servings:"4 people"} },


{ recipe:'Pad Thai',
    recipeDesc:`Popular Thai stir-fried noodles with shrimp and peanuts`,
ingredients:[
"200g rice noodles" ,
"200g shrimp, peeled" ,
"2 eggs" ,
"3 tablespoons tamarind paste" ,
"2 tablespoons fish sauce" ,
"1 tablespoon palm sugar" ,
"Bean sprouts" ,
"Crushed peanuts" ,
"Lime wedges and cilantro "],
instraction:[
"Mix tamarind paste, fish sauce, and palm sugar to make the sauce." ,
"Heat wok over high heat. Scramble eggs and set aside." ,
"Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
"Add scrambled eggs and bean sprouts. Toss everything together.",
"Serve topped with crushed peanuts, lime wedges, and cilantro."
],
nutrition:{
  Calories:"500 kcal" ,
  Carbohydrates:"40g",
  Fiber :"9g",
  Protein:"30g",
  Fat:"22g",
  Sodium:"1120mg"
},
tips:[
"Don't oversoak noodles or they'll be mushy" ,
"Cook on high heat for authentic wok flavor" ,
"Balance sweet, sour, and salty flavors" ,
"Prepare all ingredients before starting to cook",
],
img:"./img/photo-1559314809-0d155014e29e.avif" ,
text:{
PrepTime:"25 min",
CookTime:"30 min",
Servings:"5 people",
} },

{ recipe:'Creamy Spaghetti Carbonara',
    recipeDesc:`A classic Italian pasta dish with eggs, cheese, and pancetta`,
ingredients:[
"400g spaghetti pasta" ,
"200g pancetta or guanciale, diced" ,
"4 large eggs" ,
"100g Pecorino Romano cheese, grated" ,
"50g Parmesan cheese, grated" ,
"Freshly ground black pepper" ,
"Salt for pasta water" ,
],
instraction:[
"Add potatoes and carrots, cook for 5 minutes." ,
"Pour in coconut milk and 1 cup water. Bring to simmer." ,
"Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
"Stir in fresh spinach and cook until wilted..",
"Serve hot over basmati rice or with naan bread."
],
nutrition:{
  Calories:"560 kcal" ,
  Carbohydrates:"60g",
  Fiber :"10g",
  Protein:"15g",
  Fat:"16g",
  Sodium:"480mg"
},
tips:[
"Add vegetables in order of cooking time needed" ,
"Adjust curry powder amount to taste" ,
"Use full-fat coconut milk for creamier curry" ,
"Add protein like tofu or paneer if desired",
],
img:"./img/photo-1612874742237-6526221588e3.avif"
},
{ recipe:'Greek Moussaka',
    recipeDesc:`Traditional layered eggplant casserole with lamb`,
ingredients:[
"3 large eggplants, sliced" ,
"500g ground lamb" ,
"400g canned tomatoes" ,
"1 onion, diced" ,
"3 cloves garlic, minced" ,
"500ml béchamel sauce" ,
"100g parmesan cheese" ,
"Cinnamon and oregano" ,
"Olive oil"],
instraction:[
"Add potatoes and carrots, cook for 5 minutes." ,
"Pour in coconut milk and 1 cup water. Bring to simmer." ,
"Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
"Stir in fresh spinach and cook until wilted..",
"Serve hot over basmati rice or with naan bread."
],
nutrition:{
  Calories:"300 kcal" ,
  Carbohydrates:"48g",
  Fiber :"20g",
  Protein:"15g",
  Fat:"10g",
  Sodium:"200mg"
},
tips:[
"Add vegetables in order of cooking time needed" ,
"Adjust curry powder amount to taste" ,
"Use full-fat coconut milk for creamier curry" ,
"Add protein like tofu or paneer if desired",
],
img:"img/photo-1601050690597-df0568f70950.avif",
text:{
PrepTime:"15 min",
CookTime:"40 min",
Servings:"5 people"
}, }

]

function random(){
    var randomIndex =Math.floor(Math.random()* meals.length);
    return meals[randomIndex];
}

 function recipesDisplay() {
  var meal = random();


let ingredientsHTML = "";

for (let i = 0; i < meal.ingredients.length; i++) {
  ingredientsHTML += `<li> ${meal.ingredients[i]}</li>`;  
 
}

var instHTML = "";

for (let i = 0; i < meal.instraction.length; i++) {
instHTML += `<li> ${meal.instraction[i]}</li>`;  
 
}

  var htmlMarup = `
  <div class="row " id="recipe-card"><!-- IMAGE + OVERLAY -->
<div class="col-lg-6 p-0 image-wrapper" id="#img">
  <img src="${meal.img}" alt="Sandwich">

  <div class="info-overlay">
    <div>
      ⏱
      <small> Prep Time</small>
      <strong>${meal.text.PrepTime}</strong>
    </div>
    <div>
      🍳
      <small>CookTime</small>
      <strong>${meal.text.CookTime}</strong>
    </div>
    <div>
      👥
      <small>Servings</small>
      <strong>${meal.text.Servings}</strong>
    </div>
  </div>
</div>

<!-- DETAILS -->
<div class="col-lg-6 p-5">
  <h3 id="#recipe-card">${meal.recipe}</h3>
  <p class="text-muted" id="#recipe-desc">${meal.recipeDesc}</p>

  <ul class="nav nav-tabs mt-3" role="tablist">
    <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#ingredients">Ingredients</button></li>
    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#instructions">Instructions</button></li>
    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#nutrition">Nutrition</button></li>
    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#tips">Chef’s Tips</button></li>
  </ul>

  <div class="tab-content pt-3">
    <div class="tab-pane fade show active" id="ingredients">
      <ol>
${ingredientsHTML}
      </ol>
    </div>
    <div class="tab-pane fade" id="instructions">
    ${instHTML }
    </div>
    <div class="tab-pane fade" id="nutrition">
            <div class="nutrition-card">
              <div class="item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-fire" viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
</svg>
                <span class="label">Calories</span>
                <span class="value">${meal.nutrition.Calories}</span>
              </div>

              <div class="item">
                              <div class="item-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-feather" viewBox="0 0 16 16">
  <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173"/>
</svg></div>
                <span class="label">Carbohydrates</span>
                <span class="value">${meal.nutrition.Carbohydrates}</span>
              </div>

              <div class="item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue"  class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
</svg>
                <span class="label">Protein</span>
                <span class="value">${meal.nutrition.Protein}</span>
              </div>

              <div class="item">
                                <div class="item-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-droplet" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
</svg>
</div>
                <span class="label">Fat</span>
                <span class="value">${meal.nutrition.Fat}</span>
              </div>

              <div class="item">
                           <div class="item-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-leaf" viewBox="0 0 16 16">
  <path d="M1.4 1.7c.216.289.65.84 1.725 1.274 1.093.44 2.884.774 5.834.528l.37-.023c1.823-.06 3.117.598 3.956 1.579C14.16 6.082 14.5 7.41 14.5 8.5c0 .58-.032 1.285-.229 1.997q.198.248.382.54c.756 1.2 1.19 2.563 1.348 3.966a1 1 0 0 1-1.98.198c-.13-.97-.397-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.125-.887-1.89-2.095-2.391-3.383C.16 6.62.16 3.646.509 1.902L.73.806zm-.05 1.39c-.146 1.609-.008 3.809.74 5.728.457 1.17 1.13 2.213 2.079 2.961.942.744 2.185 1.22 3.83 1.221 2.588 0 3.91-.66 4.609-1.445-1.789-2.46-4.121-1.213-6.342-2.68-.74-.488-1.735-1.323-1.844-2.308-.023-.214.237-.274.38-.112 1.4 1.6 3.573 1.757 5.59 2.045 1.227.215 2.21.526 3.033 1.158.058-.39.075-.782.075-1.158 0-.91-.288-1.988-.975-2.792-.626-.732-1.622-1.281-3.167-1.229l-.316.02c-3.05.253-5.01-.08-6.291-.598a5.3 5.3 0 0 1-1.4-.811"/>
</svg></div>
                <span class="label">Fiber</span>
                <span class="value">${meal.nutrition.Fiber}</span>
              </div>

              <div class="item">
                           <div class="item-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="pink" class="bi bi-box-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
</svg></div> 
                <span class="label">Sodium</span>
                <span class="value">${meal.nutrition.Sodium}</span>
              </div>
            </div>
</div>
    <div class="tab-pane fade" id="tips">${meal.tips}</div>
  </div>

  <!-- FIXED BUTTON (NOT TAB RELATED) -->
  <div class="fixed-action">
    <button class="btn btn-custom" onclick="tryAgin()">Try Another Recipe</button>
  </div>

</div>

  </div>
  `;
  recipe.innerHTML =htmlMarup ;
 
  
console.log ("retry")
}

function tryAgin(){
recipesDisplay();
    console.log("try");
} 
    
   

