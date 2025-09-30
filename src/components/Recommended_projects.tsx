import { RecommendedProject } from "./Recommended_project";

export const RecommendedProjects = (params: any) => {
  return (
    <section>
        <h2>{params.blok.headline}</h2>
        {params.blok.projects.map((project: any) => (
          <RecommendedProject story={project} key={project.content._uid} />
        ))}
    </section>
  );
};