import PropTypes from "prop-types";

export default function Education({ data, title }) {
  return (
    <div className="flex justify-center w-11/12 my-2 sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-col">
      <div className="w-[20%] flex flex-col items-start justify-start">
        <h2 className="font-sans text-xl mb-2 text-cyan-700">{title}</h2>
      </div>
      <div className="w-[80%] flex flex-col items-start justify-center">
        {data.map(({ time, content }) => (
          <p key={time} className="text-sm">
            {time}{" "}
            {content.map((row, idx) => (
              <span key={idx} className="font-bold italic">
                {row}
                {idx < content.length - 1 && <br />}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}

Education.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};
