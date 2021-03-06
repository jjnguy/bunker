app.factory('emoticons', function () {
	var files = [
		'3.gif',
		'allthethings.png',
		'argh.gif',
		'arya.png',
		'awthanks.png',
		'badass.png',
		'bahgawd.gif',
		'bang.gif',
		'bravo.gif',
		'buddy.gif',
		'burger.gif',
		'cacodemon.gif',
		'catdrugs.gif',
		'catstare.gif',
		'chef.gif',
		'chompy.gif',
		'clint.gif',
		'crushed.png',
		'damn.gif',
		'dance.gif',
		'dealwithit.gif',
		'devil.gif',
		'dice.gif',
		'doge.png',
		'doh.gif',
		'doomguy.gif',
		'downs.gif',
		'eel.png',
		'effort.gif',
		'eng101.gif',
		'f5.gif',
		'facepalm.gif',
		'feelsgood.png',
		'frog.gif',
		'frown.gif',
		'fwp.png',
		'fuuu.png',
		'gay.gif',
		'getin.gif',
		'golfclap.gif',
		'hattip.gif',
		'hellyeah.gif',
		'heysexy.gif',
		'hist101.gif',
		'hodor.png',
		'iceburn.gif',
		'imp.gif',
		'indeed.png',
		'mad.gif',
		'mancubus.gif',
		'masterstroke.gif',
		'mindblown.gif',
		'motherofgod.gif',
		'munch.gif',
		'ninja.gif',
		'notbad.png',
		'ohdear.png',
		'okay.png',
		'omgwhy.gif',
		'orly.png',
		'parrot.gif',
		'panic.gif',
		'pinky.gif',
		'psyduck.gif',
		'rageguy.png',
		'rant.gif',
		'rolleyes.gif',
		'romero.gif',
		'sadpanda.png',
		'sarge.gif',
		'sax.gif',
		'science.gif',
		'shrug.png',
		'sigh.gif',
		'siren.gif',
		'skull.gif',
		'smile.gif',
		'smith.gif',
		'smug.gif',
		'smugdog.gif',
		'soulsphere.gif',
		'ssj.gif',
		'stare.png',
		'stare2.gif',
		'successkid.png',
		'suspense.gif',
		'sweatdrop.gif',
		'tableflip.png',
		'thumbsdown.png',
		'thumbsnone.png',
		'thumbsup.png',
		'tinfoil.gif',
		'toot.gif',
		'trollface.png',
		'unsmith.gif',
		'v.gif',
		'waffenss.gif',
		'wat.png',
		'wink.gif',
		'woop.gif',
		'words.gif',
		'xd.gif',
		'yaycloud.gif'];

	return {
		names: _.map(files, function (file) {
			return file.replace(/.\w+$/, '');
		}),
		files: files
	};
});

app.filter("emoticonName", function(){
	return function(input){
		return input.replace(/.\w+$/, '');
	};
});