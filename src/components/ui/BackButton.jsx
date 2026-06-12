import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-6 bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 hover:bg-teal-50 px-4 py-2 rounded-lg border"
    >
      ← Back
    </button>
  );
}

export default BackButton;