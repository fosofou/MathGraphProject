window.onload = function(){
var tograph = document.querySelector('.border-button');
if (tograph){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

        tograph.setAttribute('href', "mobile");
    }
  }
}
