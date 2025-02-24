import PropTypes from "prop-types";

export default function Skills({ data, title }) {
  return (
    <div className="flex flex-col items-end justify-center h-fit w-11/12 my-2">
      <div className="w-full flex flex-col items-start justify-start">
        <h2 className="font-sans text-xl text-cyan-700">{title}</h2>
      </div>

      <div className="flex flex-wrap justify-start h-fit w-full my-2">
        {data.map(({ title, icon }) => (
          <div
            key={title}
            className="flex items-center h-fit w-fit rounded-xl border-gray-400 border p-2 mr-3 mb-2"
          >
            <img
              src={`assets/image/${icon}`}
              alt={title}
              className="h-8 mr-2"
            />
            <h2 className="font-sans text-base">{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
