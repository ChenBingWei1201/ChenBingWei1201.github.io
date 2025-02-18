import PropTypes from "prop-types";
import SplitLine from "./splitLine";
import { useRef, useEffect, useState } from "react";

export default function Experiences({ title: sectionTitle, data }) {
  const itemRefs = useRef([]); // Create an array of refs for each item
  const [selectedIndex, setSelectedIndex] = useState(null); // State to track the selected item

  useEffect(() => {
    // Get the current URL fragment
    const hash = window.location.hash.replace("#", "");
    // Find the index of the data item that matches the fragment
    const index = data.findIndex(
      (item) => item.title.toLowerCase().replace(/ /g, "-") === hash,
    );

    if (index !== -1 && itemRefs.current[index]) {
      // Scroll to the corresponding item if found
      itemRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      itemRefs.current[index].focus();
    }
  }, [data]);

  const handleClick = (idx) => {
    // Update the URL fragment
    window.location.hash = data[idx].title.toLowerCase().replace(/ /g, "-");
    setSelectedIndex(idx);
    itemRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    itemRefs.current[idx]?.focus();
  };

  return (
    <div className="flex flex-col items-end justify-center h-fit w-11/12 my-2 mx-auto">
      <div className="w-full flex flex-col items-start justify-start">
        <h2 className="font-sans text-xl text-cyan-700">{sectionTitle}</h2>
      </div>
      {data.map(({ title, highlight, time, link, content, tags }, idx) => {
        const itemRef = (el) => {
          itemRefs.current[idx] = el; // Assign the DOM element to the refs array
        };

        return (
          <>
            <div
              key={idx}
              tabIndex={0}
              ref={itemRef}
              onClick={() => handleClick(idx)}
              className="flex h-fit w-full my-2 gap-2 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row"
            >
              <div className="md:w-[20%] lg:w-[20%] xl:w-[20%] flex flex-col">
                <h2 className="font-sans text-lg">{title}</h2>
                {highlight !== "" && (
                  <p className="text-left font-sans text-sm text-orange-800 font-bold">
                    {highlight}
                  </p>
                )}
                <p className="text-left align-top font-sans text-sm text-neutral-500 pr-2">
                  {time}
                  {link.length > 0 && (
                    <>
                      <br />
                      Links:{" "}
                      {link.map(({ text, url }) => (
                        <>
                          <a
                            target="_blank"
                            href={url}
                            className="underline"
                            rel="noreferrer"
                          >
                            {text}
                          </a>
                          &nbsp;&nbsp;
                        </>
                      ))}
                    </>
                  )}
                </p>
              </div>
              <div className="md:w-[80%] lg:w-[80%] xl:w-[80%] flex flex-col justify-between">
                <p className="text-left font-sans text-sm text-neutral-800">
                  {content.map((row, idx) => (
                    <>
                      {row}
                      {idx < content.length - 1 && <br />}
                    </>
                  ))}
                </p>
                <p className="text-left font-sans text-sm text-neutral-500 mt-1">
                  {tags.map((tag, idx) => (
                    <>
                      {tag}
                      {idx < tags.length - 1 && " | "}
                    </>
                  ))}
                </p>
              </div>
            </div>
            {idx < data.length && <SplitLine weight="200" />}
          </>
        );
      })}
    </div>
  );
}

Experiences.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      highlight: PropTypes.string,
      time: PropTypes.string.isRequired,
      link: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,
      content: PropTypes.arrayOf(PropTypes.string).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};
