import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Projects } from "./components/Projects";
import { Page } from "./components/Page";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    projects: Projects,
    page: Page,
   },
  enableFallbackComponent: true,
});