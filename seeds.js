const mongoose = require("mongoose");
const Event = require("./models/event");

const shortOption= {day: '2-digit', month: 'short'};
const data = [
	{
	name: "YouTube Workshop",
	longDate: new Date('December 17, 2019 03:24:00'),
	shortDate: new Date('December 17, 2019 03:24:00').toLocaleString('en-GB', shortOption),
	image: 'https://i.ytimg.com/vi/CpDZ5RIG4ME/maxresdefault.jpg',
	description: "<p>YouTube is the second most visited website in the world, and offers opportunities to earn income as a content creator, as well as to promote an existing business. This workshop will explore the practicalities of building your business on YouTube, and will include an overview of the YouTube Partner Programme, multi-channel networks (MCNs), content optimization, understanding what material is suitable for advertising, affiliate links, Patreon, working with brands to generate revenue, and working with YouTube influencers to promote your business. There will also be an opportunity to discuss the practicalities of running a successful YouTube channel, including the choice of software and production equipment, sustaining a regular production pipeline, copyright, and avoiding demonetization.</p><p>The workshop is run by Christopher Barnatt, whose ExplainingComputers and ExplainingTheFuture YouTube channels have received over 50 million video views, and whose ExplainingComputers channel has over 410,000 subscribers. Christopher was also featured in Google’s “UK Book of YouTube 2018” as one of those “creators who are redefining the future of video content”. This workshop therefore allows you to learn from somebody who earns the majority of their living as a professional YouTuber, and to ask them questions.</p><p>This workshop is for those seeking to use YouTube as an income generating and/or promotional business tool. If you are looking for a get-rich-quick scheme, then this is not for you. But if you want to understand how it is possible, over time, to turn a YouTube channel into a successful commercial activity, or to use the YouTube platform to reach a wider customer base, then you will find the content highly relevant.</p>",
	startTime: "5:30 PM",
	endTime: "7:30pm",
	businessName: "New Art Exchange",
	streetNumber: "39-41",
	streetName: "Gregory Boulevard",
	city: "Nottingham",
	postcode: "NG7 6BE",
	eventURL: "",
	excerpt: "YouTube is the second most visited website in the world, and offers opportunities to earn income as a content creator, as well as to promote an existing business.",
	},
	
	{
	name: "FOTO CAFÉ PHILOSOPHIQUE ",
	longDate: new Date('November 20, 2019 03:24:00'),
	shortDate: new Date('November 20, 2019 03:24:00').toLocaleString('en-GB', shortOption),
	image: 'https://static1.squarespace.com/static/5a16c5e280bd5e0fc6d3aef1/5a16ceab24a694106d134702/5d761b6a5210ec699e4d582e/1568022263211/foto+cafe.jpeg',
	description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Venenatis tellus in metus vulputate eu scelerisque felis. Id porta nibh venenatis cras sed. Consequat mauris nunc congue nisi vitae suscipit tellus. Tempus egestas sed sed risus. Ullamcorper a lacus vestibulum sed arcu non. Aliquet eget sit amet tellus cras adipiscing enim. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Semper quis lectus nulla at volutpat. Sit amet porttitor eget dolor morbi. Purus sit amet luctus venenatis lectus magna. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Dapibus ultrices in iaculis nunc sed augue lacus. Massa ultricies mi quis hendrerit dolor magna eget. Ut sem viverra aliquet eget sit amet. Sed vulputate mi sit amet. Habitasse platea dictumst quisque sagittis purus sit amet. Eget duis at tellus at.</p><p>Maecenas accumsan lacus vel facilisis volutpat est. Morbi quis commodo odio aenean sed adipiscing diam donec. Quam id leo in vitae turpis massa sed elementum. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Sit amet purus gravida quis blandit turpis. Id ornare arcu odio ut sem nulla pharetra diam. In egestas erat imperdiet sed euismod nisi porta. Nisl condimentum id venenatis a condimentum. Enim praesent elementum facilisis leo vel. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Nulla pharetra diam sit amet nisl suscipit adipiscing. Semper risus in hendrerit gravida rutrum. At risus viverra adipiscing at in tellus. Eget nulla facilisi etiam dignissim. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Ut porttitor leo a diam sollicitudin tempor id eu. Id consectetur purus ut faucibus pulvinar elementum. Purus sit amet volutpat consequat. Quisque sagittis purus sit amet volutpat.</p>",
	startTime: "5:30 PM",
	endTime: "7:30pm",
	businessName: "New Art Exchange",
	streetNumber: "39-41",
	streetName: "Gregory Boulevard",
	city: "Nottingham",
	postcode: "NG7 6BE",
	eventURL: "",
	excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	
	{
	name: "Funding Conference: Demystifying Fundraising for Artist and Creatives",
	longDate: new Date('January 08, 2019 03:24:00'),
	shortDate: new Date('January 08, 2019 03:24:00').toLocaleString('en-GB', shortOption),
	image: 'https://static1.squarespace.com/static/5a16c5e280bd5e0fc6d3aef1/5a16ceab24a694106d134702/5d78f5aa6081f768c6584085/1568208480349/',
	description: "<p>landit volutpat maecenas volutpat blandit aliquam etiam erat velit. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Pretium aenean pharetra magna ac. Condimentum lacinia quis vel eros. Facilisis sed odio morbi quis commodo odio aenean. At lectus urna duis convallis convallis. In est ante in nibh mauris cursus. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Tincidunt vitae semper quis lectus. Nec ultrices dui sapien eget mi. Eros in cursus turpis massa tincidunt dui. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Varius duis at consectetur lorem donec massa sapien faucibus et. Vel quam elementum pulvinar etiam non. Massa massa ultricies mi quis hendrerit dolor magna eget est. Ut lectus arcu bibendum at varius vel pharetra. Aliquet risus feugiat in ante metus dictum at tempor commodo. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Neque vitae tempus quam pellentesque nec nam aliquam sem.</p><p>Dolor sit amet consectetur adipiscing elit duis. Ultrices sagittis orci a scelerisque purus semper eget. Non sodales neque sodales ut etiam sit amet. Ultricies mi eget mauris pharetra et. Convallis tellus id interdum velit laoreet id donec. Laoreet id donec ultrices tincidunt arcu non sodales neque. Auctor neque vitae tempus quam. Rhoncus urna neque viverra justo nec ultrices dui. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Ut eu sem integer vitae justo. Congue eu consequat ac felis donec et odio. Elementum nibh tellus molestie nunc non. Velit ut tortor pretium viverra suspendisse potenti nullam ac.</p>",
	startTime: "5:30 PM",
	endTime: "7:30pm",
	businessName: "New Art Exchange",
	streetNumber: "39-41",
	streetName: "Gregory Boulevard",
	city: "Nottingham",
	postcode: "NG7 6BE",
	eventURL: "",
	excerpt: "landit volutpat maecenas volutpat blandit aliquam etiam erat velit. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.",
	},
	
		{
	name: "The Big House EXPO",
	longDate: new Date('September 10, 2019 03:24:00'),
	shortDate: new Date('September 10, 2019 03:24:00').toLocaleString('en-GB', shortOption),
	image: 'https://static1.squarespace.com/static/5a16c5e280bd5e0fc6d3aef1/5a16ceab24a694106d134702/5d429d096dff1d00018c9daa/1565002341106/Expo+-+Instagram+1-1+2.jpg',
	description: "<p>Fringilla phasellus faucibus scelerisque eleifend donec pretium. Libero volutpat sed cras ornare arcu dui vivamus. Sagittis orci a scelerisque purus semper eget duis at tellus. Sit amet justo donec enim diam. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Pellentesque id nibh tortor id aliquet lectus proin nibh. Id interdum velit laoreet id donec ultrices. Amet nisl purus in mollis nunc. At erat pellentesque adipiscing commodo elit at. Eu sem integer vitae justo eget magna fermentum iaculis. Condimentum vitae sapien pellentesque habitant. Sagittis purus sit amet volutpat consequat mauris. Sit amet risus nullam eget felis eget nunc. Et malesuada fames ac turpis egestas sed tempus. Sed felis eget velit aliquet sagittis id. Elit pellentesque habitant morbi tristique senectus. Augue ut lectus arcu bibendum at.</p><p>Adipiscing diam donec adipiscing tristique. Odio facilisis mauris sit amet massa vitae tortor condimentum. Dignissim suspendisse in est ante. Auctor elit sed vulputate mi sit amet mauris commodo. Tempor orci eu lobortis elementum nibh tellus. Ut etiam sit amet nisl purus. Velit dignissim sodales ut eu sem. Scelerisque viverra mauris in aliquam sem fringilla. Sit amet tellus cras adipiscing enim eu turpis. Sollicitudin aliquam ultrices sagittis orci. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat est velit egestas dui id ornare. Tristique senectus et netus et malesuada. Ullamcorper sit amet risus nullam eget felis eget. Faucibus turpis in eu mi bibendum. Leo duis ut diam quam nulla porttitor massa id. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.</p>",
	startTime: "5:30 PM",
	endTime: "7:30pm",
	businessName: "New Art Exchange",
	streetNumber: "39-41",
	streetName: "Gregory Boulevard",
	city: "Nottingham",
	postcode: "NG7 6BE",
	eventURL: "",
	excerpt: "Fringilla phasellus faucibus scelerisque eleifend donec pretium. Libero volutpat sed cras ornare arcu dui vivamus.",
	},

		{
	name: "Get Started with Facebook for Business - Beginners Workshop",
	longDate: new Date('December 22, 2019 03:24:00'),
	shortDate: new Date('December 22, 2019 03:24:00').toLocaleString('en-GB', shortOption),
	image: 'https://static1.squarespace.com/static/5a16c5e280bd5e0fc6d3aef1/5a16ceab24a694106d134702/5cb70d07b208fc8a4305e89a/1560846537041/',
	description: "<p>Fringilla phasellus faucibus scelerisque eleifend donec pretium. Libero volutpat sed cras ornare arcu dui vivamus. Sagittis orci a scelerisque purus semper eget duis at tellus. Sit amet justo donec enim diam. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Pellentesque id nibh tortor id aliquet lectus proin nibh. Id interdum velit laoreet id donec ultrices. Amet nisl purus in mollis nunc. At erat pellentesque adipiscing commodo elit at. Eu sem integer vitae justo eget magna fermentum iaculis. Condimentum vitae sapien pellentesque habitant. Sagittis purus sit amet volutpat consequat mauris. Sit amet risus nullam eget felis eget nunc. Et malesuada fames ac turpis egestas sed tempus. Sed felis eget velit aliquet sagittis id. Elit pellentesque habitant morbi tristique senectus. Augue ut lectus arcu bibendum at.</p><p>Adipiscing diam donec adipiscing tristique. Odio facilisis mauris sit amet massa vitae tortor condimentum. Dignissim suspendisse in est ante. Auctor elit sed vulputate mi sit amet mauris commodo. Tempor orci eu lobortis elementum nibh tellus. Ut etiam sit amet nisl purus. Velit dignissim sodales ut eu sem. Scelerisque viverra mauris in aliquam sem fringilla. Sit amet tellus cras adipiscing enim eu turpis. Sollicitudin aliquam ultrices sagittis orci. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat est velit egestas dui id ornare. Tristique senectus et netus et malesuada. Ullamcorper sit amet risus nullam eget felis eget. Faucibus turpis in eu mi bibendum. Leo duis ut diam quam nulla porttitor massa id. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.</p>",
	startTime: "5:30 PM",
	endTime: "7:30pm",
	businessName: "New Art Exchange",
	streetNumber: "39-41",
	streetName: "Gregory Boulevard",
	city: "Nottingham",
	postcode: "NG7 6BE",
	eventURL: "",
	excerpt: "Dignissim suspendisse in est ante. Auctor elit sed vulputate mi sit amet mauris commodo. Tempor orci eu lobortis elementum nibh tellus.",
	},
	
		{
	name: "Copywriting for your Website",
	longDate: new Date('November 26, 2019 03:24:00'),
	shortDate: new Date('November 26, 2019 03:24:00').toLocaleString('en-GB', shortOption),
	image: 'https://static1.squarespace.com/static/5a16c5e280bd5e0fc6d3aef1/5a16ceab24a694106d134702/5cb72888fa0d6038a6ea7ecb/1558538730904/',
	description: "<p>Fringilla phasellus faucibus scelerisque eleifend donec pretium. Libero volutpat sed cras ornare arcu dui vivamus. Sagittis orci a scelerisque purus semper eget duis at tellus. Sit amet justo donec enim diam. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Pellentesque id nibh tortor id aliquet lectus proin nibh. Id interdum velit laoreet id donec ultrices. Amet nisl purus in mollis nunc. At erat pellentesque adipiscing commodo elit at. Eu sem integer vitae justo eget magna fermentum iaculis. Condimentum vitae sapien pellentesque habitant. Sagittis purus sit amet volutpat consequat mauris. Sit amet risus nullam eget felis eget nunc. Et malesuada fames ac turpis egestas sed tempus. Sed felis eget velit aliquet sagittis id. Elit pellentesque habitant morbi tristique senectus. Augue ut lectus arcu bibendum at.</p><p>Adipiscing diam donec adipiscing tristique. Odio facilisis mauris sit amet massa vitae tortor condimentum. Dignissim suspendisse in est ante. Auctor elit sed vulputate mi sit amet mauris commodo. Tempor orci eu lobortis elementum nibh tellus. Ut etiam sit amet nisl purus. Velit dignissim sodales ut eu sem. Scelerisque viverra mauris in aliquam sem fringilla. Sit amet tellus cras adipiscing enim eu turpis. Sollicitudin aliquam ultrices sagittis orci. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat est velit egestas dui id ornare. Tristique senectus et netus et malesuada. Ullamcorper sit amet risus nullam eget felis eget. Faucibus turpis in eu mi bibendum. Leo duis ut diam quam nulla porttitor massa id. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.</p>",
	startTime: "5:30 PM",
	endTime: "7:30pm",
	businessName: "New Art Exchange",
	streetNumber: "39-41",
	streetName: "Gregory Boulevard",
	city: "Nottingham",
	postcode: "NG7 6BE",
	eventURL: "",
	excerpt: "This workshop will teach you how to write persuasive and engaging copy for your business website that’ll make you stand out from your competitors.",
	},

];



     
function seedDB(){
   //Remove all events
   Event.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed events!");
			 //add a few campgrounds
			data.forEach(function(seed){
				Event.create(seed, function(err, event){
					if(err){
						console.log(err)
					} else {
						console.log("added a event");

					}
				});
			});
	});
};
        //add a few comments
    
     
module.exports = seedDB;