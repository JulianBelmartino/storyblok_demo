import { StoryblokServerComponent } from '@storyblok/react/rsc';

export const Grid = (params: any) => {
  return (
    <section>
        <h2>{params.blok.headline}</h2>
       {params.blok.items.map((blok: any) => (
            <StoryblokServerComponent blok={blok} key={blok._uid} />
          ))}
    </section>
  );
};