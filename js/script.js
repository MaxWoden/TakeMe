menu.onclick = function menuClick(){
    if(header.className === "")
        header.className = "responsive";
    else
        header.className = "";
}

function activate(btn){
    let container = document.getElementById("radiobuttons");
    let buttons = container.querySelectorAll('*');
    buttons.forEach(button => {
        button.className = "";
    });
    btn.className = "activated";
}

function filterOn(el){
    if(el.className === "filterOn")
        el.className = "";
    else
        el.className = "filterOn";
}

const slider = document.getElementById("slider");

if(slider){
    noUiSlider.create(slider, {
        start: [20, 4000],
        connect: true,
        range: {
            'min': 0,
            'max': 5000
        },
        tooltips: [
            wNumb({decimals: 0, prefix: '$'}), 
            wNumb({decimals: 0, prefix: '$'})
        ],
    });
}
