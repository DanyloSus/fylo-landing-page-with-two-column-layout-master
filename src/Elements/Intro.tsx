import * as Form from "@radix-ui/react-form";

const Intro = () => {
  return (
    <section className="my-[100px]">
      <div className="flex flex-col gap-3">
        <h1 className="">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-xl">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <Form.Root className="flex gap-4 w-full items-start">
          <Form.Field
            name="email"
            className="flex gap-4 w-full items-stretch flex-col"
          >
            <Form.Control
              className="w-full h-11 border-2 rounded-md px-5 border-very-dark-blue invalid:border-red-500"
              placeholder="Enter your email..."
              required
            />
            <div className="relative -top-3 text-red-500">
              <Form.Message className="absolute" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="absolute" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
          </Form.Field>

          <Form.Submit asChild>
            <button className="w-[400px] bg-bright-blue rounded-md text-light-grayish-blue h-11 hover:opacity-50 transition-opacity">
              Get Started
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
      <img src="./illustration-1.svg" alt="illustration 1" />
    </section>
  );
};

export default Intro;
