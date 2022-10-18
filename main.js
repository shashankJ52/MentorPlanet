

// Execute Script after page load

window.onload = function load_func() {
    
    //Toggle button
    let toggle = document.querySelector("#nav .toggle-btn")
    let collapse = document.querySelector("#nav .collapse")

    toggle.addEventListener('click', function (event) {
        collapse.classList.toggle('active')
        // console.log(toggle)
    });


    //mansonry JS
    let grid = document.querySelector("#site-main .recent-work-area .images-flex")
    let msnry = new Masonry(grid, {
        itemSelector: '.flex-items',
        gutter: 100,
        fitWidth:true
    })
}

// Rellax Js
var rellax = new Rellax('.rellax', {
    center: true
})