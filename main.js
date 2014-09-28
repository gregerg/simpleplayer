R.ready(function() {
  R.player.play({source: "a3032151"}); // Alice In Chains - The Devil Put Dinosaurs Here
  R.player.on("change:playingTrack", function(track) {
    $('.artist').text('Artist: ' + track.get('artist'));
    $('.title').text('Title: ' + track.get('name'));
    $('.album').text('Album: ' + track.get('album'));
  });
});
