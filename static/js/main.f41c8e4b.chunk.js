(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{44:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),o=i(14),c=i.n(o),a=(i(44),i(9)),s=i(10),l=i(12),d=i(11),u=i(70),b=i(79),j=i(72),h=i(53),m=i(73),p=i(78),f=i(1),O=Object(u.a)({root:{width:"auto",lineHeight:1.5},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var g=function(e){var t=e.infoTxt,i=O();return Object(f.jsx)("div",{className:"main-card",children:Object(f.jsxs)(b.a,{className:i.root,children:[Object(f.jsxs)(j.a,{children:[Object(f.jsx)(h.a,{variant:"h5",component:"h2",children:t.greeting}),Object(f.jsx)("br",{}),Object(f.jsxs)("span",{fontSize:"small",children:[t.interestTech,Object(f.jsx)("br",{}),t.interest,Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),t.detail]})]}),Object(f.jsx)(m.a,{children:Object(f.jsx)(p.a,{variant:"outlined",size:"small",onClick:function(e){alert("Thank you! Currently working on back-end server for this function!")},children:"CLICK"})})]})})},y=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAZFJREFUWIXtmFGuxCAIRXHyFuD+V8kOfF9MrAoComkzvV9NqniKgFiAV2eUhHcl0JbWvsoGN8gKLNkM//g/6SUiqlfKOdOjCrK1Xc2fSoS2iCDaxS0frlUYNGkHZKvP9hWUqj52Gl4cdAKwxdlJhYcHp5EDvKFkhua8LwHknKGUftdTSi5wEzS3uAQgzSmluMDViSgtTgDtLszmcPNmCq0eHgCPtiRiAHgB4TjfUqcRMeKQKcDU7K2HCyJCStbmDwCuXu7AOehuoBdgB/gImk13AuAguPIlgddzBkf5ENyciGSYIKikzeotB66I/QSNI7mG/TtwZpQqRWR3V1Uf4rt4frnknWhFW9UxPYqjW+o2/bSg0j4/AbrbeQlafRHwHNs5Z/dxH9J7IKKqitSQxgS+eJug27gxJyN3Gx+NWdXI00vV46du4xaRp29TmwenYacZ7DfWd277IA9ELo2HV35GWrX017TVbvAj4clehYLGi3pk9XihT+mFPiVLlxeR/bUNd5nTenpHnXbbfGR4vDqlfxjdqLm1GdJnAAAAAElFTkSuQmCC",alt:"paper",width:"100px"})}),Object(f.jsx)("div",{}),Object(f.jsx)(g,{infoTxt:x})]})}}]),i}(r.a.Component),x={greeting:"Hello! I'm Jonghee Choi",interestTech:"-Interest_Technology: Unity, Hardware, Graphics, Website, Application for daily use",interest:"-Interest_General: culture, history, cooking, watching skies, pixar, ghibli, simpsons",detail:"Are you interest in finding passionate junior developer?\nYou are very lucky this time!\nHere you have a passionate and endrance person!"},v=y,w=i(74),k=Object(u.a)((function(e){return{root:{"& > * + *":{marginLeft:e.spacing(3),padding:e.spacing(2)},borderStyle:"solid",position:"sticky",paddingLeft:"10px"}}}));var A=function(){var e=k(),t=function(e){return e.preventDefault()};return Object(f.jsx)("div",{className:"nav",children:Object(f.jsxs)(h.a,{className:e.root,children:[Object(f.jsx)(w.a,{href:"#bio",onClick:t,color:"inherit",variant:"h5",children:"Bio"}),Object(f.jsx)(w.a,{href:"#",onClick:function(e){e.target.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},color:"inherit",variant:"h5",children:"Project"}),Object(f.jsx)(w.a,{href:".footer",onClick:t,color:"inherit",variant:"h5",children:"Support"})]})})},C=Object(u.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"47% 53%",lineHeight:1.5},pos:{marginBottom:12}}}));var S=function(e){var t=e.object,i=C();return Object(f.jsx)("div",{className:"main-card",children:Object(f.jsxs)(b.a,{className:i.root,children:[Object(f.jsxs)(j.a,{children:[Object(f.jsx)(h.a,{variant:"h5",component:"h2",children:t.title}),Object(f.jsx)(h.a,{className:i.pos,color:"textSecondary",children:t.tool}),Object(f.jsxs)("span",{children:[t.detail[0],Object(f.jsx)("br",{}),t.detail[1],Object(f.jsx)("br",{}),t.detail[2]]})]}),Object(f.jsx)(j.a,{children:Object(f.jsx)("div",{className:"yt-container",children:t.embed})})]})})},N=(i(50),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"showProjectCard",value:function(){for(var e=[],t=0;t<L.length;t++)e.push(Object(f.jsx)(S,{object:L[t]}));return e}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"mainbody main-card",children:[this.showProjectCard(),Object(f.jsx)(g,{infoTxt:T,id:"bio"})]})}}]),i}(r.a.Component)),T={greeting:"Hello! I'm Jonghee Choi ",interestTech:"I am from Korea living in Canada.",interest:"I like making daily usage applications and game.And I support \u2018No hatred but love\u2019 world.:) ",detail:"Thank you very much for visiting my website. This website will be updated. "},I=N,L=[{title:"Top down game demo",tool:"Unity",detail:["- Designed whole game.","- used raycast to detect collisions.","- UI:inventory system/ 2DLighting."],embed:Object(f.jsx)("iframe",{className:"yt-container",src:"https://www.youtube.com/embed/RfBksGt2Ky8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},{title:"2d platformer game demo",tool:"Unity",detail:["- used raycasting method to detect collisions."],embed:Object(f.jsx)("iframe",{className:"yt-container",src:"https://www.youtube.com/embed/ZQ9Vy1z4JlY",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},{title:"SDL2 game",tool:"C++,SDL2",detail:["- drew simple squares display simple \u2018breakout\u2019 scene."],embed:Object(f.jsx)("iframe",{className:"yt-container",src:"https://www.youtube.com/embed/J8DhLsZceyo",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},{title:"2d platformer controller without ridgidbody",tool:"Unity",detail:["- used raycasting method to detect collisions.","- implemented jump, climb, auto platform movement functions."],embed:Object(f.jsx)("iframe",{className:"yt-container",src:"https://www.youtube.com/embed/-8v0BQ0Ku9E",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},{title:"a2b",tool:"Unity",detail:[Object(f.jsx)("a",{href:"https://choipaper.itch.io/a2b",children:"- itch.io_downloadLink"}),"- 48hrs game jam.","- a2b(a to b), it is a simple movement game but with a theme;\u2019Out of Order\u2019. I made it so the movement of the character is controlled by the user but once you choose to take a box then it is out of control."],embed:Object(f.jsx)("iframe",{className:"yt-container",width:"90%",height:"100%",src:"https://www.youtube.com/embed/oNkS7E19rLU",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},{title:"Camera Shaking",tool:"Unity",detail:["- understand and control Unity basic UI.","- code camera shaking movement with on click event."],embed:Object(f.jsx)("iframe",{className:"yt-container",src:"https://www.youtube.com/embed/afII-P1ugmw",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}],U=i(27),B=i(35),F=Object(B.a)("count"),H=function(){function e(){Object(a.a)(this,e)}return Object(s.a)(e,null,[{key:"increment",value:function(){Object(U.a)(this,F)[F]+=1}},{key:"getCount",value:function(){return Object(U.a)(this,F)[F]}}]),e}();Object.defineProperty(H,F,{writable:!0,value:0});var K=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).updateLike=function(){H.increment(),n.setState({count:H.getCount()})},n.useStyles=Object(u.a)({root:{minWidth:150,color:"white",background:"#716C6B"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),n.updateLike=n.updateLike.bind(),n.state={count:H.getCount()},n}return Object(s.a)(i,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"main-card",children:Object(f.jsxs)(b.a,{className:this.useStyles.root,children:[Object(f.jsxs)(j.a,{children:[Object(f.jsx)(h.a,{variant:"h5",component:"h2",children:"Stats"}),Object(f.jsxs)(h.a,{className:this.useStyles.pos,color:"textSecondary",children:["With Love:",this.state.count]}),Object(f.jsxs)(h.a,{variant:"body2",component:"p",children:["Goal:",Object(f.jsx)("br",{}),"Current:"]})]}),Object(f.jsx)(m.a,{children:Object(f.jsx)(p.a,{onClick:function(){e.updateLike()},color:"primary",children:"HIT"})})]})})}}]),i}(r.a.Component),G=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"sidebody",children:[Object(f.jsx)(g,{infoTxt:J[0]}),Object(f.jsx)(g,{infoTxt:J[1]}),Object(f.jsx)(g,{infoTxt:J[2]}),Object(f.jsx)(K,{})]})}}]),i}(r.a.Component),J=[{greeting:"Like 1",interestTech:"If you like this project, click the button below to cheer Jonghee",interest:"",link:""},{greeting:"Like 2",interestTech:"If you like this project, click the button below to get Jonghee's contact information",interest:"",link:""},{greeting:"Like 3",interestTech:"If you like this project, click the button below to get Jonghee's resume",interest:"",link:""}],D=G,Y=i(75),z=i(76),P=i(77),R=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"footer",ref:"footer",children:[Object(f.jsx)("a",{href:W.email,children:Object(f.jsx)(Y.a,{fontSize:"large"})}),Object(f.jsx)("a",{href:W.github,children:Object(f.jsx)(z.a,{fontSize:"large"})}),Object(f.jsx)("a",{href:W.linkedIn,children:Object(f.jsx)(P.a,{fontSize:"large"})}),Object(f.jsx)("p",{children:"\xa9JongheeChoi 2021"})]})}}]),i}(r.a.Component),W={email:"mailto: jhvito@gmail.com",github:"https://github.com/choipaper",linkedIn:"https://www.linkedin.com/in/jong-hee-choi-2a9184188/"},V=R,q=(i(51),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsx)(A,{}),Object(f.jsxs)("div",{className:"body-container",children:[Object(f.jsx)(I,{}),Object(f.jsx)(D,{})]}),Object(f.jsx)(V,{})]})}}]),i}(r.a.Component)),E=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,81)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;i(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root")),E()}},[[52,1,2]]]);
//# sourceMappingURL=main.f41c8e4b.chunk.js.map