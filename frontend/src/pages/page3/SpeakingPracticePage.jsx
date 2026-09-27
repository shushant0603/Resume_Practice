import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Check, ChevronDown, FileText, Lightbulb, MessageCircle, Minus, Mic, Plus, Settings, Sparkles, Target, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/useAppStore";

const durations = [30, 60, 120, 180, 300];

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}:${String(remainder).padStart(2, "0")}`;
};



const SpeakingPracticePage = () => {
  const navigate = useNavigate();
  const { topics, selectedTopic, secondsLeft, isTimerRunning, toggleTimer, tickTimer, setTimer } = useAppStore();
  const [duration, setDuration] = useState(30);
  const [customMinutes, setCustomMinutes] = useState("1");
  const [isDurationMenuOpen, setIsDurationMenuOpen] = useState(false);
  const [isCustomTimeOpen, setIsCustomTimeOpen] = useState(false);
  const durationMenuRef = useRef(null);

  const topicNumber = useMemo(() => {
    const index = topics.findIndex((topic) => topic.title === selectedTopic?.title);
    return index >= 0 ? index + 1 : 1;
  }, [selectedTopic, topics]);

  useEffect(() => {
    if (!isTimerRunning) return undefined;
    const timer = setInterval(tickTimer, 1000);
    return () => clearInterval(timer);
  }, [isTimerRunning, tickTimer]);

  useEffect(() => {
    const closeDurationMenu = (event) => {
      if (!durationMenuRef.current?.contains(event.target)) {
        setIsDurationMenuOpen(false);
        setIsCustomTimeOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDurationMenu);
    return () => document.removeEventListener("mousedown", closeDurationMenu);
  }, []);

  const chooseDuration = (value) => {
    setDuration(value);
    setTimer(value);
    setCustomMinutes(String(value / 60));
    setIsDurationMenuOpen(false);
    setIsCustomTimeOpen(false);
  };

  const chooseCustomDuration = () => {
    const minutes = Number(customMinutes);
    if (!Number.isFinite(minutes) || minutes <= 0) return;

    const seconds = Math.round(minutes * 60);
    setDuration(seconds);
    setTimer(seconds);
    setIsDurationMenuOpen(false);
    setIsCustomTimeOpen(false);
  };

  const adjustCustomMinutes = (change) => {
    const currentMinutes = Number(customMinutes) || 1;
    setCustomMinutes(String(Math.max(1, Math.min(60, currentMinutes + change))));
  };

  const durationLabel = duration < 60 ? `${duration} sec` : `${duration / 60} min`;

  if (!selectedTopic) {
    return (
      <main className="practice-page empty-practice-page">
        <h1>Choose a topic first.</h1>
        <button className="practice-primary-button" onClick={() => navigate("/topics")}>Back to topics</button>
      </main>
    );
  }

  return (
    <main className="practice-page">
      <header className="practice-header">
        <a className="wordmark" href="/" aria-label="SpeechPact home"><span className="wordmark-mark" aria-hidden="true"><i /><i /><i /></span>SpeechPact</a>
        <button className="end-session-button" onClick={() => navigate("/topics")}><X size={18} /> End Session</button>
      </header>

      <div className="practice-topline">
        <button className="practice-back-link" onClick={() => navigate("/topics")}><ArrowLeft size={20} /> <span>Back</span></button>
        <div className="practice-progress"><strong>{topicNumber} / {topics.length}</strong><span><i /><i /><i /><i /><i /><i /></span></div>
      </div>

      <section className="practice-content">
        <div className="practice-category"><FileText size={19} /> {selectedTopic.category || "Project"}</div>
        <div className="practice-prompt">
          <div className="prompt-meta"><span>INTERVIEW QUESTION</span><span><Sparkles size={14} /> Based on your resume</span></div>
          <div className="prompt-copy"><span className="prompt-icon"><FileText size={21} /></span>{selectedTopic.description || selectedTopic.title}</div>
        </div>

        <div className="duration-row">
          <span className="duration-label"><span className="duration-clock" aria-hidden="true">◷</span>Speaking Time</span>
          <div className="duration-quick-options">
            {[30, 60, 120, 180].map((value) => (
              <button key={value} className={duration === value ? "active" : ""} onClick={() => chooseDuration(value)}>
                {value < 60 ? `${value} sec` : `${value / 60} min`}
              </button>
            ))}
          </div>
          <div className="duration-picker" ref={durationMenuRef}>
            <button
              className={`duration-trigger ${isDurationMenuOpen ? "open" : ""}`}
              onClick={() => setIsDurationMenuOpen((isOpen) => !isOpen)}
              aria-expanded={isDurationMenuOpen}
              aria-haspopup="listbox"
            >
              <span>{durationLabel}</span>
              <ChevronDown size={19} className="duration-chevron" />
            </button>
            {isDurationMenuOpen && (
              <div className="duration-popover" role="listbox" aria-label="Choose speaking time">
                {durations.map((value) => (
                  <button
                    key={value}
                    className={duration === value ? "selected" : ""}
                    onClick={() => chooseDuration(value)}
                    role="option"
                    aria-selected={duration === value}
                  >
                    <span>{value < 60 ? `${value} sec` : `${value / 60} min`}</span>
                    {duration === value && <Check size={18} />}
                  </button>
                ))}
                <button className="custom-time-option" onClick={() => setIsCustomTimeOpen(true)}>
                  <Settings size={17} />
                  <span>Custom</span>
                </button>
              </div>
            )}
            {isDurationMenuOpen && isCustomTimeOpen && (
              <div className="custom-time-popover" role="dialog" aria-label="Custom time">
                <div className="custom-time-heading">
                  <strong>Custom Time</strong>
                  <button onClick={() => setIsCustomTimeOpen(false)} aria-label="Close custom time"><X size={19} /></button>
                </div>
                <div className="custom-time-stepper">
                  <button onClick={() => adjustCustomMinutes(-1)} aria-label="Decrease minutes"><Minus size={19} /></button>
                  <div><strong>{customMinutes || "1"}</strong><span>minutes</span></div>
                  <button onClick={() => adjustCustomMinutes(1)} aria-label="Increase minutes"><Plus size={19} /></button>
                </div>
                <button className="custom-time-set" onClick={chooseCustomDuration}>Set</button>
              </div>
            )}
          </div>
        </div>

        <div className="practice-stage">
          <div className={`voice-orb ${isTimerRunning ? "speaking" : ""}`}>
            <div className="voice-waves"><span /><span /><span /><span /><span /></div>
            <button className="mic-button" onClick={toggleTimer} aria-label={isTimerRunning ? "Pause speaking session" : "Start speaking session"}>
              <Mic size={42} strokeWidth={1.8} />
            </button>
            <div className="voice-waves right"><span /><span /><span /><span /><span /></div>
          </div>
          <strong className="timer-display">{formatTime(secondsLeft)}</strong>
          <p>{isTimerRunning ? "Speaking session in progress" : "Click the mic to start speaking"}</p>
        </div>

        <aside className="practice-tips">
          <h2><Lightbulb size={22} /> Tips</h2>
          <div className="tip-item"><span><MessageCircle size={18} /></span><div><strong>Speak naturally</strong><small>Be yourself, like a real conversation.</small></div></div>
          <div className="tip-item"><span><Target size={18} /></span><div><strong>Take your time</strong><small>It's okay to pause and think.</small></div></div>
          <div className="tip-item"><span><FileText size={18} /></span><div><strong>Explain with examples</strong><small>Use real projects or experiences.</small></div></div>
          <div className="tip-item"><span><Sparkles size={18} /></span><div><strong>Try to be concise</strong><small>Keep your answer clear and focused.</small></div></div>
        </aside>

      </section>
      <div className="practice-bottom-decoration" aria-hidden="true" />
      <div className="practice-journey" aria-label="Practice progress">
        <div className="journey-step current"><span>1</span><strong>Speak</strong></div>
        <div className="journey-line" />
        <div className="journey-step"><span>2</span><strong>Practice</strong></div>
        <div className="journey-line" />
        <div className="journey-step"><span>3</span><strong>Get Feedback</strong></div>
        <div className="journey-line" />
        <div className="journey-step"><span>4</span><strong>Improve</strong></div>
      </div>
      <div className="practice-note"><strong>Good speakers<br />build better futures.</strong><span>01 / {String(topics.length).padStart(2, "0")}<small>YOUR PROGRESS</small></span></div>
    </main>
  );
};


export default SpeakingPracticePage;