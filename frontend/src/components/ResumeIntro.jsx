import React from "react";
import {
  FileText,
  Mic2,
  BarChart3,
  Mic,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: FileText,
    label: (
      <>
        Resume Based
        <br />
        Topics
      </>
    ),
    iconClass: "bg-[#EEF0FF] text-[#4D62C9]",
  },
  {
    icon: Mic2,
    label: (
      <>
        Practice Speaking
        <br />
        with AI
      </>
    ),
    iconClass: "bg-[#FFF2DF] text-[#F19A43]",
  },
  {
    icon: BarChart3,
    label: (
      <>
        Improve
        <br />
        Confidently
      </>
    ),
    iconClass: "bg-[#FFE8E5] text-[#E86D61]",
  },
];

const ResumeIntro = () => {
  return (
    <section className="relative flex w-full flex-col gap-8">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (GREETING + GIRL ILLUSTRATION)           */}
      {/* ========================================================= */}
      <div
        className="
          relative
          grid
          w-full
          grid-cols-1
          items-center
          gap-6
          lg:grid-cols-[1fr_0.9fr]
          lg:gap-2
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-20 w-full">
          {/* Decorative yellow lines */}
          

          {/* Greeting */}
          <div className="mb-5">
            <h2
              className="
                text-[34px]
                font-extrabold
                leading-[1]
                tracking-[-1.5px]
                text-[#17211F]
                sm:text-[42px]
                lg:text-[48px]
              "
            >
              Good Morning
            </h2>

            <div className="relative mt-1 inline-block">
              <h1
                className="
                  text-[46px]
                  font-extrabold
                  leading-none
                  tracking-[-2px]
                  text-[#176B5B]
                  sm:text-[54px]
                  lg:text-[62px]
                "
              >
                Buddy !
              </h1>

              {/* Hand-drawn yellow underline with gentle draw/pulse effect */}
              <svg
                className="absolute -bottom-2 left-0 h-[10px] w-full transition-transform duration-500 hover:scale-105"
                viewBox="0 0 140 12"
                fill="none"
              >
                <path
                  d="M3 8C35 3 85 4 137 9"
                  stroke="#F6C85F"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span className="ml-2 inline-block -rotate-[8deg] text-4xl animate-bounce hover:rotate-12 transition-transform cursor-pointer">
              👋
            </span>
          </div>

          {/* Description */}
          <p
            className="
              max-w-[390px]
              text-[16px]
              leading-[1.6]
              text-[#68736F]
              sm:text-[18px]
            "
          >
            Small practice today,
            <br />
            big opportunities tomorrow.
          </p>

          {/* Benefits Section */}
          <div
            className="
              mt-7
              grid
              grid-cols-3
              gap-3
              sm:mt-9
              sm:max-w-[560px]
              sm:gap-5
            "
          >
            {benefits.map(({ icon: Icon, label, iconClass }) => (
              <div
                key={iconClass}
                className="
                  group
                  flex
                  min-w-0
                  cursor-pointer
                  flex-col
                  items-start
                  gap-2
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                {/* Icon */}
                <div
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-[14px]
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:shadow-md
                    sm:h-12
                    sm:w-12
                    ${iconClass}
                  `}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Label */}
                <span
                  className="
                    text-[11px]
                    font-semibold
                    leading-[1.35]
                    text-[#17211F]
                    transition-colors
                    group-hover:text-[#176B5B]
                    sm:text-[13px]
                  "
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= GIRL ILLUSTRATION ================= */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            items-end
            justify-center
            lg:-ml-8
            lg:justify-start
          "
        >
          {/* Practice Speaking bubble - Floating Animation 1 */}
          <div
            className="
              absolute
              left-[8%]
              top-[5%]
              z-20
              rotate-[-5deg]
              rounded-[28px]
              bg-[#E8E2FF]
              px-5
              py-3
              text-center
              text-sm
              font-bold
              leading-tight
              text-[#17211F]
              shadow-sm
              transition-all
              duration-500
              hover:scale-110
              hover:shadow-md
              animate-[bounce_4s_infinite_ease-in-out]
              sm:left-[5%]
              sm:text-base
            "
          >
            Practice
            <br />
            Speaking
          </div>

          {/* Build Confidence bubble - Floating Animation 2 */}
          <div
            className="
              absolute
              right-[5%]
              top-[3%]
              z-20
              rotate-[5deg]
              rounded-[28px]
              bg-[#DDF3E8]
              px-5
              py-3
              text-center
              text-sm
              font-bold
              leading-tight
              text-[#17211F]
              shadow-sm
              transition-all
              duration-500
              hover:scale-110
              hover:shadow-md
              animate-[bounce_3.5s_infinite_ease-in-out_0.5s]
              sm:text-base
            "
          >
            Build
            <br />
            Confidence
          </div>

          {/* Get Hired bubble - Floating Animation 3 */}
          <div
            className="
              absolute
              right-0
              top-[25%]
              z-20
              rotate-[4deg]
              rounded-[28px]
              bg-[#FFF0C9]
              px-5
              py-3
              text-center
              text-sm
              font-bold
              leading-tight
              text-[#17211F]
              shadow-sm
              transition-all
              duration-500
              hover:scale-110
              hover:shadow-md
              animate-[bounce_4.5s_infinite_ease-in-out_1s]
              sm:right-[2%]
              sm:text-base
            "
          >
            Get
            <br />
            Hired
          </div>

          {/* Girl Illustration Asset */}
          <img
            src="/project_photo.png"
            alt="Girl practicing with laptop"
            className="
              relative
              z-10
              mt-4
              h-auto
              w-[82%]
              max-w-[520px]
              object-contain
              transition-transform
              duration-500
              hover:scale-[1.02]
              sm:w-[78%]
              lg:w-full
              lg:max-w-[560px]
            "
          />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. QUICK ACTIONS SECTION                                 */}
      {/* ========================================================= */}
      <div className="mt-2 flex flex-col gap-4">
        {/* Title */}
        <div className="relative inline-block self-start">
          <h3 className="text-xl font-bold tracking-tight text-[#17211F] sm:text-2xl">
            Quick Actions
          </h3>
          <svg
            className="absolute -bottom-1 left-0 h-2 w-full"
            viewBox="0 0 120 8"
            fill="none"
          >
            <path
              d="M2 5C30 2 70 3 118 6"
              stroke="#F6C85F"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Card 1: Random Topic */}
          <div className="group flex cursor-pointer flex-col justify-between rounded-3xl bg-[#F1EDFF] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAE4FF] hover:shadow-md">
            <div className="flex items-start space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E8E2FF] text-[#176B5B] transition-transform duration-300 group-hover:scale-110">
                <Mic className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#17211F]">Random Topic</h4>
                <p className="mt-1 text-xs text-[#68736F]">
                  Get a surprise topic to practice.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#17211F] shadow-sm transition-all duration-300 group-hover:bg-[#176B5B] group-hover:text-white">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Interview Prep */}
          <div className="group flex cursor-pointer flex-col justify-between rounded-3xl bg-[#FFF0C9] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFE9B3] hover:shadow-md">
            <div className="flex items-start space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F6C85F]/40 text-[#17211F] transition-transform duration-300 group-hover:scale-110">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#17211F]">Interview Prep</h4>
                <p className="mt-1 text-xs text-[#68736F]">
                  Practice commonly asked questions.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#17211F] shadow-sm transition-all duration-300 group-hover:bg-[#F19A43] group-hover:text-white">
                <ArrowRight className="h-4 w-4 text-[#F19A43] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Card 3: View Progress */}
          <div className="group flex cursor-pointer flex-col justify-between rounded-3xl bg-[#FFE8E5] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFDCD8] hover:shadow-md">
            <div className="flex items-start space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FFD4CE] text-[#17211F] transition-transform duration-300 group-hover:scale-110">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#17211F]">View Progress</h4>
                <p className="mt-1 text-xs text-[#68736F]">
                  Track your improvement over time.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#17211F] shadow-sm transition-all duration-300 group-hover:bg-[#E86D61] group-hover:text-white">
                <ArrowRight className="h-4 w-4 text-[#F19A43] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. MOTIVATIONAL QUOTE CARD                                */}
      {/* ========================================================= */}
      <div className="group relative flex items-center justify-between rounded-3xl bg-[#F1EDFF] px-6 py-5 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="flex items-start gap-4">
          <span className="text-3xl font-extrabold leading-none text-[#17211F] transition-transform group-hover:scale-125">
            “
          </span>
          <div>
            <p className="text-base font-bold text-[#17211F] sm:text-lg">
              Better conversations create a brighter you.
            </p>
            <p className="mt-0.5 text-xs font-semibold text-[#68736F]">
              — SpeechPact
            </p>
          </div>
        </div>

        {/* Hand-drawn smiley face decorator with spin-on-hover */}
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-[#17211F]/30 bg-white/60 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <span className="text-lg">🙂</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeIntro;