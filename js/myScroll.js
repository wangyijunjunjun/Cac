/**
 * Created by nex on 5/3/16.
 */
var myScroll,myScroll02,myScroll03;

function loaded () {
    myScroll = new IScroll('#wrapper', { mouseWheel: true,snap:"li",vScrollbar:false, click: true });
    myScroll02 = new IScroll('#wrapper02', { mouseWheel: true,snap:"li",vScrollbar:false, click: true });
    myScroll03 = new IScroll('#wrapper03', { mouseWheel: true, snap:"li",vScrollbar:false,click: true });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);