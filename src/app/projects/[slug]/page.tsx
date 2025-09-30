import {getStoryblokApi, StoryblokStory} from "@storyblok/react/rsc";

const fetchProjectPage = async (slug:string) => {
    const client = getStoryblokApi();
    const response = await client.getStory(`projects/${slug}`, {
        version:"draft",
    });
    return response.data.story
}
const ProjectPage = async (props : any) => {
    console.log(props);
    const story = await fetchProjectPage(props.params.slug);
    return (<StoryblokStory story={story} />  )
}
export default ProjectPage;