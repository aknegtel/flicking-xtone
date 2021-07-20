import React, { createContext, useEffect, useState } from "react";

export const SmoothScrollContext = createContext({
  scroll: null,
});

export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
          setTimeout(
            () =>
              setScroll(
                new LocomotiveScroll({
                  el:
                    document.querySelector("[data-scroll-container]") ??
                    undefined,
                  ...options,
                })
              ),
            750
          );
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }

    document.addEventListener("DOMContentLoaded", function (event) {
      scroll && scroll.init();
    });

    document.addEventListener("load", function (event) {
      scroll && scroll.update();
    });

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]);

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
