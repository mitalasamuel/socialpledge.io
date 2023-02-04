

var shopData = [
    {
      title: "Con Air",
      description: 'Great move loved it. Watched it 10 times!',
      image: 'https://www.placecage.com/100/150',
      price: 2,
    }, 
      {
      title: 'Face off',
      description: "Not so good. It was ok.",
      image: 'https://www.placecage.com/101/150',
      price: 30,
    }, 
      {
      title: 'Next',
      description: 'One of his best.',
      image: 'https://www.placecage.com/102/150',
      price: 12,
    }, 
    {
      title: 'Movie X',
      description: 'Another one of his',
      image: 'https://www.placecage.com/103/150',
      price: 22,
    },
     {
      title: 'Movie XX',
      description: 'Please no more',
      image: 'https://www.placecage.com/101/151',
      price: 66,
    },
  ];
  
  for( var i = 0; i < shopData.length; i++) {
    document.querySelector('.shop').innerHTML += `
    <div class="card">
        <img src="${shopData[i].image}" alt="">
        <h3>$${shopData[i].price}</h3>
        <h1> ${shopData[i].title}</h1>
        <p> ${shopData[i].description}</p>
        <button>Buy now</button>
     </div>
    `;
    
  }
  