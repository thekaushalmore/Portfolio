const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', ()=>{
    toggleIcon.classList.toggle('bxs-sun');
    document.body.classList.toggle('dark-mode');
    
})