
const api="https://www.breakingbadapi.com/api/characters";

async function get(){
    try{
        const response= await fetch(api);
        const data=await response.json();
        printData(data);
    
}catch(e){
console.log("Error: ", e.message)
}
}

function printData(data){
     const header = document.querySelector("#header");
     const content= document.querySelector("#content");

     header.innerHTML += ` <select class="form-control" onchange="getChar(this.value)"> 
     <option> Choose an Actor :)</option>
     ${data.map(m => `<option> ${m.name}</option>`)}
     </select>`
}

async function getChar(name){
    if(name !=='Choose an Actor :)'){
        const res= await fetch(`${api}?name=${name}`);
        const Data= await res.json();

        content.innerHTML = `<h2> ${Data[0].name} (${Data[0].nickname}) </h2>
        <h4> ${Data[0].portrayed}</h4>
        <h5> ${Data[0].birthday}</h5>
        <img  src="${Data[0].img}" width="250">`;
    }else{
        console.log("Wrong");
    }
}

get();

//Object.values(data).map(m => m.name);
//Object.Keys(data).map(m => m.name);
//Object.Entries(data).map(m => m.name);

/*
document.querySelector("#actor").innerHTML = 
`<select>
${ [data].map(actor => `${actor.name}`) }
</select>
`*/
/*document.querySelector("#content h1").innerHTML =  data[0].name ;
document.querySelector("#content h5").innerHTML =  data[0].birthday ;
document.querySelector("#content img").src= data[0].img;*/


/*fetch("https://geo.ipify.org/api/v1?apiKey=at_FltvOZLhNji9wsOHga0QXX0jF0pxo&ipAddress=8.8.8.8").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
})*/