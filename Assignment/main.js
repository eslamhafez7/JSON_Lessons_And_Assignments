/*
    [Assignment]
*/
let request = new XMLHttpRequest();
request.open("GET", "articles.json", true);
request.send();
console.log(request);
request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        request = request.response;
        console.log(request);
        console.log("Data Loaded");
        
        let mainData = JSON.parse(this.responseText);
        // console.log(mainData);

        for(let i = 0; i < mainData.length; i++) {
            mainData[i].category = "ALL";
        }
        console.log(mainData);
        let updatedData = JSON.stringify(this.responseText);
        updatedData = this.responseText; 
        console.log(updatedData);


        let data = document.createElement("div");
        data.id = "data";
        for(let i = 0; i < mainData.length; i++) {

            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            let title = document.createTextNode(mainData[i].title);
            h2.appendChild(title);

            let p  = document.createElement("p");
            let content = document.createTextNode(mainData[i].content);
            p.appendChild(content);

            let p1  = document.createElement("p");
            let name = document.createTextNode(`name: ${mainData[i].name}`);
            p1.appendChild(name);

            let p2  = document.createElement("p");
            let categ = document.createTextNode(`Category: ${mainData[i].category}`);
            p2.appendChild(categ);

            div.appendChild(h2);
            div.appendChild(p);
            
            div.appendChild(p1);
            div.appendChild(p2);

            data.appendChild(div);
            document.body.appendChild(data);
            document.body.appendChild(data)
        }
    }
}
