var navItems = [
			{ "label": 'Login', "isButton": true, "target_url": "login.html"},
			{ "label": 'Our Team', "isButton": false, "target_url": "team.html"},
			{ "label": 'Contact', "isButton": false, "target_url": "contact.html"},
			];
			
var teamMembers = [
			{ "fname": 'Jessica', "lname": 'Milan', "imageURL": "assets/headshot.jpg", "title": 'CEO', "description": 'Some description' },
			{ "fname": 'J', "lname": 'Smith', "imageURL": "assets/headshot.jpg", "title": 'CFO', "description": 'Some description' },
			{ "fname": 'J', "lname": 'Milano', "imageURL": "assets/headshot.jpg", "title": 'COO', "description": 'Some description' },
			];
			
var propertyDatas = [ 
		{
			"id":"0001",
			"Owner ID": "",
			"addressData": 
			{	
				"address1":"52 Main St",
				"address2":"",
				"city":"Santa Monica",
				"state": "CA",
				"country": "United States",
				"geoposition": { "lat": "", "lng": "" },
			},
			"marketingData":
			{
				"tagline": "Modern Beach Haven",
				"featurePhotoURL": "https://static.pexels.com/photos/323780/pexels-photo-323780.jpeg",
				"Sleeps": "8",
				"Bedrooms": "4",
				"Bathrooms": "3",
				"Features": "",
			},
			"propertyManualData":
			{
				"checkin":
				{
					"inTime":"3:00pm EST",
					"outTime":"11:00am EST",
				},
				"wifi_access":
				{
					"ssid": "",
					"pwd": "",
				},
				"additionalInstructions": "Pool rules: No one under 12 years old unaccompanied."
			}
		},
		{
			"id":"0002",
			"Owner ID": "",
			"addressData": 
			{	
				"address1":"52 Main St",
				"address2":"",
				"city":"Malibu",
				"state": "CA",
				"country": "United States",
				"geoposition": { "lat": "", "lng": "" },
			},
			"marketingData":
			{
				"tagline": "Views, views, views",
				"featurePhotoURL": "https://static.pexels.com/photos/323775/pexels-photo-323775.jpeg",
				"Sleeps": "10",
				"Bedrooms": "4",
				"Bathrooms": "3",
				"Features": "",
			},
			"propertyManualData":
			{
				"checkin":
				{
					"inTime":"3:00pm EST",
					"outTime":"11:00am EST",
				},
				"wifi_access":
				{
					"ssid": "",
					"pwd": "",
				},
				"additionalInstructions": "Pool rules: No one under 12 years old unaccompanied."
			}
		},
		{
			"id":"0003",
			"Owner ID": "",
			"addressData": 
			{	
				"address1":"52 Main St",
				"address2":"",
				"city":"Long Beach",
				"state": "CA",
				"country": "United States",
				"geoposition": { "lat": "", "lng": "" },
			},
			"marketingData":
			{
				"tagline": "Family friendly getaway",
				"featurePhotoURL": "https://static.pexels.com/photos/276554/pexels-photo-276554.jpeg",
				"Sleeps": "10",
				"Bedrooms": "4",
				"Bathrooms": "3",
				"Features": "",
			},
			"propertyManualData":
			{
				"checkin":
				{
					"inTime":"3:00pm EST",
					"outTime":"11:00am EST",
				},
				"wifi_access":
				{
					"ssid": "",
					"pwd": "",
				},
				"additionalInstructions": "Pool rules: No one under 12 years old unaccompanied."
			}
		},
		{
			"id":"0004",
			"Owner ID": "",
			"addressData": 
			{	
				"address1":"52 Lake St",
				"address2":"",
				"city":"Hermosa Beach",
				"state": "CA",
				"country": "United States",
				"geoposition": { "lat": "", "lng": "" },
			},
			"marketingData":
			{
				"tagline": "Hermosa Hideaway",
				"featurePhotoURL": "https://static.pexels.com/photos/276554/pexels-photo-276554.jpeg",
				"Sleeps": "10",
				"Bedrooms": "4",
				"Bathrooms": "3",
				"Features": "",
			},
			"propertyManualData":
			{
				"checkin":
				{
					"inTime":"3:00pm EST",
					"outTime":"11:00am EST",
				},
				"wifi_access":
				{
					"ssid": "",
					"pwd": "",
				},
				"additionalInstructions": "Pool rules: No one under 12 years old unaccompanied."
			}
		},
	];

Vue.component('vue-top-nav', {
	template: 
	`
	<nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
	<!-- Links -->
	  <a class="navbar-brand" href="index.html">
		<i class="fa fa-key fa-lg logo-color d-inline-block"></i>
		SoCal Home Keepers
	  </a>
	  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#mainnavbar" aria-controls="mainnavbar" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
  <div class="collapse navbar-collapse" id="mainnavbar">
	  <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
		<li class="nav-item" v-for="navItem in navItems">
		  <form class="form-inline" v-if="navItem.isButton">
			<button class="btn btn-outline-success" type="button">{{ navItem.label }}</button>
		  </form>
		  <a v-else class="nav-link" :href="navItem.target_url">{{ navItem.label }}</a>
		</li>
	  </ul>
  </div>
</nav>
	`
	,
	data: function() {
		return {
			navItems
		}
	}
});

Vue.component('vue-footer', {
	template: 
	`
	<div class="row footer">
	<div class="col-sm-6">
		<div class="container">
			<ul class="footer footer-left">
				<li v-for="navItem in navItems">
				<form class="form-inline" v-if="navItem.isButton">
					<button class="btn btn-sm align-middle btn-success" type="button">{{ navItem.label }}</button>
				  </form>
					<a v-else class="footer" :href="navItem.target_url">{{ navItem.label }}</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="col-sm-6">
		<div class="container">
			<ul class="footer footer-right">
				<li>&nbsp; <!--fix-->
					<a class="footer" href="https://facebook.com/techbehindthescenes"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
					<a class="footer" href="https://twitter.com/techyjessica"><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
				</li>
				<li>Tech Behind The Scenes LLC</li>
				<li>Copyright 2017 All Rights Reserved</li>
			</ul>
		</div>
	</div>
</div>
	`
	,
	data: function () {
    return {
		navItems
	}
  }
});

Vue.component('vue-property-cards', {
	template: 
	`
	<div class="card-deck">
		<div class="card" v-for="( propertyData, index ) in propertyDatas" v-if="( numProperties > 0 ) && ( index <= numProperties - 1 )">
				<img class="card-img-top" :src="propertyData.marketingData.featurePhotoURL" alt="Home image">
				<div class="card-img-overlay">
					<span class="badge badge-dark">{{ propertyData.addressData.city }}, {{ propertyData.addressData.state }}</span>
					<span id="star-unselect" class="badge badge-light star" onclick="select()"><i class="fa fa-star-o logo-color"></i></span>
					<span id="star-select" class="badge badge-light star" onclick="unselect()"><i class="fa fa-star logo-color"></i></span>
				</div>
				<div class="card-body">
					<h4 class="card-title">{{ propertyData.marketingData.tagline }}</h4>
					<p class="card-text">Sleeps up to {{ propertyData.marketingData.Sleeps }}</p>
				</div>
				<div class="card-footer">
					<a href="#" class="btn btn-light">View Details</a>
				</div> 
		</div>
	</div>
	`
	,
	data: function () {
    return {
		propertyDatas
	}
  },
  props: ['numProperties'],
});

Vue.component('vue-team', {
	template: 
	`
	<div class="container">
		<div class="row m-3" v-for="teamMember in teamMembers">
			<div class="col-sm-3">
				<img class="img-fluid img-thumbnail" :src="teamMember.imageURL" alt="Headshot">
			</div>
			<div class="col">
					<h4 class="card-title">{{ teamMember.fname }} {{ teamMember.lname }}</h4>
					<h6 class="card-title">{{ teamMember.title }}</h6>
					<p class="card-text">{{ teamMember.description }}</p>
			</div>
		</div>
	</div>
	`
	,
	data: function () {
    return {
		teamMembers
	}
  },
});


new Vue({
  el: '#app',
  data: {
    message: 'Hello!'
  }
});