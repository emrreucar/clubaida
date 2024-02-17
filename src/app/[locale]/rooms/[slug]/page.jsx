import SingleRoomPageComp from "@/components/Rooms/SingleRoomPageComp";

export const metadata = {
  title: "Room Detail Page",
  description: "Room Detail Page Description",
};

const SingleRoomPage = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <SingleRoomPageComp slug={slug} />
    </div>
  );
};

export default SingleRoomPage;
