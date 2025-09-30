"use_client";
import type { PropsWithChildren } from "react";
import {storyblokInit} from "@storyblok/react/rsc";
import { Projects } from "./Projects";
import { Page } from "./Page";
import { Hero } from "./Hero";
import { Grid } from "./Grid";
import { Feature } from "./Feature";
import { RecommendedProjects } from "./Recommended_projects";
import { Testimonial } from "./Testimonial";
 
storyblokInit({
    components: {
        projects: Projects,
        page: Page,
        hero: Hero,
        grid: Grid,
        feature: Feature,
        recommended_projects : RecommendedProjects,
        testimonial : Testimonial,
    },
    enableFallbackComponent : true,
});

export const StoryblokProvider = ({children}:PropsWithChildren) => {
    return <>{children}</>;
};

