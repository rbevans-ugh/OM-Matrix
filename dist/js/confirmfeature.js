function confirmFeature(){
    var confirm1 = document.getElementById("featureName").value;
    var confirm2 = document.getElementById("subscription").value;
    var confirm3 = document.getElementById("comments").value;
    var confirm4 = document.getElementById("DF_PCT").value;
    var confirm5 = document.getElementById("DF_Build").value;
    var confirm6 = document.getElementById("IF_PCT").value;
    var confirm7 = document.getElementById("IF_Build").value;
    var confirm8 = document.getElementById("IS_PCT").value;
    var confirm9 = document.getElementById("IS_Build").value;
    var confirm10 = document.getElementById("PROD_PCT").value;
    var confirm11 = document.getElementById("PROD_Build").value;
    console.log(confirm4);
    document.getElementById("confirmFeatureName").innerHTML = confirm1;
    document.getElementById("confirmSubscription").innerHTML = confirm2;
    document.getElementById("confirmComments").innerHTML = confirm3;
    document.getElementById("confirmDF_PCT").innerHTML = confirm4;
    document.getElementById("confirmDF_Build").innerHTML = confirm5;
    document.getElementById("confirmIF_PCT").innerHTML = confirm6;
    document.getElementById("confirmIF_Build").innerHTML = confirm7;
    document.getElementById("confirmIS_PCT").innerHTML = confirm8;
    document.getElementById("confirmIS_Build").innerHTML = confirm9;
    document.getElementById("confirmPROD_PCT").innerHTML = confirm10;
    document.getElementById("confirmPROD_Build").innerHTML = confirm11;
  }