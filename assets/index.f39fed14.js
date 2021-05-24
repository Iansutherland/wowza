import{T as n,S as e,M as t,a as o,b as a,c as i,D as r,d as s,P as c,W as l,e as p,f as d,g as h,A as w}from"./vendor.5a5dd3e8.js";document.querySelector("#content").innerHTML='\n    <main>\n    <header>\n      <h1>Ian Sutherland</h1>\n      <h4>Software Dev</h4>\n      \n    </header>\n\n    <blockquote>\n      <p>I enjoy technology and solving problems with infrastructure and code</p>\n    </blockquote>\n\n    <section>\n      <h2>Create neat stuff</h2>\n      <p>\n        Use technology to make stuff better. Or not - just have fun.\n      </p>\n      <p>\n        Automate, Extract, Load, Persist, Teardown, Rebuild, Refactor, balance, whatever.    let\'s just do stuff. \n      </p>\n    </section>\n\n    <section>\n      <h2>Previous experience</h2>\n      <h4>\n        Digital Record Management integrations\n      </h4>\n      <h6>State of Arizona, Department of Water Resources</h6>\n      <p>\n        Windows Background Worker. Integrated with Xerox Docushare and Gmail api to create emailable bot that uploaded documents by fetcing barcoded data. \n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>c#</li>\n        <li>.NET</li>\n        <li>Google OAuth2 provider</li>\n        <li>Oracle database</li>\n        <li>Microsoft Sql Database</li>\n      </ul>\n      </section>\n\n      <section>\n      <h4>Internal Workflow and CRUD web app</h4>\n      <p>\n        This was a 3-tier app used in determining water supply and designations for that water use.\n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>React.js (create-react-app)</li>\n        <li>c# web api2 (middleware)</li>\n        <li>Oracle Database</li>\n      </ul>\n      </section>\n\n      <section>\n      <h4>\n        ASP.NET MVC 5 Reporting Tool\n      </h4>\n      <p>\n        This tool was used by water right owner\'s to report statistics of water use and submit/remit payment if necessary\n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>C#</li>\n        <li>.NET MVC 5</li>\n        <li>jQuery</li>\n        <li>Oracle Database</li>\n      </ul>\n    </section>\n\n    <blockquote>\n      <p>“Never confuse movement with action.” <br> ― Ernest Hemingway </p>\n    </blockquote>\n\n    <section>\n      <h2>Special Thanks</h2>\n      <p>to Jeff Delaney at <a href="https://fireship.io/">fireship.io</a></p>\n      <p>He put together <a href="https://www.youtube.com/watch?v=Q7AOvWpIVHU">this</a> great tutorial on three.js which uses WebGL in the browser.</p>\n    </section>\n\n    <section>\n      <h2>More Special Thanks</h2>\n      <p>To <a href="http://planetpixelemporium.com/index.php">JHT\'s Planetary Pixel Emporium</a></p>\n    </section>\n  </main>\n    ';const u=new s,m=new c(75,window.innerWidth/window.innerHeight,.1,1e3),f=function(){const n=new l({canvas:document.querySelector("#bg")});return n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n}();m.position.setZ(7);const g=k(4325481,40),b=k(45824,30);u.add(g,b);const{pointLight:y,ambientLight:T}=function(){const n=new h(16777215);n.position.set(20,20,20);const e=new w(16777215);return{pointLight:n,ambientLight:e}}();u.add(y,T),Array(200).fill().forEach((function(){const n=new e(.25,24,24),a=new t({color:16777215}),i=new o(n,a),[r,s,c]=Array(3).fill().map((()=>d.randFloatSpread(100)));i.position.set(r,s,c),u.add(i)}));const x=(new n).load("/wowza/assets/space.ca17ac07.jpg");u.background=x;const v=function(s=!0){const c=(new n).load("/wowza/assets/earthmap1k.9a94a536.jpg"),l=new e(1,32,32),p=new t({map:c}),d=new o(l,p);if(s){var h=new e(.51,32,32),w=new a({map:new i("/wowza/assets/earthcloudmap.b41fbf0c.jpg"),side:r,opacity:.8,transparent:!0,depthWrite:!1}),u=new o(h,w);d.add(u)}return d}();u.add(v);const j=function(){const a=(new n).load("/wowza/assets/moon.b246064f.jpg"),i=(new n).load("/wowza/assets/moon_normal.8e277ece.jpg"),r=new o(new e(.25,32,32),new t({map:a,normalMap:i}));return r.earthDegree=0,r.distanceFromEarth=-3,r.position.z=.04,r.position.x=r.distanceFromEarth,r}();function k(n,e){const a=new p(e,1,16,100),i=new t({color:n});return new o(a,i)}u.add(j),document.body.onscroll=function(){document.body.getBoundingClientRect().top;const n=function(n,e){const t=(o=n,o*(Math.PI/180));var o;return{x:Math.cos(t)*e,y:Math.sin(t)*e}}(j.earthDegree,j.distanceToEarth);j.position.x=n.x,j.position.y=n.y},function n(){requestAnimationFrame(n),g.rotation.x+=.01,g.rotation.y+=.005,g.rotation.z+=.01,b.rotation.x-=.01,b.rotation.y-=.005,b.rotation.z-=.01,j.rotation.x+=.001,j.rotation.y+=.005,v.rotation.x+=4e-4,v.rotation.y+=.001,f.render(u,m)}();
