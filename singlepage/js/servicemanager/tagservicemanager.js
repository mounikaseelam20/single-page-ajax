function fnshowtag(){
    location.hash = "tag";
}

function fnGettag() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/tag/view/tag.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
        fnshowtag();
    };



    oXhr.send();
}
