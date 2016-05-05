/**
 * Created by nex on 4/30/16.
 */
var myApp = new Framework7();

var $$ = Framework7.$;

var mainView = myApp.addView('.view-main' , {
    dynamicNavbar:true,
    domCache:true
});
$$('.open-right-panel').on('click', function (e) {
    // 'right' position to open Right panel
    myApp.openPanel('right');
});

//
//mainView.router.load({pageName:'help'});
//

//var pickerDevice = myApp.picker({
//    input: '#picker-device',
//    cols: [
//        {
//            textAlign: 'center',
//            values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
//        }
//    ]
//});
//
//pickerDevice.open();
//
