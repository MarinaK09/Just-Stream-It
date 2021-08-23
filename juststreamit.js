// This function gets the url of the movie where we can find all the information requested
function getUrl (url, i, j, k) {

  fetch(url)
      .then(response => response.json())
      .then (function (data){
         let info = data.results;
         let movie = new Object();
         movie = info[i];
         let movie_url = movie.url;
         getInfo(movie_url, j, k);
   })
}

// This function gets the object containing all the information requested to be shown in the modal
function getInfo(movie_url, j, k) {

      fetch(movie_url)
          .then(response => response.json())
          .then (function (data){
              let movie = new Object();
              movie = data;
              var img = document.createElement("img");
              img.src = movie.image_url;
              var p = document.getElementById(k+j.toString());
              p.appendChild(img);

              p.addEventListener("click", function() {
              showModal(movie);     
              

         });
      })
      
}

// The modal
function showModal(movie) {

      // Get the modal
      var modal = document.getElementById("modal_id");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on the button, open the modal
      modal.style.display = "block";
      var img = document.createElement("img");
      img.src = movie.image_url;
      //document.getElementById(100+k).setAttribute('src', movie.image_url);
      var p_0 = document.getElementById("img");
      var p_1 = document.getElementById("title");
      var p_2 = document.getElementById("genres");
      var p_3 = document.getElementById("year");
      var p_4 = document.getElementById("rated");
      var p_5 = document.getElementById("imdb_score");
      var p_6 = document.getElementById("directors");
      var p_7 = document.getElementById("actors");
      var p_8 = document.getElementById("duration");
      var p_9 = document.getElementById("countries");
      var p_10 = document.getElementById("usa_gross_income");
      var p_11 = document.getElementById("long_description");

      p_0.innerHTML = '';
      p_0.appendChild(img);
      p_1.innerText = movie.title;
      p_2.innerText = movie.genres;
      p_3.innerText = movie.year;
      p_4.innerText = movie.rated;
      p_5.innerText = movie.imdb_score;
      p_6.innerText = movie.directors;
      p_7.innerText = movie.actors;
      p_8.innerText = movie.duration;
      p_9.innerText = movie.countries;
      p_10.innerText = movie.usa_gross_income;
      p_11.innerText = movie.long_description;

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
      modal.style.display = "none";
      
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
      }
}

//This function is especially built for the Most rated movie
function getMostRatedMovie(movie_url) {

  fetch(movie_url)
      .then(response => response.json())
      .then (function (data){
          let movie = new Object();
          movie = data;
          var img = document.createElement("img");
          img.src = movie.image_url;
          var p_0 = document.getElementById(4100);
          // Each paragraph p corresponds to an information
          p_0.appendChild(img);
          var p_1 = document.getElementById(4101);
          var p_2 = document.getElementById(4102);
          var p_3 = document.getElementById(4103);
          var p_4 = document.getElementById(4104);
          var p_5 = document.getElementById(4105);
          var p_6 = document.getElementById(4106);
          var p_7 = document.getElementById(4107);
          var p_8 = document.getElementById(4108);
          var p_9 = document.getElementById(4109);
          var p_10 = document.getElementById(4110);
          var p_11 = document.getElementById(4111);

          p_0.innerHTML = '';
          p_0.appendChild(img);
          p_1.innerText = movie.title;
          p_2.innerText = movie.genres;
          p_3.innerText = movie.year;
          p_4.innerText = movie.rated;
          p_5.innerText = movie.imdb_score;
          p_6.innerText = movie.directors;
          p_7.innerText = movie.actors;
          p_8.innerText = movie.duration;
          p_9.innerText = movie.countries;
          p_10.innerText = movie.usa_gross_income;
          p_11.innerText = movie.long_description;



  })
  
}


function paging (urls, k) {


  for (var i= 0, j= 0 ; i< 5, j < 5; i++, j++){

      //var img = document.createElement("img");
      getUrl(urls[0], i , j, k);

  }
  for (var i=0, j= 5 ; i < 2, j < 7; i++, j++){

      //var img = document.createElement("img");
      getUrl(urls[1], i , j, k);


  }

}

// The carousel
// Scroll Functionality
var scrollAmountlist = [0, 0, 0, 0];

function sliderScroll(movie_category, side) {
let i;
if (movie_category === "top_rated"){i = 0;}
else if (movie_category === "movie_category_romantic"){i = 1;}
else if (movie_category === "movie_category_action"){i = 2;}
else if (movie_category === "movie_category_comedy"){i = 3;}

let scrollAmount = scrollAmountlist[i];
let switchLeftButton = document.getElementsByClassName("switchLeftButton")[i];
let switchRightButton = document.getElementsByClassName("switchRightButton")[i];
let scrollPerClick = 190;
let slider_select = "."+movie_category+" .content_wrapper";
let sliders = document.querySelector(slider_select);

if (side === "left") {
  sliders.scrollTo({top: 0, left: (scrollAmount -= scrollPerClick), behavior: "smooth"});
  if (scrollAmount < 0) {scrollAmount = 0;}
} else if (side === "right") {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({top: 0, left: (scrollAmount += scrollPerClick), behavior: "smooth"});
  }
}

scrollAmountlist[i] = scrollAmount

if (scrollAmount === 0) {switchLeftButton.style.visibility = "hidden";}
else if (scrollAmount != 0 && scrollAmount < sliders.scrollWidth - sliders.clientWidth) {
  switchLeftButton.style.visibility = "visible";
  switchRightButton.style.visibility = "visible";
  } 
else if (scrollAmount >= sliders.scrollWidth - sliders.clientWidth) {
  switchRightButton.style.visibility = "hidden";
  }
}



// The urls

// Most rated movie 
let url_mostRatedMovie = "http://localhost:8000/api/v1/titles/1508669";

// 7 first most rated movies
let url_1_cat_1 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=9.4&lang=&lang_contains=&max_year=&min_year=&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=";
let url_2_cat_1 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=9.4&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=";
let urls_cat_1 = [url_1_cat_1, url_2_cat_1];

//First category
let url_1_cat_2 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=romance&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";
let url_2_cat_2 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=romance&genre_contains=&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=";
let urls_cat_2 = [url_1_cat_2, url_2_cat_2];

//Second category
let url_1_cat_3 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=action&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";
let url_2_cat_3 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=action&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=";
let urls_cat_3 = [url_1_cat_3, url_2_cat_3];
//Third category
let url_1_cat_4 = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=comedy&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";
let url_2_cat_4 = "http://localhost:8000/api/v1/titles/?actor=&actor_contains=&company=&company_contains=&country=&country_contains=&director=&director_contains=&genre=&genre_contains=comedy&imdb_score=&imdb_score_max=&imdb_score_min=&lang=&lang_contains=&max_year=&min_year=&page=2&rating=&rating_contains=&sort_by=&title=&title_contains=&writer=&writer_contains=&year=";
let urls_cat_4 = [url_1_cat_4, url_2_cat_4];

getMostRatedMovie(url_mostRatedMovie);

paging(urls_cat_1, "top_rated_photo_");

paging(urls_cat_2, "romantic_photo_");

paging(urls_cat_3, "action_photo_");

paging(urls_cat_4, "comedy_photo_");