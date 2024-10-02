import { ArrowLeft } from "lucide-react";

const CustomPrevButton = ({ onClick }) => (
    <button className="bg-[#6464644D] text-white py-2 px-2 rounded-full shadow-md" onClick={onClick}>
      
      <ArrowLeft/>
    </button>
  );
  export default CustomPrevButton