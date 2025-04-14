import React, { useEffect, useState } from "react";

function AboutMe() {
  const [cfRating, setCFRating] = useState("");
  const [cfTag, setCFTag] = useState("");
  const [codechefRating, setCodechefRating] = useState("");
  const [codechefTag, setCodechefTag] = useState("");
  // https://codechef-api.vercel.app/handle/amitpandey_22

  useEffect(() => {
    fetch(
      "https://codeforces.com/api/user.info?handles=AmitPandey-AP&checkHistoricHandles=false"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result[0]);
        setCFRating(res.result[0].maxRating);
        setCFTag(res.result[0].maxRank);
      });
    fetch("https://codechef-api.vercel.app/handle/amitpandey_22")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.highestRating);
        setCodechefRating(res.highestRating);
        setCodechefTag(res.stars);
      });
  }, []);

  return (
    <div className="h-full w-full py-4 px-3">
      <div className=" flex gap-2">
        <div className="w-[30%] max-h-auto mr-8 px-2 py-4 shadow-2xl">
          <img
            src="/icpc.jpg"
            alt=""
            className="rounded-4xl"
          />
          <h1 className="font-semibold font-mono">Amit Pandey</h1>
          <p className="font-mono font-black">
            Software Developer / <br />
            Full Stack Develpoer
          </p>
        </div>
        <div className="w-[65%] ml-8 py-4 px-2 font-mono shadow-2xl">
          <h1 className="font-extrabold text-2xl mb-2">AboutMe</h1>
          <p className="font-semibold">
            Hi there, I am AMIT PANDEY, a student at Institute of Engineering
            and Technology, Lucknow; pursuing Bachelor of Technology in Computer
            Science and Engineering. I am proficient in some of the programming
            languages like C / C++ and Python; and Integrated Development
            Environments like Visual Studio Code and Sublime Text. I can develop
            websites using Hyper Text Markup Language , Cascading Style Sheets ,
            Javascript and ReactJs; I am a Competitive Programming enthusiast,
            and love to solve problems using various Data Structures and
            Algorithms. Some of my achievements in the field of Competitive
            Programming are: <br /> <br /> • {cfTag} on Codeforces (Highest Rating :
            {cfRating});
            <br />
            • Knight on LeetCode (Highest Rating : 2100); <br /> • {codechefTag +" "}
            on CodeChef (Highest Rating : {codechefRating}); <br />• 6 Kyu on
            AtCoder (Highest Rating : 869); <br /> • Meta Hacker Cup 2023 : 5546
            Rank , out of 20000+ total participants. <br /> <br />I am looking
            forward to gaining internship experience in Software Development
            Engineering related roles. Reach me on <br /> <br />
            pandeyamit5969@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
