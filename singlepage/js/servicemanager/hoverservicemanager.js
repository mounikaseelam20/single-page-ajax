function fnshowhover() {
    location.hash = "hover";
}

function fnGethover() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/hover/view/hover.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnshowhover(); };



    oXhr.send();
}