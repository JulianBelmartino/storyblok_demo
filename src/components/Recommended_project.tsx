import Link from "next/link";

export const RecommendedProject = (props: any) => {
  return (
    <div className={"bg-white rounded-sm shadow"}>
        <img className={"aspect-video object-cover w-full"} src={props.story.content.main_image.filename}></img>
        <div className={"p-8"}>
          <div className={"flex gap-4 justify-between text-lg font-bold"}>
            <h3 className={""}>{props.story.content.name}</h3>
          </div>
          <Link className={"font-bold text-base mt-8 block underline"} href={`/${props.story.full_slug}`}>View Project</Link>
        </div>
    </div>
  );
};