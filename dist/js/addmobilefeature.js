function addFeature(flowStatus) {
    console.log("hi");
    var confirm0 = document.getElementById("featureName").value;
    var select1 = document.getElementById("acctlist");
    console.log(select1);
    var selected1 = []
    var object = {}
//     for (var i = 0; i < select1.length; i++) {
//       if (select1.options[i].selected) 
//       selected1.push(select1.options[i].value);
//   }
for (var i = 0; i < select1.length; i++) {
    if (select1.options[i].selected)
    object[select1.options[i].value] = selected1.push(select1.options[i].value);
    console.log(selected1[i]);
  }
  //var object = Object.assign({}, select1);
  console.log(selected1);
  var data = { featureName: confirm0, selectedAccts: object};
  //url is hardcoded from flow. 
  console.log(data);
  var url ="https://prod-19.westcentralus.logic.azure.com:443/workflows/8c948a552dea484196bb3275023e87b4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=a6__w3db5jkvbGJXIvT9G_YCDw3G2G7apfnfrR1OaxI";
    //clear old content out so we're not concating results on each run.
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      var flowStatus = response.status;
      console.log(response.status);
      console.log("the flowstatus is " + flowStatus);
      // return response.status();
      console.log(flowStatus);
      if (flowStatus == 200){
        console.log("we should be here yo "+ flowStatus);
        showConfirm("block");
      }
      else {
        console.log("ruh roh "+ flowStatus);
        showFail("block");
      }
    });
    document.getElementById("addfeatureform").reset();
  }