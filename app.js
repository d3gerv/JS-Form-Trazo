var billingFunction = function() {
    var cb = document.getElementById('same');
    
    var nms = document.getElementById('shippingName');
    var zps = document.getElementById('shippingZip');

    var nmb = document.getElementById('billingName');
    var zpb = document.getElementById('billingZip');
    if (cb.checked) {
      nmb.value = nms.value;
      zpb.value = zps.value;
    } else {
      nmb.value = '';
      zpb.value = '';
    }
  }