function fnshowblurtext() {
    location.hash = "blurtext";
}

function fnGetblurtext() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/blurtext/view/blurtext.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnshowblurtext()  };



    oXhr.send();
}