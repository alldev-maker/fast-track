import React from 'react'

const Claim = ({ heading, title, greenBtn, redBtn, items }) => {
  return (
    <section className="relative py-4 bg-blue-900 xl:py-8">
      <div className="container relative z-20 grid grid-cols-1 gap-2 mx-auto lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="relative p-2 px-4 mb-8 text-center text-white bg-blue-800 rounded lg:p-4">
            <p className="block text-xl font-bold leading-tight lg:text-2xl">
              {heading}
            </p>
            <div className="absolute left-0 right-0 inline-block w-12 ml-auto mr-auto overflow-hidden -bottom-5">
              <div className="w-6 h-6 origin-top-left transform -rotate-45 bg-blue-800"></div>
            </div>
          </div>
          <div className="overflow-hidden rounded-md bg-slate-100">
            <div className="py-1 text-center bg-slate-300 text-[16px]">0%</div>
            <div className="p-6 lg:px-8 lg:py-6">
              <span className="block py-2 mb-4 text-xl font-semibold leading-tight text-center xl:text-xl">
                {title}
              </span>
              <div className="grid max-w-md grid-cols-2 gap-3 mx-auto text-center">
                <a
                  href="/uniform-tax-rebate"
                  className="block py-4 text-xl font-semibold text-white bg-green-600 rounded-md hover:bg-green-500"
                >
                  {greenBtn}
                </a>
                <a
                  href="/"
                  className="block py-4 text-xl font-semibold text-white bg-red-600 rounded-md hover:bg-red-500"
                >
                  {redBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col items-center justify-center md:flex">
          <ul className="hidden text-xl font-semibold text-white lg:block lg:mb-4 xl:text-xl lg:space-y-2">
            {items?.map((item, index) => (
              <li key={index} className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 text-green-400 h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>{' '}
                {item.item}
              </li>
            ))}

            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 text-green-400 h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>{' '}
              Quick &amp; Easy Claim Form
            </li>
          </ul>
          <div className="max-w-xl mx-auto xl:max-w-md">
            <p className="font-semibold text-center text-white md:mb-2">
              As featured on
            </p>
            <div className="grid items-center grid-cols-3 gap-1 sm:grid-cols-3 lg:gap-2 justify-items-center">
              <img
                src="https://moneybackhelpdesk.co.uk/images/articles/Featured-Platforms/daily-mail.svg"
                className="max-h-8 xl:max-h-12"
                alt="Daily Mail"
              />
              <img
                src="https://moneybackhelpdesk.co.uk/images/articles/Featured-Platforms/the-sun-newspaper.svg"
                className="max-h-8 xl:max-h-12"
                alt="The Sun"
              />
              <img
                src="https://moneybackhelpdesk.co.uk/images/articles/Featured-Platforms/evening-standard.svg"
                className="max-h-8 xl:max-h-12"
                alt="Evening Standard"
              />
              <img
                src="https://moneybackhelpdesk.co.uk/images/articles/Featured-Platforms/yahoo.svg"
                className="hidden max-h-8 xl:max-h-12 lg:block"
                alt="Yahoo"
              />
              <img
                src="https://moneybackhelpdesk.co.uk/images/articles/Featured-Platforms/msn.svg"
                className="hidden max-h-8 xl:max-h-12 lg:block"
                alt="MSN"
              />
              <img
                src="https://moneybackhelpdesk.co.uk/images/articles/Featured-Platforms/sky-news.svg"
                className="hidden max-h-8 xl:max-h-12 lg:block"
                alt="Sky News"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Claim;
