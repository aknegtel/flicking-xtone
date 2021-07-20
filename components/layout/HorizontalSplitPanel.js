export default function HorizontalSplitPanel({ left, right, className }) {
  return (
    <>
      <div
        className={`flex flex-col md:flex-row w-container container mx-auto gap-5 md:gap-x-16 lg:gap-x-32 justify-center ${className}`}
      >
        <div className="flex-shrink mx-6 md:mx-0">{left}</div>
        <div className="flex-grow h-full w-full mx-auto mt-8 md:mt-0">
          {right}
        </div>
      </div>
    </>
  );
}
