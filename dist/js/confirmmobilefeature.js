function confirmFeature(){
  showConfirm("none");
  showFail("none");
  var confirm0 = document.getElementById("featureName").value;
  var confirm1 = document.getElementById("PM").value;
  var confirm2 = document.getElementById("DEVOwner").value;
  // console.log(confirm0.options[confirm0.selectedIndex].value);
  var select1 = document.getElementById("acctlist");
  var selected1 = []
  for (var i = 0; i < select1.length; i++) {
    if (select1.options[i].selected) selected1.push(select1.options[i].innerHTML);
}
console.log(selected1);
    console.log(confirm0);
  document.getElementById("confirmFeatureName").innerHTML = confirm0;
  document.getElementById("confirmPM").innerHTML = confirm1;
  document.getElementById("confirmDEVOwner").innerHTML = confirm2;
  document.getElementById("confirmaccttype").innerHTML = selected1;
  }