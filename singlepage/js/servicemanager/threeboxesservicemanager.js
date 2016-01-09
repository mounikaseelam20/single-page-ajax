function fnshowthreeboxes() {
    location.hash = "threeboxes";
}

function fnGetthreeboxes() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/threeboxes/view/threeboxes.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
        fnshowthreeboxes();
    };



    oXhr.send();
}
