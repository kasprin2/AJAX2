
function showResults(result){

  var item = $('.result').clone();
  var title = item.find('.title');
  title.text(result.snippet.title);

  var vidLink = item.find('.video-link');
  vidLink.attr('href', 'https://www.youtube.com/watch?v=' + result.id.videoId);
  
  var thumbnail = item.find('.thumbnail');
  thumbnail.attr('src', result.snippet.thumbnails.high.url);

  var description = item.find('.description');
  description.text(result.snippet.description);

  return item;

};


function getRequest(searchTerm){
  var params = {
  	part: 'snippet',
    q: searchTerm,
    key: 'AIzaSyBGCTgVq6XK8FTZW5mIScn7KDMK2gvnTrs',
    maxResults: 10
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    console.log(data);
    // console.log(snippet);
    console.log(data.items[0].snippet.thumbnails.high.url);
    var videos = data.items;
    $.each(videos, function(i, item) {
      var results = showResults(item);
      $('#search-results').append(results);
     });
    // showResults(data.items);
    
  });
}

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    $('#query').val("");
  });
});


//   var img = "";
//   // img.attr('https://www.youtube.com/watch?v=' + items.id.videoId);
//     html += '<p>' + items.snippet.title + '</p>';
//     // img += '<img src='https://www.youtube.com/watch?v=' + items.id.videoId>;'
//     console.log(value);
//   $('#search-results').html(html);
// }

//https://www.googleapis.com/youtube/v3/search?part=snippet&q=dogs&key=AIzaSyBGCTgVq6XK8FTZW5mIScn7KDMK2gvnTrs