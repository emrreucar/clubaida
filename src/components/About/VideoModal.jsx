"use client";

const VideoModal = ({ onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/70 z-50"
      onClick={onClose}
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute -top-3 right-1 m-4 text-white cursor-pointer z-50 text-[40px] "
        >
          &times;
        </button>
        <video controls className="w-full max-w-screen-lg">
          <source src="/video.mp4" type="video/mp4" />
          Your Browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
