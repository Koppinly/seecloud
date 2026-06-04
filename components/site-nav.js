// Global site navigation as a Web Component.
// Usage: load this script, then drop <site-nav></site-nav> anywhere in the body.
// Uses absolute paths so it works from any directory depth.

class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="global-header w-100">
        <nav class="navbar navbar-expand-lg mb-4">
          <a href="/" class="navbar-brand home-icon" title="Home">
            <i class="fa fa-home"></i>
          </a>
          <span class="navbar-text ml-2 font-weight-bold">SeeCloud</span>
          <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navMenu">
            <ul class="navbar-nav ml-4">
              <li class="nav-item"><a class="nav-link" href="/applications/applications.html">Applications</a></li>
              <li class="nav-item"><a class="nav-link" href="/function/function.html">Function</a></li>
              <li class="nav-item"><a class="nav-link" href="/demo/demo.html">FX Demo</a></li>
              <li class="nav-item"><a class="nav-link" href="#page2">Games (dead)</a></li>
            </ul>
          </div>
        </nav>
        <div class="header-line mt-3"></div>
      </header>
    `;
  }
}

customElements.define('site-nav', SiteNav);
