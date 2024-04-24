var carData = [
    {'img': '1963FordGalaxie500.jpg', 'name': '1963 Ford Galaxie 500'},
    {'img': '1967MercuryCougarCumberlandBeige.jpg', 'name': '1967 Mercury Cougar (in appealing Cumberland Beige)'},
    {'img': '1968MercuryMonterey.jpg', 'name': '1968 Mercury Monterey'},
    {'img': '1961PlymouthFury.jpg', 'name': '1961 Plymouth Fury (Blue Beauty!)'}
]

function carGenerator(){
    const image = document.getElementById("classiccarpic");
    const caption = document.getElementById("classiccarcaption");
    const ind = Math.floor(Math.random()*carData.length);
    var thisCar = carData[ind];
    var folder = "assets/classic-cars/";
    image.src = folder + thisCar['img'];
    caption.innerText = thisCar['name'];
}
