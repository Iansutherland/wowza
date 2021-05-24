import{T as n,S as e,M as t,a as o,b as a,c as i,D as s,B as r,d as c,e as l,P as p,O as d,W as h,f as w,g as u,h as m,A as f}from"./vendor.919e3e7c.js";function g(n,e){const t=n*(Math.PI/180);return{x:Math.cos(t)*e,y:Math.sin(t)*e}}document.querySelector("#content").innerHTML='\n    <main>\n    <header>\n      <h1>Ian Sutherland</h1>\n      <h4>Software Dev</h4>\n    </header>\n\n    <blockquote>\n      <p>I enjoy technology and solving problems with infrastructure and code</p>\n    </blockquote>\n\n    <section>\n      <h2>Create neat stuff</h2>\n      <p>\n        Use technology to make stuff better. Or not - just have fun.\n      </p>\n      <p>\n        Automate, Extract, Load, Persist, Teardown, Rebuild, Refactor, balance, whatever.    let\'s just do stuff. \n      </p>\n    </section>\n\n    <section>\n      <h2>Previous experience</h2>\n      <h4>\n        Digital Record Management integrations\n      </h4>\n      <h6>State of Arizona, Department of Water Resources</h6>\n      <p>\n        Windows Background Worker. Integrated with Xerox Docushare and Gmail api to create emailable bot that uploaded documents by fetcing barcoded data. \n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>c#</li>\n        <li>.NET</li>\n        <li>Google OAuth2 provider</li>\n        <li>Oracle database</li>\n        <li>Microsoft Sql Database</li>\n      </ul>\n      </section>\n\n      <section>\n      <h4>Internal Workflow and CRUD web app</h4>\n      <p>\n        This was a 3-tier app used in determining water supply and designations for that water use.\n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>React.js (create-react-app)</li>\n        <li>c# web api2 (middleware)</li>\n        <li>Oracle Database</li>\n      </ul>\n      </section>\n\n      <section>\n      <h4>\n        ASP.NET MVC 5 Reporting Tool\n      </h4>\n      <p>\n        This tool was used by water right owner\'s to report statistics of water use and submit/remit payment if necessary\n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>C#</li>\n        <li>.NET MVC 5</li>\n        <li>jQuery</li>\n        <li>Oracle Database</li>\n      </ul>\n    </section>\n\n    <blockquote>\n      <p>“Never confuse movement with action.” <br> ― Ernest Hemingway </p>\n    </blockquote>\n\n    <section>\n      <h2>Special Thanks</h2>\n      <p>to Jeff Delaney at <a href="https://fireship.io/">fireship.io</a></p>\n      <p>He put together <a href="https://www.youtube.com/watch?v=Q7AOvWpIVHU">this</a> great tutorial on three.js which uses WebGL in the browser.</p>\n    </section>\n\n    <section>\n      <h2>More Special Thanks</h2>\n      <p>To <a href="http://planetpixelemporium.com/index.php">JHT\'s Planetary Pixel Emporium</a></p>\n    </section>\n  </main>\n    ';const b=new l,y=(new n).load("/wowza/assets/space.ca17ac07.jpg");b.background=y;const x=new p(75,window.innerWidth/window.innerHeight,.1,1e3),z=function(){const n=new h({canvas:document.querySelector("#bg")});return n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n}();x.position.z=1;const T=R(4325481,40),D=R(45824,30);b.add(T,D);const{pointLight:P,ambientLight:v}=function(){const n=new m(16777215);n.position.set(20,20,20);const e=new f(16777215);return{pointLight:n,ambientLight:e}}();b.add(P,v);const j=new d(x,z.domElement);j.minDistance=5,j.maxDistance=50,Array(200).fill().forEach((function(){const n=new e(.25,24,24),a=new t({color:16777215}),i=new o(n,a),[s,r,c]=Array(3).fill().map((()=>u.randFloatSpread(100)));i.position.set(s,r,c),b.add(i)}));const S=function(){const e=(new n).load("/wowza/assets/headShot.d5818e39.jpg");return new o(new r(.5,.5,.5),new c({map:e}))}();S.position.z=0,b.add(S);const k=function(r=!0){const c=(new n).load("/wowza/assets/earthmap1k.9a94a536.jpg"),l=new e(1,32,32),p=new t({map:c}),d=new o(l,p);if(r){var h=new e(.51,32,32),w=new a({map:new i("/wowza/assets/earthcloudmap.b41fbf0c.jpg"),side:s,opacity:.8,transparent:!0,depthWrite:!1}),u=new o(h,w);d.add(u)}return d.animate=()=>{d.rotation.x+=4e-4,d.rotation.y+=.001},d}();b.add(k);const M=function(){const a=(new n).load("/wowza/assets/moon.b246064f.jpg"),i=(new n).load("/wowza/assets/moon_normal.8e277ece.jpg"),s=new o(new e(.25,32,32),new t({map:a,normalMap:i}));return s.earthDegree=0,s.distanceFromPlanet=-1.75,s.position.z=.04,s.position.x=s.distanceFromPlanet,s.Orbit=n=>{s.earthDegree+=.5,s.position.x=n.x+s.distanceFromPlanet,s.position.y=n.y+s.distanceFromPlanet,s.position.z=n.z+s.distanceFromPlanet;const e=g(s.earthDegree,s.distanceFromPlanet);s.position.x=e.x,s.position.y=e.y,s.position.z=e.y-e.y/10},s.animate=()=>{s.rotation.x+=.001,s.rotation.y+=.005},s}();function R(n,e){const a=new w(e,1,16,100),i=new t({color:n});return new o(a,i)}b.add(M),document.body.onscroll=function(){const n=document.body.getBoundingClientRect().top;x.position.z=-.01*n,x.position.z<1&&(x.position.z=1),x.position.x=-2e-4*n,x.rotation.y=-2e-4*n},function n(){requestAnimationFrame(n),T.rotation.x+=.01,T.rotation.y+=.005,T.rotation.z+=.01,D.rotation.x-=.01,D.rotation.y-=.005,D.rotation.z-=.01,M.animate(),M.Orbit(k),k.animate(),z.render(b,x)}();
