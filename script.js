var acc = document.getElementsByClassName("accordion");
var i;
        
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    });
}


const likes = document.querySelectorAll('.fb_options');
let count = document.querySelectorAll('.reaction_number');

likes.forEach(likes => {  
    likes.addEventListener('click', function handleClick() {
        const initialText = 'Descurtir';

        if (likes.textContent.toLowerCase().includes(initialText.toLowerCase())) {
            likes.textContent = 'Curtir';
            clicks.textContent--;
        } 
        else {
            likes.textContent = initialText;
            clicks.textContent++;
        }
    });
})