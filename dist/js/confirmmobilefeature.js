function confirmFeature(){
  showConfirm("none");
  showFail("none");
  var confirm0 = document.getElementById("featureName").value;
  // Checking for account types checkbox
  var checkboxes = document.getElementsByName('chkbox')
  var accts = []
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true){
      accts.push(checkboxes[i].value)
    }
}
    if (document.getElementById("ios").checked){
      var varplat = "iOS"
    }
    if (document.getElementById("android").checked){
      var varplat = "Android"
    }
    if (document.getElementById("bothplat").checked){
      var varplat = "Both"
    }
  // This is for matrix v2, but was breaking confirming feature work.
  // var confirm1 = document.getElementById("PM").value;
  // var confirm2 = document.getElementById("DEVOwner").value;
  // console.log(confirm0.options[confirm0.selectedIndex].value);
    console.log(confirm0);
  document.getElementById("confirmFeatureName").innerHTML = confirm0;
  document.getElementById("confirmPlatform").innerHTML = varplat;
  document.getElementById("confirmaccttype").innerHTML = accts;
  }
  