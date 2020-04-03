function addFeature() {
    console.log("hi");
    var confirm0 = document.getElementById("featureName").value;
    var select1 = document.getElementById("acctlist");
    var selected1 = []
    for (var i = 0; i < select1.length; i++) {
      if (select1.options[i].selected) selected1.push(select1.options[i].value);
  }
  console.log(selected1);
    var data = { featureName: confirm0, selectedAccts: selected1};
    //url is hardcoded from flow. 
    console.log(data);
    var url =
    //   "https://prod-12.westcentralus.logic.azure.com:443/workflows/cfa4a35d41f045e2ba1bbeedda848c83/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AH4uTBll2IKhsiJ0UGRdkW1mnZBsnIiTgS68nhkUfEc";
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
  }