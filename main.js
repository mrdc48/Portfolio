AOS.init({duration:650});const menuBtn=document.querySelector(".hamburger_menu"),navData=document.querySelector(".nav_links");menuBtn.addEventListener("click",()=>{navData.classList.toggle("show")});const themeChanger=document.querySelector(".nav_logo"),fourth=document.querySelector(".footer_end"),third=document.querySelector(".footer"),second=document.querySelector(".nav_head"),first=document.querySelector(".content_div");themeChanger.addEventListener("click",()=>{first.classList.toggle("theme"),second.classList.toggle("new"),fourth.classList.toggle("new"),third.classList.toggle("theme")});const loader=document.querySelector(".loader"),content=document.querySelector(".content");function load(){setTimeout(()=>{loader.style.opacity=0,loader.style.display="none",content.style.display="block",setTimeout(()=>content.style.opacity=1,20)},5e3)}load();
