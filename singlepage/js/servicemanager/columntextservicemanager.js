function fnshowcolumntext() {
    location.hash = "columntext";
    
}

function fnGetcolumntext() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/columntext/view/columntext.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnshowcolumntext();  };



    oXhr.send();
}