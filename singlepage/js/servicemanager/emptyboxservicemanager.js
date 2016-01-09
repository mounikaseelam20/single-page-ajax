function fnshowemptybox() {
    location.hash = "emptybox";
}

function fnGetemptybox() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/emptybox/view/emptybox.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
        fnshowemptybox();
    };



    oXhr.send();
}
