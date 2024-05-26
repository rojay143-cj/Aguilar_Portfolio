// $(document).ready(function(){
//     const settings = {
//         async: true,
//         crossDomain: true,
//         url: 'https://anime-db.p.rapidapi.com/anime/by-ranking/1',
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'de77fce5e0mshea603e68dd0977dp1848aajsn2ce85ddd432b',
//             'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
//         }
//     };
    
//     $.ajax(settings).done(function (response) {
//         if(response && response.data && response.data.length > 0){
//             $('.data').empty();
//             response.data.forEach(function(suggestion){
//                 const movieTitle = suggestion.title;
//                     const movieDetails = suggestion.synopsis;
//                     const movieID = suggestion._id;
//                     const MovieUrl = suggestion.link;
//                     const movieImage = suggestion.image;
//                     $('.cover').css('background-image',`url(${movieImage})`);
//             });
//         }
//         console.log(response);
//     });
// });
// $(document).ready(function(){
//     $('#btn-search').on('click',function(){
//         const txtSearch = $('#txt-search').val();
//         const encodeQuery = encodeURIComponent(txtSearch);
//         const searchQuery = {
//             page: 1,
//             size: 20,
//             search: encodeQuery,
//             genres: 'Fantasy,CDrama,Adventure',
//             sortBy: 'ranking',
//             sortOrder: 'asc'
//         };
//         const settings = {
//             async: true,
//             crossDomain: true,
//             url: 'https://anime-db.p.rapidapi.com/anime?'+'page=' +searchQuery.page+'&size='+searchQuery.size+'&search='+searchQuery.search+'&genres='+searchQuery.genres+'&sortBy='+searchQuery.sortBy+'&sortOrder='+searchQuery.sortOrder,
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'de77fce5e0mshea603e68dd0977dp1848aajsn2ce85ddd432b',
// 		        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
//             }
//         };
        
//         $.ajax(settings).done(function (response) {
//             if(response && response.data && response.data.length > 0){
//                 $('.data').empty();
//                 response.data.forEach(function(suggestion){
//                     const movieTitle = suggestion.title;
//                     const movieDetails = suggestion.synopsis;
//                     const movieID = suggestion._id;
//                     const MovieUrl = suggestion.link;
//                     const movieImage = suggestion.image;
//                     const movieResults = `<li class="list-group-item movies">
//                         <a href="${MovieUrl}"><img src="${movieImage}" alt="Movies" class="bg-dark img-thumbnail"></a></li>`;
//                        $('.data').append(movieResults);
//                 });
//             }
//         });
//     });
// });
// $(document).ready(function(){
//     const settings = {
//         async: true,
//         crossDomain: true,
//         url: 'https://anime-db.p.rapidapi.com/anime?page=1&size=40&search=&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc',
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'de77fce5e0mshea603e68dd0977dp1848aajsn2ce85ddd432b',
//             'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
//         }
//     };
    
//     $.ajax(settings).done(function (response) {
//         if(response && response.data && response.data.length > 0){
//             $('.data').empty();
//             response.data.forEach(function(suggestion){
//                 const movieTitle = suggestion.title;
//                     const movieDetails = suggestion.synopsis;
//                     const movieID = suggestion._id;
//                     const MovieUrl = suggestion.link;
//                     const movieImage = suggestion.image;
//                     const movieResults = `<li class="list-group-item movies">
//                         <a href="${MovieUrl}" target="_blank"><img src="${movieImage}" alt="Movies" class="bg-dark img-thumbnail"></a></li>`;
//                        $('.data').append(movieResults);
//             });
//         }
//         console.log(response);
//     });
// });