import PropTypes from "prop-types";

export default function SplitLine({ weight }) {
  return (
    <hr className={`h-0.5 w-full sm:w-full md:w-[80%] lg:w-[80%] xl:w-[80%] border-t-1 bg-neutral-${weight}`} />
  );
}

SplitLine.propTypes = {
  width: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};
