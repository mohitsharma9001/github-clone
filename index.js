import navbar  from "./component/navbar.js";

let navDiv = document.getElementById("navbar");

navDiv.innerHTML = navbar();

let searchElem = document.getElementById("search");

let searchInput = searchElem.addEventListener("keypress",featcAndUpdataData);



async function featcAndUpdataData(e){
    try {
        let searchParam = searchElem.value;
       if(e.key == "Enter"){
        let res = await getData(`https://api.github.com/users/${searchParam}`);

        
        let profileImg = document.getElementById("profile-img");
        profileImg.src = res.avatar_url

        displayData(data);
       }
     
    } catch (error) {
        console.log(error)
    }
}

const getData = async (url)=>{
    try {
        let res = await fetch(url)
        let data = await res.json();

        return data;
    } catch (error) {
        console.log(error)
    }
}

// function displayData(data){
//     data.forEach(repos => {
//         let box = document.createElement("div");

        
//     });
// }