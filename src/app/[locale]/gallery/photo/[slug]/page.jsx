import SinglePhotoPageComp from "@/components/Gallery/Photo/SinglePhotoPageComp";

export const metadata = {
  title: "Photo Page Detail",
  description: "Photo Page Detail Description",
};

const SinglePhotoPage = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <SinglePhotoPageComp slug={slug} />
    </div>
  );
};

export default SinglePhotoPage;
