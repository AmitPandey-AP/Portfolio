import React from "react";

function Certifications() {
  return (
    <div className="h-full w-full py-4 px-3">
      <div className="shadow-lg max-h-auto font-mono block mt-3">
        <h1 className="text-2xl font-extrabold justify-self-center">
          Certifications
        </h1>
        <div className="px-10 py-5">
          <ul className="list-disc">
            <li className="text-lg underline">
              <a target="_blank" href="https://icpc.global/ICPCID/J712P2LT1W31">
                International Collegiate Programming Contest (ICPC) Profile
              </a>
            </li>
            <li className="text-lg underline">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/10rgjthv7irOvutbLNeWGOXSMhgyW3EQO/view?pli=1"
              >
                Advanced Learning Algorithms
              </a>
            </li>
            <li className="text-lg underline">
              <a
                target="_blank"
                href="https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/1712420085837731?source=facebook"
              >
                Meta Hacker Cup
              </a>
            </li>
            <li className="text-lg">
              Qualified for the ICPC Regionals 2024-25,Chennai And Amritapuri{" "}
            </li>
            <li className="text-lg">
              Secured rank 59 in ICPC Regionals Chennai 2024-25
            </li>
            <li className="text-lg">
              Positioned 471th in in LeetCode Weekly Contest 423
            </li>
            <li className="text-lg">
              {" "}
              Positioned 141th in in Codeforces Round 993 (Div. 4)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
