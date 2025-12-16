// Recipe Data
const recipes = [
    {
        name: "Creamy Spaghetti Carbonara",
        desc: "Classic Italian pasta with eggs, cheese, and pancetta.",
        pic: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=1000",
        rating: 4.8,
        reviews: 234,
        prep: "15 min",
        cook: "20 min",
        serves: "4 people",
        level: "Easy",
        type: "Italian",
        ingredients: [
            "400g spaghetti pasta",
            "200g pancetta or guanciale, diced",
            "4 large eggs",
            "100g Pecorino Romano cheese, grated",
            "Black pepper"
        ],
        steps: [
            "Boil water. Cook pasta until al dente.",
            "Cook pancetta in a skillet until crispy.",
            "Whisk eggs, cheese, and pepper in a bowl.",
            "Toss hot pasta with pancetta off heat.",
            "Mix in egg mixture quickly to make sauce."
        ],
        nutrition: {
            calories: "520 kcal",
            protein: "28g",
            carbs: "62g",
            fat: "18g",
            fiber: "3g",
            sodium: "680mg"
        },
        tips: [
            "Use room temp eggs.",
            "Don't scramble the eggs, mix fast!",
            "Save some pasta water."
        ]
    },
    {
        name: "Grilled Chicken Salad",
        desc: "Healthy salad with grilled chicken and avocado.",
        pic: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
        rating: 4.9,
        reviews: 156,
        prep: "20 min",
        cook: "15 min",
        serves: "2 people",
        level: "Medium",
        type: "Healthy",
        ingredients: [
            "2 chicken breasts",
            "Romaine lettuce",
            "1 avocado",
            "Cherry tomatoes",
            "Dressing"
        ],
        steps: [
            "Grill season chicken.",
            "Chop lettuce into a bowl.",
            "Slice chicken and add it.",
            "Add avocado and tomatoes.",
            "Add dressing and toss."
        ],
        nutrition: {
            calories: "320 kcal",
            protein: "35g",
            carbs: "12g",
            fat: "15g",
            fiber: "8g",
            sodium: "420mg"
        },
        tips: [
            "Marinate chicken for flavor.",
            "Use ripe avocados.",
            "Add nuts for crunch."
        ]
    },
    {
        name: "Beef Tacos",
        desc: "Street-style beef tacos.",
        pic: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=1000",
        rating: 4.7,
        reviews: 312,
        prep: "25 min",
        cook: "20 min",
        serves: "6 tacos",
        level: "Easy",
        type: "Mexican",
        ingredients: [
            "500g ground beef",
            "Taco seasoning",
            "12 tortillas",
            "1 onion",
            "Cilantro and lime"
        ],
        steps: [
            "Brown the beef.",
            "Add seasoning and water.",
            "Warm the tortillas.",
            "Fill with beef.",
            "Top with onion and lime."
        ],
        nutrition: {
            calories: "280 kcal",
            protein: "22g",
            carbs: "24g",
            fat: "14g",
            fiber: "3g",
            sodium: "580mg"
        },
        tips: [
            "Toast tortillas first.",
            "Add fresh lime at the end.",
            "Use lean beef."
        ]
    },
    {
        name: "Vegetable Stir Fry",
        desc: "Quick veggies in savory sauce.",
        pic: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=1000",
        rating: 4.5,
        reviews: 89,
        prep: "15 min",
        cook: "10 min",
        serves: "3 people",
        level: "Easy",
        type: "Asian",
        ingredients: [
            "Broccoli",
            "2 carrots",
            "Red pepper",
            "Soy sauce, ginger",
            "Sesame seeds"
        ],
        steps: [
            "Heat oil in wok.",
            "Cook carrots and broccoli.",
            "Stir fry 3 mins.",
            "Add peppers and sauce.",
            "Serve with seeds."
        ],
        nutrition: {
            calories: "210 kcal",
            protein: "8g",
            carbs: "28g",
            fat: "9g",
            fiber: "6g",
            sodium: "650mg"
        },
        tips: [
            "Cut veggies same size.",
            "Hot pan is key.",
            "Don't overcook."
        ]
    },
    {
        name: "Margherita Pizza",
        desc: "Classic pizza with basil.",
        pic: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1000",
        rating: 4.9,
        reviews: 420,
        prep: "20 min",
        cook: "15 min",
        serves: "2 pizzas",
        level: "Medium",
        type: "Italian",
        ingredients: [
            "Dough",
            "Tomato sauce",
            "Mozzarella",
            "Basil",
            "Olive oil"
        ],
        steps: [
            "Oven to 450°F.",
            "Roll dough.",
            "Add sauce and cheese.",
            "Bake 10-12 mins.",
            "Add basil."
        ],
        nutrition: {
            calories: "450 kcal",
            protein: "18g",
            carbs: "52g",
            fat: "16g",
            fiber: "2g",
            sodium: "720mg"
        },
        tips: [
            "Use a pizza stone.",
            "Not too much sauce.",
            "Basil goes on last."
        ]
    },
    {
        name: "French Onion Soup",
        desc: "Beef broth with onions and cheese.",
        pic: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000",
        rating: 4.7,
        reviews: 267,
        prep: "15 min",
        cook: "60 min",
        serves: "4 people",
        level: "Intermediate",
        type: "Mediterranean",
        ingredients: [
            "4 onions",
            "Butter",
            "Beef broth",
            "White wine",
            "Bay leaves, thyme",
            "Bread",
            "Gruyère cheese"
        ],
        steps: [
            "Caramelize onions in butter (40 mins).",
            "Add wine and scrape pot.",
            "Add broth and herbs. Simmer 20 mins.",
            "Toast bread.",
            "Put soup in bowl, top with bread and cheese.",
            "Broil until bubbly."
        ],
        nutrition: {
            calories: "380 kcal",
            protein: "18g",
            carbs: "36g",
            fat: "18g",
            fiber: "4g",
            sodium: "980mg"
        },
        tips: [
            "Don't rush the onions.",
            "Good broth matters.",
            "Watch the broiler!"
        ]
    },
    {
        name: "Greek Moussaka",
        desc: "Eggplant and lamb casserole.",
        pic: "https://media-assets.lacucinaitaliana.it/photos/68a84538ae2bd01838350111/16:9/w_2560%2Cc_limit/2196166150",
        rating: 4.8,
        reviews: 234,
        prep: "30 min",
        cook: "60 min",
        serves: "4 people",
        level: "Intermediate",
        type: "Mediterranean",
        ingredients: [
            "3 eggplants",
            "Ground lamb",
            "Canned tomatoes",
            "Onion, garlic",
            "Béchamel sauce",
            "Parmesan",
            "Spices",
            "Olive oil"
        ],
        steps: [
            "Salt and rest eggplant.",
            "Grill eggplant slices.",
            "Cook meat sauce.",
            "Oven 350°F.",
            "Layer eggplant and meat. Top with béchamel."
        ],
        nutrition: {
            calories: "580 kcal",
            protein: "36g",
            carbs: "32g",
            fat: "32g",
            fiber: "8g",
            sodium: "820mg"
        },
        tips: [
            "Salt removes bitterness.",
            "Let it rest before serving.",
            "Can use beef."
        ]
    }
];

// Helper to pick random
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function displayMeal(meal) {
    // Fill in the basics
    document.getElementById('meal-img').src = meal.pic;
    document.getElementById('meal-title').innerText = meal.name;
    document.getElementById('meal-desc').innerText = meal.desc;
    document.getElementById('rating-val').innerText = meal.rating;
    
    // Set the times
    document.getElementById('prep-time').innerText = meal.prep;
    document.getElementById('cook-time').innerText = meal.cook;
    document.getElementById('servings').innerText = meal.serves;
    
    // Check if it's a long recipe
    let pTime = parseInt(meal.prep);
    let cTime = parseInt(meal.cook);
    
    if ((pTime + cTime) > 45) {
        document.getElementById('time-warning').classList.remove('d-none');
    } else {
        document.getElementById('time-warning').classList.add('d-none');
    }
    
    // Tags
    document.getElementById('difficulty').innerText = meal.level;
    document.getElementById('category').innerText = meal.type;

    // List ingredients
    let ingList = document.getElementById('ingredients-list');
    ingList.innerHTML = ''; // clear old
    
    meal.ingredients.forEach((ing, i) => {
        let delay = i * 0.1;
        ingList.innerHTML += `
            <li class="d-flex align-items-start fade-in" style="animation-delay: ${delay}s">
                <span class="ingredient-number me-3">${i + 1}</span>
                <span>${ing}</span>
            </li>
        `;
    });

    // List steps
    let stepList = document.getElementById('instructions-list');
    stepList.innerHTML = '';
    
    meal.steps.forEach((step, i) => {
        let delay = i * 0.1;
        stepList.innerHTML += `
            <div class="d-flex align-items-start fade-in" style="animation-delay: ${delay}s">
                <div class="instruction-step me-3">${i + 1}</div>
                <div class="pt-2 text-muted">${step}</div>
            </div>
        `;
    });

    // Nutrition cards
    let nutList = document.getElementById('nutrition-list');
    nutList.innerHTML = '';
    
    // config for icons
    const icons = {
        calories: { icon: 'fa-fire', color: 'text-orange', bg: 'bg-orange-subtle' },
        protein: { icon: 'fa-dumbbell', color: 'text-primary', bg: 'bg-primary-subtle' },
        carbs: { icon: 'fa-wheat-awn', color: 'text-warning', bg: 'bg-warning-subtle' },
        fat: { icon: 'fa-droplet', color: 'text-danger', bg: 'bg-danger-subtle' },
        fiber: { icon: 'fa-seedling', color: 'text-success', bg: 'bg-success-subtle' },
        sodium: { icon: 'fa-cube', color: 'text-info', bg: 'bg-info-subtle' }
    };

    let delay = 0;
    // Loop through nutrition object
    for (let key in meal.nutrition) {
        let val = meal.nutrition[key];
        let style = icons[key];
        let label = key.charAt(0).toUpperCase() + key.slice(1); // capitalize
        
        nutList.innerHTML += `
            <div class="col-6 fade-in" style="animation-delay: ${delay}s">
                <div class="d-flex align-items-center justify-content-between p-3 bg-light rounded-4 h-100">
                    <div class="d-flex align-items-center gap-3">
                        <div class="rounded-3 p-2 ${style.bg} d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                            <i class="fa-solid ${style.icon} ${style.color}"></i>
                        </div>
                        <span class="text-muted fw-medium small d-none d-sm-inline">${label}</span>
                        <span class="text-muted fw-medium small d-sm-none">${label.substring(0,3)}</span>
                    </div>
                    <span class="fw-bold">${val}</span>
                </div>
            </div>
        `;
        delay += 0.05;
    }

    // Tips section
    let tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = '';
    
    meal.tips.forEach((tip, i) => {
        tipsList.innerHTML += `
            <li class="p-3 bg-warning-subtle rounded-3 border-start border-4 border-warning fade-in" style="animation-delay: ${i * 0.1}s">
                <div class="d-flex align-items-start gap-3">
                    <i class="fa-solid fa-check-circle text-warning mt-1 fs-5"></i>
                    <span class="text-dark-emphasis">${tip}</span>
                </div>
            </li>
        `;
    });
}

// Button click
document.getElementById('new-meal-btn').addEventListener('click', function() {
    let m = pickRandom(recipes);
    displayMeal(m);
    
    // reset tab
    let t = document.querySelector('#recipeTab button[data-bs-target="#ingredients-content"]');
    let bsTab = new bootstrap.Tab(t);
    bsTab.show();
});

// Start
window.addEventListener('load', function() {
    let m = pickRandom(recipes);
    displayMeal(m);
});
