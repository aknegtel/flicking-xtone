import { useEffect, useState } from "react";
import clsx from "clsx";
import { lerp } from "../lib/utils";
import { useCallback } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  var IsDevice = (function () {
    if (typeof navigator == "undefined") return;
    var ua = navigator.userAgent;
    return {
      info: ua,
      Android: function Android() {
        return ua.match(/Android/i);
      },
      BlackBerry: function BlackBerry() {
        return ua.match(/BlackBerry/i);
      },
      IEMobile: function IEMobile() {
        return ua.match(/IEMobile/i);
      },
      iOS: function iOS() {
        return ua.match(/iPhone|iPad|iPod/i);
      },
      OperaMini: function OperaMini() {
        return ua.match(/Opera Mini/i);
      },

      /**
       * Any Device
       */
      any: function any() {
        return (
          IsDevice.Android() ||
          IsDevice.BlackBerry() ||
          IsDevice.iOS() ||
          IsDevice.OperaMini() ||
          IsDevice.IEMobile()
        );
      },
    };
  })();

  const onMouseMove = useCallback(
    (e) => {
      const lerpAlpha = 0.75;
      setPosition({
        x: lerp(e.clientX, position.x, lerpAlpha),
        y: lerp(e.clientY, position.y, lerpAlpha),
      });
    },
    [position]
  );

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown, { passive: true });
    document.addEventListener("mouseup", onMouseUp, { passive: true });
  }, [onMouseMove]);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  }, [onMouseMove]);

  useEffect(() => {
    if (!IsDevice.any()) {
      addEventListeners();
      handleLinkHoverEvents();
      setHidden(false);
    } else {
      setHidden(true);
    }

    return () => removeEventListeners();
  }, [
    position,
    hidden,
    clicked,
    linkHovered,
    IsDevice,
    addEventListeners,
    removeEventListeners,
  ]);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a, button, label, *.link").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });

    document.querySelectorAll(".image-carousel-link").forEach((el) => {
      el.addEventListener("mouseover", () => setImageHovered(true));
      el.addEventListener("mouseout", () => setImageHovered(false));
    });
  };

  const cursorClasses = clsx("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
    "cursor--image-hovered": imageHovered,
  });

  const plusClasses = clsx("plus", {
    "plus--visible": imageHovered,
  });

  return (
    <>
      <div
        className={cursorClasses}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <p className={plusClasses}>+</p>
      </div>

      <style jsx>{`
        .cursor {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border: 1px solid #fefefe;
          border-radius: 100%;
          position: fixed;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: all 150ms ease;
          transition-property: opacity, background-color, transform,
            mix-blend-mode;
        }

        .cursor--hidden {
          opacity: 0;
        }

        .cursor--clicked {
          transform: translate(-50%, -50%) scale(0.9);
          background-color: #fefefe;
        }

        .cursor--link-hovered {
          transform: translate(-50%, -50%) scale(2.15);
          background-color: #fefefe;
        }

        .cursor--image-hovered {
          transform: translate(-50%, -50%) scale(2.15);
          background-color: #fefefe;
          mix-blend-mode: normal;
        }

        .plus {
          opacity: 0;
          color: #010101;
          user-select: none;
          font-size: 10px;
          font-weight: 400;
          transform: translateY(-6.5%);
          transition: all 150ms ease;
          transition-property: opacity;
        }

        .plus--visible {
          opacity: 100;
        }
      `}</style>
    </>
  );
};

export default Cursor;
