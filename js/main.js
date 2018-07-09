console.log('hello!!');


window.onload = function(){
  window.$html = document.querySelector('#instapot');

}


var whistlepig = {
  getInstagramData: function(){
    // const url = process.env.PUBLIC_URL + '/data.json';
    const url = 'https://api.instagram.com/oembed?url=http://instagr.am/p/fA9uwTtkSN/';
    console.log(`reading app data from "${url}"`);

    fetch(url).then(response => {
                return response.json();
              }, 
              err => console.error("Error fretching url", err)
            ) //- bad url responds with 200/ok? so this doesnt get thrown
              .then(json => {
                console.log("GOT JSON", json);
                window.$html.innerHTML = json.html;
                return true;
              }, 
              err => console.error("Error parsing store JSON (or the url was bad)", err));
  }

}
