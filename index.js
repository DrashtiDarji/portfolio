let navStatus =false
function toggleNav(){
    if(navStatus ==false){
        document.getElementById("nav_ul").style.height="auto";
        navStatus=true;
    }
    else{
        document.getElementById("nav_ul").style.height="0px";
        navStatus=false;
    }
}