import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "pojects",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories.map((story) => ({slug: story.slug,}));
}

const fetchProjectPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`projects/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params; // ✅ await params before using
  const story = await fetchProjectPage(slug);

  return <StoryblokStory story={story} />;
};

export default ProjectPage;
