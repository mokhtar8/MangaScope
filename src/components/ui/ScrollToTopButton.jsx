import { useEffect, useState } from "react";


function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 w-12 h-12 right-6 z-50 p-3 rounded-full bg-[#467b7d] text-white shadow-lg hover:scale-110 transition"
    >
       ↑
    </button>
  );
}

export default ScrollToTopButton;