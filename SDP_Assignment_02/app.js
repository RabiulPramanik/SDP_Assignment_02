const loadAllPlayer = () =>{
    fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=')
        .then(res=>res.json())
        .then(data=>{
            DisplayAllPlayer(data.player);
    })
}

const loadOnePlayer = (player_name) =>{
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${player_name}`)
        .then(res=>res.json())
        .then(data=>{
            const This_player = data.player;
            const left_box = document.getElementById("left-bar");
            This_player.forEach(player => {
                const div = document.createElement("div");
                div.classList.add("player-card")
                if(player.strDescriptionEN==null){
                    player.strDescriptionEN='No Description';
                }
                if(player.strThumb==null){
                    player.strThumb = player.strCutout;
                }
                div.innerHTML = `
                    <img class="player-img" src=${player.strThumb} alt="">
                    <h1>${player.strPlayer}</h1>
                    <h6>Nationality: ${player.strNationality}</h6>
                    <h6>Team: ${player.strTeam}</h6>
                    <h6>Sports: ${player.strSport}</h6>
                    <h6>Salary: ${player.strWage}</h6>
                    <h6>Gender: ${player.strGender}</h6>
                    <p>${player.strDescriptionEN.slice(0,70)}</p>
                    <p class="link-box">
                        <a href="X.com"><i class="fa-brands fa-facebook fa-2xl"></i></a>
                        <a href="X.com"><i class="fa-brands fa-twitter fa-2xl"></i></a>
                    </p>
                    <p>
                        <button id="hendleAdd1" class="hendleAdd1" onclick= "Add_to_card('${player.strPlayer}')">Add to card</button>
                        <button type="button" id="hendleAdd1" class="hendleAdd1" onclick = "AllInformation('${player.idPlayer}')" data-toggle="modal" data-target="#myModal">Ditails</button>
                    </p>
                `
                left_box.appendChild(div)
            });
                
    });
}
const DisplayAllPlayer = (players) =>{
    const left_box = document.getElementById("left-bar");
    players.forEach(player => {
        const div = document.createElement("div");
        div.classList.add("player-card")
        if(player.strDescriptionEN==null){
            player.strDescriptionEN='No Description';
        }
        if(player.strThumb==null){
            player.strThumb = player.strCutout;
        }
        div.innerHTML = `
            <img class="player-img" src=${player.strThumb} alt="">
            <h1>${player.strPlayer}</h1>
            <h6>Nationality: ${player.strNationality}</h3>
            <h6>Team: ${player.strTeam}</h6>
            <h6>Sports: ${player.strSport}</h6>
            <h6>Salary: ${player.strWage}</h6>
            <h6>Gender: ${player.strGender}</h6>
            <p>${player.strDescriptionEN.slice(0,70)}</p>
            <p>
                <a href="X.com"><i class="fa-brands fa-facebook fa-2xl"></i></a>
                <a href="X.com"><i class="fa-brands fa-twitter fa-2xl"></i></a>
            </p>
            <p>
                <button id="hendleAdd1" class="hendleAdd1" onclick= "Add_to_card('${player.strPlayer}')">Add to card</button>
                <button type="button" id="hendleAdd1" class="hendleAdd1" onclick = "AllInformation('${player.idPlayer}')" data-toggle="modal" data-target="#myModal">Ditails</button>
            </p>
        `
        left_box.appendChild(div)
    });
}

document.getElementById("hendleAdd").addEventListener('click',(event) =>{    
    const elements = document.getElementsByClassName("player-card");
            while (elements.length > 0) {
                elements[0].remove();
            }
    const inputValue = document.getElementById("search-box").value;
    loadOnePlayer(inputValue);
});


let cnt_player = 0;
let player_list = [];
const Add_to_card = (player_name) =>{
    cnt_player++;
    if(cnt_player <= 11){
        if(player_list.includes(player_name)){
            alert('All Ready select this!');
            cnt_player--;
        }
        else{
            player_list.push(player_name);
            const buttom_box = document.getElementById("buttom-bar");
            const h3 = document.createElement("h3");
            h3.innerText = `
                ${cnt_player}. ${player_name}
            `
            buttom_box.appendChild(h3)
    
            const top_box = document.getElementById("top-bar");
            top_box.innerHTML = `
                <h3>Total selecet: ${cnt_player}</h3>
                <h3>Can You selecet: ${11-cnt_player}</h3>
            `
        }
    }
    else{
        cnt_player--;
        alert('You can only select 11 Player!')
    }

}

const AllInformation = (playerId) =>{
    const elements = document.getElementsByClassName("modal-card");
            while (elements.length > 0) {
                elements[0].remove();
            }
    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${playerId}`)
        .then(res=>res.json())
        .then(data=>{
        const the_player = data.players;
        const title_box = document.getElementById("modal-title");
        title_box.innerText = `All Information for ${the_player[0].strPlayer} !`
        
        const body_modal = document.getElementById("modal-body");
        const div = document.createElement("div");
        div.classList.add("modal-card");
            div.innerHTML = `
                <img class="player-img" src=${the_player[0].strThumb} alt="">
                <h1>${the_player[0].strPlayer}</h1>
                <h6>Nationality: ${the_player[0].strNationality}</h3>
                <h6>Team: ${the_player[0].strTeam}</h6>
                <h6>Sports: ${the_player[0].strSport}</h6>
                <h6>Salary: ${the_player[0].strWage}</h6>
                <h6>Gender: ${the_player[0].strGender}</h6>
                <p>${the_player[0].strDescriptionEN}</p>
                <p>
                    <a href="X.com"><i class="fa-brands fa-facebook fa-2xl"></i></a>
                    <a href="X.com"><i class="fa-brands fa-twitter fa-2xl"></i></a>
                </p>
                
            `
        body_modal.appendChild(div);
    });
}
loadAllPlayer();