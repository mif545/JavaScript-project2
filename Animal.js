export class Animal{
    // static counter=0;

       
    constructor(name){
        this.name=name;
        // counter++;
    }
    
    compare(){
        return this.name;
    }
    draw(src){   
        var name1
       var div=document.createElement('DIV');

       var imgFront = document.createElement('img'); 
       imgFront.src =  './background.png'; 
       imgFront.setAttribute("width","200px");
       imgFront.setAttribute("height","200px");
       imgFront.style.display = "block";
       imgFront.addEventListener("click", function(){
            
        console.log("hfrujy");
        imgFront.style.display = "none";
        imgNon.style.display = "block";
        // imgFront.src=src;
    
   
        if( sessionStorage.getItem("name1")==null|| sessionStorage.getItem("name1")=="")
        {
            sessionStorage.setItem("name1",imgNon.src);
            console.log(sessionStorage.getItem("name1"));
           
        }
        else if (sessionStorage.getItem("name2")==null||sessionStorage.getItem("name2")==""){
            sessionStorage.setItem("name2",imgNon.src);
            console.log(sessionStorage.getItem("name2"));
          
        
    }
    if( sessionStorage.getItem("name1")&&sessionStorage.getItem("name2")){
      
       
        if(sessionStorage.getItem("name1")==sessionStorage.getItem("name2"))
        {
            setTimeout(function(){   alert("כל הכבוד"); }, 1000);
            sessionStorage.setItem("name1","");
            sessionStorage.setItem("name2","");
           
        }
        else{
            setTimeout(function(){  alert("נסה שנית"); }, 1000);
           
           
            setTimeout(function(){
                
                imgNon.style.display = "none";
                imgFront.style.display = "block";
                 
        //  var o =document.querySelectorAll("object");
        //   console.log(o)
                var arr=document.querySelectorAll("img");
                for (let i = 0; i < arr.length; i++) {
                   console.log(arr[i].src)
                   if(arr[i].src== sessionStorage.getItem("name1")&&arr[i].style.display=="block"){
                    arr[i-1].style.display="block";
                    arr[i].style.display="none";
                    //  arr[i].src='./background.png';
                   }
                    
                }
                console.log(arr);
                sessionStorage.setItem("name1","");
                sessionStorage.setItem("name2","");
              }, 10000);
            
        }
  
}

    });
       
        div.appendChild(imgFront); 
 

       var imgNon = document.createElement('img'); 
       imgNon.src = src; 
       imgNon.setAttribute("width","200px");
       imgNon.setAttribute("height","200px");
       imgNon.setAttribute("id","a5")
    //    imgNon.setAttribute("class","off"); 
       imgNon.style.display = "none";
       div.appendChild(imgNon); 
       document.body.appendChild(div); 

       imgNon.addEventListener("click", function(){

        console.log("hfrujy");
        imgNon.style.display = "none";
        imgFront.style.display = "block";
    });


  
      
    }
  
       
   choose(){

        
//        console.log(e.style.display);
//       e.display = "block";
//         e.imgNon.style.display="block";
//     e.target.preventNode.children.item(0).style.display="none";
//     e.target.preventNode.children.item(0).style.display="block";
//     style.display = "none";
//   srcFront.style.display = "block";
//         imgNon.setAttribute("class","on"); 
//         imgFront.setAttribute("class","off");
//     e.style.display="none";
    }
}