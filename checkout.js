// Cole aqui o link HTTPS do checkout principal com os dois order bumps configurados.
const CHECKOUT_URL = '';
const valid = /^https:\/\//i.test(CHECKOUT_URL);
document.querySelectorAll('[data-buy]').forEach(a=>{if(valid){a.href=CHECKOUT_URL;}else{a.addEventListener('click',e=>{e.preventDefault();const n=document.getElementById('notice');n.hidden=false;clearTimeout(window.noticeTimer);window.noticeTimer=setTimeout(()=>n.hidden=true,4000);});}});
