function addFeature(flowStatus) {

  var user
// Here we're getting the user making the submission
    $.get("https://dev-omlc.azurewebsites.net/.auth/me", function (data) {
      for (var key in data[0]["user_claims"]) {
        var obj = data[0]["user_claims"][key];
        if (obj["val"].includes("microsoft")) {
          user = obj["val"];
          console.log('I got the user ' + user)
          // We should have gotten the user now.
          break;
        };
      }
  console.log("hi " + user);
  var confirm0 = document.getElementById("featureName").value;
  var checkboxes = document.getElementsByName('chkbox')
  var accts = []
  var object = {}
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true)
      object[checkboxes[i].id] = accts.push(checkboxes[i].id);
  }
  var data = { featureName: confirm0, selectedAccts: object, auth_user: user };
  //url is hardcoded from flow. 
  console.log(data);
  // fake URL for testing
  var url = "https://prod-19.westcentralus.logic.azure.com:443/workflows/8c948a552dea484196bb3275023e87b4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=a6__w3db5jkvbGJXIvT9G_YCDw3G2G7apfnfrR1Oax";
  // Real URL
  // var url = "https://prod-19.westcentralus.logic.azure.com:443/workflows/8c948a552dea484196bb3275023e87b4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=a6__w3db5jkvbGJXIvT9G_YCDw3G2G7apfnfrR1OaxI";
  //clear old content out so we're not concating results on each run.
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(function (response) {
      var flowStatus = response.status;
      console.log(response.status);
      console.log("the flowstatus is " + flowStatus);
      // return response.status();
      console.log(flowStatus);
      if (flowStatus == 200) {
        console.log("we should be here yo " + flowStatus);
        showConfirm("block");
      }
      else {
        console.log("ruh roh " + flowStatus);
        showFail("block");
      }
    });
  document.getElementById("addfeatureform").reset();
})
}