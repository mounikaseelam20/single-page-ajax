function fnshowthreeparas() {
    location.hash = "threeparas";
}

function fnGetthreeparas() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/threeparas/view/threeparas.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnshowthreeparas()  };



    oXhr.send();
}