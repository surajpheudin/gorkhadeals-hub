import { keyframes } from "@emotion/react";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },

  "100%": {
    transform: "rotate(360deg)",
  },
});

export { spin };
