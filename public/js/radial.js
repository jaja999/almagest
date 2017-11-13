function drawRadial(){
  var loc = window.location.pathname;
  var dir = loc.substring(0, loc.lastIndexOf('/'));
  var dataParse = [];
  console.log("loc: ", loc);
  console.log("dir: ", dir);



  var fs = require("fs");
  console.log("\n *START* \n");
  var content = fs.readFileSync("radialData.json");
  console.log("Output Content : \n"+ content);
  console.log("\n *EXIT* \n");



  //console.log("DATAPARSE HERE:");
  console.log(dataParse);
  var sampleData = dataParse;
  var config = {
  containerId: "chartContainer",
  width: 300,
  height: 300,
  data: sampleData,
  heading: {
      text: "Attendance",
      pos: "top"
  },
  label: function(d) {
      return d.data.place + ":" + d.data.attendance;
  },
  value: "attendance",
  inner: "drilldown",
  tooltip: function(d) {
      return "<p>" + d.place + ": " + d.attendance +".</p>";
  },
  transition: "elastic",
  transitionDuration: 200,
  donutRadius: 50
  };
  var samplePie = new psd3.Pie(config);

}
