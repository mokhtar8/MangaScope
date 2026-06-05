function SkeletonCard() {
  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow
        overflow-hidden
        animate-pulse
      "
    >
      <div className="h-80 bg-gray-300"></div>

      <div className="p-4">
        <div className="h-5 bg-gray-300 rounded mb-3"></div>

        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;