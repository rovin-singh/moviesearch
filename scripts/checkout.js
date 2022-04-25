// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletAmount=Number(JSON.parse(localStorage.getItem("amount"))||0);
console.log(typeof walletAmount);
function showAmount(){
    let h1=document.createElement("h1");
    h1.innerText="Wallet Amount:"+walletAmount;
    document.getElementById("wallet_div").append(h1);
  }
showAmount();
showBookedMovie();
function showBookedMovie(){
    let bookedMovie=JSON.parse(localStorage.getItem("movie"));
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.src=bookedMovie.Poster;
    let title=document.createElement("h5");
    title.innerText=bookedMovie.Title;
    let p1=document.createElement("p");
    p1.innerText=bookedMovie.Released;
    div.append(image,title,p1);
    document.getElementById("movie").append(div);
}
function bookingFunction(){
    let no_of_seat=document.getElementById("number_of_seats").value;
    let a=Number(no_of_seat);
    let BookedAmount=a*100;
   if(BookedAmount<=walletAmount){
       alert("Booking Successfull !");
       localStorage.setItem("amount",JSON.stringify(walletAmount-BookedAmount));
       window.location.reload();
   }
   else{
       alert("Insufficient Balance !")
   }
}
