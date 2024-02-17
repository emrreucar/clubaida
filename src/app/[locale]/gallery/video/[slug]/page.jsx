import SingleVideoPageComp from "@/components/Gallery/Video/SingleVideoPageComp";

export const metadata = {
  title: "Video Detail Page",
  description: "Video Detail Page Description",
};

const SingleVideoPage = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <SingleVideoPageComp slug={slug} />
    </div>
  );
};

export default SingleVideoPage;
