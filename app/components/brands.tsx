export default function Brands() {
  return (
    <div className="py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-medium leading-8 pb-8">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 max-w-lg items-center sm:max-w-4xl sm:gap-x-10 lg:mx-auto lg:max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <img
            className="max-h-12 w-full object-contain"
            src="/assets/hustleFund.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="max-h-12 w-full object-contain"
            src="/assets/keep.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="max-h-12 w-full"
            src="/assets/levy.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="max-h-12 w-full"
            src="/assets/calcey.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
