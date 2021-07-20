import dynamic from "next/dynamic";

const Breeam = dynamic(() => import("../public/logos/environment/breeam.svg"));
const EPD = dynamic(() => import("../public/logos/environment/epd.svg"));
const EmpresaCircular = dynamic(() =>
  import("../public/logos/environment/soy_empresa_circular.svg")
);
const Leed = dynamic(() =>
  import("../public/logos/environment/usgbc_leed.svg")
);

const EnvironmentLogos = ({ children, className }) => {
  return (
    <div
      className={`flex items-center justify-center gap-7 flex-row lg:gap-8 opacity-50 ${className}`}
    >
      <Breeam className="w-8" />
      <Leed className="w-8" />
      <EPD className="w-24" />
      <EmpresaCircular className="w-24" />
    </div>
  );
};

export default EnvironmentLogos;
