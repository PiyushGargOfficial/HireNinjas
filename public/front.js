window.addEventListener('load', init);

function init() {
    bindEvents();
}

function bindEvents() {
    document.getElementById("hire").addEventListener('click', getNinjaList);
}


function getNinjaList() {
    var latitude = document.getElementById('latN').value;
    var longitude = document.getElementById('lngN').value;
    var latd = latitude;
    var lngd = longitude;

    var pr = fetch(`http://localhost:1234/api/ninjas?lat=${latd}&lng=${lngd}`, {
        method: 'GET'
    });
    pr.then(res => {
        res.json().then(data => {
            var ninjaList = data;
            if (ninjaList.length == 0) {
                document.getElementById("ninjaList").innerText = "Sorry! No Ninjas available in this region...";
            } else {
                document.getElementById("ninjaList").innerText = "";
                for (ninja in ninjaList) {
                    createNinjas(ninjaList[ninja]);
                }
            }
        }).catch(err => console.log(err))
    }).catch(error => console.log(error));
}

function createNinjas(ninja) {
    var allNinja = document.getElementById("ninjaList");

    var ninjaDiv = document.createElement('div');
    ninjaDiv.className = "ninjaDiv";

    var nameNinja = document.createElement('div');
    nameNinja.innerText = "NAME : " + ninja.name;

    var rankNinja = document.createElement('div');
    rankNinja.innerText = "RANK : " + ninja.rank;

    var avalNinja = document.createElement('div');
    avalNinja.innerText = "AVAILABLE : " + ninja.available;

    var disNinja = document.createElement('div');
    disNinja.innerText = "DISTANCE : " + Math.floor(ninja.dis / 1000) + "km";

    ninjaDiv.appendChild(nameNinja);
    ninjaDiv.appendChild(rankNinja);
    ninjaDiv.appendChild(avalNinja);
    ninjaDiv.appendChild(disNinja);


    allNinja.appendChild(ninjaDiv);

}