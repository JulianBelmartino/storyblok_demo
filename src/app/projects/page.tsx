import { RecommendedProject } from "@/components/Recommended_project";
import {getStoryblokApi, StoryblokStory} from "@storyblok/react/rsc";
import { draftMode} from "next/headers";

const fetchProjectsPage = async () => {
    const {isEnabled }=  await draftMode();
    const client = getStoryblokApi();
    const response = await client.getStory(`projects`, {
        version:process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
    });
    return response.data.story
}

const fetchAllProjects = async () => {
  const {isEnabled }=  await draftMode();
    const client = getStoryblokApi();
    const response = await client.getStories({
        content_type: "projects",
        version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
    });
    return response.data.stories;   
}

const ProjectsPage = async () => {
  const story = await fetchProjectsPage();
  const projects = await fetchAllProjects();
  return (
  <div>
  <StoryblokStory story={story} />
    <div className={"grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16"}>
      {projects.map((projects) => (
        <RecommendedProject story={projects} key={projects.content._uid} />
      ))}
    </div>
  </div>
  )
}

export default ProjectsPage;
