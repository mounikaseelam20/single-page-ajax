window.onhashchange = fnHasChange;

function fnDoLoad() {
    fnsetmenu();
    fnHasChange();
}

function fnHasChange(oEv) {
    var sNewToken = location.hash;

    switch (sNewToken) {
        case '#human':
            fnGethuman();
            break;
        case '#list':
            fnGetlist();
            break;
        case '#columntext':
            fnGetcolumntext();
            break;
        case '#blurtext':
            fnGetblurtext();
            break;
        case '#onepara':
            fnGetonepara();
            break;
        case '#threeparas':
            fnGetthreeparas();
            break;
        case '#hover':
            fnGethover();
            break;
        case '#roundimage':
            fnGetroundimage();
            break;
        case '#borderimage':
            fnGetborderimage();
            break;
        case '#threeboxes':
            fnGetthreeboxes();
            break;
        case '#emptybox':
            fnGetemptybox();
            break;
        case '#button':
            fnGetbutton();
            break;
        case '#tag':
            fnGettag();
            break;
        case '#rectangle':
            fnGetrectangle();
            break;
        case '#about':
            fnGetabout();
            break;


        default:
            break;
    }

}
