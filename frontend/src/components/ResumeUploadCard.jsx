import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadPdf } from "../api/backend";
import useAppStore from "../store/useAppStore";
import { Upload, FileText, Loader2, AlertCircle, Sparkles } from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ResumeUploadCard = () => {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState("");
  const { setFile, setUploadMessage, setTopics } = useAppStore();
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

    if ((!validType && !validExtension) || candidate.size > MAX_FILE_SIZE) {
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
    <div
      className={`group relative flex flex-col items-center justify-center w-full min-h-[410px] rounded-[36px] border border-[#16736b]/20 bg-[#eef7f4]/90 px-8 py-8 text-center backdrop-blur-md transition-all duration-500 overflow-hidden ${
        isDragging
          ? "border-dashed border-[#16736b] bg-[#e3f3ee] scale-[1.02] shadow-2xl"
          : "hover:border-[#16736b]/40 hover:shadow-xl hover:shadow-[#16736b]/10"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      {/* ================= CSS KEYFRAME ANIMATIONS ================= */}
      <style>{`
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        @keyframes sparkle-rotate {
          0% { transform: rotate(0deg) scale(0.9); }
          50% { transform: rotate(180deg) scale(1.15); }
          100% { transform: rotate(360deg) scale(0.9); }
        }
        @keyframes shake-err {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-4px); }
          40%, 80% { transform: translateX(4px); }
        }
        .animate-float { animation: float-icon 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle-rotate 3s linear infinite; }
        .animate-shake { animation: shake-err 0.4s ease-in-out; }
      `}</style>

      {/* Decorative Ambient Background Glows */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#16736b]/15 blur-2xl transition-all duration-700 group-hover:bg-[#16736b]/25" />
      <div className="pointer-events-none absolute -left-12 -bottom-12 h-36 w-36 rounded-full bg-[#16736b]/10 blur-2xl" />

      {isAnalyzing ? (
        /* LOADING STATE */
        <div className="flex py-12 flex-col items-center justify-center space-y-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md">
            <Loader2 className="h-8 w-8 animate-spin text-[#16736b]" />
            <Sparkles className="absolute -top-1.5 -right-1.5 h-5 w-5 text-[#16736b] animate-sparkle" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-black text-[#10211f]">
              Uploading your resume...
            </h3>
            <p className="text-xs font-semibold text-[#68736f]">
              Analyzing topics and experience...
            </p>
          </div>
        </div>
      ) : (
        /* UPLOAD STATE */
        <div className="flex w-full flex-col items-center z-10">
          {/* Document Icon Badge with Animated Floating & Glow Effect */}
          <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#16736b]/15 bg-white shadow-xs animate-float">
            {/* Glow Ring Behind Icon */}
            <div className="absolute inset-0 rounded-2xl bg-[#16736b]/10 animate-pulse-glow" />
            <FileText className="relative z-10 h-8 w-8 text-[#10211f]" strokeWidth={1.5} />
            <div className="absolute -bottom-1 -right-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-[#16736b] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
              <Upload className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Heading with Sparkle Rotation */}
          <h2 className="text-2xl font-black tracking-tight text-[#10211f] flex items-center justify-center gap-1.5">
            <span className="inline-block animate-sparkle">✨</span>
            <span>Upload Your Resume</span>
            <span className="inline-block animate-sparkle">✨</span>
          </h2>

          <p className="mt-2 max-w-[260px] text-xs font-semibold text-[#68736f] leading-snug">
            Get personalized speaking topics from your own experience.
          </p>

          {/* Animated Choose File Button */}
          <button
            type="button"
            className="mt-6 flex items-center justify-center gap-2.5 rounded-full bg-[#16736b] px-8 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#125e58] hover:shadow-lg hover:scale-105 active:scale-95"
            onClick={() => inputRef.current?.click()}
          >
            <Upload className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Choose File</span>
          </button>

          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => selectFile(e.target.files[0])}
            hidden
          />

          <p className="mt-2.5 text-[11px] font-bold text-[#68736f]">
            PDF or DOCX <span className="text-[#16736b] font-extrabold">(Max 5MB)</span>
          </p>

          {/* Interactive Animated Dropzone */}
          <div className="mt-4 w-full rounded-2xl border border-dashed border-[#16736b]/40 bg-white/50 py-3 text-xs font-semibold text-[#68736f] transition-all duration-300 group-hover:border-[#16736b]/70 group-hover:bg-white/80 group-hover:shadow-inner">
            or drag and drop it here
          </div>

          <p className="mt-3 text-[10px] font-medium text-[#68736f]/80">
            🔒 Your resume is used only to create your personalized topics.
          </p>
        </div>
      )}

      {/* Error Message Banner */}
      {error && (
        <div className="mt-3 flex items-center gap-1.5 rounded-xl bg-red-50/90 px-3 py-1.5 text-xs font-bold text-red-600 border border-red-200/60 animate-shake">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default ResumeUploadCard;