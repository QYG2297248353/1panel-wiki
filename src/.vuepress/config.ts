import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "1Panel Wiki",
  description: "1Panel 三方 wiki",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});