GalleryAlbums = new orion.collection('galleryalbums', {
  singularName: 'Gallery Album',
  pluralName: 'Gallery Albums',
  title: 'Gallery Albums',
  link: {
    title: 'Gallery Albums',
    index: 20
  }, 
  tabular: {
    columns: [
       orion.attributeColumn('image', 'image', 'Cover Image'),
      { data: 'title', title: 'Title' },
      orion.attributeColumn('createdAt', 'createdAt', 'Created At'),
      { data: 'actions',className: 'text-center', orderable: false, title: 'Actions',
        render: function (val,type,doc){
          return '<a data-toggle="tooltip" title="Edit Album" class="green-success" href="' + Router.path('collections.galleryalbums.update', doc) +'"><i class="fa fa-pencil-square-o fa-lg"></i></a>';
        },
        tmpl: Meteor.isClient && Template.addGalleryImages
     }
    ]
  }
});

