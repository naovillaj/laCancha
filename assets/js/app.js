var div = [];

    for(var i=1; i <= 8; i++){

        div[i] = document.createElement("div");
        div[i].setAttribute("id", "div"+i);
        
       
    }

     document.body.appendChild(div[1]);

     for(var i=2; i <= 8; i++){

        
        div[1].appendChild(div[i]);
       
    }

    