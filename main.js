

// Execute Script after page load

window.onload = function load_func() {
    
    //Toggle button
    let toggle = document.querySelector("#nav .toggle-btn")
    let collapse = document.querySelector("#nav .collapse")

    toggle.addEventListener('click', function (event) {
        collapse.classList.toggle('active')
        // console.log(toggle)
    });
}