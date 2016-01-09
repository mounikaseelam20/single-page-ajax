function fnshowborderimage() {
    location.hash = "borderimage";
}

function fnGetborderimage() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/borderimage/view/borderimage.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnshowborderimage();  };



    oXhr.send();
}