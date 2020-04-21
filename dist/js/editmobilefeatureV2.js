function editFeature() {
    console.log("hi");
    var confirm0 = document.getElementById("dashboards").value;
    var confirm1 = document.getElementById("id").value;
    console.log(confirm0, confirm1);
    var data = { dashboards: confirm0, id: confirm1};
    //url is hardcoded from flow. 
    console.log(data);
    var url =
     // "https://prod-12.westcentralus.logic.azure.com:443/workflows/cfa4a35d41f045e2ba1bbeedda848c83/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AH4uTBll2IKhsiJ0UGRdkW1mnZBsnIiTgS68nhkUfEc";
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