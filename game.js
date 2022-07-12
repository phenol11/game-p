        let start = document.getElementById('start')
        let page = document.getElementById('newpage')
        let h1 = document.querySelector('h1')
        let firstP = document.getElementById('p');
        let inpVal = document.getElementById("inpvalue");
        let btnPlay = document.getElementById("btnplay");
        let alldiv = document.getElementById("all");
        let startGame = document.getElementById("sgame");
        let welName = document.getElementById('welpar');
        let lastN= document.getElementById('lastN')

        btnPlay.onclick = function(){
            // alert('So excited to have ou onboard. click "OK" to continue')
            alldiv.style.display = "block";
            alldiv.style.margin = "14%";
        }
    
        startGame.addEventListener('click', function(){
            let lastNs = document.getElementById('lastNs')
            let lastNr = document.getElementById('lastNr')
            welName.innerText += " " + inpVal.value
            lastN.textContent = inpVal.value
            
            lastNs.innerText = "0"
            lastNr.innerText= "5th"
            inpVal.value = "";
            alldiv.style.display ="none";
            firstP.style.display="none";
            btnPlay.style.display ="none"
            h1.style.display ="none";
            page.style.display = "block"
        })
        let dig = 0
        start.onclick = function(){
            let num = Math.floor(Math.random()*100)
            let box = document.getElementById('box');

            start.innerText ="START " + dig
            dig += 1
            console.log(num)
            gameCondition(num)
        }
        


        function gameCondition(num){
           if(num >= 0 && num <= 40){
             console.log(`yea it was ${num}`)
             lastNs.innerText = num
             lastNr.innerText= "4th"
           }else if(num >= 40 && num <= 60){
            lastNs.innerText = num
            lastNr.innerText= "3rd"
           }else if( num >= 60 && num <= 80){
            console.log("yeaaaaa")
            lastNs.innerText = num
            lastNr.innerText= "2nd"
           }else if( num >= 80){
            console.log("naw")
            box.style.display = "block"
            box.style.marginTop = "-200px"
            box.innerText= "Congratulations.."
            
            num = 80
            lastNs.innerText = num
            lastNr.innerText= "1st"
            dig = 0
           }
        }
        box.onclick = function(){
            box.style.display ="none"
        }