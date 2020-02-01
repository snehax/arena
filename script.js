var myArray = ['sexy girl', 'bikini','sexy thighs'];

var keyword = myArray[Math.floor(Math.random() * myArray.length)];

    function getData(){
    
    var request = new XMLHttpRequest()

    //var keyword = "sexy bikini";

    request.open('GET', 'https://pixabay.com/api/?key=15108580-b39564827023b8338ce9dd2fa&q='+keyword+'&image_type=photo', true);
    request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
  
    console.log(data);

  if (request.status >= 200 && request.status < 400) {

        for (var i=0; i<=data.hits.length-1; i++) {
         
         $('.root').append("<div class='resultimages'><img src="+data.hits[i].webformatURL+"></div>")

        }


  } else {
    console.log('error')
  }

}

request.send()

}

function abc(){
  $('#myModal').fadeIn(3000);
}


setTimeout(function() { abc(); }, 5000);

function hidePopup(){
  $('#myModal').css("display","none"); 
}