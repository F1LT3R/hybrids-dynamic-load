import { define, html } from 'https://unpkg.com/hybrids@4.1.3/src/index.js'

const name = 'other-page'

define(name, {
  render: () =>
    html`
      <div>
        <h2>Other Page</h1>
        <p>This Other page was <i>also</i> dynamically loaded.</p>
      </div>
    `,
})

export default name
