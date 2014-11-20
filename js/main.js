$(function(){

	function forStaff(){
		$('.ISBN').click(function(){
			console.log('Search via ISBN.');
		})

		$('.price').click(function(){
			console.log('Add Price.');
		})

		$('.quantity').click(function(){
			console.log('Add Quantity.');
		})

		$('.daytime').click(function(){
			console.log('Add date of arrival.');
		})

		$('.bookshelf').click(function(){
			console.log('Add place in shelf.');
		})
	};

	forStaff();

});