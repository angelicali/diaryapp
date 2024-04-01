const quill = new Quill('#editor', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
      ],
    },
    placeholder: 'Compose an epic...',
    theme: 'snow', // or 'bubble',
  });


const entryUrl = 'http://localhost:3000/entry';
fetch(entryUrl, {method: 'GET'}).then((res)=>res.json()).then((jsonData) => {
  console.log('jsonData');
  console.log(jsonData);
  quill.setContents(jsonData.entryContent);
})

// async function getUserContent() {
//   const res = await fetch(baseUrl, {
//     method: 'GET'
//   })
//   console.log(res);
//   return res.json();
// }


// getUserContent().then((userData) => {
//   console.log("promise fulfilled. user data:");
//   console.log(userData);
//   quill.setContents(userData.content);
  
// });



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
    const content = quill.getContents();
    fetch(entryUrl, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(content)
    }).then(() => {
      console.log('user content saved.');
    })
    console.log("key binding exit.");
  }
});