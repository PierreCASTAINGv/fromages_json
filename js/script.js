var requestURL = './json/fromages.json';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.responseType = 'json';
    xmlhttp.onreadystatechange = function() {
    
    if (this.readyState == this.DONE && this.status == 200) {
        

        // var catalogue = JSON.parse(this.response); // si responseType non défini.
        
        var catalogue = this.response;
        
        for (let i in catalogue) {  

        var myArticle = document.createElement('article');
        document.querySelector('div').appendChild(myArticle);
        
        var myPara = document.createElement('p');
        var myParaImg = document.createElement('p');
        var myPara2 = document.createElement('p');
        
        myPara.textContent = catalogue[i].nom;
        myPara2.textContent = "Type: " + catalogue[i].type + " / Pays: " + catalogue[i].pays;
        myParaImg.style.background = "url(./images/etoile.png) no-repeat";
        myParaImg.style.height = "20px";

        switch (catalogue[i].classement) {
        case 1 :
        myParaImg.style.width = "20px";
        break;
        case 2 :
        myParaImg.style.width = "40px";
        break;
        case 3 :
        myParaImg.style.width = "60px";
        break;
        case 4 :
        myParaImg.style.width = "80px";
        break;
        case 5 :
        myParaImg.style.width = "100px";
        break;
        case 6 :
        myParaImg.style.width = "150px";
        break;
            }

        myArticle.appendChild(myPara);
        myArticle.appendChild(myParaImg);
        myArticle.appendChild(myPara2);
        }
    }
};
xmlhttp.open("GET", requestURL, true);
xmlhttp.send();
