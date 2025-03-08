
const menu = document.getElementById("mobile-ul");
const close = document.getElementById("close");
const openbar = document.getElementById("openbar");


openbar.addEventListener("click",()=>{
    openbar.classList.toggle("hidden");
    close.classList.toggle("hidden");
    menu.style.display ="block";
    document.body.style.backgroundColor="var(--clr-Medium-Gray)";
});

close.addEventListener("click",()=>{
    openbar.classList.toggle("hidden");
    close.classList.toggle("hidden");
    menu.style.display ="none";
    document.body.style.backgroundColor="var(--clr-Almost-White)";
});
 


const features= document.getElementById("features");
const company= document.getElementById("company");

const featuresContent= document.getElementById("features-content");
const companyContent= document.getElementById("company-content");

features.addEventListener("click",()=>{
    featuresContent.style.display = featuresContent.style.display === 'none' ? 'block' : 'none';
});
company.addEventListener("click",()=>{
    companyContent.style.display = companyContent.style.display === 'none' ? 'block' : 'none';
});

