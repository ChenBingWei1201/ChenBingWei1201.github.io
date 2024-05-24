import PropTypes from "prop-types";

export default function SplitLine({ width, weight }) {
  return (
    <hr className={`h-0.5 w-${width} border-t-0 bg-neutral-${weight}`} />
  );
}

SplitLine.propTypes = {
  width: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};
