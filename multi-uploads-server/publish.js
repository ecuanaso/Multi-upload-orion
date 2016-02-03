Meteor.publish('myuploads', function(id) {
  Meteor._sleepForMs(1000);	
  return GalleryAlbums.find();
});
