import React from "react"
import axios from "axios"
import { createInertiaApp } from "@inertiajs/react"
import { createRoot } from "react-dom/client"

import { Flash } from "./components/Flash"

axios.defaults.xsrfHeaderName = "x-csrf-token"

createInertiaApp({
  resolve: async (name) => {
    const page = await import(`./pages/${name}.tsx`)
    page.default.layout =
      page.default.layout || ((page) => <Flash children={page} />)
    return page
  },
  setup({ App, el, props }) {
    createRoot(el).render(<App {...props} />)
  }
})
