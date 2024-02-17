import SingleEventPageComp from "@/components/Events/SingleEventPageComp";

export const metadata = {
  title: "Single Event Page",
  description: "Single Event Page Description",
};

const SingleEventPage = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <SingleEventPageComp slug={slug} />
    </div>
  );
};

export default SingleEventPage;
