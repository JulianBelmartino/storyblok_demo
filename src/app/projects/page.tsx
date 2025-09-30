import { RecommendedProject } from "@/components/Recommended_project";
import {getStoryblokApi, StoryblokStory} from "@storyblok/react/rsc";

const fetchProjectsPage = async () => {
    const client = getStoryblokApi();
    const response = await client.getStory(`projects`, {
        version:"draft",
    });
    return response.data.story
}

const fetchAllProjects = async () => {
    const client = getStoryblokApi();
    const response = await client.getStories({
        content_type: "projects",
        version: "draft",
    });
    return response.data.stories;   
}

const ProjectsPage = async () => {
  const story = await fetchProjectsPage();
  const projects = await fetchAllProjects();
  return (
  <div>
  <StoryblokStory story={story} />
  {projects.map((projects) => (
    <RecommendedProject story={projects} key={projects.content._uid} />
    ))}
  </div>
  )
}

export default ProjectsPage;
