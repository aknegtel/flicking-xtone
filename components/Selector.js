import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const ListItem = dynamic(() => import("./ListItem"));

const Selector = ({
  translationFile,
  options,
  selected,
  handler,
  vertical,
  className,
}) => {
  const { t } = useTranslation(translationFile);

  const selectors = options.map((element, index) => {
    const format = element.selector;
    return (
      <ListItem
        key={index}
        translationFile={translationFile}
        selected={selected === format}
        value={format}
      />
    );
  });

  const changeSelected = (event) => {
    handler(event.target.title);
  };

  return (
    // <div className={className}>
    //   <ul
    //     className={`list-none flex flex-col justify-center items-center ${
    //       vertical ? "md:items-start sm:gap-2" : "md:flex-row md:gap-8"
    //     }`}
    //     onClick={changeSelected}
    //   >
    //     {selectors}
    //   </ul>
    // </div>
    <div className={className}>
      <ul
        title={selected}
        className={`list-none select-none grid grid-rows-3 grid-flow-col gap-x-10 place-items-center ${
          vertical ? "md:grid-flow-rows sm:gap-2" : "md:grid-rows-1 md:gap-8"
        }`}
        onClick={changeSelected}
      >
        {selectors}
      </ul>
    </div>
  );
};

export default Selector;
