const sliders = [...document.querySelectorAll('.slide')] ; 
var len = sliders.length ; 
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
console.log(len)

let counter = 0
sliders.map((item, index) => {
    item.style.left = index * 33 + "%";
  });

  const pages = document.querySelector(".pagination");
  for (let i = 0; i < Math.ceil(len / 1); i++) {
    const btn = document.createElement("i");
    btn.classList.add("fa-regular");
    btn.classList.add("fa-circle");
    btn.style.cursor = 'pointer'
    pages.append(btn);
    btn.addEventListener("click", () => {
      counter = i;
      sliders.map((item, index) => {
        btn.style.background = 'black'
        btn.style.borderRadius = '50%'
        
        item.style.transform = `translateX(-${counter * 100}%)`;
        if(counter===0){
            sliders[counter].style.background = 'red'
            
            sliders[counter+1].style.background = 'white'
        }
      
        else if(counter===len-1){
            sliders[counter].style.background = 'red'
            sliders[counter-1].style.background = 'white'
        }else{
            sliders[counter].style.background = 'red'
            sliders[counter-1].style.background = 'white'
            sliders[counter+1].style.background = 'white'
        }
      });
    });
  }

next.addEventListener("click", () => {
  
    console.log('counter',counter)
    if (Math.ceil(len-1 / 1) === counter) {
      counter = 0;
    } else {
      counter++;
    }
    sliders.map((item, index) => {
        if(counter===0){
            sliders[counter].style.background = 'red'
            sliders[len-1].style.background = 'white'
        }
      
        else{
            sliders[counter].style.background = 'red'
            sliders[counter-1].style.background = 'white'
        }
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
  });

  prev.addEventListener("click", () => {
    if (counter === 0) {
      counter = Math.ceil(len-1 / 1);
    } else {
      counter--;
    }
    sliders.map((item, index) => {
        if(counter===len-1){
            sliders[counter].style.background = 'red'
        }
        else{
            sliders[counter].style.background = 'red'
            sliders[counter+1].style.background = 'white'
        }
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
  });
