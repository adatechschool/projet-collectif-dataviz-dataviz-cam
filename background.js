function afficherBackgroud1(){ 
        div=document.getElementById("backg1");
        let i=0;
        let image = document.getElementById('image');
        let images = ['img2.jpg','img3.jpg','img4.jpg','img5.jpg']
        setInterval(function(){
        div.style.backgroundImage =`url(${images[i]})`;
        i++;
        if(i==images.length){
        i=0;
        }
        }, 3000
        );
        }
        afficherBackgroud1();
        
        function afficherBackgroud2(){ 
        div2=document.getElementById("backg2");
        let i=0;
        let image = document.getElementById('image');
        let images = ['img6.jpg','img7.jpg','img8.jpg','img9.jpg','img10.jpg']
        setInterval(function(){
        div2.style.backgroundImage =`url(${images[i]})`;
        i++;
        if(i==images.length){
        i=0;
        }
        }, 3000
        );}
        
        afficherBackgroud2()

        function afficherBackgroud3(){ 
        div3=document.getElementById("backg3");
        let i=0;
        let image = document.getElementById('image');
        let images = ['img16.jpg','img17.jpg','img18.jpg','img19.jpg']
        setInterval(function(){
        div3.style.backgroundImage =`url(${images[i]})`;
        i++;
        if(i==images.length){
        i=0;
        }
        }, 3000
        );}
        
        afficherBackgroud3()

        function afficherBackgroud4(){ 
        div4=document.getElementById("backg4");
        let i=0;
        let image = document.getElementById('image');
        let images = ['img11.jpg','img12.jpg','img13.jpg','img14.jpg','img15.jpg']
        setInterval(function(){
        div4.style.backgroundImage =`url(${images[i]})`;
        i++;
        if(i==images.length){
        i=0;
        }
        }, 3000
        );}
        
        afficherBackgroud4()