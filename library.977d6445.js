function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o),o.register("kyEFX",(function(r,t){var n,o;e(r.exports,"register",(function(){return n}),(function(e){return n=e})),e(r.exports,"resolve",(function(){return o}),(function(e){return o=e}));var c={};n=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)c[r[t]]=e[r[t]]},o=function(e){var r=c[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),o("kyEFX").register(JSON.parse('{"1zJhX":"library.977d6445.js","el93z":"empty-lib.a15ce83a.jpg","5UbS1":"index.0f29061b.css","eM9ss":"library.37274edb.js"}')),o("2ix2C"),o("lY1JX"),o("gjiCh"),o("7Y9D8");var c=o("krGWQ");o("kFjtm");var i=o("bmZal");o("bTcpz");var l;l=new URL(o("kyEFX").resolve("el93z"),import.meta.url).toString();const a=new URL(l),s=document.querySelector(".js-gallery");function u(e){try{const r=localStorage.getItem(e),t=JSON.parse(r);console.log(t),t.length?(0,i.createCardMarkup)(t):s.innerHTML=`<img src="${a}" alt="empty library" />`}catch(e){console.log(e)}}function f(e){e.classList.contains("library_btn--current")||e.classList.add("library_btn--current")}function d(e){e.classList.remove("library_btn--current")}(c.refs.getWatchedBtn||c.refs.getQueueBtn)&&(c.refs.getWatchedBtn.addEventListener("click",(function(){u("watched"),f(c.refs.getWatchedBtn),d(c.refs.getQueueBtn)})),c.refs.getQueueBtn.addEventListener("click",(function(){u("queue"),f(c.refs.getQueueBtn),d(c.refs.getWatchedBtn)}))),u("watched"),console.log("hello"),o("cddKH");
//# sourceMappingURL=library.977d6445.js.map
