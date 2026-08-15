import { useParams } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import NotFound from "~/components/not_found";

import { get_mdx } from "~/utils/get_mdx";

export default function Project() {
  const params = useParams();

  const content = get_mdx(params.slug, 'projects')

  if (content) {
    console.log(content.frontmatter)

    return <div class='*:[all:revert]'>
      <content.default></content.default>
    </div>
  } else {
    return (
      <>
        <HttpStatusCode code={404} />
        <NotFound></NotFound>
      </>
    )
  }
}