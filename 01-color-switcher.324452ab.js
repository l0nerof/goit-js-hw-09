!function(){var t,e=document.querySelector("body"),a=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");d.disabled=!0,a.addEventListener("click",(function(o){t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));e.style.backgroundColor=t}),1e3),a.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(o){clearInterval(t),a.disabled=!1,d.disabled=!0,e.style.backgroundColor=""}))}();
//# sourceMappingURL=01-color-switcher.324452ab.js.map
