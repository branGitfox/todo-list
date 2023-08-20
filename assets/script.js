const btn = document.querySelector("button");
const container = document.querySelector(".container-task");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const p = document.createElement("p");
  container.prepend(p);
  p.setAttribute("class", "list");
    p.innerHTML =input.value + "<button id='del'>Supprimer</button><button id='upd'>Modifier</button>";
 
  container.querySelectorAll("#del").forEach((btns) => {
    btns.addEventListener("click", (e) => {
        setTimeout(() => {
            btns.parentElement.style.opacity = '0.2'
            setTimeout(() => {
            btns.parentElement.style.opacity = '0.3'

            }, 400)
    }, 500)
        setTimeout(()=> {
      btns.parentElement.remove();
        }, 600)
    });
  });
    container.querySelectorAll('#upd').forEach(upd => {
        upd.addEventListener('click', (e) => {
          const val = prompt('Modifier:')
          e.currentTarget.parentElement.innerHTML = val+ "<button id='del'>Supprimer</button><button id='upd'>Modifier</button>"
        })
    })
   
  
});
