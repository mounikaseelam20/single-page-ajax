function fnshowlist() {
    location.hash = "list";
}

function fnGetlist() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/list/view/list.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnshowlist();  };



    oXhr.send();
}