document.getElementById("side-toggler").addEventListener('click', function() {
    document.getElementById("left").classList.toggle("toggleOn");
    document.getElementById("right").classList.toggle("toggleOn");
});

document.querySelectorAll('.side-menu-item').forEach(function(sideBarItem) {
    sideBarItem.addEventListener('click', function() {
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');     
    })
})

xhr = new XMLHttpRequest();
xhr.open('GET', '../data/db.json', true);
xhr.send();

xhr.onload = function() {
    if(this.readyState == 4 && this.status ==200) {
        let jsonData = JSON.parse(this.responseText);
        console.log(jsonData);
    }
}

