import ResumeIntro from "../../components/ResumeIntro";
import ResumeUploadCard from "../../components/ResumeUploadCard";

const ResumeUploadPage = () => {
  return (
    <main
      className="
        !m-0
        !min-h-screen
        !w-full
        !max-w-none
        !p-0
       overflow-hidden
        relative
        flex
        bg-[#f4f1e9]
      "
    >
      {/* =====================================================
          FULL WIDTH PAGE
      ====================================================== */}

      <div
        className="
          relative
          !m-0
          !w-full
          !max-w-none
          min-h-screen
          overflow-hidden
          rounded-none
          bg-[#fdfcf9]
        "
      >

        {/* ================= TOP RIGHT DECORATION ================= */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[100px]
            -top-[120px]
            h-[340px]
            w-[340px]
            rounded-full
            bg-[#f7f8f5]
          "
        />

        {/* ================= HEADER ================= */}

        <header
          className="
            relative
            z-30
            flex
            w-full
            items-center
            justify-between
            px-[6vw]
            py-7
          "
        >
          {/* LOGO */}

          <a
            href="/"
            className="
              flex
              items-center
              gap-3
              text-[30px]
              font-extrabold
              tracking-[-0.6px]
              text-[#10211f]
            "
          >
            <span className="flex h-9 items-center gap-[3px]">
              <span className="h-[10px] w-[4px] rounded-full bg-[#168b78] font-bold" />
              <span className="h-[17px] w-[4px] rounded-full bg-[#168b78] font-bold" />
              <span className="h-[26px] w-[4px] rounded-full bg-[#168b78] font-bold" />
              <span className="h-[19px] w-[4px] rounded-full bg-[#168b78] font-bold" />
              <span className="h-[11px] w-[4px] rounded-full bg-[#168b78] font-bold" />
            </span>

            SpeechPact
          </a>

          {/* TAGLINE */}

          <div className="relative">
            <p
    className="
      font-['Comic_Sans_MS']
      text-[20px]
      font-semibold
      leading-none
      tracking-[0.2px]
      text-[#07152f]
      rotate-[-3deg]
    "
  >
    Just Speak. Get Better.
  </p>

  {/* Hand-drawn yellow underline */}
  <svg
    className="
      pointer-events-none
      absolute
      -bottom-[14px]
      left-[72px]
      h-[18px]
      w-[125px]
      rotate-[-4deg]
    "
    viewBox="0 0 125 18"
    fill="none"
  >
    {/* Main underline */}
    <path
      d="M3 9C30 5 72 6 122 2"
      stroke="#F4B329"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Small second hand-drawn stroke */}
    <path
      d="M12 15C42 11 72 12 103 8"
      stroke="#F4B329"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.9"
    />
  </svg>

           
          </div>
        </header>

        {/* ================= HERO ================= */}

        <section
          className="
            relative
            z-10
            grid
            !w-full
            !max-w-none
            grid-cols-[60%_40%]
            items-center
            px-[6vw]
            pt-[7vh]
          "
        >
          {/* LEFT */}

          <div className="relative z-20 !w-full !max-w-none">
            <ResumeIntro />
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              z-20
              flex
              w-full
              justify-end
            "
          >
            <ResumeUploadCard />
          </div>
        </section>

        {/* ================= BOTTOM SHAPES ================= */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[105px]
            -left-[100px]
            h-[250px]
            w-[520px]
            rounded-[50%]
            bg-[#edf4ef]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[120px]
            left-[20vw]
            h-[230px]
            w-[400px]
            rounded-[50%]
            bg-[#edf4ef]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[130px]
            left-[40vw]
            h-[210px]
            w-[380px]
            rounded-[50%]
            bg-[#edf4ef]
          "
        />

        {/* ================= SMALL STEPS ================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-8
            left-[6vw]
            z-30
          "
        >
        

          <svg
            className="
              absolute
              -right-[48px]
              bottom-0
              h-[50px]
              w-[50px]
            "
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M4 40C16 35 27 22 34 7"
              stroke="#16736b"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <path
              d="M27 8L34 6L33 14"
              stroke="#16736b"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default ResumeUploadPage;