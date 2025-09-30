import { StoryblokServerComponent } from '@storyblok/react/rsc';

export const Page = ({ blok }: any) => {
  return (
    <main>
      {blok.block?.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};