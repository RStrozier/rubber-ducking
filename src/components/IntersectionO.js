var cards = document.querySelectorAll(".card");

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},
    {
        rootMargin: "-100px",
    }
)

cards.forEach(card => {
    observer.observe(card)
})