const h1 = document.getElementById('ID');
const btn = document.getElementById('go');

function create(name){
        var ID = '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem(name, JSON.stringify(ID))
        h1.textContent = ID
}

btn.addEventListener('click', function(){
 create("test");
})