function editFeature() {
    console.log("hi");
    var confirm0 = document.getElementById("featureName").value;
    var checkboxes = document.getElementsByName('chkbox')
    var accts = []
    var object = {}
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked == true)
      object[checkboxes[i].id] = accts.push(checkboxes[i].id);
  }
  //var object = Object.assign({}, select1);
    var data = { featureName: confirm0, selectedAccts: object};
    //url is hardcoded from flow. 
    console.log(data);
    var url =
      "https://prod-12.westcentralus.logic.azure.com:443/workflows/cfa4a35d41f045e2ba1bbeedda848c83/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AH4uTBll2IKhsiJ0UGRdkW1mnZBsnIiTgS68nhkUfEc";
    //clear old content out so we're not concating results on each run.
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      // .then(function(response) {
      //   return response();
      // });
      console.log("got the response from Flow");
      document.getElementById("addfeatureform").reset();
  }