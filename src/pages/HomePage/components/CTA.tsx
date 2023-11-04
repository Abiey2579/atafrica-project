const CallToAction = () => {
  return (
    <div className="lg:px-20 md:px-10 px-5 bg-slate-50 py-20 grid place-items-center">
      <div className="lg:w-3/4 md:w-1/2 w-full space-y-5 lg:text-center md:text-center text-left">
        <h1 className="text-cyan-800 lg:font-extrabold md:font-bold font-semibold text-6xl font-league-spartan">
          Let your taxes pay you for a change.
        </h1>
        <p className="text-talento-gray leading-normal">
          Our software monitors your investments to automatically trade similar
          assets that lose value, which can help you lower your tax bill while
          still keeping your portfolio on track.
        </p>
        <a
          className="rounded font-inter inline-block w-fit bg-cyan-800 text-white px-5 py-2.5 text-center text-sm font-semibold"
          href="/"
        >
          <p className="inline-block">Start Today</p>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
