const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const theme=document.getElementById("theme");
if(localStorage.getItem("toppers-theme")==="dark")document.body.classList.add("dark");
function updateThemeIcon(){if(theme)theme.textContent=document.body.classList.contains("dark")?"☀":"☾"}
updateThemeIcon();
theme?.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("toppers-theme",document.body.classList.contains("dark")?"dark":"light");updateThemeIcon()});
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("form")?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent("TOPPERS website enquiry — "+d.get("interest"));const body=encodeURIComponent("Name: "+d.get("name")+"\nEmail: "+d.get("email")+"\nInterest: "+d.get("interest")+"\n\nMessage:\n"+d.get("message"));document.getElementById("feedback").textContent="Your email app will open with this enquiry prepared.";window.location.href="mailto:?subject="+subject+"&body="+body;});
