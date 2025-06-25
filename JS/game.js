//let n = 10

document.addEventListener("click", function() 
    {
        console.log("Click!!!")
        const knifes = document.getElementsByClassName("knife");

        let currentKnife = 0
        for (let i = 0; i < 10;i++)
        {
            if (!knifes[i].classList.contains("launched")) 
            {
                currentKnife = i;
                break;
            } 
        }
        console.log(currentKnife);

        
        const knife = knifes[currentKnife]; 

        if (currentKnife != 9)
        {
            knifes[currentKnife+1].classList.remove("invisible");
        }
        const cont = document.getElementById("cont");
        cont.appendChild(knife);
        knife.classList.add("launched");
        knife.style.position = "absolute";
    })

