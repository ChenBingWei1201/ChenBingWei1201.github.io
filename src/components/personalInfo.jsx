import PropTypes from "prop-types";

export default function PersonalInfo({ data }) {
  return (
    <div className="flex items-center justify-center h-fit w-11/12 my-4 flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col">
      <div className="flex flex-col items-start justify-center xl:w-[20%] lg:w-[20%] md:w-[20%] sm:w-full xl:mr-5 lg:mr-5 md:mr-5 sm:mr-0">
        <img
          src="me.png"
          alt="Bing-Wei, Chen (陳秉緯)"
          className="rounded-full bg-white shadow-2xl aspect-square w-40 h-40"
        />
      </div>
      <div className="flex flex-col items-start justify-center xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-full">
        <h1 className="font-sans text-3xl mb-3 w-11/12 sm:mx-auto md:mx-0 lg:mx-0 xl:mx-0 font-bold">Bing-Wei, Chen 陳秉緯</h1>
        <div>
          {
            data.map(([key, value]) => (
              <p key={key} className="text-base sm:text-sm md:text-base lg:text-base xl:text-base font-sans text-neutral-500 m-1">
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
