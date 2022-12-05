import React from 'react'
import { Logo } from "../utils/imgImport";

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="container pt-6 mx-auto">
        <div className="py-3 border-b border-solid md:flex md:justify-between md:items-center border-slate-200">
          <div>
            <a href="/" className="inline-block">
              <img src={Logo} className="h-7" alt="Money Back Helpdesk" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-4">
        <ul className="flex flex-col text-xs sm:flex-row ">
          {/* <ul className="flex flex-col space-y-2 text-xs sm:flex-row sm:space-x-5"> */}
          <li className="list-none cursor-pointer ">Privacy Notice</li>
          <li className="p-0 list-none cursor-pointer sm:pl-5 ">
            Terms of Use
          </li>
          <li className="p-0 list-none cursor-pointer sm:pl-5 ">
            Terms of Service
          </li>
        </ul>
      </div>
      <div className="container py-4 mx-auto text-xs text-slate-500">
        <p className="mb-2">
          By submitting your details onto the site you will be contacted by
          telephone (including automated calls), email, sms and or post by
          Approved Claims Group Ltd
        </p>
        <p className="mb-2">
          Fasttrack Rebate is a trading style of Approved Claims Group Ltd |
          Registered in England and Wales, Company Number: 12552579 | Registered
          Office: 20-22 Wenlock Road, London N1 7GU | VAT Number 358197753 | ICO
          Number: ZA758940 | Email: info@fasttrackrebate.co.uk
        </p>
        <p>
          Important information: We use cookies to give you the best experience.
          By using our website you agree to our use of cookies in accordance
          with our privacy notice.
        </p>
      </div>
      <div className="py-3 border-t border-solid border-slate-200">
        <div className="container justify-between w-full mx-auto text-xs text-center sm:text-sm text-slate-500">
          <p className="mb-0 text-center">©️ Fasttrack Rebate 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
