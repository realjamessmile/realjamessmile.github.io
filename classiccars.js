var carData = [
    {'img': '1963FordGalaxie500.jpg', 'name': '1963 Ford Galaxie 500'},
    {'img': '1967MercuryCougarCumberlandBeige.jpg', 'name': '1967 Mercury Cougar (in appealing Cumberland Beige)'},
    {'img': '1968MercuryMonterey.jpg', 'name': '1968 Mercury Monterey'},
    {'img': '1961PlymouthFury.jpg', 'name': '1961 Plymouth Fury (Blue Beauty!)'},
    {'img': '1947ChryslerTownAndCountry.png', 'name': '1947 Chrysler Town and Country (Youd never guess shes really a city girl!)'},
    {'img': '1962CorvetteRoadster.jpeg', 'name': '1962 Corvette Roadster (Is it getting hot in here?)'},
    {'img': '1968FordLTD.jpg', 'name': '1968 Ford LTD (look at that thing glide)'},
    {'img': '1970Grumman-OlsonKurbmasterJunior.jpg', 'name': '1970 Grumman-Olson Kurbmaster Junior'},
    {'img': '1971DodgeSportsman.jpg', 'name': '1971 Dodge Sportsman'},
    {'img': '1977DaihatsuCharade5door.jpg', 'name': '1977 Daihatsu Charade 5-door'},
    {'img': '1972HondaZ600.jpeg', 'name': '1972 Honda Z600'},
    {'img': '1969CamaroZ28X77.jpeg', 'name': '1969 Camaro Z28 X77'}
    

     
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
