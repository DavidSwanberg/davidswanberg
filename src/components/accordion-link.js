import { PiArrowUpRightLight } from "react-icons/pi";

const AccordionLink = ({ children, href }) => {
  return (
    <a href={href} target="_blank" className="font-sans relative underline h-fit flex items-center mb-4">
      {children}
      <PiArrowUpRightLight className="inline-block ml-[1px]" />
    </a>
  );
};

export default AccordionLink;
