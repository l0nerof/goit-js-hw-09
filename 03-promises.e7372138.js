!function(){var e=document.querySelector(".form");function n(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(o){o.preventDefault();for(var t=Number(e.elements.delay.value),i=Number(e.elements.step.value),a=Number(e.elements.amount.value),c=0;c<a;c++){n(c+1,t+c*i).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.e7372138.js.map