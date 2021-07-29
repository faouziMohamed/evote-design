const input = document.querySelector('.checkbox-input');
const ul = document.querySelector('.list');
ul.classList.add('hide');
input.checked = false;
input.addEventListener('change', ()=>{
  ul.classList.toggle('hide');
})

const media = window.matchMedia('(min-width: 780px)');
const listenMedia = (x)=>{
  input.checked = false;
  if (x.matches){
    ul.classList.remove('hide');
  }else{
    ul.classList.add('hide');
  }
}
media.addEventListener('change', listenMedia)
listenMedia(media)