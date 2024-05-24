import PropTypes from "prop-types";

export default function PersonalInfo({ data }) {
  return (
    <div className="flex items-center justify-center h-fit w-11/12 my-4">
      <div className="flex flex-col items-start justify-center w-[20%] mr-5">
        <img
          src="me.png"
          alt="Bing-Wei, Chen (陳秉緯)"
          className="rounded-full w-40 h-40 bg-white shadow-2xl"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-[80%]">
        <h1 className="font-sans text-3xl mb-3 w-11/12 font-bold">Bing-Wei, Chen (陳秉緯)</h1>
        <div>
          {
            data.map(([key, value]) => (
              <p key={key} className="text-base font-sans text-neutral-500 m-1">
                <span className="font-semibold">{key}:</span> {value}
              </p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

PersonalInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string)
  ).isRequired,
};
