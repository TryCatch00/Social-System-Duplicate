const buttonClass = document.querySelectorAll(".button-class");
buttonClass.forEach(button => {
    button.addEventListener("mouseup", () => {
        button.style.boxShadow = "inset 0px 0px 3px #ffffff8f";

        setTimeout(() => {
            button.style.boxShadow = "inset 0px 0px 0px #ffffff8f";
        }, 300);
    });
});