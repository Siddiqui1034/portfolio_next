const HireMe = () => {
  const waLink =
    "https://wa.me/917376147918?text=Hello%20Nausheen,%20I%20would%20like%20to%20connect.";
  return (
    <div>
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="md:hidden flex justify-center items-center gap-1 fixed bottom-2 left-4 right-4 rounded-xl p-3 bg-linear-to-r from-violet-600 via-indigo-600 to-purple-600 text-white text-base z-40 shadow-[0_-5px_25px_rgba(168,85,247,0.7)] tracking-wider"
      >
        <i className="ri-whatsapp-line"></i> Hire Me
      </a>
    </div>
  );
};

export default HireMe;
