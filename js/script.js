document.body.onload = function(){

    setTimeout( function(){
    var preloader = document.getElementById('preloader');
    if ( !preloader.classList.contains('hide') )
    {
        preloader.classList.add('hide');
    }
    }, 1500);

}

function openForm() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("popup").style.display = "none";
  }