import{S as n,P as e,O as t,T as o,W as a,M as i,a as s,b as r,B as c,c as l,d as p,e as d,f as w,A as h}from"./vendor.cc777c4a.js";document.querySelector("#content").innerHTML='\n    <main>\n    <header>\n      <h1>Ian Sutherland</h1>\n      <h4>Software Dev</h4>\n      \n    </header>\n\n    <blockquote>\n      <p>I enjoy technology and solving problems with infrastructure and code</p>\n    </blockquote>\n\n    <section>\n      <h2>Create neat stuff</h2>\n      <p>\n        Use technology to make stuff better. Or not - just have fun.\n      </p>\n      <p>\n        Automate, Extract, Load, Persist, Teardown, Rebuild, Refactor, balance, whatever.    let\'s just do stuff. \n      </p>\n    </section>\n\n    <section>\n      <h2>Ian\'s previous experience</h2>\n      <h4>\n        Digital Record Management integrations\n      </h4>\n      <h6>State of Arizona, Department of Water Resources</h6>\n      <p>\n        Windows Background Worker. Integrated with Xerox Docushare and Gmail api to create emailable bot that uploaded documents by fetcing barcoded data. \n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>c#</li>\n        <li>.NET</li>\n        <li>Google OAuth2 provider</li>\n        <li>Oracle database</li>\n        <li>Microsoft Sql Database</li>\n      </ul>\n      </section>\n\n      <section>\n      <h4>Internal Workflow and CRUD web app</h4>\n      <p>\n        This was a 3-tier app used in determining water supply and designations for that water use.\n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>React.js (create-react-app)</li>\n        <li>c# web api2 (middleware)</li>\n        <li>Oracle Database</li>\n      </ul>\n      </section>\n\n      <section>\n      <h4>\n        ASP.NET MVC 5 Reporting Tool\n      </h4>\n      <p>\n        This tool was used by water right owner\'s to report statistics of water use and submit/remit payment if necessary\n      </p>\n      <p>Technology</p>\n      <ul>\n        <li>C#</li>\n        <li>.NET MVC 5</li>\n        <li>jQuery</li>\n        <li>Oracle Database</li>\n      </ul>\n    </section>\n\n    <blockquote>\n      <p>“Never confuse movement with action.” <br> ― Ernest Hemingway </p>\n    </blockquote>\n\n    <section>\n      <h2>Special Thanks</h2>\n      <p>to Jeff Delaney at <a href="https://fireship.io/">fireship.io</a></p>\n      <p>He put together <a href="https://www.youtube.com/watch?v=Q7AOvWpIVHU">this</a> great tutorial on three.js which uses WebGL in the browser.</p>\n    </section>\n  </main>\n    ';const u=new n,f=new e(75,window.innerWidth/window.innerHeight,.1,1e3),m=function(){const n=new a({canvas:document.querySelector("#bg")});return n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n}();f.position.setZ(10);const g=function(n){const e=new p(25,1,16,100),t=new r({color:n});return new i(e,t)}(4325481);u.add(g);const{pointLight:b,ambientLight:y}=function(){const n=new w(16777215);n.position.set(20,20,20);const e=new h(16777215);return{pointLight:n,ambientLight:e}}();u.add(b,y);const v=new t(f,m.domElement);v.minDistance=10,v.maxDistance=50,Array(200).fill().forEach((function(){const n=new s(.25,24,24),e=new r({color:16777215}),t=new i(n,e),[o,a,c]=Array(3).fill().map((()=>d.randFloatSpread(100)));t.position.set(o,a,c),u.add(t)}));const T=(new o).load("/wowza/assets/space.ca17ac07.jpg");u.background=T;const j=function(){const n=(new o).load("/wowza/assets/resume_desc.f1d70575.jpg");return new i(new c(10,9,1),new l({map:n}))}();u.add(j);const D=function(){const n=(new o).load("/wowza/assets/moon.b246064f.jpg"),e=(new o).load("/wowza/assets/moon_normal.8e277ece.jpg");return new i(new s(.5,32,32),new r({map:n,normalMap:e}))}();u.add(D),D.position.z=15,D.position.setX(-10),function n(){requestAnimationFrame(n),g.rotation.x+=.01,g.rotation.y+=.005,g.rotation.z+=.01,D.rotation.x+=.001,D.rotation.y+=.005,j.rotation.y=.01,j.rotation.z=.01,v.update(),m.render(u,f)}();
