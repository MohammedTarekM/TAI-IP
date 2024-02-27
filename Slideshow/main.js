var counter = 1;

function next(){
    if(counter ==4){
        counter = 1;
    }
    else{
        counter ++;
    }
    document.getElementById("slideshow").src= "images/"+counter+".jpg";
    
}
function previous(){
    if(counter ==1){
        counter = 4;
    }
    else{
        counter --;
    }
    document.getElementById("slideshow").src= "images/"+counter+".jpg";
    
}
setInterval(next,2100)