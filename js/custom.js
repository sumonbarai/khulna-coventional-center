
// custom toast create
setTimeout(function() {
    let toast = document.querySelector("#custom-toast");
    toast.style.right= "0px";
},2000);


let close = document.querySelector(".close").onclick = function() {
    document.querySelector("#custom-toast").style.display = "none";
}
