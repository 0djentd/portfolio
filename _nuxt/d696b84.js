(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{387:function(t,e,n){"use strict";n.r(e);n(60),n(61);var r={props:{tag:{type:String,required:!0}},computed:{active:function(){return this.$store.state.searchStr.includes(this.tag)},tagClasses:function(){return(this.active?"btn btn-dark text-light":"btn text-muted")+" pb-0 pt-0 px-1 m-0 mx-1"}},methods:{searchTag:function(){this.$store.commit("saveSearchStr",this.tag)}}},c=n(48),component=Object(c.a)(r,(function(){var t=this;return(0,t._self._c)("button",{class:t.tagClasses,on:{click:t.searchTag}},[t._v("\n    "+t._s(t.tag)+"\n  ")])}),[],!1,null,"6007007e",null);e.default=component.exports}}]);