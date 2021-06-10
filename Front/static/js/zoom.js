var graph_container = document.getElementById('graph-container')
function reset(){
    var myImg = document.getElementById("graph");
    var currWidth = myImg.clientWidth;
    myImg.style.width = 300+'%';
    graph_container.scrollTop = 1820;
    graph_container.scrollLeft = 1200;

}

function zoomin(){
    var myImg = document.getElementById("graph");
    var currWidth = myImg.clientWidth;
    myImg.style.width = (currWidth + 300) + "px";
    graph_container.scrollBy(180,180);
}

function zoomout(){
    var myImg = document.getElementById("graph");
    var currWidth = myImg.clientWidth;
    if(currWidth == 100) return false;
    else{
            myImg.style.width = (currWidth - 300) + "px";
        }
    graph_container.scrollBy(-180,-180);
}
