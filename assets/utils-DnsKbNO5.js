import{Y as s}from"./index-aHwEMUux.js";function d(t,r){const e={};return t.forEach((n,u)=>{n.hide||(e!=null&&e[n.docsName]||(e[n.docsName]=[]),e[n.docsName].push(r(n,u,0)))}),e}function i(t){return t.reduce((r,e)=>{if(e.isLayout)return e.children&&r.push(...i(e.children)),r;const n={...e};return n.children&&(n.children=i(n.children)),r.push(n),r},[])}function f(t){var e;const r=s.findIndex(n=>n.path===t);return~r?{route:(e=s)==null?void 0:e[r],id:r}:{route:void 0,id:r}}export{d as a,f as g,i as s};
