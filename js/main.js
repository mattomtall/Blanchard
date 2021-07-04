document.addEventListener('DOMContentLoaded', function(){
    // const realism = document.querySelector('#realism-select');
    // const choicesRealism = new Choices(realism, {
    //     searchEnabled: false
    // });
    // const impressionism = document.querySelector('#impressionism-select');
    // const choicesImpressionism = new Choices(impressionism, {
    //     searchEnabled: false
    // });
    // const postimpressionism = document.querySelector('#postimpressionism-select');
    // const choicesPostimpressionism = new Choices(postimpressionism, {
    //     searchEnabled: false
    // });
    // const vanguard = document.querySelector('#vanguard-select');
    // const choicesVanguard = new Choices(vanguard, {
    //     searchEnabled: false
    // });
    // const futurism = document.querySelector('#futurism-select');
    // const choicesFuturism = new Choices(futurism, {
    //     searchEnabled: false
    // });
    headerSelectors();
});

function headerSelectors() {
    let items = document.querySelectorAll(".hero-nav-item");
    items.forEach(element => {
        var subitem = element.querySelector(".hero-nav-subitem");
        element.onclick = function() {
            element.classList.toggle("active");
            subitem.classList.toggle("hidden");
        };
    });
}