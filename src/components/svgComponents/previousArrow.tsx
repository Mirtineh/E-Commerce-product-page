import { FunctionComponent } from "react";

interface PreviousArrowProps {
  className: string;
}

const PreviousArrow: FunctionComponent<PreviousArrowProps> = ({
  className,
}) => {
  return (
    <svg
      width="12"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 1 3 9l8 8"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default PreviousArrow;
