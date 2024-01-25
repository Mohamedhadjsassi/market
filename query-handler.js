const urlParams = new URLSearchParams(window.location.search);
const showButton = urlParams.get('test');
test1=true;
if (showButton === 'true') {
 
  window.onload = function () {
    showSpace();
  };
}




  