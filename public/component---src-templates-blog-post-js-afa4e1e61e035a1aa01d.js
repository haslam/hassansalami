(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return b});a(32);var n=a(7),r=a.n(n),o=a(0),l=a.n(o),i=a(156),s=a.n(i),c=a(152),m=a(157),u=a.n(m),d=a(160),p=a(155),h=a(151),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=u()(this.props,"data.site.siteMetadata.title"),a=e.excerpt,n=this.props.pageContext,r=n.previous,o=n.next;return l.a.createElement(p.a,{location:this.props.location},l.a.createElement(s.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:e.frontmatter.title+" | "+t}),l.a.createElement("h1",null,e.frontmatter.title),l.a.createElement("p",{style:Object.assign({},Object(h.b)(-.2),{display:"block",marginBottom:Object(h.a)(1),marginTop:Object(h.a)(-1)})},e.frontmatter.date),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),l.a.createElement("hr",{style:{marginBottom:Object(h.a)(1)}}),l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,r&&l.a.createElement(c.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),l.a.createElement("li",null,o&&l.a.createElement(c.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))),l.a.createElement(d.a,null))},t}(l.a.Component);t.default=_;var b="3804820323"},151:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return c});var n=a(176),r=a.n(n),o=a(177),l=a.n(o);l.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete l.a.googleFonts;var i=new r.a(l.a);var s=i.rhythm,c=i.scale},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(150),s=a.n(i);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var c=a(154),m=a.n(c);a.d(t,"PageRenderer",function(){return m.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},153:function(e,t,a){e.exports={main__header:"layout-module--main__header--VFN5u",header__logo:"layout-module--header__logo--SC-Bl",header__logo_text:"layout-module--header__logo_text--1zuvb",header__nav:"layout-module--header__nav--Wm5ej",header__menu:"layout-module--header__menu--2abNB",header__menu_item:"layout-module--header__menu_item--2gjeN",header__nav_btn:"layout-module--header__nav_btn--2zKov",mobileToggler:"layout-module--mobile-toggler--6M3O_",main_nav:"layout-module--main_nav--3S4Ii",bright__link:"layout-module--bright__link--3hMsz",container:"layout-module--container--1sCSw"}},154:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},155:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),l=a.n(o),i=a(152),s=a(151),c=a(51),m=a.n(c),u=a(158),d=a(179),p=a(153),h=a.n(p),_=a(165),b=a.n(_),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navBars:!0},a.handleMobileMenu=a.handleMobileMenu.bind(m()(m()(a))),a}r()(t,e);var a=t.prototype;return a.handleMobileMenu=function(){document.getElementById("nav_menu").classList.toggle("mobile-toggler"),this.setState(function(e){return{navBars:!e.navBars}})},a.render=function(){return l.a.createElement("header",{className:h.a.main__header},l.a.createElement("h1",{className:h.a.header__logo},l.a.createElement(i.Link,{className:h.a.header__logo_text,to:"/"},l.a.createElement("img",{src:b.a,alt:"Hassan Salami - H-3ree",style:{marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}))),l.a.createElement("nav",{className:h.a.header__nav},l.a.createElement("button",{className:h.a.header__nav_btn,onClick:this.handleMobileMenu,"aria-label":"Navigation Menu"},this.state.navBars?l.a.createElement(u.a,{icon:d.a,size:"2x"}):l.a.createElement(u.a,{icon:d.b,size:"2x"})),l.a.createElement("ul",{className:h.a.header__menu,id:"nav_menu"},l.a.createElement("li",{className:h.a.header__menu_item},l.a.createElement(i.Link,{to:"/"},"Home")),l.a.createElement("li",{className:h.a.header__menu_item},l.a.createElement(i.Link,{to:"/contact"},"Contact")))))},t}(l.a.Component),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:p.container,style:{marginTop:Object(s.a)(3),marginBottom:Object(s.a)(1)}},l.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.a.createElement("p",{style:{fontSize:"90%",marginBottom:"1rem"}},"© 2018 Copyright Hassan Salami. All rights reserved."),l.a.createElement("small",{style:{color:"hsl(0,0%,50%)"}},"This site is built with 🧡 and",l.a.createElement("a",{className:p.bright__link,href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"}," Gatsby "),"and hosted on ",l.a.createElement("a",{className:p.bright__link,href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer"},"Netlify"),". Source code can be found on ",l.a.createElement("a",{className:p.bright__link,href:"https://github.com/haslam/hassansalami",target:"_blank",rel:"noopener noreferrer"},"GitHub"),".")))},t}(l.a.Component),y=(a(166),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",{className:h.a.container},l.a.createElement(g,null),e,l.a.createElement(f,null))},t}(l.a.Component));t.a=y},159:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(52),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,a){"use strict";a.d(t,"b",function(){return h}),a.d(t,"a",function(){return _});a(32);var n=a(7),r=a.n(n),o=a(0),l=a.n(o),i=a(151),s=a(158),c=a(178),m=a(161),u=a.n(m),d=a(162),p=a.n(d),h=(a(163),a(164),l.a.Component,function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:p.a.bio__wrapper,style:{marginBottom:Object(i.a)(3)}},l.a.createElement("div",{className:p.a.bio__note},l.a.createElement("h2",{style:Object.assign({},Object(i.b)(1),{marginBottom:Object(i.a)(1),marginTop:0})},"Hello, I'm ",l.a.createElement("span",{style:{color:"#cc5200"}},"Hassan Salami")),l.a.createElement("p",null,"Front-End. UX/UI. Art. Basketball."),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("span",{style:{fontWeight:"600"}},"Find me on"),l.a.createElement("ul",{className:p.a.bio__social},l.a.createElement("li",{className:p.a.bio__social_item},l.a.createElement("a",{href:"https://twitter.com/haslam956",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{icon:c.d,size:"lg"}))),l.a.createElement("li",{className:p.a.bio__social_item},l.a.createElement("a",{href:"https://www.linkedin.com/in/hassanhersen-salami",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{icon:c.b,size:"lg"}))),l.a.createElement("li",{className:p.a.bio__social_item},l.a.createElement("a",{href:"https://www.pinterest.com/haslam414/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{icon:c.c,size:"lg"}))),l.a.createElement("li",{className:p.a.bio__social_item},l.a.createElement("a",{href:"https://www.github.com/haslam/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{icon:c.a,size:"lg"})))))),l.a.createElement("div",{className:p.a.bio__photo},l.a.createElement("img",{src:u.a,alt:"Hassan Salami",style:{marginRight:Object(i.a)(.5),marginBottom:0,borderRadius:"50px"}})))},t}(l.a.Component)),_=function(){return l.a.createElement("div",{className:p.a.bio__wrapper,style:{marginBottom:Object(i.a)(4)}},l.a.createElement("div",{className:p.a.bio__note},l.a.createElement("h4",{style:Object.assign({},Object(i.b)(.25),{marginBottom:Object(i.a)(1),marginTop:0})},"Hey, it's ",l.a.createElement("span",{style:{color:"#cc5200"}},"Hassan")," again."),l.a.createElement("p",null,"Thanks for stopping by! Hope you had a good read here today. I'd very much appreciate your visit again 🙂."),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("span",{style:{fontWeight:"600"}},"In the meantime, do find me on"),l.a.createElement("ul",{className:p.a.bio__social},l.a.createElement("li",{className:p.a.bio__social_item},l.a.createElement("a",{href:"https://twitter.com/haslam956",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{icon:c.d,size:"lg"}))),l.a.createElement("li",{className:p.a.bio__social_item},l.a.createElement("a",{href:"https://www.linkedin.com/in/hassanhersen-salami",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{icon:c.b,size:"lg"}))),l.a.createElement("li",{className:p.a.bio__social_item},l.a.createElement("a",{href:"https://www.pinterest.com/haslam414/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{icon:c.c,size:"lg"})))))),l.a.createElement("div",{className:p.a.bio__photo},l.a.createElement("img",{src:u.a,alt:"Hassan Salami",style:{marginRight:Object(i.a)(.5),marginBottom:0,borderRadius:"50px"}})))}},161:function(e,t,a){e.exports=a.p+"static/profile-e77416b80761648060882416ada357b8.jpg"},162:function(e,t,a){e.exports={bio__wrapper:"bio-module--bio__wrapper--zZFbC",bio__note:"bio-module--bio__note--3pdAw",bio__photo:"bio-module--bio__photo--1JZyv",bio__social:"bio-module--bio__social--2xkIe",bio__social_item:"bio-module--bio__social_item--1T5pC"}},165:function(e,t,a){e.exports=a.p+"static/H-3ree-e23c8599beda1cda491b8910427039d4.png"},166:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-afa4e1e61e035a1aa01d.js.map