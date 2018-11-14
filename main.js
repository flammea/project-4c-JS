document.body.addEventListener("click", event => {
    console.log("działa")
    const x = 100;
    const y = 40;
    const z = 120;
    document.body.style.backgroundColor = `rgb(${x}%, ${y}%, ${z}%)`;
})