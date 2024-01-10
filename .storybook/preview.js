/** @type { import('@storybook/vue3').Preview } */

import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport"

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#000" },
        { name: "green", value: "#0f0" },
        { name: "yellow", value: "#ff0" },
        { name: "blue", value: "#00f" },
        { name: "red", value: "#f00" }
      ]
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  },
};

export default preview;
