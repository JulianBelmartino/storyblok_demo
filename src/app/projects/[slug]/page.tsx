import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchProjectPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`projects/${slug}`, {
    version: "draft",
  });
  return response.data.story;
};

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params; // ✅ await params before using
  const story = await fetchProjectPage(slug);

  return <StoryblokStory story={story} />;
};

export default ProjectPage;
