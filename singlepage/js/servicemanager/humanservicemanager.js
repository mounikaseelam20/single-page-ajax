function fnshowhuman() {
    location.hash = "human";
}

function fnGethuman() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/humanface/view/human.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
   
 fnshowhuman();  };



    oXhr.send();
}