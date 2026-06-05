function EmptyState({ message = "No data found" }) {
  return (
    <div className="text-center py-20 text-gray-500">
      <h2 className="text-xl font-bold">
        {message}
      </h2>
    </div>
  );
}

export default EmptyState;