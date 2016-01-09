function fnshowabout() {
    location.hash = "about";
}

function fnGetabout() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/about/view/about.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnshowabout()  };



    oXhr.send();
}