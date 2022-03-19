$(document).ready(function() {

	$('.slides').cycle({ 
		timeout: 5000,
		speed: 2000
	});
	
	$('.subnav').hide();
	
	$('#resources_link').mouseover( function() {
		$('#resources_nav').show("slow")
		$('#community_nav').hide()
		// $('#conferences_nav').hide()
		$('#about_nav').hide()
	});
	
	$('#resources_nav').mouseover( function() {
		$('#resources_nav').show()
	});
	
	$('#resources_nav').mouseout( function() {
		$('#resources_nav').hide()
	});
	
	
	$('#community_link').mouseover( function() {
		$('#community_nav').show("slow")
		$('#resources_nav').hide()
		// $('#conferences_nav').hide()
		$('#about_nav').hide()
	});
	
	$('#community_nav').mouseover( function() {
		$('#community_nav').show()
	});
	
	$('#community_nav').mouseout( function() {
		$('#community_nav').hide()
	});
	
	
	$('#conferences_link').mouseover( function() {
		// $('#conferences_nav').show("slow")
		$('#resources_nav').hide()
		$('#community_nav').hide()
		$('#about_nav').hide()
	});
	
	// $('#conferences_nav').mouseover( function() {
		// $('#conferences_nav').show()
	// });
// 	
	// $('#conferences_nav').mouseout( function() {
		// $('#conferences_nav').hide()
	// });
	
	
	$('#about_link').mouseover( function() {
		$('#about_nav').show("slow")
		// $('#conferences_nav').hide()
		$('#resources_nav').hide()
		$('#community_nav').hide()
	});
	
	$('#about_nav').mouseover( function() {
		$('#about_nav').show()
	});
	
	$('#about_nav').mouseout( function() {
		$('#about_nav').hide()
	});
	

	
});