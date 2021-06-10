
window.onload = function(){
  var graph_container = document.getElementById('graph-container')
  graph_container.scrollTop = 1820;
  graph_container.scrollLeft = 1200;
  var height = window.screen.height-135+"px";
  window.scroll(0,130);
  document.getElementsByClassName('main-box')[0].style.height = height;
}

var stat = document.getElementById('stat');
var geom = document.getElementById('geom');
var himath = document.getElementById('himath');
var num = document.getElementById('num');
var chance = document.getElementById('chance');
var math = document.getElementById('math');
var graph_container = document.getElementById('graph-container')

math.onclick = function(){
  graph_container.scrollTop = 1820;
  graph_container.scrollLeft = 1200;

}

stat.onclick = function(){
  graph_container.scrollTop = 700;
  graph_container.scrollLeft = 500;
}

geom.onclick = function(){
  graph_container.scrollTop = 2300;
  graph_container.scrollLeft = 100;
}

num.onclick = function(){
  graph_container.scrollTop = 1400;
  graph_container.scrollLeft = 1700;
}

himath.onclick = function(){
  graph_container.scrollTop = 1900;
  graph_container.scrollLeft = 1850;
}

chance.onclick = function(){
  graph_container.scrollTop = 2300;
  graph_container.scrollLeft = 2470;
}
