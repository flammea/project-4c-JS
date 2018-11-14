document.body.addEventListener("click", event => {
    const x = event.clientX;
    const y = event.clientY;

    if ((x % 2 == 0) && (y % 2 == 0)) {
        console.log("even");
        document.body.style.backgroundColor = "red";
    } else if (!(x % 2 == 0) && !(y % 2 == 0)) {
        console.log("odd");
        document.body.style.backgroundColor = "blue";
    } else {
        console.log("other");
        document.body.style.backgroundColor = "green";
    }
})