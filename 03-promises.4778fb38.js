var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("iQIUW");const u={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),Btn:document.querySelector('[type="submit"]')};function l(e,t){const o=Math.random()>.3;return new Promise(((r,u)=>{o?r(n.Notify.success(`Fulfilled promise ${e} in ${t}`)):u(n.Notify.failure(`Rejected promise ${e} in ${t}`))}))}u.form.addEventListener("submit",(function(e){e.preventDefault();const t=Number(u.amount.value),o=Number(u.delay.value),r=Number(u.step.value);for(let e=1;e<=t;e++){let t=o+r*(e-1);setTimeout((()=>{l(e,t)}),t)}u.form.reset()}));
//# sourceMappingURL=03-promises.4778fb38.js.map
