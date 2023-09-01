import * as Form from "@radix-ui/react-form";

const Registration = () => {
  return (
    <section className="py-[100px] lg:flex-col lg:gap-5 reveal">
      <div className="max-w-[514px] flex flex-col gap-3 lg:text-center">
        <h1 className="lg:text-xl">Get early access today</h1>
        <p className="text-[17px] lg:text-[16.5px]">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <Form.Root className="flex flex-col gap-5 w-full items-start lg:text-xs">
        <Form.Field
          name="email"
          className="flex gap-4 lg:gap-[0px] w-full items-stretch flex-col"
        >
          <Form.Control
            className="w-full h-11 border-2 rounded-md px-5 border-very-dark-blue invalid:border-red-500 lg:w-[240px] lg:h-8 lg:mx-auto"
            type="email"
            placeholder="Enter your email..."
            required
          />
          <div className="relative -top-3 lg:-top-[50px] lg:left-11">
            <Form.Message className="absolute" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="absolute" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
        </Form.Field>

        <Form.Submit asChild>
          <button className="w-[200px] bg-bright-blue rounded-md text-light-grayish-blue h-11 hover:opacity-50 transition-opacity lg:w-[240px] lg:h-8 lg:mx-auto lg:-mt-[10px]">
            Get Started For Free
          </button>
        </Form.Submit>
      </Form.Root>
    </section>
  );
};

export default Registration;
