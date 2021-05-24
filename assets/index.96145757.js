import{T as n,S as t,M as e,a as o,b as a,c as i,D as s,B as r,d as c,e as l,P as p,O as h,W as d,f as w,g as u,h as m,A as f}from"./vendor.919e3e7c.js";function g(n,t){const e=n*(Math.PI/180);return{x:Math.cos(e)*t,y:Math.sin(e)*t}}function b(n){return n.toFixed(2)}document.querySelector("#content").innerHTML='\n    <main>\n    <header>\n      <h1>Ian Sutherland</h1>\n      <h4>Software Dev</h4>\n    </header>\n\n    <blockquote>\n      <p>I enjoy technology and solving problems with infrastructure and code</p>\n    </blockquote>\n\n    <section>\n      <h2>Create neat stuff</h2>\n      <p>\n        Use technology to make stuff better. Or not - just have fun.\n      </p>\n      <p>\n        Automate, Extract, Load, Persist, Teardown, Rebuild, Refactor, balance, whatever.    let\'s just do stuff. \n      </p>\n    </section>\n\n    <section>\n      <h2>Previous experience</h2>\n      <h4>\n        Digital Record Management integrations\n      </h4>\n      <h6>State of Arizona, Department of Water Resources</h6>\n      <p>\n        Windows Background Worker. Integrated with Xerox Docushare and Gmail api to create emailable bot that uploaded documents by fetching barcoded data. \n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>C#</li>\n        <li>.NET</li>\n        <li>Google OAuth2 provider</li>\n        <li>Oracle database</li>\n        <li>Microsoft Sql Database</li>\n      </ul>\n      </section>\n\n      <section>\n      <h4>Internal Workflow and CRUD web app</h4>\n      <p>\n        This is a 3-tier app used in determining water supply and designations for that water use.\n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>React.js (create-react-app)</li>\n        <li>C# web api2 (middleware)</li>\n        <li>Oracle Database</li>\n      </ul>\n      </section>\n\n      <section>\n      <h4>\n        ASP.NET MVC 5 Reporting Tool\n      </h4>\n      <p>\n        This tool was used by water right owner\'s to report statistics of water use and submit/remit payment if necessary\n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>C#</li>\n        <li>.NET MVC 5</li>\n        <li>jQuery</li>\n        <li>Oracle Database</li>\n      </ul>\n    </section>\n\n    <blockquote>\n      <p>“Never confuse movement with action.” <br> ― Ernest Hemingway </p>\n    </blockquote>\n\n    <section>\n      <h2>Special Thanks</h2>\n      <p>to Jeff Delaney at <a href="https://fireship.io/">fireship.io</a></p>\n      <p>He put together <a href="https://www.youtube.com/watch?v=Q7AOvWpIVHU">this</a> great tutorial on three.js which uses WebGL in the browser.</p>\n    </section>\n\n    <section>\n      <h2>More Special Thanks</h2>\n      <p>To <a href="http://planetpixelemporium.com/index.php">JHT\'s Planetary Pixel Emporium</a> for the planet sphere jpgs used to texture the planets</p>\n    </section>\n  </main>\n    ';document.querySelector("#scrollToTop").addEventListener("click",(()=>{console.log("welp"),window.scrollTo(0,0)}));const y=function(n,t=""){let e=n||null,o=t;const a=document.querySelector("#controls");return{SetMeshReference:(n,t)=>{e=n,o=t||""},Paint:()=>{if(e){const n=function(n,t){const{position:e,rotation:o}=n;return`\n        <p>${t}</p>\n        <table>\n            <tbody>\n                <tr>\n                    <th>Position X</th>\n                    <th>Position Y</th>\n                    <th>Position Z</th>\n                </tr>\n                <tr>\n                    <th>${b(e.x)}</th>\n                    <th>${b(e.y)}</th>\n                    <th>${b(e.z)}</th>\n                </tr>\n                <tr>\n                    <th>Rotation X</th>\n                    <th>Rotation Y</th>\n                    <th>Rotation Z</th>\n                </tr>\n                <tr>\n                    <th>${b(o.x)}</th>\n                    <th>${b(o.y)}</th>\n                    <th>${b(o.z)}</th>\n                </tr>\n            </tbody>\n        </table>\n    `}({position:e.position,rotation:e.rotation},o);a.innerHTML=n}}}}(),x=new l,z=(new n).load("/wowza/assets/space.ca17ac07.jpg");x.background=z;const P=new p(75,window.innerWidth/window.innerHeight,.1,1e3),T=function(){const n=new d({canvas:document.querySelector("#bg")});return n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n}();P.position.z=1;const j=A(4325481,40),S=A(45824,30);x.add(j,S);const{pointLight:k,ambientLight:v}=function(){const n=new m(16777215);n.position.set(20,20,20);const t=new f(16777215);return{pointLight:n,ambientLight:t}}();x.add(k,v);const D=new h(P,T.domElement);D.minDistance=5,D.maxDistance=50,Array(200).fill().forEach((function(){const n=new t(.25,24,24),a=new e({color:16777215}),i=new o(n,a),[s,r,c]=Array(3).fill().map((()=>u.randFloatSpread(100)));i.position.set(s,r,c),x.add(i)}));const M=function(){const t=(new n).load("/wowza/assets/headShot.d5818e39.jpg"),e=new o(new r(.5,.5,.5),new c({map:t}));return e.animate=()=>{e.rotation.x+=.001,e.rotation.y+=.001},e}();M.position.z=0,x.add(M);const R=function(r=!0){const c=(new n).load("/wowza/assets/earthmap1k.9a94a536.jpg"),l=new t(1,32,32),p=new e({map:c}),h=new o(l,p);if(r){var d=new t(.51,32,32),w=new a({map:new i("/wowza/assets/earthcloudmap.b41fbf0c.jpg"),side:s,opacity:.8,transparent:!0,depthWrite:!1}),u=new o(d,w);h.add(u)}return h.animate=()=>{h.rotation.x+=1e-5,h.rotation.y+=4e-4},h}();x.add(R);const q=function(){const a=(new n).load("/wowza/assets/moon.b246064f.jpg"),i=(new n).load("/wowza/assets/moon_normal.8e277ece.jpg"),s=new o(new t(.25,32,32),new e({map:a,normalMap:i}));return s.earthDegree=0,s.distanceFromPlanet=-1.75,s.position.z=.04,s.position.x=s.distanceFromPlanet,s.Orbit=n=>{s.earthDegree+=.5,s.position.x=n.x+s.distanceFromPlanet,s.position.y=n.y+s.distanceFromPlanet,s.position.z=n.z+s.distanceFromPlanet;const t=g(s.earthDegree,s.distanceFromPlanet);s.position.x=t.x,s.position.y=t.y,s.position.z=t.y-t.y/10},s.animate=()=>{s.rotation.x+=.001,s.rotation.y+=.005},s}();x.add(q);const W=function(){const a=(new n).load("/wowza/assets/marsmap1k.34ffa876.jpg"),i=(new n).load("/wowza/assets/marsbump1k.dbf776bf.jpg"),s=new t(.8,32,32),r=new e({map:a,normalMap:i}),c=new o(s,r);return c.position.z=20,c.animate=()=>{c.rotation.x+=4e-4,c.rotation.y+=.001},c}();function A(n,t){const a=new w(t,1,16,100),i=new e({color:n});return new o(a,i)}x.add(W),document.body.onscroll=function(){const n=document.body.getBoundingClientRect().top;P.position.z=-.01*n,P.position.z<1&&(P.position.z=1),P.position.x=-2e-4*n,P.rotation.y=-2e-4*n},function n(){requestAnimationFrame(n),j.rotation.x+=.01,j.rotation.y+=.005,j.rotation.z+=.01,S.rotation.x-=.01,S.rotation.y-=.005,S.rotation.z-=.01,q.animate(),q.Orbit(R),R.animate(),M.animate(),W.animate(),y.Paint(),T.render(x,P)}();
