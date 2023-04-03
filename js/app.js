const bodyScreen = document.querySelector("body");
const bar = document.querySelector(".bar");
const cancle = document.querySelector(".exit");
const sideMenu = document.querySelector("nav ul");
const menu = document.querySelector("nav ul li")
const range = window.matchMedia("(max-width: 725px)");

/*function handleScreen(){
    let screenSize = window.innerWidth;

    if(screenSize <= 725) {

        bar.addEventListener("click", function(){
            sideMenu.classList.add("show");
            
        })
    }
}

window.addEventListener("resize", handleScreen);

*/
function handleScreen(){
    
    if(window.matchMedia("(max-width: 725px)").matches) {

 

        bar.addEventListener("click", function(){
            sideMenu.classList.toggle("show"); 

            cancle.classList.add("show");
            cancle.addEventListener("click", function(){
                sideMenu.classList.add("hide");
                cancle.classList.add("hide")
            })

            menu.addEventListener("click", function(){
                sideMenu.classList.add("hide");
                cancle.classList.add("hide");
            })

            return true
        });

        }

        
    }
  handleScreen()