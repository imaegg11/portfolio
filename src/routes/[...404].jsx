import { HttpStatusCode } from "@solidjs/start";
import NotFound from "~/components/not_found";

export default function NotFoundPage() {
  return (
    <>
      <HttpStatusCode code={404} />
      <NotFound></NotFound>
    </>
  );
}
