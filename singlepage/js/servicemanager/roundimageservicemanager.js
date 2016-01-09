function fnshowroundimage() {
    location.hash = "roundimage";
}

function fnGetroundimage() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/roundimage/view/roundimage.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnshowroundimage()  };



    oXhr.send();
}