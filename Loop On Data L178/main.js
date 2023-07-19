/*
    [AJAX - Loop On Data] L178
    Search {
        - Cross Origin API (CORS)
        - API Authentication
    }
*/

let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/eslamhafez7/repos", true); // by default true
request.send();

request.onreadystatechange = function() {
    console.log(request.readyState);
    console.log(request.status);

    if(this.readyState === 4 && this.status === 200) {
        let Jsobj = JSON.parse(this.responseText);
        // console.log(Jsobj);
        // console.log(Jsobj[10].full_name);
        // console.log(Jsobj[11].id);
        // console.log(Jsobj[12].name);
        // console.log(Jsobj[13].node_id);
        for(let i = 0; i < Jsobj.length; i++) {
            let div = document.createElement("div");
            let repoName = document.createTextNode(Jsobj[i].full_name);
            div.appendChild(repoName);
            document.body.appendChild(div);
        }
    }
}

console.log(request);





// to get all repos

// function fetchRepositories(page) {
//     let request = new XMLHttpRequest();
//     request.open("GET", `https://api.github.com/users/eslamhafez7/repos?page=${page}`, true);
//     request.send();
  
//     request.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         let Jsobj = JSON.parse(this.responseText);
//         console.log(Jsobj);
        
//         for (let i = 0; i < Jsobj.length; i++) {
//           let div = document.createElement("div");
//           let repoName = document.createTextNode(Jsobj[i].full_name);
//           div.appendChild(repoName);
//           document.body.appendChild(div);
//         }
  
//         // Check if there are more pages available
//         let linkHeader = request.getResponseHeader("Link");
//         if (linkHeader && linkHeader.includes('rel="next"')) {
//           // Extract the next page number
//           let nextPage = page + 1;
//           // Recursively fetch the next page
//           fetchRepositories(nextPage);
//         }
//       }
//     };
//   }
  
//   // Start fetching repositories from page 1
//   fetchRepositories(1);
  