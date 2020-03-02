# Hybrids Dynamic Load

This codebase is an example of an unbundled [Hybrids](https://hybrids.js.org/) app with [dynamic module imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

Please visit the GitHub Pages to see this code in action: [https://f1lt3r.github.io/hybrids-dynamic-load/](https://f1lt3r.github.io/hybrids-dynamic-load/)

## The Page Module

```js
const name = 'welcome-page'

define(name, {
  render: () =>
    html`
      <div>
        <h2>Welcome Page</h2>
        <p>This Welcome page was dynamically loaded.</p>
      </div>
    `,
})

// The name is exported for as the custom element name
export default name
```

## The Main App Module

```js
// The dynamic loader fetches the module at run time
const load = async (host, event) => {
    // Get the module URL from a DOM attribute
    const pageUrl = event.target.getAttribute('page')

    // Import the page and reference default (the custom element name)
    const pageName = (await import(pageUrl)).default

    // Set the page element on the Hybrid host
    // This triggers a re-render
    host.pageLoaded = `<${pageName}></${pageName}>`
}

// The main Hybrid component that drives the App 
const HybridsApp = {
    appName: 'Welcome to Hybrids!',

    // Set a default for no page being loaded
    pageLoaded: '<span>No page loaded, yet.</span>',

    // Render the pageLoaded string
    page: ({ pageLoaded }) => pageLoaded,

    render: ({ appName, page }) => html`
      <div>
        <h1>${appName}</h1>

        <p>Example of an unbundled Hybrids app with dynamic imports.</p>

        <div>
          <button onclick="${load}" page="./pages/Welcome.mjs">
            Welcome Page
          </button>
          <button onclick="${load}" page="./pages/Other.mjs">
            Other Page
          </button>
        </div>

        <hr />

        <!-- Render the page using Hybrids innerHTML feature -->
        <article innerHTML="${page}"></article>
      </div>
    `,
}
```