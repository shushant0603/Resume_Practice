import {
  FileText,
  Mic2,
  BarChart3,
  ArrowUpRight,
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
    <section className="relative flex h-full w-full items-center py-4 sm:py-8 lg:py-0">
      <div className="relative w-full max-w-[610px] pl-1">

        {/* Heading */}
        <h1
          className="
            text-[clamp(2.5rem,7vw,4.25rem)]
            font-extrabold
            leading-[0.98]
            tracking-[-2.5px]
            text-[#17211F]
          "
        >
          Turn Your
          <br className="hidden sm:block" />
          Resume into
          <br className="hidden sm:block" />

          <span className="relative inline-block text-[#176B5B]">
            Real Conversations.

            {/* subtle hand-drawn underline */}
            <span
              className="
                absolute
                -bottom-1
                left-1
                right-2
                -z-10
                h-[6px]
                rotate-[-1deg]
                rounded-[50%]
                bg-[#F6C85F]
                opacity-60
              "
            />
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-7
            max-w-[500px]
            text-[15px] sm:text-[17px]
            font-bold
            leading-[1.55]
            text-[#68736F]
          "
        >
          Upload your resume and get personalized
          <br className="hidden sm:block" />
          speaking topics to practice, with AI.
        </p>

        {/* Benefits */}
        <div className="mt-8 flex flex-wrap items-start gap-x-6 gap-y-6 sm:gap-x-10">
          {benefits.map(
            ({ icon: Icon, label, iconClass }) => (
              <div
                key={iconClass}
                className="flex min-w-[120px] flex-1 flex-col items-start gap-2.5 sm:flex-none"
              >
                {/* Icon */}
                <div
                  className={`
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-[15px]
                    ${iconClass}
                  `}
                >
                  <Icon
                    size={30}
                    strokeWidth={2}
                  />
                </div>

                {/* Label */}
                <span
                  className="
                    text-[15px]
                    font-bold
                    leading-[1.45]
                    text-[#17211F]
                  "
                >
                  {label}
                </span>
              </div>
            )
          )}
        </div>

        {/* Small decorative note */}
        <div
          className="
            absolute
            -bottom-[145px]
            -left-5
            flex
            rotate-[-4deg]
            items-end
            gap-3
            text-[#176B5B]
          "
        >
          <span
            className="
              font-['Comic_Sans_MS']
              text-[17px]
              font-bold
              leading-[1.15]
              tracking-[0.3px]
            "
          >
            Small
            <br />
            Steps,
            <br />
            Big Progress.
          </span>

         
        </div>

      </div>
    </section>
  );
};

export default ResumeIntro;