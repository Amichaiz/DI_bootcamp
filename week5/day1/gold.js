    const urlParams = new URLSearchParams(window.location.search);
      var entries = urlParams.entries();
      var str = ""
      for(pair of entries) {
      	str = str + `${pair[0]} ${pair[1]}`
        console.log(pair[0], pair[1]);
       const arr = JSON.stringify(pair[1]);
       console.log(arr);
      }
      let hi =  document.getElementById("hi")
      if (hi) {
      hi.innerHTML = str
  }