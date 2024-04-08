import messages from '../constants/why'

const Why = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-900">
      <section className="container mx-auto flex flex-col gap-4 justify-between items-center sm:pt-40 pt-10 sm:pb-56 pb-10">
        <div className="flex justify-center items-center flex-col ">
          <h3 className="text-center text-primary-100 pb-2 font-semibold text-lg">
            {messages.title}
          </h3>
          <h1 className="font-bold text-3xl pb-10">
            {messages.summury}
            <span className="text-primary-100">{messages.logo}</span>
          </h1>
        </div>
        <div className="flex justify-between items-center gap-14">
          <article
            href=""
            className="overflow-hidden shadow-lg hover:scale-105 duration-200 ease-in-out px-10 py-10 min-h-[270px]"
          >
            <h1 className="text-primary-100 text-lg font-semibold pb-4">
              {messages.a1}
            </h1>
            <p className="text-gray-20">{messages.d1}</p>
          </article>
          <article
            href=""
            className="overflow-hidden shadow-lg hover:scale-105 duration-200 ease-in-out px-10 py-10 min-h-[270px]"
          >
            <h1 className="text-primary-100 text-lg font-semibold pb-4">
              {messages.a2}
            </h1>
            <p className="text-gray-20">{messages.d2}</p>
          </article>
          <article
            href=""
            className="overflow-hidden shadow-lg hover:scale-105 duration-200 ease-in-out px-10 py-10 min-h-[270px]"
          >
            <h1 className="text-primary-100 text-lg font-semibold pb-4">
              {messages.a3}
            </h1>
            <p className="text-gray-20">{messages.d3}</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Why