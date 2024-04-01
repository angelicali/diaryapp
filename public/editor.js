const quill = new Quill('#editor', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
      ],
    },
    placeholder: 'Compose an epic...',
    theme: 'snow', // or 'bubble'
  });


quill.on('text-change', (delta, oldDelta, source) =>{
  if (source == 'api') {
    console.log('An API call triggered this change.');
  } else if (source == 'user') {
    console.log('A user action triggered this change.');
  }
});


quill.keyboard.addBinding({
  key: 's',
  ctrlKey: true,
  handler: function(range, context) {
    console.log(quill.getContents());
    // saveEntry("testuser", 123, quill.getContents());
  }
});