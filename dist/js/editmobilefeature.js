function editFeature() {
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
    var confirm1 = document.getElementById("supportWiki").value;
    var checkboxes = document.getElementsByName("chkbox");
    var accts = [];
    var object = {};
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked == true)
        object[checkboxes[i].id] = accts.push(checkboxes[i].id);
    }
    //var object = Object.assign({}, select1);
    var data = { featureName: confirm0, selectedAccts: object, auth_user: user, supportWiki: confirm1 };
    //url is hardcoded from flow.
    console.log(data);
    var url =
      "https://prod-12.westcentralus.logic.azure.com:443/workflows/cfa4a35d41f045e2ba1bbeedda848c83/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AH4uTBll2IKhsiJ0UGRdkW1mnZBsnIiTgS68nhkUfEc";
    //clear old content out so we're not concating results on each run.
    if (user.includes("@microsoft.com")) {
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
          if (flowStatus == 200) {
            console.log("we should be here yo " + flowStatus);
            setTimeout(() => {
              location.reload();
            }, 1500);
          }
          else {
            console.log("ruh roh " + flowStatus);
          }
        });
    } else {
      showDeny("block");
    }
  })
}