// let foods = ['apple','banna', 'burger', 'khinkali', 'tolma'];



function submitFoodNameData(){
    let foodsName = document.getElementById('foodsName').value;
    foodsName = foodsName.split(', ');

    let foodsHealthData = foodsName.map(food => food + ' healthy');

    document.getElementById('result').innerHTML = foodsHealthData.join('<br>');
}


// aq vqeni ise rom yvela sachmelze jansags utitebs :/ 
