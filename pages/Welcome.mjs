import { define, html } from 'https://unpkg.com/hybrids@4.1.3/src/index.js'

const name = 'welcome-page'

define(name, {
  render: () =>
    html`
      <div>
        <h2>Welcome Page</h1>
        <p>This Welcome page was dynamically loaded.</p>
      </div>
    `,
})

export default name
