function fnshowrectangle() {
    location.hash = "rectangle";
}

function fnGetrectangle() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/rectangle/view/rectangle.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('replaceDom').innerHTML = oEv.currentTarget.responseText;
            }
        }
        fnshowrectangle();
    };



    oXhr.send();
}
