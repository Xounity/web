import Link from "next/link";
import React from "react";

interface JoinPopupProps {
  onClose: () => void; // Define the type of the onClose prop
}

const JoinPopup : React.FC<JoinPopupProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    // Close the popup when a link is clicked
    onClose();
  };

  return (
    <div className="w-full h-screen md:flex items-center justify-center hidden">
      <div className="bg-xounity-orange text-black w-2/4 p-2 rounded-sm relative">
        <div className="flex items-center justify-center">
          <h2 className="font-bold">Join</h2>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <Link
            onClick={handleLinkClick}
            href="/join"
            className="flex-1 transition duration-300 hover:bg-white"
          >
            <h2 className="text-center">As a Member</h2>
          </Link>
          <Link
            onClick={handleLinkClick}
            href="/join"
            className="flex-1 border-l-2 border-l-black transition duration-300 hover:bg-white cursor-pointer"
          >
            <h2 className="text-center">As a Speaker</h2>
          </Link>
        </div>
        <button onClick={onClose} className="absolute right-2 top-1 bg-transparent px-2 rounded-full transition duration-300 cursor-pointer hover:bg-white">x</button>
      </div>
    </div>
  );
};

export default JoinPopup;
