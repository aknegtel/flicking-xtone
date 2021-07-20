import { useState } from "react";
import { createContext } from "react";

const CollectionFilterContext = createContext([]);

export const CollectionFilterProvider = ({ children }) => {
  const [surface, setType] = useState([]);
  const [color, setColor] = useState([]);
  const [width, setWidth] = useState([]);
  const [format, setFormat] = useState([]);
  const [finish, setFinish] = useState([]);
  const [continuity, setContinuity] = useState([]);

  const changeSurface = (type, clearCurrent = false) => {
    if (typeof type === "string") {
      updateSurface(
        surfaceTypeOptions.filter((element) => element.value === type)[0],
        clearCurrent
      );
    } else if (typeof type === "object") {
      updateSurface(type, clearCurrent);
    } else {
      throw new Error("Surface type not recognized.");
    }
  };

  const updateSurface = (e, clearCurrent) => {
    if (clearCurrent) {
      setType([e]);
    } else {
      // Copy the current state
      let updated = [...surface];
      // Check if element in the current state
      const index = updated.indexOf(e);

      // Add or remove element
      if (index === -1) updated.push(e);
      else {
        updated.splice(index, 1);
      }

      // Update state
      setType(updated);
    }
  };

  const changeWidth = (e) => {
    // Copy the current state
    let updated = [...width];
    // Check if element in the current state
    const index = updated.indexOf(e);

    // Add or remove element
    if (index === -1) updated.push(e);
    else {
      updated.splice(index, 1);
    }

    // Update state
    setWidth(updated);
  };

  const changeColor = (e) => {
    // Copy the current state
    let updated = [...color];
    // Check if element in the current state
    const index = updated.indexOf(e);

    // Add or remove element
    if (index === -1) updated.push(e);
    else {
      updated.splice(index, 1);
    }

    // Update state
    setColor(updated);
  };

  const changeFormat = (e) => {
    // Copy the current state
    let updated = [...format];
    // Check if element in the current state
    const index = updated.indexOf(e);

    // Add or remove element
    if (index === -1) updated.push(e);
    else {
      updated.splice(index, 1);
    }

    // Update state
    setFormat(updated);
  };

  const changeFinish = (e) => {
    // Copy the current state
    let updated = [...finish];
    // Check if element in the current state
    const index = updated.indexOf(e);

    // Add or remove element
    if (index === -1) updated.push(e);
    else {
      updated.splice(index, 1);
    }

    // Update state
    setFinish(updated);
  };

  const changeContinuity = (e) => {
    // Copy the current state
    let updated = [...continuity];
    // Check if element in the current state
    const index = updated.indexOf(e);

    // Add or remove element
    if (index === -1) updated.push(e);
    else {
      updated.splice(index, 1);
    }

    // Update state
    setContinuity(updated);
  };

  const clearAllFilters = () => {
    setType([]);
    setWidth([]);
    setColor([]);
    setFormat([]);
    setFinish([]);
    setContinuity([]);
  };

  return (
    <CollectionFilterContext.Provider
      value={{
        surface,
        changeSurface,
        color,
        changeColor,
        width,
        changeWidth,
        format,
        changeFormat,
        finish,
        changeFinish,
        continuity,
        changeContinuity,
        clearAllFilters,
      }}
    >
      {children}
    </CollectionFilterContext.Provider>
  );
};

export const surfaceTypeOptions = [
  { label: "marble", value: "marble" },
  { label: "stone", value: "stone" },
  { label: "concrete", value: "concrete" },
  { label: "wood", value: "wood" },
  { label: "metal", value: "metal" },
  { label: "basic", value: "basic" },
];

export const colorOptions = [
  { label: "white", value: "white" },
  { label: "beige", value: "beige" },
  { label: "gold", value: "gold" },
  { label: "red", value: "red" },
  { label: "blue", value: "blue" },
  { label: "green", value: "green" },
  { label: "grey", value: "grey" },
  { label: "brown", value: "brown" },
  { label: "black", value: "black" },
];

export const formatOptions = [
  { label: "154x324", value: "154x324" },
  { label: "154x328", value: "154x328" },
  { label: "160x320", value: "160x320" },
  { label: "150x300", value: "150x300" },
  { label: "120x270", value: "120x270" },
  { label: "120x250", value: "120x250" },
  { label: "120x120", value: "120x120" },
];

export const finishOptions = [
  { label: "Polished", value: "Polished" },
  { label: "Nature", value: "Nature" },
  { label: "Silk", value: "Silk" },
  { label: "Rock", value: "Rock" },
  { label: "Deco Nature", value: "Deco Nature" },
  { label: "Deco Lappato", value: "Deco Lappato" },
];

export const surfaceWidthOptions = [
  { label: "6 mm", value: 6 },
  { label: "12 mm", value: 12 },
  { label: "20 mm", value: 20 },
];

export const continuityOptions = [
  { label: "continuous", value: "continuous" },
  { label: "horizontal", value: "horizontal" },
  { label: "infinite", value: "infinite" },
];

export default CollectionFilterContext;
