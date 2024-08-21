import { SubmenuArrowProps } from "@/app/dto/sidebar.dto";

const SubmenuArrow: React.FC<SubmenuArrowProps> = ({ isOpen }) => (
  <i
    className={`ri-arrow-down-s-line ${
      isOpen ? "-rotate-180" : ""
    } duration-300 ease-in-out font-medium origin-center cursor-pointer text-base leading-4`}
  ></i>
);

export default SubmenuArrow;
