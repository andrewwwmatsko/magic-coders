(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();(()=>{const o={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-open")}})();jQuery(document).on("click",".mob-menu-link",function(){jQuery(".mob-menu-item").closest(".backdrop").removeClass("is-open")});jQuery(document).on("click",".button-shop",function(){jQuery(".mob-menu-item").closest(".backdrop").removeClass("is-open")});(()=>{const o={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),howItWorks:document.querySelector("[data-how-it-works]"),vegetables:document.querySelector("[data-vegetables]"),reviews:document.querySelector("[data-reviews]"),shopNowBtn:document.querySelector("[data-shopNowBtn]"),body:document.querySelector("body")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t),o.howItWorks.addEventListener("click",t),o.vegetables.addEventListener("click",t),o.reviews.addEventListener("click",t),o.shopNowBtn.addEventListener("click",t);function t(){o.body.classList.toggle("fixed-position")}})();AOS.init();
//# sourceMappingURL=commonHelpers.js.map
