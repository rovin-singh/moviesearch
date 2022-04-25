// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let movies_div=document.getElementById("movies");
let id;
let walletAmount=JSON.parse(localStorage.getItem("amount"))||0;
function showAmount(){
    let h1=document.createElement("h1");
    h1.innerText="Wallet Amount:"+walletAmount;
    document.getElementById("wallet_div").append(h1);
  }
showAmount();


async function searchMovies(){
    let q=document.getElementById("search").value;
    try{
        const res= await fetch(`https://www.omdbapi.com/?apikey=1e8aad28&t=${q}`);
        const data=await res.json();
        return data;
    }
    catch(err){
        console.log("err:"+err);
    }
}

function appendData(data){
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.src=data.Poster;
    let title=document.createElement("h5");
     title.innerText=data.Title;
    let btn=document.createElement("button");
    btn.innerText="Book Now";
    btn.setAttribute("class","book_now");
    btn.addEventListener("click",function(){
        bookNowFunction(data);
    });
    div.append(image,title,btn);
    movies_div.append(div);
}
async function main(){
    let data=await searchMovies();
    appendData(data);
}
function debouncing(func,delay){
    if(id){
        clearTimeout(id);
    }
   id=setTimeout(function (){
       func();
    },delay);
 } 


function  bookNowFunction(data){
    localStorage.setItem("movie",JSON.stringify(data));
    window.location.href="checkout.html";
}