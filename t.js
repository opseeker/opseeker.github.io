
        fetch('index.html')
        .then(response => response.text())
        .then(data => {
            document.write(data)
  	// console.log(data);
  })