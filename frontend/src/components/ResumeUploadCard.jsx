import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadPdf } from "../api/backend";
import useAppStore from "../store/useAppStore";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const DocumentIcon = () => (
  <svg
    viewBox="0 0 48 48"
    aria-hidden="true"
    className="document-icon h-[58px] w-[58px]"
  >
    <path
      d="M14 5h14l9 9v29H14z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M28 5v10h9M20 24h11M20 31h11M20 38h7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const formatSize = (bytes) =>
  `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

const ResumeUploadCard = () => {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState("");
  const { file, setFile, setUploadMessage, setTopics } = useAppStore();
  const navigate = useNavigate();

  const uploadResume = async (candidate) => {
    setIsAnalyzing(true);
    setError("");
    setUploadMessage("Uploading your resume...");

    try {
      const data = await uploadPdf(candidate);
      setTopics(data.topics || []);
      setUploadMessage(data.message || "Your topics are ready.");
      navigate("/topics", { replace: true });
    } catch {
      setError("We could not upload that resume. Please try again.");
      setUploadMessage("");
      setFile(null);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const selectFile = (candidate) => {
    if (!candidate) return;

    const validType = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ].includes(candidate.type);

    const validExtension = /\.(pdf|docx)$/i.test(candidate.name);

    if (
      (!validType && !validExtension) ||
      candidate.size > MAX_FILE_SIZE
    ) {
      setError(
        candidate.size > MAX_FILE_SIZE
          ? "Please choose a file smaller than 5 MB."
          : "Please choose a PDF or DOCX file."
      );

      setFile(null);
      return;
    }

    setError("");
    setFile(candidate);
    uploadResume(candidate);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    selectFile(event.dataTransfer.files[0]);
  };

  return (
    <section
      className={`
        upload-card
        ${isDragging ? "is-dragging" : ""}
        ${file ? "has-file" : ""}
        relative
        flex
        min-h-[500px]
        w-full
        max-w-[650px]
        items-center
        justify-center
        overflow-hidden
        rounded-[28px]
        border
        border-[#d9e9e3]
        bg-white/90
        px-8
        py-10
        shadow-[0_18px_50px_rgba(30,80,70,0.08)]
        transition-all
        duration-300
        hover:shadow-[0_22px_60px_rgba(30,80,70,0.12)]
        sm:px-10
        md:min-h-[530px]
        md:px-12
      `}
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      {isAnalyzing ? (
        <div className="loading-state flex w-full flex-col items-center justify-center text-center">
          {/* Loading icon */}
          <div
            className="
              loading-mark
              mb-6
              flex
              h-16
              w-16
              items-center
              justify-center
              gap-1.5
              rounded-[20px]
              bg-[#E8F5F0]
            "
            aria-hidden="true"
          >
            <span className="h-4 w-1.5 rounded-full bg-[#168b78]" />
            <span className="h-7 w-1.5 rounded-full bg-[#168b78]" />
            <span className="h-5 w-1.5 rounded-full bg-[#168b78]" />
          </div>

          <h2
            className="
              text-[24px]
              font-extrabold
              tracking-[-0.5px]
              text-[#07152f]
              sm:text-[27px]
            "
          >
            Uploading your resume...
          </h2>

          <p
            className="
              mt-4
              text-[16px]
              font-semibold
              leading-relaxed
              text-[#61716d]
            "
          >
            Finding projects, skills, and experiences...
          </p>

          <p
            className="
              mt-1
              text-[16px]
              font-semibold
              leading-relaxed
              text-[#61716d]
            "
          >
            Creating your speaking topics...
          </p>

          <div
            className="
              progress-track
              mt-8
              h-2
              w-full
              max-w-[360px]
              overflow-hidden
              rounded-full
              bg-[#e8efec]
            "
          >
            <span className="block h-full w-1/2 rounded-full bg-[#168b78]" />
          </div>
        </div>
      ) : (
        <div className="empty-upload-state flex w-full flex-col items-center justify-center text-center">
          {/* Upload Icon */}
          <div
            className="
              upload-icon-wrap
              relative
              mb-6
              flex
              h-[80px]
              w-[80px]
              items-center
              justify-center
              rounded-[24px]
              bg-[#EEF8F4]
              text-[#07152f]
              shadow-[0_8px_25px_rgba(22,139,120,0.08)]
            "
          >
            <DocumentIcon />

            {/* Arrow */}
            <span
              className="
                absolute
                -right-2
                -bottom-2
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#168b78]
                text-[25px]
                font-black
                leading-none
                text-white
                shadow-[0_6px_15px_rgba(22,139,120,0.25)]
              "
            >
              ↑
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-[27px]
              font-extrabold
              tracking-[-0.7px]
              text-[#07152f]
              sm:text-[30px]
            "
          >
            Upload your resume
          </h2>

          {/* File Types */}
          <p
            className="
              mt-3
              text-[16px]
              font-bold
              tracking-[-0.1px]
              text-[#5d6d78]
              sm:text-[15px]
            "
          >
            PDF or DOCX{" "}
            <span className="mx-1 text-[#168b78]">·</span>{" "}
            Max 5 MB
          </p>

          {/* Choose File Button */}
          <button
            className="
              primary-button
              mt-7
              flex
              min-h-[58px]
              w-full
              max-w-[430px]
              items-center
              justify-center
              rounded-full
              bg-[#176f60]
              px-8
              text-[18px]
              font-extrabold
              tracking-[-0.2px]
              text-white
              shadow-[0_10px_25px_rgba(23,111,96,0.20)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#126052]
              hover:shadow-[0_14px_30px_rgba(23,111,96,0.28)]
              active:translate-y-0
              sm:text-[19px]
            "
            onClick={() => inputRef.current?.click()}
          >
            Choose File
          </button>

          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(event) => selectFile(event.target.files[0])}
            hidden
          />

          {/* Drag & Drop */}
          <p
            className="
              drop-hint
              mt-5
              text-[17px]
              font-bold
              text-[#6d7b82]
            "
          >
            or drag and drop it here
          </p>

          {/* Privacy */}
          <p
            className="
              privacy-note
              mt-8
              max-w-[430px]
              text-center
              text-[16px]
              font-bold
              leading-relaxed
              text-[#687780]
              sm:text-[15px]
            "
          >
            Your resume is used only to create your personalized topics.
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <p
          className="
            upload-error
            absolute
            bottom-4
            left-1/2
            w-[90%]
            -translate-x-1/2
            rounded-xl
            bg-red-50
            px-4
            py-2
            text-center
            text-sm
            font-bold
            text-red-600
          "
        >
          {error}
        </p>
      )}
    </section>
  );
};

export default ResumeUploadCard;