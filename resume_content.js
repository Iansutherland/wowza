export default function ResumeContent() {
    return `
    <main>
    <header>
      <h1>Ian Sutherland</h1>
      <h4>Software Dev</h4>
    </header>

    <blockquote>
      <p>I enjoy technology and solving problems with infrastructure and code</p>
    </blockquote>

    <section>
      <h2>Create neat stuff</h2>
      <p>
        Use technology to make stuff better. Or not - just have fun.
      </p>
      <p>
        Automate, Extract, Load, Persist, Teardown, Rebuild, Refactor, balance, whatever.    let's just do stuff. 
      </p>
    </section>

    <section>
      <h2>Previous experience</h2>
      <h4>
        Digital Record Management integrations
      </h4>
      <h6>State of Arizona, Department of Water Resources</h6>
      <p>
        Windows Background Worker. Integrated with Xerox Docushare and Gmail api to create emailable bot that uploaded documents by fetching barcoded data. 
      </p>
      <p>Technology</p>
      <ul>
        <li>C#</li>
        <li>.NET</li>
        <li>Google OAuth2 provider</li>
        <li>Oracle database</li>
        <li>Microsoft Sql Database</li>
      </ul>
      </section>

      <section>
      <h4>Internal Workflow and CRUD web app</h4>
      <p>
        This is a 3-tier app used in determining water supply and designations for that water use.
      </p>
      <p>Technology</p>
      <ul>
        <li>React.js (create-react-app)</li>
        <li>C# web api2 (middleware)</li>
        <li>Oracle Database</li>
      </ul>
      </section>

      <section>
      <h4>
        ASP.NET MVC 5 Reporting Tool
      </h4>
      <p>
        This tool was used by water right owner's to report statistics of water use and submit/remit payment if necessary
      </p>
      <p>Technology</p>
      <ul>
        <li>C#</li>
        <li>.NET MVC 5</li>
        <li>jQuery</li>
        <li>Oracle Database</li>
      </ul>
    </section>

    <blockquote>
      <p>“Never confuse movement with action.” <br> ― Ernest Hemingway </p>
    </blockquote>

    <section>
      <h2>Special Thanks</h2>
      <p>to Jeff Delaney at <a href="https://fireship.io/">fireship.io</a></p>
      <p>He put together <a href="https://www.youtube.com/watch?v=Q7AOvWpIVHU">this</a> great tutorial on three.js which uses WebGL in the browser.</p>
    </section>

    <section>
      <h2>More Special Thanks</h2>
      <p>To <a href="http://planetpixelemporium.com/index.php">JHT's Planetary Pixel Emporium</a> for the planet sphere jpgs used to texture the planets</p>
    </section>
  </main>
    `;
}