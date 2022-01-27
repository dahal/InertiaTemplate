// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>
console.log('Vite ⚡️ Rails')

// If using a TypeScript entrypoint file:
//     <%= vite_typescript_tag 'application' %>
//
// If you want to use .jsx or .tsx, add the extension:
//     <%= vite_javascript_tag 'application.jsx' %>

// Example: Load Rails libraries in Vite.
//
// import * as Turbo from '@hotwired/turbo'
// Turbo.start()
//
// import ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()
//
// // Import all channels.
// const channels = import.meta.globEager('./**/*_channel.js')

// Example: Import a stylesheet in app/frontend/index.css
// import '~/index.css'

import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";

const el = document.getElementById("app");
const pages = import.meta.glob("../Pages/**/*.vue");

createApp({
  render: () =>
    h(App, {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: (name) => {
        const importPage = pages[`../Pages/${name}.vue`];
        if (!importPage)
          throw new Error(
            `Unknown page ${name}. Is it located under Pages with a .vue extension?`
          );
        return importPage().then((module) => module.default);
      },
    }),
})
.use(plugin)
.mount(el);
