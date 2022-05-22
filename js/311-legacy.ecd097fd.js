"use strict";(self["webpackChunkmovie_list_vue2"]=self["webpackChunkmovie_list_vue2"]||[]).push([[311],{1311:function(t,a,e){e.r(a),e.d(a,{default:function(){return y}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home__movies"},[e("MovieBox",{attrs:{"all-movies":t.allMovies}})],1)},i=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home__movies__boxes"},[e("div",{staticClass:"home__movies__boxes__wrapper"},t._l(t.allMovies,(function(a){return e("div",{key:a.id,staticClass:"home__movies__boxes__wrapper__box"},[e("img",{staticClass:"home__movies__boxes__wrapper__box__img",attrs:{src:t.poster+a.image,alt:"Movie Poster"}}),e("div",{staticClass:"home__movies__boxes__wrapper__box__body"},[e("h5",{staticClass:"home__movies__boxes__wrapper__box__body__title"},[t._v(" "+t._s(a.title)+" ")])]),e("div",{staticClass:"home__movies__boxes__wrapper__box__footer"},[e("button",{staticClass:"home__movies__boxes__wrapper__box__footer__more btn-movie",attrs:{"data-toggle":"modal","data-id":a.id,"data-target":"#movie-modal"},on:{click:t.getMovie}},[t._v(" More ")]),e("div",{staticClass:"modal fade",attrs:{id:"movie-modal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"movie-modal-title"}},[t._v(" "+t._s(t.modalData.title)+" ")]),t._m(0,!0)]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-7",attrs:{id:"movie-modal-image"}},[e("img",{staticClass:"img-fluid modal-poster",attrs:{src:t.modalData.image,alt:"movie-poster"}})]),e("div",{staticClass:"col-sm-5 inform-wrapper"},[e("p",{staticClass:"movie-modal-date",attrs:{id:"movie-modal-date"}},[e("em",[t._v("release date: "),e("h5",[t._v(t._s(t.modalData.releasedDate))])])]),e("p",{staticClass:"movie-modal-description",attrs:{id:"movie-modal-description"}},[t._v(" "+t._s(t.modalData.description)+" ")])])])]),t._m(1,!0)])])])])])})),0)])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" Close ")])])}],r=(e(2526),e(1817),"https://movie-list.alphacamp.io"),_=r+"/posters/",d=r+"/api/v1/movies/",m=_,n=d,v=e(6166),c=e.n(v),p={name:"MovieBox",props:{allMovies:{type:Array,required:!0}},data:function(){return{poster:m,modalData:{title:"",description:"",image:"",releasedDate:""}}},methods:{getMovie:function(t){var a=this,e=t.target.dataset.id;c().get(n+e).then((function(t){var e=t.data.results,s=e.title,i=e.description,o=e.release_date,l=e.image;a.modalData={title:s,description:i,releasedDate:o,image:a.poster+l}})).catch((function(t){console.log(t),alert("Cannot get individual movie from api!!")}))}}},u=p,b=e(1001),C=(0,b.Z)(u,o,l,!1,null,"7e10460d",null),h=C.exports,f={name:"Movies",props:{allMovies:{type:Array,required:!0}},components:{MovieBox:h}},g=f,x=(0,b.Z)(g,s,i,!1,null,null,null),y=x.exports}}]);
//# sourceMappingURL=311-legacy.ecd097fd.js.map