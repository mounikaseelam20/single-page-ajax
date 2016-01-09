function fnshowonepara() {
    location.hash = "onepara";
}

function fnGetonepara() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/onepara/view/onepara.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnshowonepara()  };



    oXhr.send();
}