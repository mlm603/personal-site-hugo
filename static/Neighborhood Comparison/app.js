var chi_chart_width = 700;
var chi_chart_height = 800;
var nyc_chart_width = 700;
var nyc_chart_height = 800;

var select = document.getElementById("neighborhood");

nyc_to_chi = {"Williamsburg":"LOGAN SQUARE",
              "Financial District":"LOOP",
              "DUMBO":"HYDE PARK",
              "Gramercy":"LAKE VIEW",
              "Greenwich Village":"LINCOLN PARK",
              "Kips Bay":"UPTOWN",
              "Upper West Side":"ROGERS PARK",
              "Long Island City":"HYDE PARK",
              "Park Slope":"LINCOLN PARK",
              "Greenpoint":"BRIDGEPORT"};
chi_to_nyc = {"LOGAN SQUARE":"Williamsburg",
              "LOOP":"Financial District",
              "HYDE PARK":"DUMBO",
              "LAKE VIEW":"Gramercy",
              "LINCOLN PARK":"Greenwich Village",
              "UPTOWN":"Kips Bay",
              "ROGERS PARK":"Upper West Side",
              "HYDE PARK":"Long Island City",
              "LINCOLN PARK":"Park Slope",
              "BRIDGEPORT":"Greenpoint"};

var nyc_ns=[];
var chi_ns=[];

for (n in nyc_to_chi){
  nyc_ns.push(n);
};

for (n in chi_to_nyc){
  chi_ns.push(n);
};

nyc_ns.sort();
chi_ns.sort();

updateDD=function(arr){
  var option = document.createElement("option");
  option.text = '';
  select.appendChild(option);
  for (i=0; i<arr.length; i++){
    var option = document.createElement("option");
    option.text = arr[i];
    select.appendChild(option);
  }
};

//Populate dropdown on page load
selected_c=d3.select('input[name="city"]:checked').node().value;
updateDD(window[selected_c+"_ns"]);

//Populate dropdown on city selection change
d3.selectAll('input').on("change", function() {
  d3.selectAll("option").remove();
  //update dropdown to show neighborhoods in the selected city
  updateDD(window[this.value+"_ns"]);
  //switch inactive_chart class so opposit city's map will be visible in mobile view
  if (this.value=="chi"){
    d3.selectAll(".chicago_chart").classed("inactive_chart",true);
    d3.selectAll(".nyc_chart").classed("inactive_chart",false);
  } else {
    d3.selectAll(".chicago_chart").classed("inactive_chart",false);
    d3.selectAll(".nyc_chart").classed("inactive_chart",true);
  }
});

//Pull up neighborhood name/corresponding neighborhood name in 
//charts when neighborhood is selected from dropdown
//and highlight neighborhoods

d3.selectAll('#neighborhood').on('change',function(){
  selected_c=d3.select('input[name="city"]:checked').node().value;
  if (selected_c=="chi"){
    d3.select('#chi-neighborhood').text(this.value.toProperCase());
    d3.select('#nyc-neighborhood').text(chi_to_nyc[this.value]);
    d3.selectAll('.selected_n').classed('selected_n', false);
    d3.select('#'+this.value.replace(/ /g,'')).classed('selected_n', true);
    d3.select('#'+chi_to_nyc[this.value].replace(/ /g,'')).classed('selected_n', true);
  } else {
    d3.select('#nyc-neighborhood').text(this.value);
    d3.select('#chi-neighborhood').text(nyc_to_chi[this.value].toProperCase());
    d3.selectAll('.selected_n').classed('selected_n', false);
    d3.select('#'+this.value.replace(/ /g,'')).classed('selected_n', true);
    d3.select('#'+nyc_to_chi[this.value].replace(/ /g,'')).classed('selected_n', true);
  }
});



String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

//Projection
var chiPath=d3.geoPath()
           .projection(d3.geoAlbersUsa().translate([-8800,5100]).scale(80000));

var nycPath=d3.geoPath()
           .projection(d3.geoAlbersUsa().translate([-23200,5850]).scale(80000));

//Create SVG
var chiMap = d3.select('#chicago')
            .append('svg')
            .attr('viewBox', '0 0 ' + chi_chart_width + ' ' + chi_chart_height);
            //.attr('width', chi_chart_width)
            //.attr('height', chi_chart_height);

var nycMap = d3.select('#nyc')
            .append('svg')
            .attr('viewBox', '0 0 ' + nyc_chart_width + ' ' + nyc_chart_height);
            //.attr('width', nyc_chart_width)
            //.attr('height', nyc_chart_height);

//Data
d3.json('chicago.json', function(chi_data){
  chiMap.selectAll('path')
     .data(chi_data.features)
     .enter()
     .append('path')
     .attr('d', chiPath)
     .attr('fill',function(d){
       if(chi_to_nyc[d.properties.community]===undefined){
         return 'grey';
       }else{
         return 'black';
       }
     })
     .attr('stroke','#fff')
     .attr('stroke-width',1)
     .attr('id',function(d,i){
       return d.properties.community.replace(/ /g,'');
     })
     .on("mouseover", function(d, i) {
       d3.select('#neighborhood').selectAll('option').property('selected','');
       d3.selectAll('.selected_n').classed('selected_n', false);
       d3.select(this).attr("fill", "red");
       d3.select('#'+chi_to_nyc[d.properties.community].replace(/ /g,'')).attr("fill", "red");
       d3.select('#chi-neighborhood').text(d.properties.community.toProperCase());
       d3.select('#nyc-neighborhood').text(chi_to_nyc[d.properties.community]);
     })                  
     .on("mouseout", function(d,i) {
       d3.select(this).attr("fill", function(d){
         if(chi_to_nyc[d.properties.community]===undefined){
           return 'grey';
         }else{
           return 'black';
         }
       });
       d3.select('#'+chi_to_nyc[d.properties.community].replace(/ /g,'')).attr("fill", "black");
       d3.select('#chi-neighborhood').text(' ');
       d3.select('#nyc-neighborhood').text(' ');
     })
     .append("title")
     .text(function(d){
        return d.properties.community;
     });
});

d3.json('nyc.json', function(nyc_data){
  nycMap.selectAll('path')
     .data(nyc_data.features)
     .enter()
     .append('path')
     .attr('d', nycPath)
     .attr('fill',function(d){
       if(nyc_to_chi[d.properties.neighborhood]===undefined){
         return 'grey';
       }else{
         return 'black';
       }
     })
     .attr('stroke','#fff')
     .attr('stroke-width',1)
     .attr('id',function(d,i){
       return d.properties.neighborhood.replace(/ /g,'');
     })
     .on("mouseover", function(d, i) {
       d3.select('#neighborhood').selectAll('option').property('selected','');
       d3.selectAll('.selected_n').classed('selected_n', false);
       d3.select(this).attr("fill", "red");
       d3.select('#'+nyc_to_chi[d.properties.neighborhood].replace(/ /g,'')).attr("fill", "red");
       d3.select('#nyc-neighborhood').text(d.properties.neighborhood);
       d3.select('#chi-neighborhood').text(nyc_to_chi[d.properties.neighborhood].toProperCase());
     })                  
     .on("mouseout", function(d,i) {
       d3.select(this).attr("fill", function(){
         if(nyc_to_chi[d.properties.neighborhood]===undefined){
           return 'grey';
         }else{
           return 'black';
         }
       });
       d3.select('#'+nyc_to_chi[d.properties.neighborhood].replace(/ /g,'')).attr("fill", "black");
       d3.select('#chi-neighborhood').text(' ');
       d3.select('#nyc-neighborhood').text(' ');
     })
     .append("title")
     .text(function(d){
        return d.properties.neighborhood;
     });
});

//Update dropdown when radiobutton changes
