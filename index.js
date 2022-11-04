var z=Object.defineProperty;var M=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var C=(e,s,t)=>s in e?z(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,I=(e,s)=>{for(var t in s||(s={}))D.call(s,t)&&C(e,t,s[t]);if(M)for(var t of M(s))B.call(s,t)&&C(e,t,s[t]);return e};import{d as g,r as L,o as d,c as u,a as i,F as A,b as P,e as O,n as E,f as N,g as f,h as R,i as y,w as v,v as j,t as x,j as m,L as q,l as T,k as V,m as w,p as F,q as K,s as G,u as U}from"./vendor.js";const J=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}};J();var _=(e,s)=>{const t=e.__vccOpts||e;for(const[n,o]of s)t[n]=o;return t};const Z=g({components:{SearchIcon:L}}),H={class:"fixed right-10 bottom-10 bg-gray-800 rounded-full p-2 drop-shadow-lg cursor-pointer border border-gray-100 text-gray-100"},W=i("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1665031364/mapche-icon_e6536c.png",class:"h-8 w-8"},null,-1),Y=[W];function Q(e,s,t,n,o,a){return d(),u("div",H,Y)}var X=_(Z,[["render",Q]]);const ee={clickableIcons:!1,streetViewControl:!1,panControlOptions:!1,mapTypeControl:!0,zoomControlOptions:{style:"SMALL"},zoom:2,minZoom:17,maxZoom:19,tilt:0,styles:[{featureType:"all",elementType:"all",stylers:[{hue:"#e7ecf0"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#8ed863"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-70}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#8abdec"}]},{featureType:"water",elementType:"geometry.stroke",stylers:[{color:"#9cbbf0"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]}]},te=g({emits:["choice"],props:{results:{type:Array,default:[]},selected:{type:Number,default:0}},watch:{selected(e,s){var t,n;if(e!==-1&&e!==s){const o=(t=document.getElementById("catche-search"))==null?void 0:t.shadowRoot;(n=o==null?void 0:o.getElementById(`result-${e}`))==null||n.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}}}}),se={class:"text-gray-700 flex flex-col divide-y"},oe=["place_id","onClick"],ne=["innerHTML"],ie={key:0};function ae(e,s,t,n,o,a){return d(),u("div",se,[(d(!0),u(A,null,P(e.results,(l,c)=>(d(),u("a",{key:c,place_id:`result-${c}`,class:E(["px-5 py-4 hover:bg-gray-100 cursor-pointer flex flex-col gap-1",e.selected===c?"selected bg-gray-100":""]),onClick:r=>e.$emit("choice",[l])},[i("p",{class:"truncate",innerHTML:l.description},null,8,ne)],10,oe))),128)),e.results.length?(d(),u("div",ie)):O("",!0)])}var re=_(te,[["render",ae]]);const le={},ce={id:"mapche-branding",class:"text-gray-300 flex gap-1 justify-end px-3 py-2 text-xs font-bold"},de=i("span",null,[N("Powered by "),i("a",{class:"text-gray-400",href:"https://localhost:3000"},"mapche")],-1),pe=[de];function ue(e,s){return d(),u("div",ce,pe)}var he=_(le,[["render",ue]]);async function me(e,s){let t=`https://api.coverage.28east.co.za/getfeasibility?latitude=${e}&longitude=${s}&key=6e7bae18-76af-47bf-b70c-eeedf3ffb603`,n=`https://api.skywire.28east.co.za/getfeasibility?latitude=${e}&longitude=${s}&key=AIzaSyAySpObpjh0l7ioizhytsGhCLzvZXWH7Hk`,o=`https://api.linkafrica.28east.co.za/getfeasibility?latitude=${e}&longitude=${s}&key=AIzaSyAOAj12Acwepe5arxviEzJDV-P10q7sU78`;const a=f.get(t).catch(p=>null),l=f.get(n).catch(p=>null),c=f.get(o).catch(p=>null);let r=await f.all([a,l,c]).then(f.spread((...p)=>(p[0],p[1],p[2],p))).catch(p=>{console.error(p)});for(var k=0;k<r.length;k++){const p=r[k].data.services;if(r[k].data.products,p&&typeof p.find(h=>h.full_name.includes("Business Fibre"))!="undefined"){p.find(h=>h.full_name.includes("Business Fibre")).full_name;for(var S=0;S<r.length;S++){const h=p[S];h&&(h.providers.find($=>$.provider.includes("metrofibre")),h.providers.find($=>$.provider.includes("frogfoot")),h.providers.find($=>$.provider.includes("linkafrica")),h.providers.find($=>$.provider.includes("dfa")))}}}return r}const fe=g({props:{modelValue:{type:String}},components:{SearchIcon:L,EyeIcon:R},data(){return{}},computed:{inputValue:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},ctrlKey(){let e="";return navigator.platform?e=navigator.platform.toLowerCase():navigator.userAgentData&&(e=navigator.userAgentData.platform.toLowerCase()),e.includes("mac")||e.includes("iphone")||e.includes("ipad")?"\u2318":"Ctrl"}},methods:{locatorButtonPressed(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.getAddressFrom(e.coords.latitude,e.coords.longitude)},e=>{this.error=e.message}):(this.error=error.message,console.log("Your browser does not support the geolocation API"))},getAddressFrom(e,s){f.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+s+"&key=AIzaSyCR53JRsi0Zmw14Igetqbr9OAx37O5EOT4").then(t=>{t.data.error_message?this.error=t.data.error_message:this.address=t.data.results[0].formatted_address}).catch(t=>{this.error=t.message,console.log(t.message)})},focus(){this.$refs.input.focus()},unfocus(){this.$refs.input.blur()}}}),_e={class:"relative flex gap-4 p-4"},ge={class:"flex items-center pointer-events-none"},ye={class:"hidden sm:flex absolute inset-y-0 right-4 text-xs text-gray-300 justify-center items-center"},ve={id:"catche-shortcut",class:"border rounded flex justify-center items-center py-0.5 px-1"};function be(e,s,t,n,o,a){const l=m("SearchIcon");return d(),u("div",_e,[i("div",ge,[y(l,{class:"h-7 w-7 text-gray-400","aria-hidden":"true"})]),v(i("input",{ref:"input","onUpdate:modelValue":s[0]||(s[0]=c=>e.inputValue=c),type:"text",placeholder:"Enter your address...",class:"focus:ring-0 focus:border-0 focus-visible:outline-none p-0 w-full bg-transparent border-0 text-lg"},null,512),[[j,e.inputValue]]),i("div",ye,[i("span",ve,x(e.ctrlKey)+" + M",1)])])}var we=_(fe,[["render",be]]);const $e=g({async mounted(){const e={version:"weekly",libraries:["places"]},t=await new q(this.apiKey,e).load();this.google=t,this.initService()},props:{sessionNew:Object},components:{SearchBox:we},debounceMsec:{type:Number,default:1e3},data(){return{google:null,location:"",places:[],googleSessionToken:[],searchService:null,placesService:null,selected:0,apiKey:"AIzaSyDj2IO0ORaSNsK8QfwF6smchysLLzhHq6c",username:"",password:"",errors:[]}},watch:{location(e){var s;if(T.exports.isEmpty(e)||e.length<3){this.places=[];return}else this.googleSessionToken.length==0?this.generateNewSessionToken():((s=this.sessionNew)==null?void 0:s.length)==0?this.generateNewSessionToken():this.search(),this.search()}},created(){this.generateNewSessionToken=T.exports.debounce(this.generateNewSessionToken,500),this.search=T.exports.debounce(this.search,500)},methods:{initService(){this.searchService=new this.google.maps.places.AutocompleteService},async search(){try{if(this.location==""){console.log("location is empty");return}else{const s=(await this.searchService.getPlacePredictions({input:this.location,sessionToken:this.googleSessionToken,componentRestrictions:{country:"ZA"}})).predictions;this.$emit("toResults",[s,this.googleSessionToken])}}catch(e){console.log(e)}},generateNewSessionToken(){this.googleSessionToken=new google.maps.places.AutocompleteSessionToken,console.log(this.googleSessionToken)},async authToken(){f.defaults.headers.common.Authorization="",localStorage.removeItem("token");const e={username:"test@test.co.za",password:"Willem1@"};await f.post("http://192.168.1.67:8000/api/v1/token/login/",e).then(s=>{const t=s.data.auth_token;console.log(t),f.defaults.headers.common.Authorization="Token "+t,localStorage.setItem("token",t)}).catch(s=>{if(s.response)for(const t in s.response.data)this.errors.push(`${t}: ${s.response.data[t]}`);else s.message&&this.errors.push("Something went wrong. Please try again!")})}}});function ke(e,s,t,n,o,a){const l=m("SearchBox");return d(),V(l,{class:"catche-input",modelValue:e.location,"onUpdate:modelValue":s[0]||(s[0]=c=>e.location=c),ref:"searchBox"},null,8,["modelValue"])}var Se=_($e,[["render",ke]]);const Te=g({mounted(){},props:{mapConfig:Object,searchValue:String,googleSessionToken:Object},components:{},data(){return{map:null,index:0,placesServiceresults:[],latLng:"",infoContent:!1,container:"Rooftop?",geocodeUsed:!1,company:"",contact_person:"",email:"",phone:"",estimated_value:0,confidence:0,website:"",status:"new",priority:"medium",formatted_address:"",location_lat:0,location_lng:0,location_type:"",place_id:"",address_component_nr:"",address_component_street:"",address_component_suburb:"",address_component_town:"",address_component_metro:"",address_component_province:"",address_component_province_short:"",address_component_country:"",address_component_country_short:"",address_component_postal_code:"",images:[{id:1,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1661005932/Marker-Pindrop_jqhe19.png",alt:"Red"},{id:2,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1660849611/Marker-MTN_pxapfa.png",alt:"Yellow"},{id:3,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1660849844/Marker-MFN_pphbrv.png",alt:"Blue"},{id:4,src:"https://res.cloudinary.com/vidmax/image/upload/c_scale,h_60/v1661072056/Marker-Openserve_iptfmk.png",alt:"Green"}]}},watch:{searchValue(e){T.exports.isEmpty(e)||e.length<3||this.initMap()}},methods:{thumbup(){this.$emit("provider",this.latLng)},thumbdown(){this.container="Drag to Rooftop"},initMap(){const e=this.$refs.googleMap;this.map=new google.maps.Map(e,this.mapConfig),this.map!=null?this.placesService(this.searchValue,this.googleSessionToken):console.log("problem with initMap, googlemaploader.vue")},placesService(e,s){if(e!=null&&s!=null){const t=new google.maps.places.PlacesService(this.map),n={placeId:e,sessionToken:s,fields:["address_component","formatted_address","geometry","name","place_id","type","url"]};t.getDetails(n,async(o,a)=>{if(a!="OK"||!o)throw console.log("problem with service.getDetails, googlemaploader.vue"),new Error(a);this.placesServiceresults=o,this.geocodeUsed||this.Marker()})}else console.log("place_id, googleSessionToken empty placeService, googlemaploader.vue")},geocodelatLng(){new google.maps.Geocoder().geocode({location:this.latLng},async(s,t)=>{if(t!="OK"||!s)throw console.log("problem with service.geocode, googlemaploader.vue"),new Error(t);const n=s[1].place_id,o=await new google.maps.places.AutocompleteSessionToken;this.geocodeUsed=!0,this.container="Rooftop!",this.placesService(n,o)})},Marker(){const e=this.$refs.infocontentString,s=new google.maps.InfoWindow({content:e}),t=JSON.parse(JSON.stringify(this.placesServiceresults));this.latLng=t.geometry.location,this.placesServiceresults=t;const n=this.images[this.index];this.index=(this.index+1)%this.images.length;const o=new google.maps.Marker({position:this.latLng,map:this.map,icon:n.src,draggable:!0,title:"Click/Drag Me",animation:google.maps.Animation.DROP});google.maps.event.addListener(this.map,"click",()=>{s!=null&&s.close()}),google.maps.event.addListener(o,"click",()=>{s!=null&&s.close(),this.infoContent=!0,s.open(this.map,o)}),google.maps.event.addListener(o,"dragend",()=>{s!=null&&s.close(),this.latLng=o.getPosition(),this.geocodelatLng(),s.open(this.map,o),this.map.setCenter(o.position)}),google.maps.event.trigger(o,"click"),this.$emit("toLoc",this.latLng),this.map.setCenter(o.position)},async submitForm(){const e=JSON.parse(JSON.stringify(this.placesServiceresults));this.address_component_nr="",this.address_component_street="",this.address_component_suburb="",this.address_component_town="",this.address_component_metro="",this.address_component_province="",this.address_component_province_short="",this.address_component_country="",this.address_component_country_short="",this.address_component_postal_code="",typeof e.address_components.find(t=>t.types.includes("street_number"))!="undefined"&&(this.address_component_nr=e.address_components.find(t=>t.types.includes("street_number")).long_name),typeof e.address_components.find(t=>t.types.includes("route"))!="undefined"&&(this.address_component_street=e.address_components.find(t=>t.types.includes("route")).long_name),typeof e.address_components.find(t=>t.types.includes("sublocality"))!="undefined"&&(this.address_component_suburb=e.address_components.find(t=>t.types.includes("sublocality")).long_name),typeof e.address_components.find(t=>t.types.includes("locality"))!="undefined"&&(this.address_component_town=e.address_components.find(t=>t.types.includes("locality")).long_name),typeof e.address_components.find(t=>t.types.includes("administrative_area_level_2"))!="undefined"&&(this.address_component_metro=e.address_components.find(t=>t.types.includes("administrative_area_level_2")).long_name),typeof e.address_components.find(t=>t.types.includes("administrative_area_level_1"))!="undefined"&&(this.address_component_province=e.address_components.find(t=>t.types.includes("administrative_area_level_1")).long_name,this.address_component_province_short=e.address_components.find(t=>t.types.includes("administrative_area_level_1")).short_name),typeof e.address_components.find(t=>t.types.includes("country"))!="undefined"&&(this.address_component_country=e.address_components.find(t=>t.types.includes("country")).long_name,this.address_component_country_short=e.address_components.find(t=>t.types.includes("country")).short_name),typeof e.address_components.find(t=>t.types.includes("postal_code"))!="undefined"&&(this.address_component_postal_code=e.address_components.find(t=>t.types.includes("postal_code")).long_name);const s={formatted_address:e.formatted_address,location_lat:e.geometry.location.lat,location_lng:e.geometry.location.lng,location_type:"",place_id:e.place_id,address_component_nr:this.address_component_nr,address_component_street:this.address_component_street,address_component_suburb:this.address_component_suburb,address_component_town:this.address_component_town,address_component_metro:this.address_component_metro,address_component_province:this.address_component_province,address_component_province_short:this.address_component_province_short,address_component_country:this.address_component_country,address_component_country_short:this.address_component_country_short,address_component_postal_code:this.address_component_postal_code};await f.post("http://192.168.1.67:8000/api/v1/searchresults/",s).then(t=>{console.log(t)}).catch(t=>{console.log(t)})}}}),Ae={id:"myDIV",class:"google-map",ref:"googleMap"},Ee={ref:"infocontentString"},xe={class:"container"},Me={class:"tabbar tab-style1 font-semibold pt-2 text-base text-center"},Ce={class:"flex-center"},Ie=i("li",{id:"down",class:"home","data-where":"home"},[i("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1667023588/thumbs-down_qohpms.png",class:"w-7 h-7"})],-1),Le=[Ie],Pe=i("li",{class:"help active","data-where":"help"},[i("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1667023588/question_epoihz.png",class:"w-7 h-7"})],-1),Oe=i("li",{id:"up",class:"about","data-where":"about"},[i("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1667023588/thumbs-up_wvaa2s.png",class:"w-7 h-7"})],-1),Ne=[Oe],Ve=i("li",{class:"follow"},"\xA0",-1);function ze(e,s,t,n,o,a){return d(),u("div",Ae,[v(i("div",Ee,[i("div",xe,[i("div",Me,[N(x(e.container)+" ",1),i("ul",Ce,[i("button",{onClick:s[0]||(s[0]=(...l)=>e.thumbdown&&e.thumbdown(...l))},Le),Pe,i("button",{onClick:s[1]||(s[1]=(...l)=>e.thumbup&&e.thumbup(...l))},Ne),Ve])])])],512),[[w,e.infoContent]])],512)}var De=_(Te,[["render",ze]]);const Be=g({async mounted(){this.test=!1},components:{},emits:["close"],props:{options:Object,amount:{type:Number,default:0},selected:{type:Number,default:0}},data(){return{test:!1,step:1,selectedSpeed:"Select option",selectedTerm:"Select option",selectedProvider:null,selectedRouter:null,selectedVoiceVLAN:null,speeds:null,terms:null,fullName:"",companyName:null,referral:null}},computed:{stepperProgress(){return 100/2*(this.step-1)+"%"}},watch:{},created(){},methods:{thumbdown(){console.log("happy")},async onProviderClick(e){let s=e.currentTarget;console.log(s.id),s.id==1&&(console.log("fibre"),this.test=!0),s.id==2&&console.log("2")},async onToggleClick(){console.log("event click");const e=Math.abs(this.amount)*-1;document.documentElement.style.setProperty("--transform-amount",this.amount+""),document.documentElement.style.setProperty("--transform-les-amount",e+"");const s=document.querySelector(".menu");console.log(s),s==null||s.classList.toggle("active");const t=document.querySelectorAll("li");console.log(t),t.forEach(n=>n.addEventListener("click",this.onProviderClick)),console.log(this.amount)}}}),b=e=>(F("data-v-ac21932e"),e=e(),K(),e),Re={class:"backview"},je={class:"menu"},qe={class:"toggle"},Fe=b(()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[i("path",{d:"M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"})],-1)),Ke=[Fe],Ge={class:"img__wrap",id:"1",style:{"--i":"0"}},Ue=b(()=>i("a",{href:"#"},[i("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1666596643/icons8-cable-100_hu48qi.png",class:"w-7 h-7"})],-1)),Je=b(()=>i("p",{class:"font-semibold text-xs img__description"},"Fiber",-1)),Ze=[Ue,Je],He={class:"img__wrap",id:"2",style:{"--i":"1"}},We=b(()=>i("a",{href:"#"},[i("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1666344648/icons8-radio-tower-100_hwvfgt.png",class:"w-7 h-7"})],-1)),Ye=b(()=>i("p",{class:"font-semibold text-xs img__description"},"Wireless",-1)),Qe=[We,Ye],Xe={class:"img__wrap",id:"3",style:{"--i":"2"}},et=b(()=>i("a",{href:"#"},[i("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1666344648/icons8-sim-card-100_im4tja.png",class:"w-7 h-7"})],-1)),tt=b(()=>i("p",{class:"font-semibold text-xs img__description"},"LTE/5G",-1)),st=[et,tt],ot={class:"img__wrap",id:"4",style:{"--i":"3"}},nt=b(()=>i("a",{href:"#"},[i("img",{src:"https://res.cloudinary.com/vidmax/image/upload/v1662725817/Drop-MFN_wzvij3.png"})],-1)),it=b(()=>i("p",{class:"font-semibold text-xs img__description"},"EEE",-1)),at=[nt,it];function rt(e,s,t,n,o,a){return d(),u("div",Re,[v(i("div",je,[i("div",qe,[i("button",{onClick:s[0]||(s[0]=(...l)=>e.thumbdown&&e.thumbdown(...l))},Ke)]),(d(!0),u(A,null,P(e.options,l=>(d(),u("ul",null,[v(i("li",Ge,Ze,512),[[w,l.available==="fibre"]]),v(i("li",He,Qe,512),[[w,l.available==="wireless"]]),v(i("li",Xe,st,512),[[w,l.available==="lte"]]),v(i("li",ot,at,512),[[w,l.available==="EEE"]])]))),256))],512),[[w,!e.test]])])}var lt=_(Be,[["render",rt],["__scopeId","data-v-ac21932e"]]);const ct=g({props:{text:{required:!1,type:String,default:"Fetching Results"}}}),dt={class:"loading-box"},pt=G('<div class="dots" data-v-5b95ff77><div class="dot" data-v-5b95ff77></div><div class="dot" data-v-5b95ff77></div><div class="dot" data-v-5b95ff77></div><div class="dot" data-v-5b95ff77></div><div class="dot" data-v-5b95ff77></div></div>',1);function ut(e,s,t,n,o,a){return d(),u("div",dt,[pt,i("div",null,x(e.text),1)])}var ht=_(ct,[["render",ut],["__scopeId","data-v-5b95ff77"]]);const mt=g({async mounted(){document.addEventListener("keydown",e=>{const s=e.key;s==="ArrowUp"?(e.preventDefault(),this.selected=Math.max(0,this.selected-1)):s==="ArrowDown"?(e.preventDefault(),this.selected=Math.min(Math.max(this.places.length-1,0),this.selected+1)):s==="Backspace"||s==="Delete"?this.PInfo=[]:s==="Enter"&&(e.preventDefault(),this.location=this.places[this.selected].description,this.placeid=this.places[this.selected].place_id,this.open=!1,this.places=[],console.log(this.selected))},!1)},props:{show:{type:Boolean,default:!1},data:{type:Array,default:[]}},components:{Results:re,Branding:he,GoogleMapAutocomplete:Se,GoogleMapLoader:De,Options:lt,Spinner:ht},computed:{mapConfig(){return I({},ee)}},data(){return{open:!1,newgoogleSession:!1,location:"",lekker:"",seachValue:"",placeid:"",amount:0,abc:null,searchService:null,placesService:null,places:[],googleSessionToken:[],results:[],selected:0,debounceTimerId:null,debounceTimeout:50,searcher:null,geocoderresults:[],lat:0,lng:0,latlng:"",PInfo:[],providerApiresults:[],error:"",loading:!1,OSTest:""}},watch:{location(e){if(this.selected=0,this.debounceTimerId&&clearTimeout(this.debounceTimerId),!e)this.placeid="",this.open=!1;else{if(T.exports.isEmpty(e)||e.length<3){this.open=!1,this.PInfo=[],this.placeid="";return}this.open=!0,this.newgoogleSession=!1,this.debounceTimerId=setTimeout(()=>{},this.debounceTimeout)}}},methods:{async providers(e,s){this.loading=!0,await me(e,s).then(t=>{for(var n=0;n<t.length;n++){const o=t[n].data.services,a=t[n].data.products,l=t[n].data.Zone,c=t[n].data.Available_Products;o?typeof o.find(r=>r.type.includes("fibre"))!="undefined"&&(console.log("fibre mesh"),this.providerApiresults.some(r=>r.available==="fibre")||this.providerApiresults.push({available:"fibre"})):a?a[0].name?(typeof a.find(r=>r.name.includes("fibre"))!="undefined"&&(console.log("fibre skywire"),this.providerApiresults.some(r=>r.available==="fibre")||this.providerApiresults.push({available:"fibre"})),typeof a.find(r=>r.name.includes("wireless"))!="undefined"&&(console.log("wireless skywire"),this.providerApiresults.some(r=>r.available==="wireless")||this.providerApiresults.push({available:"wireless"})),typeof a.find(r=>r.name.includes("lte"))!="undefined"&&(console.log("lte skywire"),this.providerApiresults.some(r=>r.available==="lte")||this.providerApiresults.push({available:"lte"}))):a[0].network_name&&typeof a.find(r=>r.network_name.includes("fibre"))!="undefined"&&(console.log("fibre link africa"),this.providerApiresults.some(r=>r.available==="fibre")||this.providerApiresults.push({available:"fibre"})):c&&l!=0&&(c.ME&&c.ME.Description.includes("fibre")&&(console.log("fibre openserve"),this.providerApiresults.some(r=>r.available==="fibre")||this.providerApiresults.push({available:"fibre"})),c.EEE&&c.EEE.Description.includes("Ethernet")&&(console.log("EEE openserve"),this.providerApiresults.some(r=>r.available==="EEE")||this.providerApiresults.push({available:"EEE"})))}for(var n=0;n<this.providerApiresults.length;n++)this.amount=this.amount+1;console.log(this.providerApiresults)}).catch(t=>{console.log(t)}),this.loading=!1,this.newgoogleSession=!1,this.OSTest="1"},getConnOpen(e,s){f.get("https://apps.openserve.co.za/gis/apps/api/ucmAPIEthernetAvailability?LAT="+e+"&LON="+s).then(t=>{t.data.error_message?this.error=t.data.error_message:(console.log(t.data.Available_Products),this.PInfo=t.data.Available_Products,this.PInfo?(console.log(this.PInfo.ME.Description),console.log(this.PInfo.EEE.Description)):console.log("No Products"))}).catch(t=>{this.error=t.message})},thumbup(e){const s=e.lat,t=e.lng;this.PInfo=[],this.placeid="",this.providers(s,t)},handler(e){this.places=e[0],this.googleSessionToken=e[1]},lochandler(e){this.lat=e.lat,this.lng=e.lng,this.newgoogleSession=!0,this.googleSessionToken=[]},choice(e){this.seachValue=e[0].description,this.placeid=e[0].place_id,this.location=this.seachValue,this.open=!1,this.PInfo=[],this.places=[]},updateDebounce(e){this.debounceTimeout=.9*this.debounceTimeout+.1*e}}}),ft={key:0};function _t(e,s,t,n,o,a){const l=m("GoogleMapAutocomplete"),c=m("Results"),r=m("GoogleMapLoader"),k=m("Spinner"),S=m("Options"),p=m("Branding");return d(),u("div",{class:E(["font-sans text-sm w-full sm:w-128 max-w-full bg-white shadow-catche fixed top-0 sm:top-1/2 left-1/2 -translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl flex flex-col divide-y overflow-hidden",[e.show?"opacity-100":"opacity-0 pointer-events-none",e.open?"h-auto":"h-[3.75rem]"]]),style:{transition:"opacity 300ms, height 300ms"}},[y(l,{modelValue:e.location,"onUpdate:modelValue":s[0]||(s[0]=h=>e.location=h),sessionNew:e.googleSessionToken,onToResults:e.handler},null,8,["modelValue","sessionNew","onToResults"]),y(c,{results:e.places,onChoice:e.choice,selected:e.selected},null,8,["results","onChoice","selected"]),v(y(r,{modelValue:e.location,"onUpdate:modelValue":s[1]||(s[1]=h=>e.location=h),mapConfig:e.mapConfig,searchValue:e.placeid,googleSessionToken:e.googleSessionToken,onToLoc:e.lochandler,onProvider:e.thumbup},null,8,["modelValue","mapConfig","searchValue","googleSessionToken","onToLoc","onProvider"]),[[w,e.newgoogleSession]]),e.loading?(d(),u("div",ft,[y(k)])):O("",!0),v(y(S,{options:e.providerApiresults,amount:e.amount},null,8,["options","amount"]),[[w,e.OSTest]]),y(p)],2)}var gt=_(mt,[["render",_t]]);const yt=g({async mounted(){const e=document.querySelector("script[catche-key],script[catche-data]");let s=null;e&&(s=e.getAttribute("catche-data"),this.catcheKey=e.getAttribute("catche-key")),s?await this.loadCustomData(s):await this.loadData(),document.addEventListener("keydown",t=>{const n=t.key;(t.ctrlKey||t.metaKey)&&n==="m"?(t.preventDefault(),this.show=!this.show):n==="Escape"&&(this.show=!1)},!1)},components:{Icon:X,SearchMenu2:gt},data(){return{catcheKey:"00000000-0000-0000-0000-000000000000",show:!1,searcher:null,data:[]}},methods:{toggle(){this.show=!this.show},async loadData(){},async loadCustomData(e){await fetch(e).then(s=>s.json()).then(s=>this.data=s)}}});function vt(e,s,t,n,o,a){const l=m("Icon"),c=m("SearchMenu2");return d(),u(A,null,[y(l,{id:"catche-icon",class:"catche-icon",onClick:e.toggle,style:{"z-index":"2147483645"}},null,8,["onClick"]),i("div",{id:"catche-background",class:E(["fixed top-0 left-0 bg-white h-screen w-screen transition-all duration-300",e.show?"show opacity-80":"opacity-0 pointer-events-none"]),onClick:s[0]||(s[0]=r=>e.show=!1),style:{"z-index":"2147483646"}},null,2),y(c,{id:"catche-menu",show:e.show,data:e.data,style:{"z-index":"2147483647"}},null,8,["show","data"])],64)}var bt=_(yt,[["render",vt]]);const wt=g({components:{Main:bt}});function $t(e,s,t,n,o,a){const l=m("Main");return d(),V(l)}var kt=_(wt,[["render",$t]]);(function(){var c;const s=document.querySelector("script[catche-css]");let t=null;s&&(t=s.getAttribute("catche-css"));const n=document.createElement("div");n.setAttribute("id","catche-search");const o=((c=n.attachShadow)==null?void 0:c.call(n,{mode:"open"}))||n,a=document.createElement("link");if(a.setAttribute("rel","stylesheet"),a.setAttribute("href","https://cdn.jsdelivr.net/gh/Bluejuice1001/mapche-search-widget@0.1.0/dist/index.css"),o.appendChild(a),t){const r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("href",t),o.appendChild(r)}const l=document.createElement("div");o.appendChild(l),U(kt).mount(l),document.body.appendChild(n)})();
