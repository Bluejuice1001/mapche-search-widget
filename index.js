var B=Object.defineProperty;var I=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var O=(e,s,t)=>s in e?B(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,V=(e,s)=>{for(var t in s||(s={}))R.call(s,t)&&O(e,t,s[t]);if(I)for(var t of I(s))q.call(s,t)&&O(e,t,s[t]);return e};import{d as b,r as F,o as c,c as d,a as o,F as S,b as C,e as k,n as N,f as P,g as y,h as j,i as m,w as _,v as L,t as T,j as f,L as U,l as x,k as D,m as M,p as K,q as G,s as A,u as E,x as z,y as W,z as J}from"./vendor.js";const Z=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}};Z();var v=(e,s)=>{const t=e.__vccOpts||e;for(const[i,a]of s)t[i]=a;return t};const H=b({components:{SearchIcon:F}}),Y={class:"fixed right-10 bottom-10 bg-gray-800 rounded-full p-2 drop-shadow-lg cursor-pointer border border-gray-100 text-gray-100"},Q=o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1665031364/mapche-icon_e6536c.png",class:"h-8 w-8"},null,-1),X=[Q];function ee(e,s,t,i,a,r){return c(),d("div",Y,X)}var te=v(H,[["render",ee]]);const se={clickableIcons:!1,streetViewControl:!1,panControlOptions:!1,mapTypeControl:!0,zoomControlOptions:{style:"SMALL"},zoom:2,minZoom:17,maxZoom:19,tilt:0,styles:[{featureType:"all",elementType:"all",stylers:[{hue:"#e7ecf0"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#8ed863"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-70}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#8abdec"}]},{featureType:"water",elementType:"geometry.stroke",stylers:[{color:"#9cbbf0"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]}]},oe=b({emits:["choice"],props:{results:{type:Array,default:[]},selected:{type:Number,default:0}},watch:{selected(e,s){var t,i;if(e!==-1&&e!==s){const a=(t=document.getElementById("catche-search"))==null?void 0:t.shadowRoot;(i=a==null?void 0:a.getElementById(`result-${e}`))==null||i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}}}}),ne={class:"text-gray-700 flex flex-col divide-y"},ie=["place_id","onClick"],ae=["innerHTML"],re={key:0};function le(e,s,t,i,a,r){return c(),d("div",ne,[(c(!0),d(S,null,C(e.results,(l,p)=>(c(),d("a",{key:p,place_id:`result-${p}`,class:N(["px-5 py-4 hover:bg-gray-100 cursor-pointer flex flex-col gap-1",e.selected===p?"selected bg-gray-100":""]),onClick:n=>e.$emit("choice",[l])},[o("p",{class:"truncate",innerHTML:l.description},null,8,ae)],10,ie))),128)),e.results.length?(c(),d("div",re)):k("",!0)])}var ce=v(oe,[["render",le]]);const de={},pe={id:"mapche-branding",class:"text-gray-300 flex gap-1 justify-end px-3 py-2 text-xs font-bold"},ue=o("span",null,[P("Powered by "),o("a",{class:"text-gray-400",href:"https://localhost:3000"},"mapche")],-1),he=[ue];function me(e,s){return c(),d("div",pe,he)}var fe=v(de,[["render",me]]);async function ge(e,s){let t=`https://api.coverage.28east.co.za/getfeasibility?latitude=${e}&longitude=${s}&key=6e7bae18-76af-47bf-b70c-eeedf3ffb603`,i=`https://api.skywire.28east.co.za/getfeasibility?latitude=${e}&longitude=${s}&key=AIzaSyAySpObpjh0l7ioizhytsGhCLzvZXWH7Hk`,a=`https://api.linkafrica.28east.co.za/getfeasibility?latitude=${e}&longitude=${s}&key=AIzaSyAOAj12Acwepe5arxviEzJDV-P10q7sU78`;const r=y.get(t).catch(u=>null),l=y.get(i).catch(u=>null),p=y.get(a).catch(u=>null);let n=await y.all([r,l,p]).then(y.spread((...u)=>(u[0],u[1],u[2],u))).catch(u=>{console.error(u)});for(var g=0;g<n.length;g++){const u=n[g].data.services;if(n[g].data.products,u&&typeof u.find(h=>h.full_name.includes("Business Fibre"))!="undefined"){u.find(h=>h.full_name.includes("Business Fibre")).full_name;for(var $=0;$<n.length;$++){const h=u[$];h&&(h.providers.find(w=>w.provider.includes("metrofibre")),h.providers.find(w=>w.provider.includes("frogfoot")),h.providers.find(w=>w.provider.includes("linkafrica")),h.providers.find(w=>w.provider.includes("dfa")))}}}return n}const _e=b({props:{modelValue:{type:String}},components:{SearchIcon:F,EyeIcon:j},data(){return{}},computed:{inputValue:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},ctrlKey(){let e="";return navigator.platform?e=navigator.platform.toLowerCase():navigator.userAgentData&&(e=navigator.userAgentData.platform.toLowerCase()),e.includes("mac")||e.includes("iphone")||e.includes("ipad")?"\u2318":"Ctrl"}},methods:{locatorButtonPressed(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.getAddressFrom(e.coords.latitude,e.coords.longitude)},e=>{this.error=e.message}):(this.error=error.message,console.log("Your browser does not support the geolocation API"))},getAddressFrom(e,s){y.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+s+"&key=AIzaSyCR53JRsi0Zmw14Igetqbr9OAx37O5EOT4").then(t=>{t.data.error_message?this.error=t.data.error_message:this.address=t.data.results[0].formatted_address}).catch(t=>{this.error=t.message,console.log(t.message)})},focus(){this.$refs.input.focus()},unfocus(){this.$refs.input.blur()}}}),ye={class:"relative flex gap-4 p-4"},ve={class:"flex items-center pointer-events-none"},be={class:"hidden sm:flex absolute inset-y-0 right-4 text-xs text-gray-300 justify-center items-center"},we={id:"catche-shortcut",class:"border rounded flex justify-center items-center py-0.5 px-1"};function ke(e,s,t,i,a,r){const l=f("SearchIcon");return c(),d("div",ye,[o("div",ve,[m(l,{class:"h-7 w-7 text-gray-400","aria-hidden":"true"})]),_(o("input",{ref:"input","onUpdate:modelValue":s[0]||(s[0]=p=>e.inputValue=p),type:"text",placeholder:"Enter your address...",class:"focus:ring-0 focus:border-0 focus-visible:outline-none p-0 w-full bg-transparent border-0 text-lg"},null,512),[[L,e.inputValue]]),o("div",be,[o("span",we,T(e.ctrlKey)+" + M",1)])])}var $e=v(_e,[["render",ke]]);const Se=b({async mounted(){const e={version:"weekly",libraries:["places"]},t=await new U(this.apiKey,e).load();this.google=t,this.initService()},props:{sessionNew:Object},components:{SearchBox:$e},debounceMsec:{type:Number,default:1e3},data(){return{google:null,location:"",places:[],googleSessionToken:[],searchService:null,placesService:null,selected:0,apiKey:"AIzaSyDj2IO0ORaSNsK8QfwF6smchysLLzhHq6c",username:"",password:"",errors:[]}},watch:{location(e){var s;if(x.exports.isEmpty(e)||e.length<3){this.places=[];return}else this.googleSessionToken.length==0?this.generateNewSessionToken():((s=this.sessionNew)==null?void 0:s.length)==0?this.generateNewSessionToken():this.search(),this.search()}},created(){this.generateNewSessionToken=x.exports.debounce(this.generateNewSessionToken,500),this.search=x.exports.debounce(this.search,500)},methods:{initService(){this.searchService=new this.google.maps.places.AutocompleteService},async search(){try{if(this.location==""){console.log("location is empty");return}else{const s=(await this.searchService.getPlacePredictions({input:this.location,sessionToken:this.googleSessionToken,componentRestrictions:{country:"ZA"}})).predictions;this.$emit("toResults",[s,this.googleSessionToken])}}catch(e){console.log(e)}},generateNewSessionToken(){this.googleSessionToken=new google.maps.places.AutocompleteSessionToken,console.log(this.googleSessionToken)},async authToken(){y.defaults.headers.common.Authorization="",localStorage.removeItem("token");const e={username:"test@test.co.za",password:"Willem1@"};await y.post("http://192.168.1.67:8000/api/v1/token/login/",e).then(s=>{const t=s.data.auth_token;console.log(t),y.defaults.headers.common.Authorization="Token "+t,localStorage.setItem("token",t)}).catch(s=>{if(s.response)for(const t in s.response.data)this.errors.push(`${t}: ${s.response.data[t]}`);else s.message&&this.errors.push("Something went wrong. Please try again!")})}}});function xe(e,s,t,i,a,r){const l=f("SearchBox");return c(),D(l,{class:"catche-input",modelValue:e.location,"onUpdate:modelValue":s[0]||(s[0]=p=>e.location=p),ref:"searchBox"},null,8,["modelValue"])}var Te=v(Se,[["render",xe]]);const Me=b({mounted(){},props:{mapConfig:Object,searchValue:String,googleSessionToken:Object},components:{},data(){return{map:null,index:0,placesServiceresults:[],latLng:"",infoContent:!1,container:"Rooftop?",geocodeUsed:!1,company:"",contact_person:"",email:"",phone:"",estimated_value:0,confidence:0,website:"",status:"new",priority:"medium",formatted_address:"",location_lat:0,location_lng:0,location_type:"",place_id:"",address_component_nr:"",address_component_street:"",address_component_suburb:"",address_component_town:"",address_component_metro:"",address_component_province:"",address_component_province_short:"",address_component_country:"",address_component_country_short:"",address_component_postal_code:"",images:[{id:1,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1661005932/Marker-Pindrop_jqhe19.png",alt:"Red"},{id:2,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1660849611/Marker-MTN_pxapfa.png",alt:"Yellow"},{id:3,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1660849844/Marker-MFN_pphbrv.png",alt:"Blue"},{id:4,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1661072056/Marker-Openserve_iptfmk.png",alt:"Green"}]}},watch:{searchValue(e){x.exports.isEmpty(e)||e.length<3||this.initMap()}},methods:{thumbup(){this.$emit("provider",this.latLng)},thumbdown(){this.container="Drag to Rooftop"},initMap(){const e=this.$refs.googleMap;this.map=new google.maps.Map(e,this.mapConfig),this.map!=null?this.placesService(this.searchValue,this.googleSessionToken):console.log("problem with initMap, googlemaploader.vue")},placesService(e,s){if(e!=null&&s!=null){const t=new google.maps.places.PlacesService(this.map),i={placeId:e,sessionToken:s,fields:["address_component","formatted_address","geometry","name","place_id","type","url"]};t.getDetails(i,async(a,r)=>{if(r!="OK"||!a)throw console.log("problem with service.getDetails, googlemaploader.vue"),new Error(r);this.placesServiceresults=a,this.geocodeUsed||this.Marker()})}else console.log("place_id, googleSessionToken empty placeService, googlemaploader.vue")},geocodelatLng(){new google.maps.Geocoder().geocode({location:this.latLng},async(s,t)=>{if(t!="OK"||!s)throw console.log("problem with service.geocode, googlemaploader.vue"),new Error(t);const i=s[1].place_id,a=await new google.maps.places.AutocompleteSessionToken;this.geocodeUsed=!0,this.container="Rooftop!",this.placesService(i,a)})},Marker(){const e=this.$refs.infocontentString,s=new google.maps.InfoWindow({content:e}),t=JSON.parse(JSON.stringify(this.placesServiceresults));this.latLng=t.geometry.location,this.placesServiceresults=t;const i=this.images[this.index];this.index=(this.index+1)%this.images.length;const a=new google.maps.Marker({position:this.latLng,map:this.map,icon:i.src,draggable:!0,title:"Click/Drag Me",animation:google.maps.Animation.DROP});google.maps.event.addListener(this.map,"click",()=>{s!=null&&s.close()}),google.maps.event.addListener(a,"click",()=>{s!=null&&s.close(),this.infoContent=!0,s.open(this.map,a)}),google.maps.event.addListener(a,"dragend",()=>{s!=null&&s.close(),this.latLng=a.getPosition(),this.geocodelatLng(),s.open(this.map,a),this.map.setCenter(a.position)}),google.maps.event.trigger(a,"click"),this.$emit("toLoc",this.latLng),this.map.setCenter(a.position)},async submitForm(){const e=JSON.parse(JSON.stringify(this.placesServiceresults));this.address_component_nr="",this.address_component_street="",this.address_component_suburb="",this.address_component_town="",this.address_component_metro="",this.address_component_province="",this.address_component_province_short="",this.address_component_country="",this.address_component_country_short="",this.address_component_postal_code="",typeof e.address_components.find(t=>t.types.includes("street_number"))!="undefined"&&(this.address_component_nr=e.address_components.find(t=>t.types.includes("street_number")).long_name),typeof e.address_components.find(t=>t.types.includes("route"))!="undefined"&&(this.address_component_street=e.address_components.find(t=>t.types.includes("route")).long_name),typeof e.address_components.find(t=>t.types.includes("sublocality"))!="undefined"&&(this.address_component_suburb=e.address_components.find(t=>t.types.includes("sublocality")).long_name),typeof e.address_components.find(t=>t.types.includes("locality"))!="undefined"&&(this.address_component_town=e.address_components.find(t=>t.types.includes("locality")).long_name),typeof e.address_components.find(t=>t.types.includes("administrative_area_level_2"))!="undefined"&&(this.address_component_metro=e.address_components.find(t=>t.types.includes("administrative_area_level_2")).long_name),typeof e.address_components.find(t=>t.types.includes("administrative_area_level_1"))!="undefined"&&(this.address_component_province=e.address_components.find(t=>t.types.includes("administrative_area_level_1")).long_name,this.address_component_province_short=e.address_components.find(t=>t.types.includes("administrative_area_level_1")).short_name),typeof e.address_components.find(t=>t.types.includes("country"))!="undefined"&&(this.address_component_country=e.address_components.find(t=>t.types.includes("country")).long_name,this.address_component_country_short=e.address_components.find(t=>t.types.includes("country")).short_name),typeof e.address_components.find(t=>t.types.includes("postal_code"))!="undefined"&&(this.address_component_postal_code=e.address_components.find(t=>t.types.includes("postal_code")).long_name);const s={formatted_address:e.formatted_address,location_lat:e.geometry.location.lat,location_lng:e.geometry.location.lng,location_type:"",place_id:e.place_id,address_component_nr:this.address_component_nr,address_component_street:this.address_component_street,address_component_suburb:this.address_component_suburb,address_component_town:this.address_component_town,address_component_metro:this.address_component_metro,address_component_province:this.address_component_province,address_component_province_short:this.address_component_province_short,address_component_country:this.address_component_country,address_component_country_short:this.address_component_country_short,address_component_postal_code:this.address_component_postal_code};await y.post("http://192.168.1.67:8000/api/v1/searchresults/",s).then(t=>{console.log(t)}).catch(t=>{console.log(t)})}}}),Ae={id:"myDIV",class:"google-map",ref:"googleMap"},Ee={ref:"infocontentString"},Ce={class:"container"},ze={class:"tabbar tab-style1 font-semibold pt-2 text-base text-center"},Le={class:"flex-center"},Ne=o("li",{id:"down",class:"home","data-where":"home"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1667023588/thumbs-down_qohpms.png",class:"w-7 h-7"})],-1),Ie=[Ne],Oe=o("li",{class:"help active","data-where":"help"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1667023588/question_epoihz.png",class:"w-7 h-7"})],-1),Ve=o("li",{id:"up",class:"about","data-where":"about"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1667023588/thumbs-up_wvaa2s.png",class:"w-7 h-7"})],-1),Fe=[Ve],Pe=o("li",{class:"follow"},"\xA0",-1);function De(e,s,t,i,a,r){return c(),d("div",Ae,[_(o("div",Ee,[o("div",Ce,[o("div",ze,[P(T(e.container)+" ",1),o("ul",Le,[o("button",{onClick:s[0]||(s[0]=(...l)=>e.thumbdown&&e.thumbdown(...l))},Ie),Oe,o("button",{onClick:s[1]||(s[1]=(...l)=>e.thumbup&&e.thumbup(...l))},Fe),Pe])])])],512),[[M,e.infoContent]])],512)}var Be=v(Me,[["render",De]]);const Re=b({mounted(){this.test=!1;var e=this.$el.querySelector(".toggle");e.addEventListener("click",this.onToggleClick),setTimeout(()=>this.speeds=["All","10 Mbps","20 Mbps","50 Mbps","100 Mbps","200 Mbps","300 Mbps","500 Mbps","1000 Mbps","1000 Mbps +"]),setTimeout(()=>this.terms=["All","1 Month","12 Month","24 Month","36 Month","48 Month","60 Month"])},components:{FormWizard:K,TabContent:G},emits:["close"],props:{options:Object,amount:{type:Number,default:0},selected:{type:Number,default:0}},data(){return{test:!1,step:1,selectedSpeed:"Select option",selectedTerm:"Select option",selectedProvider:null,selectedRouter:null,selectedVoiceVLAN:null,speeds:null,terms:null,fullName:"",companyName:null,referral:null}},computed:{stepperProgress(){return 100/2*(this.step-1)+"%"}},watch:{},created(){},methods:{async onProviderClick(e){let s=e.currentTarget;console.log(s.id),s.id=="fibre"&&(console.log("fibre"),this.test=!0),s.id==2&&console.log("2")},async onToggleClick(){const e=Math.abs(this.amount)*-1;console.log(this.options[0].id),document.documentElement.style.setProperty("--transform-amount",this.amount+""),document.documentElement.style.setProperty("--transform-les-amount",e+"");const s=this.$el.querySelector(".menu");s==null||s.classList.toggle("active"),this.$el.querySelectorAll("li").forEach(i=>i.addEventListener("click",this.onProviderClick))}}}),qe={class:"backview"},je={class:"menu"},Ue=o("div",{class:"toggle"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[o("path",{d:"M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"})])],-1),Ke=o("a",{href:"#"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1666596643/icons8-cable-100_hu48qi.png",class:"w-7 h-7"})],-1),Ge=o("p",{class:"font-semibold text-xs img__description"},"Fiber",-1),We=[Ke,Ge],Je=o("a",{href:"#"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1666344648/icons8-radio-tower-100_hwvfgt.png",class:"w-7 h-7"})],-1),Ze=o("p",{class:"font-semibold text-xs img__description"},"Wireless",-1),He=[Je,Ze],Ye=o("a",{href:"#"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1666344648/icons8-sim-card-100_im4tja.png",class:"w-7 h-7"})],-1),Qe=o("p",{class:"font-semibold text-xs img__description"},"LTE/5G",-1),Xe=[Ye,Qe],et=o("a",{href:"#"},[o("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1662725817/Drop-MFN_wzvij3.png"})],-1),tt=o("p",{class:"font-semibold text-xs img__description"},"EEE",-1),st=[et,tt],ot={class:"wrapper-stepper"},nt={class:"stepper"},it={class:"form-group"},at=o("label",{for:"fullName"},"Full Name",-1),rt={role:"list",class:"grid grid-cols-2 my-2 space-y-2"},lt={key:0,class:"flex space-x-3"},ct=o("svg",{"aria-hidden":"true",class:"flex-shrink-0 mt-5 w-5 h-5 text-gray-400 dark:text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("title",null,"Check icon"),o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),dt=o("span",{class:"mt-5 text-base font-medium leading-tight text-gray-500 dark:text-gray-400"},"Link Speed",-1),pt=[ct,dt],ut={key:1,class:"flex space-x-3"},ht=o("svg",{"aria-hidden":"true",class:"flex-shrink-0 mt-5 w-5 h-5 text-mapche-blue dark:text-mapche-blue",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("title",null,"Check icon"),o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),mt=o("span",{class:"mt-5 text-base font-medium leading-tight text-gray-500 dark:text-gray-400"},"Link Speed",-1),ft=[ht,mt],gt={class:"flex space-x-3"},_t=o("option",{selected:""},"Select option",-1),yt=["value"],vt={key:2,class:"flex space-x-3"},bt=o("svg",{"aria-hidden":"true",class:"flex-shrink-0 mt-5 w-5 h-5 text-mapche-blue dark:text-mapche-blue",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("title",null,"Check icon"),o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),wt=o("span",{class:"mt-5 text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Contract Term",-1),kt=[bt,wt],$t={key:3,class:"flex space-x-3"},St=o("svg",{"aria-hidden":"true",class:"flex-shrink-0 mt-5 w-5 h-5 text-gray-400 dark:text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("title",null,"Check icon"),o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),xt=o("span",{class:"mt-5 text-base font-normal leading-tight text-gray-500 dark:text-gray-400"},"Contract Term",-1),Tt=[St,xt],Mt={class:"flex space-x-3"},At=o("option",{selected:""},"Select option",-1),Et=["value"],Ct={class:"form-group"},zt=o("label",{for:"companyName"},"Your Company Name",-1),Lt={class:"form-group"},Nt=o("label",{for:"referral"},"From Where did you hear about us",-1),It=o("option",null,"Newspaper",-1),Ot=o("option",null,"Online Ad",-1),Vt=o("option",null,"Friend",-1),Ft=o("option",null,"Other",-1),Pt=[It,Ot,Vt,Ft];function Dt(e,s,t,i,a,r){const l=f("TabContent"),p=f("FormWizard");return c(),d("div",qe,[_(o("div",je,[Ue,(c(!0),d(S,null,C(e.options,(n,g)=>(c(),d("ul",{key:g},[n.available==="fibre"?(c(),d("li",{key:0,class:"img__wrap",id:"fibre",style:E(`--i:${g}`)},We,4)):k("",!0),n.available==="wireless"?(c(),d("li",{key:1,class:"img__wrap",style:E(`--i:${g}`)},He,4)):k("",!0),n.available==="lte"?(c(),d("li",{key:2,class:"img__wrap",style:E(`--i:${g}`)},Xe,4)):k("",!0),n.available==="EEE"?(c(),d("li",{key:3,class:"img__wrap",style:E(`--i:${g}`)},st,4)):k("",!0)]))),128))],512),[[M,!e.test]]),_(o("div",ot,[o("div",nt,[m(p,{color:"#ed2590"},{default:A(()=>[m(l,{title:"Options",customIcon:"<img src='https://img.icons8.com/sf-regular-filled/96/FFFFFF/shopping-cart.png' width='40px' />"},{default:A(()=>[o("div",it,[at,_(o("input",{type:"text",class:"form-control",placeholder:"Enter your name","onUpdate:modelValue":s[0]||(s[0]=n=>e.fullName=n)},null,512),[[L,e.fullName]]),o("ul",rt,[e.selectedSpeed==="Select option"?(c(),d("li",lt,pt)):(c(),d("li",ut,ft)),o("li",gt,[_(o("select",{"onUpdate:modelValue":s[1]||(s[1]=n=>e.selectedSpeed=n),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mapche-blue focus:border-mapche-blue dark:bg-gray-700 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mapche-blue dark:focus:border-mapche-blue"},[_t,(c(!0),d(S,null,C(e.speeds,n=>(c(),d("option",{value:n},T(n),9,yt))),256))],512),[[z,e.selectedSpeed]])]),e.selectedSpeed!="Select option"&&e.selectedTerm!="Select option"?(c(),d("li",vt,kt)):(c(),d("li",$t,Tt)),o("li",Mt,[_(o("select",{"onUpdate:modelValue":s[2]||(s[2]=n=>e.selectedTerm=n),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mapche-blue focus:border-mapche-blue dark:bg-gray-700 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mapche-blue dark:focus:border-mapche-blue"},[At,(c(!0),d(S,null,C(e.terms,n=>(c(),d("option",{value:n},T(n),9,Et))),256))],512),[[z,e.selectedTerm]])])])])]),_:1}),m(l,{title:"Extra",customIcon:"<img src='https://img.icons8.com/ios-filled/100/FFFFFF/add-tag.png' width='40px' />"},{default:A(()=>[o("div",Ct,[zt,_(o("input",{type:"text",class:"form-control",placeholder:"Enter your Company / Organization name","onUpdate:modelValue":s[3]||(s[3]=n=>e.companyName=n)},null,512),[[L,e.companyName]])])]),_:1}),m(l,{title:"Finishing Up",customIcon:"<img src='https://img.icons8.com/material/48/FFFFFF/filled-sent.png' width='40px' />"},{default:A(()=>[o("div",Lt,[Nt,_(o("select",{class:"form-control","onUpdate:modelValue":s[4]||(s[4]=n=>e.referral=n)},Pt,512),[[z,e.referral]])])]),_:1})]),_:1})])],512),[[M,e.test]])])}var Bt=v(Re,[["render",Dt]]);const Rt=b({props:{text:{required:!1,type:String,default:"Fetching Results"}}}),qt={class:"loading-box"},jt=W('<div class="dots" data-v-1686ae83><div class="dot" data-v-1686ae83></div><div class="dot" data-v-1686ae83></div><div class="dot" data-v-1686ae83></div><div class="dot" data-v-1686ae83></div><div class="dot" data-v-1686ae83></div></div>',1);function Ut(e,s,t,i,a,r){return c(),d("div",qt,[jt,o("div",null,T(e.text),1)])}var Kt=v(Rt,[["render",Ut],["__scopeId","data-v-1686ae83"]]);const Gt=b({async mounted(){document.addEventListener("keydown",e=>{const s=e.key;s==="ArrowUp"?(e.preventDefault(),this.selected=Math.max(0,this.selected-1)):s==="ArrowDown"?(e.preventDefault(),this.selected=Math.min(Math.max(this.places.length-1,0),this.selected+1)):s==="Backspace"||s==="Delete"?this.PInfo=[]:s==="Enter"&&(e.preventDefault(),this.location=this.places[this.selected].description,this.placeid=this.places[this.selected].place_id,this.open=!1,this.places=[],console.log(this.selected))},!1)},props:{show:{type:Boolean,default:!1},data:{type:Array,default:[]}},components:{Results:ce,Branding:fe,GoogleMapAutocomplete:Te,GoogleMapLoader:Be,Options:Bt,Spinner:Kt},computed:{mapConfig(){return V({},se)}},data(){return{open:!1,newgoogleSession:!1,location:"",lekker:"",seachValue:"",placeid:"",amount:0,abc:null,searchService:null,placesService:null,places:[],googleSessionToken:[],results:[],selected:0,debounceTimerId:null,debounceTimeout:50,searcher:null,geocoderresults:[],lat:0,lng:0,latlng:"",PInfo:[],providerApiresults:[],error:"",loading:!1,OSTest:""}},watch:{location(e){if(this.selected=0,this.debounceTimerId&&clearTimeout(this.debounceTimerId),!e)this.placeid="",this.open=!1;else{if(x.exports.isEmpty(e)||e.length<3){this.open=!1,this.PInfo=[],this.placeid="";return}this.open=!0,this.newgoogleSession=!1,this.debounceTimerId=setTimeout(()=>{},this.debounceTimeout)}}},methods:{async providers(e,s){this.loading=!0,await ge(e,s).then(t=>{for(var i=0;i<t.length;i++){const a=t[i].data.services,r=t[i].data.products,l=t[i].data.Zone,p=t[i].data.Available_Products;a?typeof a.find(n=>n.type.includes("fibre"))!="undefined"&&(console.log("fibre mesh"),this.providerApiresults.some(n=>n.available==="fibre")||this.providerApiresults.push({id:i,available:"fibre"})):r?r[0].name?(typeof r.find(n=>n.name.includes("fibre"))!="undefined"&&(console.log("fibre skywire"),this.providerApiresults.some(n=>n.available==="fibre")||this.providerApiresults.push({id:i,available:"fibre"})),typeof r.find(n=>n.name.includes("wireless"))!="undefined"&&(console.log("wireless skywire"),this.providerApiresults.some(n=>n.available==="wireless")||this.providerApiresults.push({id:i,available:"wireless"})),typeof r.find(n=>n.name.includes("lte"))!="undefined"&&(console.log("lte skywire"),this.providerApiresults.some(n=>n.available==="lte")||this.providerApiresults.push({id:i,available:"lte"}))):r[0].network_name&&typeof r.find(n=>n.network_name.includes("fibre"))!="undefined"&&(console.log("fibre link africa"),this.providerApiresults.some(n=>n.available==="fibre")||this.providerApiresults.push({id:i,available:"fibre"})):p&&l!=0&&(p.ME&&p.ME.Description.includes("fibre")&&(console.log("fibre openserve"),this.providerApiresults.some(n=>n.available==="fibre")||this.providerApiresults.push({id:i,available:"fibre"})),p.EEE&&p.EEE.Description.includes("Ethernet")&&(console.log("EEE openserve"),this.providerApiresults.some(n=>n.available==="EEE")||this.providerApiresults.push({id:i,available:"EEE"})))}for(var i=0;i<this.providerApiresults.length;i++)this.amount=this.amount+1;console.log(this.providerApiresults)}).catch(t=>{console.log(t)}),this.loading=!1,this.newgoogleSession=!1,this.OSTest="1"},getConnOpen(e,s){y.get("https://apps.openserve.co.za/gis/apps/api/ucmAPIEthernetAvailability?LAT="+e+"&LON="+s).then(t=>{t.data.error_message?this.error=t.data.error_message:(console.log(t.data.Available_Products),this.PInfo=t.data.Available_Products,this.PInfo?(console.log(this.PInfo.ME.Description),console.log(this.PInfo.EEE.Description)):console.log("No Products"))}).catch(t=>{this.error=t.message})},thumbup(e){const s=e.lat,t=e.lng;this.PInfo=[],this.placeid="",this.providers(s,t)},handler(e){this.places=e[0],this.googleSessionToken=e[1]},lochandler(e){this.lat=e.lat,this.lng=e.lng,this.newgoogleSession=!0,this.googleSessionToken=[]},choice(e){this.seachValue=e[0].description,this.placeid=e[0].place_id,this.location=this.seachValue,this.open=!1,this.PInfo=[],this.places=[]},updateDebounce(e){this.debounceTimeout=.9*this.debounceTimeout+.1*e}}}),Wt={key:0};function Jt(e,s,t,i,a,r){const l=f("GoogleMapAutocomplete"),p=f("Results"),n=f("GoogleMapLoader"),g=f("Spinner"),$=f("Options"),u=f("Branding");return c(),d("div",{class:N(["font-sans text-sm w-full sm:w-128 max-w-full bg-white shadow-catche fixed top-0 sm:top-1/2 left-1/2 -translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl flex flex-col divide-y overflow-hidden",[e.show?"opacity-100":"opacity-0 pointer-events-none",e.open?"h-auto":"h-[3.75rem]"]]),style:{transition:"opacity 300ms, height 300ms"}},[m(l,{modelValue:e.location,"onUpdate:modelValue":s[0]||(s[0]=h=>e.location=h),sessionNew:e.googleSessionToken,onToResults:e.handler},null,8,["modelValue","sessionNew","onToResults"]),m(p,{results:e.places,onChoice:e.choice,selected:e.selected},null,8,["results","onChoice","selected"]),_(m(n,{modelValue:e.location,"onUpdate:modelValue":s[1]||(s[1]=h=>e.location=h),mapConfig:e.mapConfig,searchValue:e.placeid,googleSessionToken:e.googleSessionToken,onToLoc:e.lochandler,onProvider:e.thumbup},null,8,["modelValue","mapConfig","searchValue","googleSessionToken","onToLoc","onProvider"]),[[M,e.newgoogleSession]]),e.loading?(c(),d("div",Wt,[m(g)])):k("",!0),_(m($,{class:"h-auto overflow-y-auto",options:e.providerApiresults,amount:e.amount},null,8,["options","amount"]),[[M,e.OSTest]]),m(u)],2)}var Zt=v(Gt,[["render",Jt]]);const Ht=b({async mounted(){const e=document.querySelector("script[catche-key],script[catche-data]");let s=null;e&&(s=e.getAttribute("catche-data"),this.catcheKey=e.getAttribute("catche-key")),s?await this.loadCustomData(s):await this.loadData(),document.addEventListener("keydown",t=>{const i=t.key;(t.ctrlKey||t.metaKey)&&i==="m"?(t.preventDefault(),this.show=!this.show):i==="Escape"&&(this.show=!1)},!1)},components:{Icon:te,SearchMenu2:Zt},data(){return{catcheKey:"00000000-0000-0000-0000-000000000000",show:!1,searcher:null,data:[]}},methods:{toggle(){this.show=!this.show},async loadData(){},async loadCustomData(e){await fetch(e).then(s=>s.json()).then(s=>this.data=s)}}});function Yt(e,s,t,i,a,r){const l=f("Icon"),p=f("SearchMenu2");return c(),d(S,null,[m(l,{id:"catche-icon",class:"catche-icon",onClick:e.toggle,style:{"z-index":"2147483645"}},null,8,["onClick"]),o("div",{id:"catche-background",class:N(["fixed top-0 left-0 bg-white h-screen w-screen transition-all duration-300",e.show?"show opacity-80":"opacity-0 pointer-events-none"]),onClick:s[0]||(s[0]=n=>e.show=!1),style:{"z-index":"2147483646"}},null,2),m(p,{id:"catche-menu",show:e.show,data:e.data,style:{"z-index":"2147483647"}},null,8,["show","data"])],64)}var Qt=v(Ht,[["render",Yt]]);const Xt=b({components:{Main:Qt}});function es(e,s,t,i,a,r){const l=f("Main");return c(),D(l)}var ts=v(Xt,[["render",es]]);(function(){var p;const s=document.querySelector("script[catche-css]");let t=null;s&&(t=s.getAttribute("catche-css"));const i=document.createElement("div");i.setAttribute("id","catche-search");const a=((p=i.attachShadow)==null?void 0:p.call(i,{mode:"open"}))||i,r=document.createElement("link");if(r.setAttribute("rel","stylesheet"),r.setAttribute("href","https://cdn.jsdelivr.net/gh/Bluejuice1001/mapche-search-widget@0.1.0/dist/index.css"),a.appendChild(r),t){const n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",t),a.appendChild(n)}const l=document.createElement("div");a.appendChild(l),J(ts).mount(l),document.body.appendChild(i)})();
