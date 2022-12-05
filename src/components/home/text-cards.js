import React from 'react'
import { Link } from "gatsby"
import { edgesByName } from "../../utils/gql";

const TaxCards = ({ cards }) => {
  const taxCards = edgesByName(
    cards,
    node => node
  );
  console.log(cards)
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 mb-8 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-8">
          <div className="shadow-lg card">
            <div className="px-8 pt-4 min-h-[100px] bg-gradient-to-l from-orange-600 to-orange-500 rounded-t-lg">
              <h2 className="text-2xl font-semibold leading-snug text-white">
                <Link to={`/${taxCards["Marriage Tax Allowance"].uid}`}>{taxCards["Marriage Tax Allowance"].data.title}</Link>
              </h2>
            </div>
            <div className="p-4 text-base sm:p-6">
              <ul className="m-0 leading-snug divide-y list-style-none">
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="marriage-tax-allowance/what-is-marriage-tax-allowance#what-is-marriage-tax-allowance"
                    className="hover:text-blue-700"
                  >
                    What is Marriage Tax Allowance?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="marriage-tax-allowance/what-is-marriage-tax-allowance#who-can-claim-marriage-tax-allowance"
                    className="hover:text-blue-700"
                  >
                    Who Can Claim Marriage Tax Allowance?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="marriage-tax-allowance/what-is-marriage-tax-allowance#when-can-you-apply-for-marriage-allowance"
                    className="hover:text-blue-700"
                  >
                    When Can You Apply for Marriage Allowance?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="marriage-tax-allowance/what-is-marriage-tax-allowance#how-much-can-you-get-from-marriage-allowance"
                    className="hover:text-blue-700"
                  >
                    How Much Can You Get From Marriage Allowance?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="marriage-tax-allowance/what-is-marriage-tax-allowance#when-can-i-start-receiving-marriage-tax-allowance"
                    className="hover:text-blue-700"
                  >
                    When Can I Start Receiving Marriage Tax Allowance?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="marriage-tax-allowance/what-is-marriage-tax-allowance#how-long-does-it-take-to-receive-the-money"
                    className="hover:text-blue-700"
                  >
                    How Long Does It Take To Receive The Money
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="shadow-lg card">
            <div className="px-8 pt-4 min-h-[100px] bg-gradient-to-r from-purple-600 to-purple-800 rounded-t-lg">
              <h2 className="text-2xl font-semibold leading-snug text-white">
                <Link to={`/${taxCards["Working from home tax relief"].uid}`}>{taxCards["Working from home tax relief"].data.title}</Link>
              </h2>
            </div>
            <div className="p-4 text-base sm:p-6">
              <ul className="m-0 leading-snug divide-y list-style-none">
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="working-from-home-tax-relief/claim-working-from-home-tax-relief#can-i-claim-money-for-working-from-home-during-cov"
                    className="hover:text-blue-700"
                  >
                    Can I Claim Money for Working From Home During Covid?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="working-from-home-tax-relief/claim-working-from-home-tax-relief#when-is-the-deadline-to-apply-for-wfh-tax-relief"
                    className="hover:text-blue-700"
                  >
                    When Is The Deadline To Apply for WFH Tax Relief?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="working-from-home-tax-relief/claim-working-from-home-tax-relief#can-i-apply-for-wfh-tax-relief"
                    className="hover:text-blue-700"
                  >
                    Can I Apply For WFH Tax Relief?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="working-from-home-tax-relief/claim-working-from-home-tax-relief#how-much-wfh-tax-relief-can-i-get"
                    className="hover:text-blue-700"
                  >
                    How Much WFH Tax Relief Can I Get?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="working-from-home-tax-relief/claim-working-from-home-tax-relief#how-do-i-claim-wfh-tax-relief"
                    className="hover:text-blue-700"
                  >
                    How Do I Claim WFH Tax Relief?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="shadow-lg card">
            <div className="px-8 pt-4 min-h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg">
              <h2 className="text-2xl font-semibold leading-snug text-white">
                <Link to={`/${taxCards["Uniform Tax Rebate"].uid}`}>{taxCards["Uniform Tax Rebate"].data.title}</Link>
              </h2>
            </div>
            <div className="p-4 text-base sm:p-6">
              <ul className="m-0 leading-snug divide-y list-style-none">
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="uniform-tax-rebate/uniform-tax-rebate-guide#what-is-uniform-tax"
                    className="hover:text-blue-700"
                  >
                    What Is Uniform Tax?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="uniform-tax-rebate/uniform-tax-rebate-guide#am-i-eligible-for-uniform-tax"
                    className="hover:text-blue-700"
                  >
                    Am I Eligible?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="uniform-tax-rebate/uniform-tax-rebate-guide#who-cannot-claim-uniform-tax"
                    className="hover:text-blue-700"
                  >
                    Who Cannot Claim a Uniform Tax Rebate?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="uniform-tax-rebate/uniform-tax-rebate-guide#how-much-can-i-claim-back-on-uniform-tax"
                    className="hover:text-blue-700"
                  >
                    How Much Can I Claim Back?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="uniform-tax-rebate/uniform-tax-rebate-guide#can-i-claim-uniform-tax-for-previous-years"
                    className="hover:text-blue-700"
                  >
                    Can I Claim Uniform Tax Rebate for Previous Years?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="uniform-tax-rebate/uniform-tax-rebate-guide#how-do-i-claim-for-uniform-tax"
                    className="hover:text-blue-700"
                  >
                    How Do I Claim?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="uniform-tax-rebate/uniform-tax-rebate-guide#how-long-does-it-take-to-receive-uniform-tax"
                    className="hover:text-blue-700"
                  >
                    How Long Does It Take To Receive?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="shadow-lg card">
            <div className="px-8 pt-4 min-h-[100px] bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-lg">
              <h2 className="text-2xl font-semibold leading-snug text-white">
                <Link to={`/${taxCards["PPI Tax Relief"].uid}`}>{taxCards["PPI Tax Relief"].data.title}</Link>
              </h2>
            </div>
            <div className="p-4 text-base sm:p-6">
              <ul className="m-0 leading-snug divide-y list-style-none">
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="ppi-tax/ppi-tax-ultimate-guide#why-is-there-tax-on-the-ppi-payout"
                    className="hover:text-blue-700"
                  >
                    Why Is There Tax On The PPI Payout?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="ppi-tax/ppi-tax-ultimate-guide#heres-why-you-may-be-owed-tax-back-on-ppi-payouts"
                    className="hover:text-blue-700"
                  >
                    Here’s Why You May Be Owed Tax Back on PPI Payouts
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans ">
                  <a
                    href="ppi-tax/ppi-tax-ultimate-guide#how-much-can-you-claim-back"
                    className="hover:text-blue-700"
                  >
                    How Much Can You Claim Back?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="ppi-tax/ppi-tax-ultimate-guide#what-if-you-have-a-low-income-or-dont-pay-any-inc"
                    className="hover:text-blue-700"
                  >
                    What If You Have A Low Income or Don’t Pay Any Income Tax
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans">
                  <a
                    href="ppi-tax/ppi-tax-ultimate-guide#how-do-i-claim-tax-back-from-ppi"
                    className="hover:text-blue-700"
                  >
                    How Do I Claim Tax Back from PPI?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans ">
                  <a
                    href="ppi-tax/ppi-tax-ultimate-guide#how-long-does-it-take-to-receive-ppi-tax-refund"
                    className="hover:text-blue-700"
                  >
                    How Long Does it Take to Receive PPI Tax Refund?
                  </a>
                </li>
                <li className="py-2 text-[16px] leading-[1.375] font-normal font-sans ">
                  <a
                    href="ppi-tax/ppi-tax-ultimate-guide#how-long-do-i-have-to-claim-back-the-tax-on-my-ppi"
                    className="hover:text-blue-700"
                  >
                    How Long Do I Have to Claim Back the Tax on my PPI Pay-out?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <p className="max-w-3xl mx-auto font-sans text-base text-center">
          You do not have to use a claims management company to pursue a claim.
          You can always contact the organisation directly and make use of the
          Financial Ombudsman Scheme if dissatisfied and should the claim be one
          which falls into their jurisdiction.
        </p> */}
      </div>
    </section>
  );
};

export default TaxCards;
