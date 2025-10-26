// src/components/BackButton.jsx
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="relative overflow-hidden px-6 py-2 text-white font-semibold rounded-full shadow-md transition-all duration-300"
      style={{
        background: "linear-gradient(90deg, #9333EA 0%, #EC4899 100%)",
      }}
    >
      ← Back
    </button>
  );
}
