let inputField = document.getElementById("inputField");
let speedInput = document.getElementById("typeSpeedInput");
let input1;

inputField.addEventListener("input", function(){
    let options1 = {
        strings: [inputField.value.replace(/\n/g, "<br>")],
        typeSpeed: parseInt(speedInput.value),
        startDelay: 1000
    };
    if (input1) {
        input1.destroy();
    }
    input1 = new Typed(".input1", options1);
});

speedInput.addEventListener("input", function(){
    console.log(speedInput.value);

    let options1 = {
        strings: [inputField.value.replace(/\n/g, "<br>")],
        typeSpeed: parseInt(speedInput.value),
        startDelay: 1000
    };
    if (input1) {
        input1.destroy();
    }
    input1 = new Typed(".input1", options1);
})