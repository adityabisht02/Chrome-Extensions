
 let btn=document.querySelector('button');
let hoverstart;
let hoverend;
let hovertime=0;
   let score=document.querySelector(".score");
     let circle=document.querySelector(".circle");

     function gettime(){
        let date=new Date();
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
    
        let now=hours+":"+minutes+":"+seconds;
        return Number(now);     
        
    }


  circle.addEventListener("mouseover",function(){
      let randomX=Math.floor(Math.random()*500)+1;
      
      let randomY=Math.floor(Math.random()*490)+1;
    
      randomX=randomX+"px";
      randomY=randomY+"px";
      direction="translate("+randomX+","+randomY+")";
      circle.style.transform=direction;
      
      circle.style.transition="all 5s";

      hoverstart=gettime();
        
  });

       circle.addEventListener("mouseout",function(){
          hoverend=gettime();
          hovertime=hovertime+(hoverend-hoverstart);
          score.innerHTML=hoverend();
           
       });

       function resetscore(){
           score.innerHTML="0";
       }


       btn.addEventListener("click",function(){
           resetscore();
       })
    
  