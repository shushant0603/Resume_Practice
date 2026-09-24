import React, { useState } from "react";
import {
  Home,
  Mic,
  BookOpen,
  BarChart3,
  Bell,
  User,
  Menu,
  X,
  Sparkles,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

import ResumeIntro from "../../components/ResumeIntro";
import ResumeUploadCard from "../../components/ResumeUploadCard";

const ResumeUploadPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Practice", icon: Mic, path: "/practice" },
    { name: "Topics", icon: BookOpen, path: "/topics" },
    { name: "Progress", icon: BarChart3, path: "/progress" },
  ];

  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#fdfcf9] font-sans antialiased select-none">

      {/* ================= CSS ANIMATIONS ================= */}

      <style>{`
        @keyframes soundwave-1 {
          0%, 100% {
            height: 8px;
          }

          50% {
            height: 22px;
          }
        }

        @keyframes soundwave-2 {
          0%, 100% {
            height: 20px;
          }

          50% {
            height: 10px;
          }
        }

        @keyframes soundwave-3 {
          0%, 100% {
            height: 26px;
          }

          50% {
            height: 14px;
          }
        }

        @keyframes float-badge {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes mobileMenuOpen {
          0% {
            opacity: 0;
            transform: translateY(-12px) scale(0.98);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes mobileItemIn {
          0% {
            opacity: 0;
            transform: translateY(-6px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes overlayFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .animate-wave-1 {
          animation: soundwave-1 1.2s ease-in-out infinite;
        }

        .animate-wave-2 {
          animation: soundwave-2 1.4s ease-in-out infinite;
        }

        .animate-wave-3 {
          animation: soundwave-3 1.1s ease-in-out infinite;
        }

        .animate-float-badge {
          animation: float-badge 3s ease-in-out infinite;
        }

        .mobile-menu-animation {
          animation: mobileMenuOpen 0.25s ease-out forwards;
        }

        .mobile-overlay-animation {
          animation: overlayFade 0.2s ease-out forwards;
        }

        .mobile-nav-item {
          animation: mobileItemIn 0.3s ease-out forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-wave-1,
          .animate-wave-2,
          .animate-wave-3,
          .animate-float-badge,
          .mobile-menu-animation,
          .mobile-overlay-animation,
          .mobile-nav-item {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>


      {/* ================= BACKGROUND BLOBS ================= */}

      <div
        className="
          pointer-events-none
          fixed
          -right-20
          -top-20
          h-80
          w-80
          rounded-full
          bg-[#f4f7f4]
          opacity-80
          blur-2xl
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          -bottom-32
          -left-20
          h-[380px]
          w-[600px]
          rounded-[50%]
          bg-[#edf4ef]
          opacity-70
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          -bottom-36
          left-[30%]
          h-[320px]
          w-[500px]
          rounded-[50%]
          bg-[#edf4ef]
          opacity-70
        "
      />


      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header
        className="
          sticky
          top-0
          z-50
          flex
          h-20
          w-full
          shrink-0
          items-center
          border-b
          border-[#e2ede8]/60
          bg-[#fdfcf9]/90
          px-3
          backdrop-blur-md
          transition-all
          duration-300
          sm:px-6
          lg:px-12
        "
      >

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1440px]
            items-center
            justify-between
            gap-3
          "
        >

          {/* ================= LOGO ================= */}

          <a
            href="/"
            className="
              group
              flex
              min-w-0
              shrink-0
              items-center
              gap-2.5
              text-xl
              font-black
              tracking-tight
              text-[#10211f]
            "
          >

            {/* Sound Bars */}

            <span className="flex h-7 shrink-0 items-center gap-[3px]">

              <span
                className="
                  h-2.5
                  w-[3.5px]
                  rounded-full
                  bg-[#168b78]
                  transition-all
                  duration-300
                  group-hover:animate-wave-1
                "
              />

              <span
                className="
                  h-4.5
                  w-[3.5px]
                  rounded-full
                  bg-[#168b78]
                  transition-all
                  duration-300
                  group-hover:animate-wave-2
                "
              />

              <span
                className="
                  h-6
                  w-[3.5px]
                  rounded-full
                  bg-[#168b78]
                  transition-all
                  duration-300
                  group-hover:animate-wave-3
                "
              />

              <span
                className="
                  h-4
                  w-[3.5px]
                  rounded-full
                  bg-[#168b78]
                  transition-all
                  duration-300
                  group-hover:animate-wave-2
                "
              />

              <span
                className="
                  h-2.5
                  w-[3.5px]
                  rounded-full
                  bg-[#168b78]
                  transition-all
                  duration-300
                  group-hover:animate-wave-1
                "
              />

            </span>


            {/* Logo Text */}

            <div className="flex min-w-0 flex-col">

              <span
                className="
                  whitespace-nowrap
                  text-lg
                  font-black
                  leading-none
                  sm:text-xl
                "
              >
                SpeechPact
              </span>

              <span
                className="
                  hidden
                  text-[9px]
                  font-semibold
                  tracking-wider
                  text-[#68736f]
                  sm:inline
                "
              >
                Speak. Grow. Get Hired.
              </span>

            </div>

          </a>


          {/* =====================================================
              DESKTOP NAVIGATION

              IMPORTANT:
              Desktop navigation starts at LG.
              This prevents mobile/tablet overflow.
          ===================================================== */}

          <nav
            className="
              hidden
              items-center
              gap-1.5
              rounded-full
              border
              border-[#e2ede8]
              bg-white/90
              p-1.5
              shadow-xs
              backdrop-blur-md
              lg:flex
            "
          >

            {navItems.map((item) => {

              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-3
                    py-2
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    ease-out
                    lg:px-4

                    ${
                      isActive
                        ? "scale-[1.02] bg-[#e1f2ec] text-[#16736b] shadow-xs"
                        : "text-[#68736f] hover:bg-[#f2f7f5] hover:text-[#10211f]"
                    }
                  `}
                >

                  <Icon
                    className={`
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:scale-110

                      ${
                        isActive
                          ? "text-[#16736b]"
                          : "text-[#68736f]"
                      }
                    `}
                  />

                  <span>{item.name}</span>

                  {isActive && (
                    <span
                      className="
                        absolute
                        -bottom-1
                        left-1/2
                        h-1
                        w-5
                        -translate-x-1/2
                        rounded-full
                        bg-[#16736b]
                        transition-all
                        duration-300
                      "
                    />
                  )}

                </button>
              );
            })}

          </nav>


          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">

            {/* Notification */}

            <button
              className="
                hidden
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#e2ede8]
                bg-[#e8f3ef]
                text-[#16736b]
                shadow-xs
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#d8ebe3]
                active:scale-95
                sm:flex
                sm:h-10
                sm:w-10
              "
            >
              <Bell className="h-4 w-4 text-[#16736b]" />
            </button>


            {/* Profile */}

            <button
              className="
                relative
                hidden
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#16736b]
                text-white
                shadow-md
                transition-all
                duration-300
                hover:scale-105
                active:scale-95
                sm:flex
                sm:h-10
                sm:w-10
              "
            >

              <User className="h-4 w-4 text-white sm:h-5 sm:w-5" />

              <span
                className="
                  absolute
                  -bottom-0.5
                  -right-0.5
                  h-2.5
                  w-2.5
                  rounded-full
                  border-2
                  border-white
                  bg-emerald-500
                  sm:h-3
                  sm:w-3
                "
              />

            </button>


            {/* =================================================
                MOBILE MENU BUTTON

                Visible below LG.
            ================================================= */}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#e2ede8]
                bg-white
                text-[#10211f]
                shadow-xs
                transition-all
                duration-300
                hover:bg-[#f2f7f5]
                active:scale-95
                lg:hidden
                sm:h-10
                sm:w-10
              "
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >

              <span
                className="
                  transition-transform
                  duration-300
                "
              >

                {mobileMenuOpen ? (
                  <X
                    className="
                      h-5
                      w-5
                      rotate-90
                      text-[#16736b]
                      transition-transform
                      duration-300
                    "
                  />
                ) : (
                  <Menu
                    className="
                      h-5
                      w-5
                      text-[#10211f]
                      transition-transform
                      duration-300
                    "
                  />
                )}

              </span>

            </button>

          </div>

        </div>

      </header>


      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}

      {mobileMenuOpen && (

        <div
          className="
            mobile-overlay-animation
            fixed
            inset-0
            z-40
            bg-black/20
            backdrop-blur-[2px]
            lg:hidden
          "
          onClick={() => setMobileMenuOpen(false)}
        >

          <div
            className="
              mobile-menu-animation
              absolute
              left-3
              right-3
              top-[84px]
              rounded-3xl
              border
              border-[#e2ede8]
              bg-white/95
              p-4
              shadow-2xl
              backdrop-blur-md
              sm:left-6
              sm:right-6
            "
            onClick={(event) => event.stopPropagation()}
          >

            <div className="flex flex-col gap-2">

              {navItems.map((item, index) => {

                const Icon = item.icon;
                const isActive = activeTab === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveTab(item.name);
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                    className={`
                      mobile-nav-item
                      flex
                      w-full
                      items-center
                      gap-3.5
                      rounded-2xl
                      px-4
                      py-3
                      text-sm
                      font-bold
                      transition-all
                      duration-200
                      ease-out

                      ${
                        isActive
                          ? "bg-[#e1f2ec] text-[#16736b]"
                          : "text-[#68736f] hover:bg-[#f2f7f5] hover:text-[#10211f]"
                      }
                    `}
                  >

                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl

                        ${
                          isActive
                            ? "bg-white text-[#16736b]"
                            : "bg-[#f7faf8] text-[#68736f]"
                        }
                      `}
                    >

                      <Icon
                        className="
                          h-5
                          w-5
                          transition-transform
                          duration-200
                        "
                      />

                    </span>

                    <span>{item.name}</span>

                  </button>
                );
              })}

            </div>

          </div>

        </div>

      )}


      {/* =========================================================
          MAIN DASHBOARD CONTENT
          NO LOGIC CHANGED
      ========================================================= */}

      <section
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          justify-between
          gap-8
          px-4
          py-6
          pb-20
          sm:px-8
          lg:px-12
          xl:flex-row
        "
      >

        {/* ================= LEFT COLUMN ================= */}

        <div
          className="
            flex
            w-full
            flex-col
            justify-between
            gap-6
            xl:flex-1
          "
        >

          <ResumeIntro />

        </div>


        {/* ================= RIGHT COLUMN ================= */}

        <div
          className="
            flex
            w-full
            shrink-0
            flex-col
            gap-6
            xl:w-[420px]
          "
        >

          <ResumeUploadCard />


          {/* ================= WHY SPEECHPACT ================= */}

          <div
            className="
              flex
              flex-col
              justify-between
              rounded-3xl
              border
              border-[#e2ede8]
              bg-white/90
              p-5
              shadow-xs
              backdrop-blur-sm
              transition-all
              duration-300
              hover:shadow-md
            "
          >

            <div className="flex items-center justify-between">

              <span
                className="
                  flex
                  items-center
                  gap-1.5
                  text-xs
                  font-extrabold
                  tracking-tight
                  text-[#10211f]
                "
              >

                <Sparkles className="h-3.5 w-3.5 text-[#16736b]" />

                <span>Why SpeechPact?</span>

                <Sparkles className="h-3.5 w-3.5 text-[#16736b]" />

              </span>

            </div>


            <div
              className="
                mt-4
                grid
                grid-cols-1
                gap-2.5
                sm:grid-cols-3
              "
            >

              {/* Resume Based Topics */}

              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#f4f8f6]
                  p-3
                  text-center
                  transition-transform
                  hover:scale-[1.02]
                "
              >

                <span
                  className="
                    mb-1
                    text-base
                    animate-float-badge
                  "
                >
                  📑
                </span>

                <span
                  className="
                    text-[11px]
                    font-bold
                    leading-tight
                    text-[#10211f]
                  "
                >
                  Resume Based Topics
                </span>

              </div>


              {/* Practice Speaking */}

              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#fef7eb]
                  p-3
                  text-center
                  transition-transform
                  hover:scale-[1.02]
                "
              >

                <span
                  className="
                    mb-1
                    text-base
                    animate-float-badge
                  "
                >
                  🔑
                </span>

                <span
                  className="
                    text-[11px]
                    font-bold
                    leading-tight
                    text-[#10211f]
                  "
                >
                  Practice Speaking with AI
                </span>

              </div>


              {/* Improve Confidently */}

              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#fdf2f2]
                  p-3
                  text-center
                  transition-transform
                  hover:scale-[1.02]
                "
              >

                <span
                  className="
                    mb-1
                    text-base
                    animate-float-badge
                  "
                >
                  📊
                </span>

                <span
                  className="
                    text-[11px]
                    font-bold
                    leading-tight
                    text-[#10211f]
                  "
                >
                  Improve Confidently
                </span>

              </div>

            </div>


            {/* ================= BOTTOM TAGLINE ================= */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                border-t
                border-[#f0f4f2]
                pt-3
                text-xs
                font-bold
                text-[#16736b]
              "
            >

              <span
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-1
                  hover:underline
                "
              >

                Small Steps, Big Progress.

                <ArrowUpRight className="h-4 w-4" />

              </span>

              <Trophy
                className="
                  h-4
                  w-4
                  animate-bounce
                  text-amber-500
                "
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ResumeUploadPage;