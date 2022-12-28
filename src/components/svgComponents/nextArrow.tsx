import { FunctionComponent } from "react";

interface NextArrowProps {
  className: string;
}

const NextArrow: FunctionComponent<NextArrowProps> = ({ className }) => {
  return (
    <svg
      width="13"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd" />
    </svg>
  );
};

export default NextArrow;
