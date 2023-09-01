const StayProductEl = () => {
  return (
    <section className="py-[50px]">
      <div className="flex flex-col gap-3 items-start">
        <h1>Stay productive, wherever you are</h1>
        <p className="mt-10">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <a
          href="#"
          className="border-b flex items-center gap-3 w-max border-b-moderate-cyan text-moderate-cyan transition-opacity hover:opacity-70"
        >
          See how Fylo works{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="w-4 h-4 bg-moderate-cyan rounded-full fill-white p-1"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </a>
        <div className="bg-white mt-10 w-[356px] p-[34px] rounded-lg shadow-lg flex flex-col gap-3 items-start">
          <img src="./icon-quotes.svg" alt="icon quotes" className="w-3 h-3" />
          <p className="text-sm">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex items-center">
            <img
              src="./avatar-testimonial.jpg"
              alt="avatar testimonial"
              className="rounded-full w-8 h-8 mr-3"
            />
            <div>
              <h2 className="font-bold -mb-2">Kyle Burton</h2>
              <p className="text-xs">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
      <img src="./illustration-2.svg" alt="illustration 2" />
    </section>
  );
};

export default StayProductEl;
