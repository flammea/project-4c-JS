document.body.addEventListener("click", event => {
    const x = event.clientX;
    const y = event.clientY;

    if ((x % 2 == 0) && (y % 2 == 0)) {
        console.log("parzyste")
    } else if (!(x % 2 == 0) && !(y % 2 == 0)) {
        console.log("nieparzyste")
    } else {
        console.log("inne")
    }
    // document.body.style.backgroundColor = `rgb(${x}%, ${y}%, ${z}%)`;
})