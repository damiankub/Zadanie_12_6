$(function(){

	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');

	function searchCountries() {
	 	var countryName = $('#country-name').val();
		if(!countryName.length) countryName = 'Poland';

		$.ajax({
	  		url: url + countryName,
	  		method: 'GET',
	  		success: showCountriesList
  		});
	}

	function showCountriesList(resp) {
	  countriesList.empty();
	 	resp.forEach(function(item){
		   	$('<li>').text('Country Name : '+item.name).appendTo(countriesList);
		   	$('<li>').text('Capital : '+item.capital).appendTo(countriesList);
		   	$('<li>').text('Region : '+item.region).appendTo(countriesList);
		});
	}

	$('#search').click(searchCountries);

});