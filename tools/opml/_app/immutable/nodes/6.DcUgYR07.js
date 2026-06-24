import{a as L,t as O}from"../chunks/disclose-version._XzPMoFC.js";import{q as $,t as M,v as l,w as P,l as t,z as s,x as C,y as k,A as h,$ as G,B as m,C as p}from"../chunks/runtime.CHy57aNk.js";import{d as U}from"../chunks/events.Bep9YmtX.js";import{h as E}from"../chunks/svelte-head.Cf9p_rgU.js";import{b as F,r as T}from"../chunks/input.QDut_Ost.js";import{p as _}from"../chunks/proxy.CWORTUlh.js";import{g as R}from"../chunks/entry.Crpf2GsN.js";import{C as S}from"../chunks/CodeView.CBCURHAT.js";import{x as j}from"../chunks/index.H3HVSD7Z.js";function q(c,i,r){let o=t(i).split(`
`).map(e=>e.trim()).map(e=>`<outline type="rss" text="${e}" xmlUrl="${e}"/>`).join(`
`);s(r,`<?xml version="1.0" encoding="UTF-8"?>
                <opml version="2.0">
                    <head>
                        <title>Subscriptions</title>
                    </head>
                    <body>
                        ${o}
                    </body>
                </opml>`),s(r,_(j(t(r),{lineSeparator:`
`})))}var z=O(`<div class="flex flex-col text-center"><h1 class="text-2xl md:text-4xl font-bold mt-4 md:mt-8 mb-2 text-[#00004b]">Free Online OPML Generator</h1> <p class="text-base md:text-2xl mb-2 md:mb-4 text-[#0052ff]">Turn your list of feeds URLs into an OPML file</p></div> <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-2"><textarea class="min-h-56 lg:h-96 p-2 border-2 rounded-xl" placeholder="https://example.com/feed.xml
https://example.com/feed2.xml
https://example.com/feed3.xml
...">
    </textarea> <div class="flex flex-row items-center mt-2 gap-2 flex-wrap lg:order-last"><button class="flex flex-row space-x-2 text-white bg-gray-800 hover:bg-black items-center font-semibold rounded-md p-2 no-underline md:py-2 md:px-3">Generate OPML</button> <button class="flex flex-row space-x-2 text-white bg-gray-800 hover:bg-black items-center font-semibold rounded-md p-2 no-underline md:py-2 md:px-3">Continue in Editor</button></div> <div class="flex min-h-56 border-2 rounded-xl"><!></div></div>`,1);function Q(c,i){$(i,!0);const r=M("state"),x="OPML Generator from URLs";let o=h(""),e=h("");function w(){r.rawContent=t(e),R("/")}var f=z();E(a=>{G.title=`${x??""} - Online OPML Editor`});var b=l(P(f),2),n=m(b);T(n);var d=l(n,2),u=m(d);u.__click=[q,o,e];var v=l(u,2);v.__click=w,p(d);var g=l(d,2),y=m(g);S(y,{get content(){return t(e)},set content(a){s(e,_(a))},placeholder:"Generated OPML will be displayed here",readonly:!0}),p(g),p(b),C(()=>v.disabled=t(e)===""),F(n,()=>t(o),a=>s(o,a)),L(c,f),k()}U(["click"]);export{Q as component};
