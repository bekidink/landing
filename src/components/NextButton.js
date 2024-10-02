import { ArrowRight } from "lucide-react";

const CustomNextButton = ({ onClick }) => (
    <button className="bg-[#6464644D]  py-2 px-2 text-white  rounded-full shadow-md" onClick={onClick}>
      
      <ArrowRight/>
    </button>
  );
  export default CustomNextButton