function go() {	 
	CSV.fetch({
		file: document.getElementById('dictionary').files[0]
	  }
	).done(function(dataset) {
		//console.log(dataset);
		
		// create a dictionary variable
		var plant_taxa={};
		var i;
		for (i = 0; i < dataset.records.length; i++) {		
			plant_taxa[dataset.records[i][1]]="<a href='http://www.plantsoftheworldonline.org/taxon/"+dataset.records[i][0]+"'>"+dataset.records[i][1]+'</a>'
		}
		var textsample=document.getElementById("yourtext").value;
		var splittext=textsample.split(" ");
		var z;
		for (z = 0; z < splittext.length; z++) {
			if (splittext[z] in plant_taxa){
				document.getElementById("yournewtext").innerHTML += plant_taxa[splittext[z]]+" ";
			}
			else{
				document.getElementById("yournewtext").innerHTML += splittext[z]+" ";				
			}
			
		}
			
	});
	

}
