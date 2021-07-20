import { useEffect, useState } from "react";
import {
  browserName,
  browserVersion,
  fullBrowserVersion,
  isMobile,
  isAndroid,
} from "react-device-detect";
import dynamic from "next/dynamic";

const Popup = dynamic(() => import("reactjs-popup"));
const Paragraph = dynamic(() => import("./typography/Paragraph"));
const A = dynamic(() => import("./typography/A"));

const PopupUpgradeVersion = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    switch (browserName) {
      case "Chrome":
        if (!isMobile)
          fullBrowserVersion < "84" ? setOpen(true) : setOpen(false);
        break;
      case "Safari":
        if (!isMobile)
          fullBrowserVersion < "14.1" ? setOpen(true) : setOpen(false);
        else fullBrowserVersion < "14.5" ? setOpen(true) : setOpen(false);
        break;
      case "Edge":
        if (!isMobile)
          fullBrowserVersion < "84" ? setOpen(true) : setOpen(false);
        break;
      case "Firefox":
        if (!isMobile)
          fullBrowserVersion < "63" ? setOpen(true) : setOpen(false);
        else {
          if (isAndroid)
            fullBrowserVersion < "87" ? setOpen(true) : setOpen(false);
        }
        break;
      case "Opera":
        if (!isMobile)
          fullBrowserVersion < "73" ? setOpen(true) : setOpen(false);
        else fullBrowserVersion < "0" ? setOpen(true) : setOpen(false);
        break;
    }
  }, []);

  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="bg-white text-black w-container container mx-auto rounded-lg p-6 flex flex-col justify-center items-center max-w-4xl">
          <Paragraph className="self-start mb-2">{`Detectado: ${browserName} ${fullBrowserVersion}`}</Paragraph>
          <Paragraph className="mb-8">
            Estás utilizando una{" "}
            <span className="font-bold">
              versión del navegador desactualizada
            </span>
            . Para disfrutar del contenido como está diseñado, por favor,
            actualizalo y prueba a recargar la página.
          </Paragraph>
          <A className="text-black font-bold" onClick={closeModal}>
            Entendido
          </A>
        </div>
      </Popup>
    </div>
  );
};

export default PopupUpgradeVersion;
