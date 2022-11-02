var F=Object.defineProperty;var z=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var I=(e,s,t)=>s in e?F(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,L=(e,s)=>{for(var t in s||(s={}))D.call(s,t)&&I(e,t,s[t]);if(z)for(var t of z(s))B.call(s,t)&&I(e,t,s[t]);return e};import{d as v,r as N,o as c,c as p,a as o,F as x,b as A,e as V,n as P,f as R,g as y,h as j,i as f,w as m,v as C,t as E,j as _,L as q,l as S,k as O,m as U,p as K,q as G,s as k,u as T,x as M,y as W,z as H}from"./vendor.js";const Z=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};Z();var g=(e,s)=>{const t=e.__vccOpts||e;for(const[a,i]of s)t[a]=i;return t};const J=v({components:{SearchIcon:N}}),Y={class:"fixed right-10 bottom-10 bg-gray-800 rounded-full p-2 drop-shadow-lg cursor-pointer border border-gray-100 text-gray-100"},Q=o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1665031364/mapche-icon_e6536c.png",class:"h-8 w-8"},null,-1),X=[Q];function ee(e,s,t,a,i,r){return c(),p("div",Y,X)}var te=g(J,[["render",ee]]);const se={clickableIcons:!1,streetViewControl:!1,panControlOptions:!1,mapTypeControl:!0,zoomControlOptions:{style:"SMALL"},zoom:2,minZoom:17,maxZoom:19,tilt:0,styles:[{featureType:"all",elementType:"all",stylers:[{hue:"#e7ecf0"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#8ed863"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-70}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#8abdec"}]},{featureType:"water",elementType:"geometry.stroke",stylers:[{color:"#9cbbf0"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]}]},oe=v({emits:["choice"],props:{results:{type:Array,default:[]},selected:{type:Number,default:0}},watch:{selected(e,s){var t,a;if(e!==-1&&e!==s){const i=(t=document.getElementById("catche-search"))==null?void 0:t.shadowRoot;(a=i==null?void 0:i.getElementById(`result-${e}`))==null||a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}}}}),ne={class:"text-gray-700 flex flex-col divide-y"},ie=["place_id","onClick"],ae=["innerHTML"],re={key:0};function le(e,s,t,a,i,r){return c(),p("div",ne,[(c(!0),p(x,null,A(e.results,(l,d)=>(c(),p("a",{key:d,place_id:`result-${d}`,class:P(["px-5 py-4 hover:bg-gray-100 cursor-pointer flex flex-col gap-1",e.selected===d?"selected bg-gray-100":""]),onClick:n=>e.$emit("choice",[l])},[o("p",{class:"truncate",innerHTML:l.description},null,8,ae)],10,ie))),128)),e.results.length?(c(),p("div",re)):V("",!0)])}var de=g(oe,[["render",le]]);const ce={},pe={id:"mapche-branding",class:"text-gray-300 flex gap-1 justify-end px-3 py-2 text-xs font-bold"},ue=o("span",null,[R("Powered by "),o("a",{class:"text-gray-400",href:"https://localhost:3000"},"mapche")],-1),he=[ue];function me(e,s){return c(),p("div",pe,he)}var fe=g(ce,[["render",me]]);async function _e(e,s){let t=`https://api.coverage.28east.co.za/getfeasibility?latitude=${e}&longitude=${s}&key=6e7bae18-76af-47bf-b70c-eeedf3ffb603`,a=`https://api.skywire.28east.co.za/getfeasibility?latitude=${e}&longitude=${s}&key=AIzaSyAySpObpjh0l7ioizhytsGhCLzvZXWH7Hk`,i=`https://api.linkafrica.28east.co.za/getfeasibility?latitude=${e}&longitude=${s}&key=AIzaSyAOAj12Acwepe5arxviEzJDV-P10q7sU78`;const r=y.get(t).catch(u=>null),l=y.get(a).catch(u=>null),d=y.get(i).catch(u=>null);let n=await y.all([r,l,d]).then(y.spread((...u)=>(u[0],u[1],u[2],u))).catch(u=>{console.error(u)});for(var b=0;b<n.length;b++){const u=n[b].data.services;if(n[b].data.products,u&&typeof u.find(h=>h.full_name.includes("Business Fibre"))!="undefined"){u.find(h=>h.full_name.includes("Business Fibre")).full_name;for(var $=0;$<n.length;$++){const h=u[$];h&&(h.providers.find(w=>w.provider.includes("metrofibre")),h.providers.find(w=>w.provider.includes("frogfoot")),h.providers.find(w=>w.provider.includes("linkafrica")),h.providers.find(w=>w.provider.includes("dfa")))}}}return n}const ge=v({props:{modelValue:{type:String}},components:{SearchIcon:N,EyeIcon:j},data(){return{}},computed:{inputValue:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},ctrlKey(){let e="";return navigator.platform?e=navigator.platform.toLowerCase():navigator.userAgentData&&(e=navigator.userAgentData.platform.toLowerCase()),e.includes("mac")||e.includes("iphone")||e.includes("ipad")?"\u2318":"Ctrl"}},methods:{locatorButtonPressed(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.getAddressFrom(e.coords.latitude,e.coords.longitude)},e=>{this.error=e.message}):(this.error=error.message,console.log("Your browser does not support the geolocation API"))},getAddressFrom(e,s){y.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+s+"&key=AIzaSyCR53JRsi0Zmw14Igetqbr9OAx37O5EOT4").then(t=>{t.data.error_message?this.error=t.data.error_message:this.address=t.data.results[0].formatted_address}).catch(t=>{this.error=t.message,console.log(t.message)})},focus(){this.$refs.input.focus()},unfocus(){this.$refs.input.blur()}}}),ye={class:"relative flex gap-4 p-4"},ve={class:"flex items-center pointer-events-none"},be={class:"hidden sm:flex absolute inset-y-0 right-4 text-xs text-gray-300 justify-center items-center"},we={id:"catche-shortcut",class:"border rounded flex justify-center items-center py-0.5 px-1"};function ke(e,s,t,a,i,r){const l=_("SearchIcon");return c(),p("div",ye,[o("div",ve,[f(l,{class:"h-7 w-7 text-gray-400","aria-hidden":"true"})]),m(o("input",{ref:"input","onUpdate:modelValue":s[0]||(s[0]=d=>e.inputValue=d),type:"text",placeholder:"Enter your address...",class:"focus:ring-0 focus:border-0 focus-visible:outline-none p-0 w-full bg-transparent border-0 text-lg"},null,512),[[C,e.inputValue]]),o("div",be,[o("span",we,E(e.ctrlKey)+" + M",1)])])}var xe=g(ge,[["render",ke]]);const $e=v({async mounted(){const e={version:"weekly",libraries:["places"]},t=await new q(this.apiKey,e).load();this.google=t,this.initService()},props:{sessionNew:Object},components:{SearchBox:xe},debounceMsec:{type:Number,default:1e3},data(){return{google:null,location:"",places:[],googleSessionToken:[],searchService:null,placesService:null,selected:0,apiKey:"AIzaSyDj2IO0ORaSNsK8QfwF6smchysLLzhHq6c",username:"",password:"",errors:[]}},watch:{location(e){if(S.exports.isEmpty(e)||e.length<3){this.places=[];return}else this.googleSessionToken.length==0?this.generateNewSessionToken():this.sessionNew.length==0?this.generateNewSessionToken():this.search(),this.search()}},created(){this.generateNewSessionToken=S.exports.debounce(this.generateNewSessionToken,500),this.search=S.exports.debounce(this.search,500)},methods:{initService(){this.searchService=new this.google.maps.places.AutocompleteService},search:async function(){try{if(this.location==""){console.log("location is empty");return}else{var e=(await this.searchService.getPlacePredictions({input:this.location,sessionToken:this.googleSessionToken,componentRestrictions:{country:"ZA"}})).predictions;this.$emit("toResults",[e,this.googleSessionToken])}}catch(s){console.log(s)}},async generateNewSessionToken(){this.googleSessionToken=await new google.maps.places.AutocompleteSessionToken,console.log(this.googleSessionToken)},async authToken(){y.defaults.headers.common.Authorization="",localStorage.removeItem("token");const e={username:"test@test.co.za",password:"Willem1@"};await y.post("http://192.168.1.67:8000/api/v1/token/login/",e).then(s=>{const t=s.data.auth_token;console.log(t),y.defaults.headers.common.Authorization="Token "+t,localStorage.setItem("token",t)}).catch(s=>{if(s.response)for(const t in s.response.data)this.errors.push(`${t}: ${s.response.data[t]}`);else s.message&&this.errors.push("Something went wrong. Please try again!")})}}});function Se(e,s,t,a,i,r){const l=_("SearchBox");return c(),O(l,{class:"catche-input",modelValue:e.location,"onUpdate:modelValue":s[0]||(s[0]=d=>e.location=d),ref:"searchBox"},null,8,["modelValue"])}var Te=g($e,[["render",Se]]);const Ae=v({data:()=>({data:"This is form the child"})}),Ee=o("h3",null,"Hello from Child",-1);function Me(e,s,t,a,i,r){return c(),p("div",null,[Ee,U(e.$slots,"default",{data:e.data})])}var Ce=g(Ae,[["render",Me]]);const Pe=v({mounted(){},props:{mapConfig:Object,searchValue:String,googleSessionToken:Object},components:{Child:Ce},data(){return{popup:"",Popup:"",lat:0,lng:0,index:0,detailResults:{},searchID:0,testdull:0,company:"",contact_person:"",email:"",phone:"",estimated_value:0,confidence:0,website:"",status:"new",priority:"medium",formatted_address:"",location_lat:0,location_lng:0,location_type:"",place_id:"",address_component_nr:"",address_component_street:"",address_component_suburb:"",address_component_town:"",address_component_metro:"",address_component_province:"",address_component_province_short:"",address_component_country:"",address_component_country_short:"",address_component_postal_code:"",images:[{id:1,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1661005932/Marker-Pindrop_jqhe19.png",alt:"Red"},{id:2,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1660849611/Marker-MTN_pxapfa.png",alt:"Yellow"},{id:3,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1660849844/Marker-MFN_pphbrv.png",alt:"Blue"},{id:4,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1661072056/Marker-Openserve_iptfmk.png",alt:"Green"}]}},watch:{searchValue(e){S.exports.isEmpty(e)||e.length<3||(this.definePopupClass(),this.showmap())}},methods:{definePopupClass(){this.Popup=function(e,s){this.position=e,s.classList.add("popup-bubble-content");var t=document.createElement("div");t.classList.add("popup-bubble-anchor"),t.appendChild(s),this.anchor=document.createElement("div"),this.anchor.classList.add("popup-tip-anchor"),this.anchor.appendChild(t),this.stopEventPropagation()},this.Popup.prototype=Object.create(google.maps.OverlayView.prototype),this.Popup.prototype.onAdd=function(){this.getPanes().floatPane.appendChild(this.anchor)},this.Popup.prototype.onRemove=function(){this.anchor.parentElement&&this.anchor.parentElement.removeChild(this.anchor)},this.Popup.prototype.draw=function(){var e=this.getProjection().fromLatLngToDivPixel(this.position),s=Math.abs(e.x)<4e3&&Math.abs(e.y)<4e3?"block":"none";s==="block"&&(this.anchor.style.left=e.x+"px",this.anchor.style.top=e.y+"px"),this.anchor.style.display!==s&&(this.anchor.style.display=s)},this.Popup.prototype.stopEventPropagation=function(){var e=this.anchor;e.style.cursor="auto",["click","dblclick","contextmenu","wheel","mousedown","touchstart","pointerdown"].forEach(function(s){e.addEventListener(s,function(t){t.stopPropagation()})})}},testkey(){console.log("working")},showmap(){const e=this.$refs.googleMap,s=new google.maps.Map(e,this.mapConfig);if(this.searchValue!=null){const t=new google.maps.places.PlacesService(s),a={placeId:this.searchValue,sessionToken:this.googleSessionToken,fields:["address_component","formatted_address","geometry","name","place_id","type","url"]};t.getDetails(a,async(i,r)=>{var b;if(r!="OK"||!i)throw new Error(r);this.detailResults=i,console.log(this.detailResults);const l=(b=i.geometry)==null?void 0:b.location,d=this.images[this.index];this.index=(this.index+1)%this.images.length;const n=new google.maps.Marker({position:l,map:s,icon:d.src,animation:google.maps.Animation.DROP});n.addListener("click",()=>{this.popup=new this.Popup(l,document.getElementById("content")),this.popup.setMap(s)}),this.$emit("toLoc",l),s.setCenter(n.position)})}},async submitForm(){const e=JSON.parse(JSON.stringify(this.detailResults));this.address_component_nr="",this.address_component_street="",this.address_component_suburb="",this.address_component_town="",this.address_component_metro="",this.address_component_province="",this.address_component_province_short="",this.address_component_country="",this.address_component_country_short="",this.address_component_postal_code="",typeof e.address_components.find(t=>t.types.includes("street_number"))!="undefined"&&(this.address_component_nr=e.address_components.find(t=>t.types.includes("street_number")).long_name),typeof e.address_components.find(t=>t.types.includes("route"))!="undefined"&&(this.address_component_street=e.address_components.find(t=>t.types.includes("route")).long_name),typeof e.address_components.find(t=>t.types.includes("sublocality"))!="undefined"&&(this.address_component_suburb=e.address_components.find(t=>t.types.includes("sublocality")).long_name),typeof e.address_components.find(t=>t.types.includes("locality"))!="undefined"&&(this.address_component_town=e.address_components.find(t=>t.types.includes("locality")).long_name),typeof e.address_components.find(t=>t.types.includes("administrative_area_level_2"))!="undefined"&&(this.address_component_metro=e.address_components.find(t=>t.types.includes("administrative_area_level_2")).long_name),typeof e.address_components.find(t=>t.types.includes("administrative_area_level_1"))!="undefined"&&(this.address_component_province=e.address_components.find(t=>t.types.includes("administrative_area_level_1")).long_name,this.address_component_province_short=e.address_components.find(t=>t.types.includes("administrative_area_level_1")).short_name),typeof e.address_components.find(t=>t.types.includes("country"))!="undefined"&&(this.address_component_country=e.address_components.find(t=>t.types.includes("country")).long_name,this.address_component_country_short=e.address_components.find(t=>t.types.includes("country")).short_name),typeof e.address_components.find(t=>t.types.includes("postal_code"))!="undefined"&&(this.address_component_postal_code=e.address_components.find(t=>t.types.includes("postal_code")).long_name);const s={formatted_address:e.formatted_address,location_lat:e.geometry.location.lat,location_lng:e.geometry.location.lng,location_type:"",place_id:e.place_id,address_component_nr:this.address_component_nr,address_component_street:this.address_component_street,address_component_suburb:this.address_component_suburb,address_component_town:this.address_component_town,address_component_metro:this.address_component_metro,address_component_province:this.address_component_province,address_component_province_short:this.address_component_province_short,address_component_country:this.address_component_country,address_component_country_short:this.address_component_country_short,address_component_postal_code:this.address_component_postal_code};await y.post("http://192.168.1.67:8000/api/v1/searchresults/",s).then(t=>{console.log(t)}).catch(t=>{console.log(t)})}}}),ze={id:"myDIV",class:"google-map",ref:"googleMap"},Ie={id:"content"};function Le(e,s,t,a,i,r){return c(),p(x,null,[o("div",ze,null,512),o("div",Ie,[o("button",{onClick:s[0]||(s[0]=(...l)=>e.testkey&&e.testkey(...l))},"hello testing if working")])],64)}var Ne=g(Pe,[["render",Le]]);const Ve=v({async mounted(){this.test=!1;let e=document.querySelector(".toggle");e==null||e.addEventListener("click",this.onToggleClick),setTimeout(()=>this.speeds=["All","10 Mbps","20 Mbps","50 Mbps","100 Mbps","200 Mbps","300 Mbps","500 Mbps","1000 Mbps","1000 Mbps +"]),setTimeout(()=>this.terms=["All","1 Month","12 Month","24 Month","36 Month","48 Month","60 Month"])},components:{FormWizard:K,TabContent:G},emits:["close"],props:{options:Object,amount:{type:Number,default:0},selected:{type:Number,default:0}},data(){return{test:!1,step:1,selectedSpeed:"Select option",selectedTerm:"Select option",selectedProvider:null,selectedRouter:null,selectedVoiceVLAN:null,speeds:null,terms:null,fullName:"",companyName:null,referral:null}},computed:{stepperProgress(){return 100/2*(this.step-1)+"%"}},watch:{},methods:{async onProviderClick(e){let s=e.currentTarget;console.log(s.id),s.id==1&&(console.log("fibre"),this.test=!0),s.id==2&&console.log("2")},async onToggleClick(){let e=Math.abs(this.amount)*-1;document.documentElement.style.setProperty("--transform-amount",this.amount+""),document.documentElement.style.setProperty("--transform-les-amount",e+"");let s=document.querySelector(".menu");s==null||s.classList.toggle("active"),document.querySelectorAll("li").forEach(a=>a.addEventListener("click",this.onProviderClick)),console.log(this.amount)}}}),Oe={class:"backview"},Fe={class:"menu"},De=o("div",{class:"toggle"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[o("path",{d:"M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"})])],-1),Be={class:"img__wrap",id:"1",style:{"--i":"0"}},Re=o("a",{href:"#"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1666596643/icons8-cable-100_hu48qi.png",class:"w-7 h-7"})],-1),je=o("p",{class:"font-semibold text-xs img__description"},"Fiber",-1),qe=[Re,je],Ue={class:"img__wrap",id:"2",style:{"--i":"1"}},Ke=o("a",{href:"#"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1666344648/icons8-radio-tower-100_hwvfgt.png",class:"w-7 h-7"})],-1),Ge=o("p",{class:"font-semibold text-xs img__description"},"Wireless",-1),We=[Ke,Ge],He={class:"img__wrap",id:"3",style:{"--i":"2"}},Ze=o("a",{href:"#"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1666344648/icons8-sim-card-100_im4tja.png",class:"w-7 h-7"})],-1),Je=o("p",{class:"font-semibold text-xs img__description"},"LTE/5G",-1),Ye=[Ze,Je],Qe={class:"img__wrap",id:"4",style:{"--i":"3"}},Xe=o("a",{href:"#"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1662725817/Drop-MFN_wzvij3.png"})],-1),et=o("p",{class:"font-semibold text-xs img__description"},"EEE",-1),tt=[Xe,et],st={class:"wrapper-stepper"},ot={class:"stepper"},nt={class:"form-group"},it=o("label",{for:"fullName"},"Full Name",-1),at={role:"list",class:"grid grid-cols-2 my-2 space-y-2"},rt={key:0,class:"flex space-x-3"},lt=o("svg",{"aria-hidden":"true",class:"flex-shrink-0 mt-5 w-5 h-5 text-gray-400 dark:text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("title",null,"Check icon"),o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),dt=o("span",{class:"mt-5 text-base font-medium leading-tight text-gray-500 dark:text-gray-400"},"Link Speed",-1),ct=[lt,dt],pt={key:1,class:"flex space-x-3"},ut=o("svg",{"aria-hidden":"true",class:"flex-shrink-0 mt-5 w-5 h-5 text-mapche-blue dark:text-mapche-blue",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("title",null,"Check icon"),o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),ht=o("span",{class:"mt-5 text-base font-medium leading-tight text-gray-500 dark:text-gray-400"},"Link Speed",-1),mt=[ut,ht],ft={class:"flex space-x-3"},_t=o("option",{selected:""},"Select option",-1),gt=["value"],yt={key:2,class:"flex space-x-3"},vt=o("svg",{"aria-hidden":"true",class:"flex-shrink-0 mt-5 w-5 h-5 text-mapche-blue dark:text-mapche-blue",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("title",null,"Check icon"),o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),bt=o("span",{class:"mt-5 text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Contract Term",-1),wt=[vt,bt],kt={key:3,class:"flex space-x-3"},xt=o("svg",{"aria-hidden":"true",class:"flex-shrink-0 mt-5 w-5 h-5 text-gray-400 dark:text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("title",null,"Check icon"),o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),$t=o("span",{class:"mt-5 text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Contract Term",-1),St=[xt,$t],Tt={class:"flex space-x-3"},At=o("option",{selected:""},"Select option",-1),Et=["value"],Mt={class:"form-group"},Ct=o("label",{for:"companyName"},"Your Company Name",-1),Pt={class:"form-group"},zt=o("label",{for:"referral"},"From Where did you hear about us",-1),It=o("option",null,"Newspaper",-1),Lt=o("option",null,"Online Ad",-1),Nt=o("option",null,"Friend",-1),Vt=o("option",null,"Other",-1),Ot=[It,Lt,Nt,Vt];function Ft(e,s,t,a,i,r){const l=_("TabContent"),d=_("FormWizard");return c(),p("div",Oe,[m(o("div",Fe,[De,(c(!0),p(x,null,A(e.options,n=>(c(),p("ul",null,[m(o("li",Be,qe,512),[[k,n.available==="fibre"]]),m(o("li",Ue,We,512),[[k,n.available==="wireless"]]),m(o("li",He,Ye,512),[[k,n.available==="lte"]]),m(o("li",Qe,tt,512),[[k,n.available==="EEE"]])]))),256))],512),[[k,!e.test]]),m(o("div",st,[o("div",ot,[f(d,{color:"#ed2590"},{default:T(()=>[f(l,{title:"Options",customIcon:"<img src='https://img.icons8.com/sf-regular-filled/96/FFFFFF/shopping-cart.png' width='40px' />"},{default:T(()=>[o("div",nt,[it,m(o("input",{type:"text",class:"form-control",placeholder:"Enter your name","onUpdate:modelValue":s[0]||(s[0]=n=>e.fullName=n)},null,512),[[C,e.fullName]]),o("ul",at,[e.selectedSpeed==="Select option"?(c(),p("li",rt,ct)):(c(),p("li",pt,mt)),o("li",ft,[m(o("select",{"onUpdate:modelValue":s[1]||(s[1]=n=>e.selectedSpeed=n),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mapche-blue focus:border-mapche-blue dark:bg-gray-700 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mapche-blue dark:focus:border-mapche-blue"},[_t,(c(!0),p(x,null,A(e.speeds,n=>(c(),p("option",{value:n},E(n),9,gt))),256))],512),[[M,e.selectedSpeed]])]),e.selectedSpeed!="Select option"&&e.selectedTerm!="Select option"?(c(),p("li",yt,wt)):(c(),p("li",kt,St)),o("li",Tt,[m(o("select",{"onUpdate:modelValue":s[2]||(s[2]=n=>e.selectedTerm=n),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mapche-blue focus:border-mapche-blue dark:bg-gray-700 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mapche-blue dark:focus:border-mapche-blue"},[At,(c(!0),p(x,null,A(e.terms,n=>(c(),p("option",{value:n},E(n),9,Et))),256))],512),[[M,e.selectedTerm]])])])])]),_:1}),f(l,{title:"Extra",customIcon:"<img src='https://img.icons8.com/ios-filled/100/FFFFFF/add-tag.png' width='40px' />"},{default:T(()=>[o("div",Mt,[Ct,m(o("input",{type:"text",class:"form-control",placeholder:"Enter your Company / Organization name","onUpdate:modelValue":s[3]||(s[3]=n=>e.companyName=n)},null,512),[[C,e.companyName]])])]),_:1}),f(l,{title:"Finishing Up",customIcon:"<img src='https://img.icons8.com/material/48/FFFFFF/filled-sent.png' width='40px' />"},{default:T(()=>[o("div",Pt,[zt,m(o("select",{class:"form-control","onUpdate:modelValue":s[4]||(s[4]=n=>e.referral=n)},Ot,512),[[M,e.referral]])])]),_:1})]),_:1})])],512),[[k,e.test]])])}var Dt=g(Ve,[["render",Ft]]);const Bt=v({props:{text:{required:!1,type:String,default:"Fetching Results"}}}),Rt={class:"loading-box"},jt=W('<div class="dots" data-v-1686ae83><div class="dot" data-v-1686ae83></div><div class="dot" data-v-1686ae83></div><div class="dot" data-v-1686ae83></div><div class="dot" data-v-1686ae83></div><div class="dot" data-v-1686ae83></div></div>',1);function qt(e,s,t,a,i,r){return c(),p("div",Rt,[jt,o("div",null,E(e.text),1)])}var Ut=g(Bt,[["render",qt],["__scopeId","data-v-1686ae83"]]);const Kt=v({async mounted(){document.addEventListener("keydown",e=>{const s=e.key;s==="ArrowUp"?(e.preventDefault(),this.selected=Math.max(0,this.selected-1)):s==="ArrowDown"?(e.preventDefault(),this.selected=Math.min(Math.max(this.places.length-1,0),this.selected+1)):s==="Backspace"||s==="Delete"?this.PInfo=[]:s==="Enter"&&(e.preventDefault(),this.location=this.places[this.selected].description,this.placeid=this.places[this.selected].place_id,this.open=!1,this.places=[],console.log(this.selected))},!1)},props:{show:{type:Boolean,default:!1},data:{type:Array,default:[]}},components:{Results:de,Branding:fe,GoogleMapAutocomplete:Te,GoogleMapLoader:Ne,Options:Dt,Spinner:Ut},computed:{mapConfig(){return L({},se)}},data(){return{open:!1,newgoogleSession:!1,location:"",lekker:"",seachValue:"",placeid:"",amount:0,abc:null,searchService:null,placesService:null,places:[],googleSessionToken:[],results:[],selected:0,debounceTimerId:null,debounceTimeout:50,searcher:null,geocoderresults:[],lat:0,lng:0,latlng:"",PInfo:[],providerApiresults:[],error:"",loading:!1,OSTest:""}},watch:{location(e){if(this.selected=0,this.debounceTimerId&&clearTimeout(this.debounceTimerId),!e)this.placeid="",this.open=!1;else{if(S.exports.isEmpty(e)||e.length<3){this.open=!1,this.PInfo=[],this.placeid="";return}this.open=!0,this.newgoogleSession=!1,this.debounceTimerId=setTimeout(()=>{},this.debounceTimeout)}}},methods:{async providers(e,s){this.loading=!0,await _e(e,s).then(t=>{for(var a=0;a<t.length;a++){const i=t[a].data.services,r=t[a].data.products,l=t[a].data.Zone,d=t[a].data.Available_Products;i?typeof i.find(n=>n.type.includes("fibre"))!="undefined"&&(console.log("fibre mesh"),this.providerApiresults.some(n=>n.available==="fibre")||this.providerApiresults.push({available:"fibre"})):r?r[0].name?(typeof r.find(n=>n.name.includes("fibre"))!="undefined"&&(console.log("fibre skywire"),this.providerApiresults.some(n=>n.available==="fibre")||this.providerApiresults.push({available:"fibre"})),typeof r.find(n=>n.name.includes("wireless"))!="undefined"&&(console.log("wireless skywire"),this.providerApiresults.some(n=>n.available==="wireless")||this.providerApiresults.push({available:"wireless"})),typeof r.find(n=>n.name.includes("lte"))!="undefined"&&(console.log("lte skywire"),this.providerApiresults.some(n=>n.available==="lte")||this.providerApiresults.push({available:"lte"}))):r[0].network_name&&typeof r.find(n=>n.network_name.includes("fibre"))!="undefined"&&(console.log("fibre link africa"),this.providerApiresults.some(n=>n.available==="fibre")||this.providerApiresults.push({available:"fibre"})):d&&l!=0&&(d.ME&&d.ME.Description.includes("fibre")&&(console.log("fibre openserve"),this.providerApiresults.some(n=>n.available==="fibre")||this.providerApiresults.push({available:"fibre"})),d.EEE&&d.EEE.Description.includes("Ethernet")&&(console.log("EEE openserve"),this.providerApiresults.some(n=>n.available==="EEE")||this.providerApiresults.push({available:"EEE"})))}for(var a=0;a<this.providerApiresults.length;a++)this.amount=this.amount+1;console.log(this.providerApiresults)}).catch(t=>{console.log(t)}),this.loading=!1,this.newgoogleSession=!1,this.OSTest="1"},getConnOpen(e,s){y.get("https://apps.openserve.co.za/gis/apps/api/ucmAPIEthernetAvailability?LAT="+e+"&LON="+s).then(t=>{t.data.error_message?this.error=t.data.error_message:(console.log(t.data.Available_Products),this.PInfo=t.data.Available_Products,this.PInfo?(console.log(this.PInfo.ME.Description),console.log(this.PInfo.EEE.Description)):console.log("No Products"))}).catch(t=>{this.error=t.message})},thumbup(e){this.lat=e.lat(),this.lng=e.lng(),this.PInfo=[],this.placeid="",this.providers(this.lat,this.lng)},handler(e){this.places=e[0],this.googleSessionToken=e[1]},lochandler(e){this.lat=e.lat(),this.lng=e.lng(),this.newgoogleSession=!0,this.googleSessionToken=[]},choice(e){this.seachValue=e[0].description,this.placeid=e[0].place_id,this.location=this.seachValue,this.open=!1,this.PInfo=[],this.places=[]},updateDebounce(e){this.debounceTimeout=.9*this.debounceTimeout+.1*e}}}),Gt={key:0};function Wt(e,s,t,a,i,r){const l=_("GoogleMapAutocomplete"),d=_("Results"),n=_("GoogleMapLoader"),b=_("Spinner"),$=_("Options"),u=_("Branding");return c(),p("div",{class:P(["font-sans text-sm w-full sm:w-128 max-w-full bg-white shadow-catche fixed top-0 sm:top-1/2 left-1/2 -translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl flex flex-col divide-y overflow-hidden",[e.show?"opacity-100":"opacity-0 pointer-events-none",e.open?"h-auto":"h-[3.75rem]"]]),style:{transition:"opacity 300ms, height 300ms"}},[f(l,{modelValue:e.location,"onUpdate:modelValue":s[0]||(s[0]=h=>e.location=h),sessionNew:e.googleSessionToken,onToResults:e.handler},null,8,["modelValue","sessionNew","onToResults"]),f(d,{results:e.places,onChoice:e.choice,selected:e.selected},null,8,["results","onChoice","selected"]),f(n,{modelValue:e.location,"onUpdate:modelValue":s[1]||(s[1]=h=>e.location=h),mapConfig:e.mapConfig,searchValue:e.placeid,googleSessionToken:e.googleSessionToken,onToLoc:e.lochandler,onProvider:e.thumbup},null,8,["modelValue","mapConfig","searchValue","googleSessionToken","onToLoc","onProvider"]),e.loading?(c(),p("div",Gt,[f(b)])):V("",!0),m(f($,{class:"h-auto overflow-y-auto",options:e.providerApiresults,amount:e.amount},null,8,["options","amount"]),[[k,e.OSTest]]),f(u)],2)}var Ht=g(Kt,[["render",Wt]]);const Zt=v({async mounted(){const e=document.querySelector("script[catche-key],script[catche-data]");let s=null;e&&(s=e.getAttribute("catche-data"),this.catcheKey=e.getAttribute("catche-key")),s?await this.loadCustomData(s):await this.loadData(),document.addEventListener("keydown",t=>{const a=t.key;(t.ctrlKey||t.metaKey)&&a==="m"?(t.preventDefault(),this.show=!this.show):a==="Escape"&&(this.show=!1)},!1)},components:{Icon:te,SearchMenu2:Ht},data(){return{catcheKey:"00000000-0000-0000-0000-000000000000",show:!1,searcher:null,data:[]}},methods:{toggle(){this.show=!this.show},async loadData(){},async loadCustomData(e){await fetch(e).then(s=>s.json()).then(s=>this.data=s)}}});function Jt(e,s,t,a,i,r){const l=_("Icon"),d=_("SearchMenu2");return c(),p(x,null,[f(l,{id:"catche-icon",class:"catche-icon",onClick:e.toggle,style:{"z-index":"2147483645"}},null,8,["onClick"]),o("div",{id:"catche-background",class:P(["fixed top-0 left-0 bg-white h-screen w-screen transition-all duration-300",e.show?"show opacity-80":"opacity-0 pointer-events-none"]),onClick:s[0]||(s[0]=n=>e.show=!1),style:{"z-index":"2147483646"}},null,2),f(d,{id:"catche-menu",show:e.show,data:e.data,style:{"z-index":"2147483647"}},null,8,["show","data"])],64)}var Yt=g(Zt,[["render",Jt]]);const Qt=v({components:{Main:Yt}});function Xt(e,s,t,a,i,r){const l=_("Main");return c(),O(l)}var es=g(Qt,[["render",Xt]]);(function(){var d;const s=document.querySelector("script[catche-css]");let t=null;s&&(t=s.getAttribute("catche-css"));const a=document.createElement("div");a.setAttribute("id","catche-search");const i=((d=a.attachShadow)==null?void 0:d.call(a,{mode:"open"}))||a,r=document.createElement("link");if(r.setAttribute("rel","stylesheet"),r.setAttribute("href","https://cdn.jsdelivr.net/gh/Bluejuice1001/mapche-search-widget@0.1.0/dist/index.css"),i.appendChild(r),t){const n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",t),i.appendChild(n)}const l=document.createElement("div");i.appendChild(l),H(es).mount(l),document.body.appendChild(a)})();
