import{S as g,i as h}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function v(a){return fetch(a).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function S(a,s){const r=a.reduce((o,e)=>{const{likes:t,views:i,comments:u,downloads:d,tags:p,previewURL:P,largeImageURL:f,webformatURL:y}=e;return o+=`<li class='gallery-item'>
                  <a class='gallery-link' href= ${f}>
                    <img class="gallery-image" src=${y} alt ="${p}" width ="360" height ="152">
                    </a>
                      <div class ="conteiner-comments">
                        <div class= "container-comment">
                          <span class="comments-name">Likes</span>
                          <span class ="comments-value"> ${t}</span>
                        </div>
                        <div class= "container-comment">
                          <span class="comments-name">Views</span>
                          <span class ="comments-value"> ${i}</span>
                        </div>
                        <div class= "container-comment">
                          <span class="comments-name">Comments</span>
                          <span class ="comments-value"> ${u}</span>
                         </div>
                        <div class= "container-comment">
                          <span class="comments-name">Downloads</span>
                          <span class ="comments-value"> ${d}</span>
                        </div> 
                      </div>
                      </li>`,o},"");document.querySelector(s).innerHTML=r}const b=document.querySelector(".form-search"),n=document.querySelector(".input-search"),L=document.querySelector(".gallery"),c=document.querySelector(".loader");c.style.display="none";const w="15611929-f0ad527e9fe4615e5eed3c151",q="https://pixabay.com/api/?",l=new URLSearchParams({key:w,q:n.value,image_type:"photo",orientation:"horizontal",safesearch:!0});function m(a){h.error({message:a,position:"topRight",messageColor:"white",backgroundColor:"rgb(238, 4, 50)",theme:"dark",color:"red",maxWidth:"432",messageSize:"16",titleSize:"16",progressBar:!1})}c.style.display="none";b.addEventListener("submit",a=>{if(a.preventDefault(),L.textContent="",l.set("q",n.value),n.value.trim()===""||n.value.trim()===" "){m("please, fill the search request");return}else{c.style.display="block";const s=`${q}${l}`;v(s).then(r=>{r.hits.length===0?(c.style.display="none",m(`Sorry, there are no images matching your search query.
                 Please try again!`),n.value=""):(c.style.display="none",S(r.hits,".gallery"),new g(".gallery-item a",{captionSelector:"img",captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:1,className:"custom-lightbox",docClose:!0,animationSpeed:500,fadeSpeed:500,rtl:!0}).refresh(),n.value="")})}});
//# sourceMappingURL=commonHelpers.js.map
