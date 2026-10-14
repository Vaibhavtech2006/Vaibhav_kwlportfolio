import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiTrendingUp,
  FiDatabase,
  FiCpu,
  FiAward,
  FiZap,
  FiCode,
  FiFileText,
  FiActivity,
  FiDownload,
  FiPhoneCall,
  FiCheckCircle,
  FiVolume2,
  FiVolumeX,
  FiEdit3,
  FiRefreshCw,
  FiMonitor,
} from "react-icons/fi";

// TERI REAL IMAGE KA PATH (About "Hi there!" section ke liye)
import vaibhavImg from "./assets/vaibhavimg.png";

// ============================================================================
// 1. EXACT RESUME DOWNLOADER (Matches Vaibhav_khresume.pdf 100%)
// ============================================================================
const handleResumeDownload = () => {
  const exactResumeHTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Vaibhav_Khandelwal_Resume</title>
<style>
  @page { size: A4; margin: 12mm; }
  body { font-family: 'Times New Roman', serif; color: #111; max-width: 800px; margin: 16px auto; padding: 0 16px; line-height: 1.4; font-size: 12.5px; }
  .header { text-align: center; border-bottom: 1.5px solid #111; padding-bottom: 6px; margin-bottom: 8px; }
  h1 { margin: 0; font-size: 24px; }
  .contact { font-size: 12px; margin-top: 4px; }
  .contact a { color: #0b57d0; text-decoration: none; font-weight: bold; }
  h2 { font-size: 13px; text-transform: uppercase; border-bottom: 1px solid #333; padding-bottom: 2px; margin: 10px 0 5px 0; }
  p { margin: 0 0 6px 0; text-align: justify; }
  .row { display: flex; justify-content: space-between; font-weight: bold; font-size: 13px; }
  .sub-row { display: flex; justify-content: space-between; font-style: italic; font-size: 12px; color: #333; }
  ul { margin: 2px 0 6px 18px; padding: 0; }
  li { margin-bottom: 2px; text-align: justify; }
</style>
</head>
<body>
  <div class="header">
    <h1>VAIBHAV KHANDELWAL</h1>
    <div class="contact">
      +91-8178263574 • <a href="mailto:khandelwalvaibhav2006@gmail.com">khandelwalvaibhav2006@gmail.com</a> •
      <a href="https://www.linkedin.com/in/vaibhav-khandelwal-8686a2294/">LinkedIn</a> •
      <a href="https://github.com/Vaibhavtech2006">GitHub</a>
    </div>
  </div>
  <h2>Summary</h2>
  <p>AI/ML Engineer and Full Stack Developer specializing in Generative AI (GenAI), Agentic workflows, and Machine Learning, backed by scalable full-stack web development. Proficient in architecting context-aware LLM solutions, Retrieval-Augmented Generation (RAG) pipelines, and autonomous agents using LangChain and LangGraph, while seamlessly integrating them into modern web applications using React.js and Node.js. Actively seeking AI/ML Engineer Trainee, Graduate Engineer Trainee (GET), or SDE Trainee roles.</p>
  <h2>Technical Skills</h2>
  <p><b>AI, ML & GenAI:</b> Artificial Intelligence (AI), Machine Learning (ML), Generative AI (GenAI), RAG, LangGraph, LangChain, NLP, Agentic AI Workflows, Prompt Engineering, Hugging Face, PyTorch, TensorFlow, Claude API, OpenAI, Vector Databases, Pandas, NumPy, Matplotlib<br/>
  <b>Languages:</b> Python, JavaScript, Java, C++, C, OOP, SQL<br/>
  <b>Frontend & Backend:</b> React.js, Next.js, Angular, HTML5, CSS3, Node.js, Express.js, FastAPI, MongoDB, PostgreSQL, RESTful APIs<br/>
  <b>Cloud & Tools:</b> AWS, Azure, GCP, CI/CD, Linux, Docker, Git, GitHub, Postman, DSA, System Design, SDLC</p>
  <h2>Experience</h2>
  <div class="row"><span>Software Development Engineer Intern — Architects Lab</span><span>Aug 2026 – Aug 2026 | Gurugram</span></div>
  <ul>
    <li>Interpreted product requirements for the Meta Developer Dashboard in collaboration with senior engineers, translating requirements into Angular and TypeScript components while meeting sprint deadlines.</li>
    <li>Developed and self-reviewed reusable Angular components and REST API integrations following SDLC standards.</li>
  </ul>
  <div class="row"><span>Angular Developer Intern — Cavisson Systems</span><span>Sept 2025 – June 2026 | Noida</span></div>
  <ul>
    <li>Collaborated with stakeholders to develop Highcharts-based visualizations and integrate multiple REST APIs.</li>
    <li>Performed systematic debugging, testing, and UI quality checks before release to minimize rework.</li>
  </ul>
  <div class="row"><span>Full Stack Web Developer — Zidio Development</span><span>Feb 2025 – Apr 2025 | Remote</span></div>
  <ul>
    <li>Developed, tested, and deployed web applications using React.js and Node.js and managed Linux server environments.</li>
  </ul>
  <h2>Projects</h2>
  <div class="row"><span>OLA.AI Data Agent | React.js, FastAPI, LangGraph, RAG, Python, Scikit-learn, Prophet</span><span>GitHub</span></div>
  <ul>
    <li>Engineered an autonomous multi-agent analytics platform using LangGraph, RAG, FastAPI, and Groq LLMs featuring a Planner node to route tasks across SQL, ETL, EDA, and ML agents.</li>
  </ul>
  <div class="row"><span>LayoffRadar AI | Python, XGBoost, FinBERT, SHAP, React.js</span><span>GitHub</span></div>
  <ul>
    <li>Built a 59-feature calibrated XGBoost + FinBERT early-warning platform tracking 3,622+ layoff events and 2,587+ global tickers.</li>
  </ul>
  <div class="row"><span>YatraSmriti (Train Simulation) | React.js, Python AI Model, Telemetry</span><span>GitHub</span></div>
  <ul>
    <li>AI railway throughput simulator achieving 124 tr/hr (+8.5%) and cutting average train delay by 12.3% with live Hold/Reroute controls.</li>
  </ul>
  <div class="row"><span>Agent AI Free Calling Agent | Node.js, Agentic AI, Claude API</span><span>GitHub</span></div>
  <ul>
    <li>Spearheaded an autonomous AI-powered sales calling agent utilizing Claude API and Node.js for real-time voice routing.</li>
  </ul>
  <h2>Awards & Certifications</h2>
  <ul>
    <li><b>Key Achievements:</b> Solved 677+ DSA Problems on LeetCode (1,815 Rating) | Smart India Hackathon (SIH) Shortlisted Team (2024, 2025)</li>
    <li><b>Certifications:</b> Claude 101 (Anthropic, 2026) | GenAI Data Analytics (Tata Group, 2026) | AI Performance Ads (Google, 2026) | AI/ML (Coursera, 2025) | SQL (Infosys, 2025)</li>
  </ul>
  <h2>Education</h2>
  <div class="row"><span>B.Tech in Computer Science (Artificial Intelligence) — ABESIT College of Engineering (AKTU)</span><span>2023 – 2027</span></div>
  <div class="sub-row"><span>Honors (Minor): Cyber Security</span><span>Ghaziabad, UP</span></div>
</body>
</html>`;

  fetch("/Vaibhav_khresume.pdf", { method: "HEAD" })
    .then((res) => {
      if (res.ok && res.headers.get("content-type")?.includes("pdf")) {
        const a = document.createElement("a");
        a.href = "/Vaibhav_khresume.pdf";
        a.download = "Vaibhav_khresume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        const blob = new Blob([exactResumeHTML], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Vaibhav_Khandelwal_Resume.html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    })
    .catch(() => {
      const blob = new Blob([exactResumeHTML], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Vaibhav_Khandelwal_Resume.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
};

// ============================================================================
// 2. CUSTOM COLOURFUL LIQUID ORB CURSOR
// ============================================================================
const CustomColorfulCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const smoothX = useSpring(cursorX, { damping: 22, stiffness: 280, mass: 0.5 });
  const smoothY = useSpring(cursorY, { damping: 22, stiffness: 280, mass: 0.5 });
  const trailX = useSpring(cursorX, { damping: 35, stiffness: 140, mass: 0.9 });
  const trailY = useSpring(cursorY, { damping: 35, stiffness: 140, mass: 0.9 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const isInteractive =
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest("[data-cursor-hover]");
      setHovered(Boolean(isInteractive));
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] hidden md:block overflow-hidden">
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="fixed -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-600/20 via-fuchsia-500/15 to-emerald-400/15 blur-3xl mix-blend-screen"
      />
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        animate={{
          scale: clicked ? 0.75 : hovered ? 1.9 : 1,
          rotate: hovered ? 120 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 via-fuchsia-300 to-cyan-300 opacity-85 shadow-[0_0_30px_rgba(192,132,252,0.9),0_0_60px_rgba(34,211,238,0.5)] mix-blend-difference"
      />
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="fixed -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#fff]"
      />
    </div>
  );
};

// ============================================================================
// 3. REUSABLE 3D PERSPECTIVE TILT CARD
// ============================================================================
const TiltCard3D = ({ children, className = "", intensity = 6 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${intensity}deg`, `-${intensity}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${intensity}deg`, `${intensity}deg`]
  );

  return (
    <div style={{ perspective: "1200px" }} className="w-full">
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - rect.left) / rect.width - 0.5);
          y.set((e.clientY - rect.top) / rect.height - 0.5);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative transition-shadow duration-500 ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

// ============================================================================
// 4. PIXAR 3D STANDING MAN (BOTH HANDS + EYES POINT AT CURSOR!)
// ============================================================================
const PixarStandingMan3D = ({ mode = "clay", onToggleMode }) => {
  const stageRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const leftArmTarget = useMotionValue(-20);
  const rightArmTarget = useMotionValue(20);
  const smoothLeftArm = useSpring(leftArmTarget, {
    stiffness: 180,
    damping: 16,
  });
  const smoothRightArm = useSpring(rightArmTarget, {
    stiffness: 180,
    damping: 16,
  });

  const [blink, setBlink] = useState(false);
  const [faceLight, setFaceLight] = useState({ x: 50, y: 50, active: false });

  const springX = useSpring(mouseX, { stiffness: 110, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 110, damping: 15 });

  const sceneRotateY = useTransform(springX, [-0.5, 0.5], ["-16deg", "16deg"]);
  const sceneRotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);

  const headX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const headY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const headRotate = useTransform(springX, [-0.5, 0.5], [-7, 7]);

  const eyeX = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const eyeY = useTransform(springY, [-0.5, 0.5], [-5, 5]);
  const browY = useTransform(springY, [-0.5, 0.5], [-3.5, 2.5]);
  const torsoX = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  useEffect(() => {
    const handleGlobalMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);

      if (stageRef.current) {
        const rect = stageRef.current.getBoundingClientRect();
        const leftShoulderX = rect.left + rect.width * 0.31;
        const leftShoulderY = rect.top + rect.height * 0.33;
        const rightShoulderX = rect.left + rect.width * 0.69;
        const rightShoulderY = rect.top + rect.height * 0.33;

        const angleL =
          Math.atan2(e.clientY - leftShoulderY, e.clientX - leftShoulderX) *
            (180 / Math.PI) -
          90;
        const angleR =
          Math.atan2(e.clientY - rightShoulderY, e.clientX - rightShoulderX) *
            (180 / Math.PI) -
          90;

        leftArmTarget.set(angleL);
        rightArmTarget.set(angleR);
      }
    };
    window.addEventListener("mousemove", handleGlobalMove);
    return () => window.removeEventListener("mousemove", handleGlobalMove);
  }, [mouseX, mouseY, leftArmTarget, rightArmTarget]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ perspective: "1400px" }}
      className="relative flex flex-col items-center justify-center select-none"
    >
      <motion.button
        onClick={onToggleMode}
        data-cursor-hover
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-2 z-30 px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-purple-500/25 border border-purple-400/35 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-purple-200 flex items-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        {mode === "clay"
          ? "3D Pixar Vaibhav • Switch to Cyber Suit 🤖"
          : "3D Cyber Suit • Switch to Pixar Classic 🧑🏻"}
      </motion.button>

      <motion.div
        ref={stageRef}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setFaceLight({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
            active: true,
          });
        }}
        onMouseLeave={() => setFaceLight((p) => ({ ...p, active: false }))}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          rotateX: sceneRotateX,
          rotateY: sceneRotateY,
          transformStyle: "preserve-3d",
        }}
        data-cursor-hover
        className="relative w-[300px] h-[500px] sm:w-[340px] sm:h-[540px] flex items-center justify-center"
      >
        <div
          style={{ transform: "translateZ(-55px)" }}
          className="absolute w-72 h-96 rounded-full bg-gradient-to-tr from-purple-600/35 via-fuchsia-500/20 to-cyan-400/25 blur-3xl pointer-events-none"
        />
        <div
          style={{
            transform: "translateZ(75px)",
            background: `radial-gradient(140px circle at ${faceLight.x}% ${faceLight.y}%, rgba(192, 132, 252, 0.38), rgba(56, 189, 248, 0.15) 45%, transparent 75%)`,
            opacity: faceLight.active ? 1 : 0,
          }}
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-200 mix-blend-screen z-40"
        />

        <svg
          viewBox="0 0 360 620"
          className="w-full h-full overflow-visible drop-shadow-[0_28px_38px_rgba(0,0,0,0.85)]"
        >
          <defs>
            <radialGradient id="pixarSkin" cx="38%" cy="28%" r="68%">
              <stop offset="0%" stopColor="#ffefe5" />
              <stop offset="45%" stopColor="#f4bca2" />
              <stop offset="82%" stopColor="#d48c6f" />
              <stop offset="100%" stopColor="#9d5842" />
            </radialGradient>
            <linearGradient id="armSkin" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f7c6ae" />
              <stop offset="60%" stopColor="#e5a284" />
              <stop offset="100%" stopColor="#b87155" />
            </linearGradient>
            <linearGradient id="pixarHair" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#5c4033" />
              <stop offset="45%" stopColor="#33221a" />
              <stop offset="90%" stopColor="#1a110d" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <linearGradient id="whiteShirt" x1="15%" y1="10%" x2="85%" y2="90%">
              <stop
                offset="0%"
                stopColor={mode === "clay" ? "#ffffff" : "#e2e8f0"}
              />
              <stop
                offset="55%"
                stopColor={mode === "clay" ? "#e6e4e8" : "#475569"}
              />
              <stop
                offset="100%"
                stopColor={mode === "clay" ? "#b8b4c2" : "#0f172a"}
              />
            </linearGradient>
            <linearGradient
              id="taupeTrousers"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor={mode === "clay" ? "#8c7a70" : "#334155"}
              />
              <stop
                offset="55%"
                stopColor={mode === "clay" ? "#63544c" : "#1e293b"}
              />
              <stop
                offset="100%"
                stopColor={mode === "clay" ? "#3d332e" : "#090d16"}
              />
            </linearGradient>
            <linearGradient
              id="brownLeather"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#b4653b" />
              <stop offset="55%" stopColor="#7c3f20" />
              <stop offset="100%" stopColor="#431f0d" />
            </linearGradient>
          </defs>

          <ellipse
            cx="180"
            cy="592"
            rx="82"
            ry="14"
            fill="rgba(168, 85, 247, 0.26)"
          />

          {/* LOWER BODY */}
          <g>
            <path
              d="M 126 340 L 178 340 L 172 542 L 130 542 C 125 465, 124 405, 126 340 Z"
              fill="url(#taupeTrousers)"
            />
            <path
              d="M 182 340 L 234 340 C 236 405, 235 465, 230 542 L 188 542 Z"
              fill="url(#taupeTrousers)"
            />
            <path
              d="M 126 335 L 234 335 L 234 378 Q 180 392 126 378 Z"
              fill="url(#taupeTrousers)"
            />
            <line
              x1="180"
              y1="342"
              x2="180"
              y2="384"
              stroke="rgba(0,0,0,0.35)"
              strokeWidth="2.5"
            />
            <rect
              x="126"
              y="534"
              width="48"
              height="14"
              rx="6"
              fill="#78685f"
            />
            <rect
              x="186"
              y="534"
              width="48"
              height="14"
              rx="6"
              fill="#78685f"
            />
            <path
              d="M 126 548 L 172 548 L 176 582 C 176 588, 114 588, 114 580 C 114 566, 122 558, 126 548 Z"
              fill="url(#brownLeather)"
            />
            <path
              d="M 188 548 L 234 548 C 238 558, 246 566, 246 580 C 246 588, 184 588, 184 582 Z"
              fill="url(#brownLeather)"
            />
            <rect
              x="124"
              y="324"
              width="112"
              height="16"
              rx="5"
              fill="url(#brownLeather)"
            />
            <rect
              x="167"
              y="322"
              width="26"
              height="20"
              rx="4"
              fill="#cbd5e1"
              stroke="#475569"
              strokeWidth="2"
            />
          </g>

          {/* TORSO */}
          <motion.g style={{ x: torsoX }}>
            <rect
              x="160"
              y="148"
              width="40"
              height="52"
              rx="18"
              fill="url(#pixarSkin)"
            />
            <path
              d="M 102 188 C 122 176, 152 176, 162 182 L 180 220 L 198 182 C 208 176, 238 176, 258 188 L 238 326 L 122 326 Z"
              fill="url(#whiteShirt)"
            />
            <polygon
              points="156,174 180,218 140,204"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            <polygon
              points="204,174 180,218 220,204"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            <line
              x1="180"
              y1="218"
              x2="180"
              y2="325"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth="3"
            />
            {[235, 262, 289, 312].map((cy) => (
              <circle key={cy} cx="180" cy={cy} r="3" fill="#94a3b8" />
            ))}
            <rect
              x="130"
              y="224"
              width="34"
              height="36"
              rx="5"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
            />
            <rect
              x="196"
              y="224"
              width="34"
              height="36"
              rx="5"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
            />
          </motion.g>

          {/* BOTH HANDS POINTING AT CURSOR */}
          <g transform="translate(112, 202)">
            <motion.g
              style={{
                rotate: smoothLeftArm,
                originX: "0px",
                originY: "0px",
              }}
            >
              <rect
                x="-17"
                y="-10"
                width="34"
                height="65"
                rx="17"
                fill="url(#whiteShirt)"
              />
              <rect
                x="-19"
                y="45"
                width="38"
                height="15"
                rx="7"
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth="2"
              />
              <rect
                x="-13"
                y="60"
                width="26"
                height="64"
                rx="12"
                fill="url(#armSkin)"
              />
              <circle cx="0" cy="132" r="14" fill="url(#pixarSkin)" />
              <ellipse cx="11" cy="128" rx="6" ry="4.5" fill="url(#pixarSkin)" />
              <rect
                x="-4.5"
                y="140"
                width="9"
                height="22"
                rx="4.5"
                fill="url(#pixarSkin)"
              />
              <circle
                cx="0"
                cy="164"
                r="3.5"
                fill="#a855f7"
                className="animate-ping"
              />
            </motion.g>
          </g>

          <g transform="translate(248, 202)">
            <motion.g
              style={{
                rotate: smoothRightArm,
                originX: "0px",
                originY: "0px",
              }}
            >
              <rect
                x="-17"
                y="-10"
                width="34"
                height="65"
                rx="17"
                fill="url(#whiteShirt)"
              />
              <rect
                x="-19"
                y="45"
                width="38"
                height="15"
                rx="7"
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth="2"
              />
              <rect
                x="-13"
                y="60"
                width="26"
                height="64"
                rx="12"
                fill="url(#armSkin)"
              />
              <circle cx="0" cy="132" r="14" fill="url(#pixarSkin)" />
              <ellipse
                cx="-11"
                cy="128"
                rx="6"
                ry="4.5"
                fill="url(#pixarSkin)"
              />
              <rect
                x="-4.5"
                y="140"
                width="9"
                height="22"
                rx="4.5"
                fill="url(#pixarSkin)"
              />
              <circle
                cx="0"
                cy="164"
                r="3.5"
                fill="#22d3ee"
                className="animate-ping"
              />
            </motion.g>
          </g>

          {/* HEAD (NO GLASSES!) */}
          <motion.g
            style={{
              x: headX,
              y: headY,
              rotate: headRotate,
              originX: "180px",
              originY: "110px",
            }}
          >
            <ellipse
              cx="118"
              cy="115"
              rx="14"
              ry="19"
              transform="rotate(-8 118 115)"
              fill="url(#pixarSkin)"
            />
            <ellipse
              cx="242"
              cy="115"
              rx="14"
              ry="19"
              transform="rotate(8 242 115)"
              fill="url(#pixarSkin)"
            />
            <path
              d="M 124 66 C 124 38, 236 38, 236 66 C 240 108, 236 142, 216 158 C 200 170, 160 170, 144 158 C 124 142, 120 108, 124 66 Z"
              fill="url(#pixarSkin)"
            />
            <ellipse
              cx="156"
              cy="106"
              rx="16"
              ry={blink ? "2" : "13.5"}
              fill="#ffffff"
              stroke="rgba(60,30,20,0.25)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="204"
              cy="106"
              rx="16"
              ry={blink ? "2" : "13.5"}
              fill="#ffffff"
              stroke="rgba(60,30,20,0.25)"
              strokeWidth="1.5"
            />
            {!blink && (
              <motion.g style={{ x: eyeX, y: eyeY }}>
                <circle
                  cx="156"
                  cy="106"
                  r="9.5"
                  fill={mode === "clay" ? "#4a2511" : "#06b6d4"}
                />
                <circle cx="156" cy="106" r="5.5" fill="#120904" />
                <circle cx="152.5" cy="102" r="3" fill="#ffffff" />
                <circle
                  cx="204"
                  cy="106"
                  r="9.5"
                  fill={mode === "clay" ? "#4a2511" : "#06b6d4"}
                />
                <circle cx="204" cy="106" r="5.5" fill="#120904" />
                <circle cx="200.5" cy="102" r="3" fill="#ffffff" />
              </motion.g>
            )}
            <motion.g style={{ y: browY }}>
              <path
                d="M 138 89 Q 156 81 171 88"
                fill="none"
                stroke="#2b1810"
                strokeWidth="6.5"
                strokeLinecap="round"
              />
              <path
                d="M 189 88 Q 204 81 222 89"
                fill="none"
                stroke="#2b1810"
                strokeWidth="6.5"
                strokeLinecap="round"
              />
            </motion.g>
            <path
              d="M 180 98 L 172 121 C 172 127, 188 127, 188 121 Z"
              fill="#d99173"
            />
            <ellipse cx="180" cy="121" rx="10" ry="5.5" fill="#f0b298" />
            <path
              d="M 161 136 Q 180 147 199 136"
              fill="none"
              stroke="#9e4736"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 122 98 C 116 68, 122 44, 134 34 L 126 24 L 144 26 L 140 14 C 166 24, 198 10, 222 24 C 242 36, 246 66, 238 98 C 234 74, 226 58, 210 54 C 188 64, 156 62, 136 54 C 128 64, 124 80, 122 98 Z"
              fill="url(#pixarHair)"
            />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};

// ============================================================================
// 5. LEETCODE STOCK-MARKET TRADINGVIEW LINE GRAPH
// ============================================================================
const LEETCODE_MARKET_DATA = {
  "2024": [
    { month: "Jan 24", solved: 12, total: 12, rating: 1410 },
    { month: "Mar 24", solved: 24, total: 36, rating: 1455 },
    { month: "May 24", solved: 31, total: 67, rating: 1490 },
    { month: "Jul 24", solved: 45, total: 112, rating: 1540 },
    { month: "Sep 24", solved: 38, total: 150, rating: 1585 },
    { month: "Nov 24", solved: 52, total: 202, rating: 1620 },
  ],
  "2025": [
    { month: "Jan 25", solved: 34, total: 236, rating: 1645 },
    { month: "Mar 25", solved: 48, total: 284, rating: 1680 },
    { month: "May 25", solved: 62, total: 346, rating: 1715 },
    { month: "Jul 25", solved: 55, total: 401, rating: 1740 },
    { month: "Sep 25", solved: 44, total: 445, rating: 1760 },
    { month: "Nov 25", solved: 72, total: 517, rating: 1785 },
  ],
  "2026": [
    { month: "Jan 26", solved: 28, total: 545, rating: 1790 },
    { month: "Mar 26", solved: 36, total: 581, rating: 1798 },
    { month: "Jun 26", solved: 42, total: 623, rating: 1805 },
    { month: "Aug 26", solved: 54, total: 677, rating: 1815 },
  ],
  ALL: [
    { month: "Jan 24", solved: 12, total: 12, rating: 1410 },
    { month: "Jun 24", solved: 45, total: 112, rating: 1540 },
    { month: "Nov 24", solved: 52, total: 202, rating: 1620 },
    { month: "Apr 25", solved: 62, total: 346, rating: 1715 },
    { month: "Aug 25", solved: 55, total: 445, rating: 1760 },
    { month: "Nov 25", solved: 72, total: 517, rating: 1785 },
    { month: "Apr 26", solved: 42, total: 595, rating: 1802 },
    { month: "Aug 26", solved: 82, total: 677, rating: 1815 },
  ],
};

const LeetCodeStockChart = () => {
  const [yearFilter, setYearFilter] = useState("ALL");
  const data = LEETCODE_MARKET_DATA[yearFilter];
  const [activePoint, setActivePoint] = useState(data[data.length - 1]);

  useEffect(() => {
    setActivePoint(
      LEETCODE_MARKET_DATA[yearFilter][
        LEETCODE_MARKET_DATA[yearFilter].length - 1
      ]
    );
  }, [yearFilter]);

  const maxTotal = Math.max(...data.map((d) => d.total), 100);
  const minTotal = Math.min(...data.map((d) => d.total), 0);

  const points = data.map((d, i) => {
    const x = 35 + (i / Math.max(data.length - 1, 1)) * 450;
    const y =
      145 -
      ((d.total - minTotal) / Math.max(maxTotal - minTotal, 1)) * 110;
    return { ...d, x, y };
  });

  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPoints = `${points[0].x},150 ${polylinePoints} ${
    points[points.length - 1].x
  },150`;

  return (
    <div className="bg-[#070a12] border border-white/10 rounded-2xl p-5 font-mono">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white">LC:VAIBHAV</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded">
              ▲ BULLISH STREAK
            </span>
          </div>
          <div className="flex items-baseline gap-3 mt-1">
            <span className="text-2xl font-black text-emerald-400">
              {activePoint.total} Solved
            </span>
            <span className="text-xs text-purple-300">
              +{activePoint.solved} in {activePoint.month}
            </span>
            <span className="text-xs text-yellow-400">
              • Rating: {activePoint.rating}
            </span>
          </div>
        </div>

        <div className="flex gap-1.5 bg-[#0c1220] p-1 rounded-xl border border-white/10">
          {["2024", "2025", "2026", "ALL"].map((yr) => (
            <button
              key={yr}
              onClick={() => setYearFilter(yr)}
              data-cursor-hover
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                yearFilter === yr
                  ? "bg-emerald-400 text-black shadow-[0_0_12px_#10b981]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {yr}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 520 175" className="w-full h-44 overflow-visible">
        <defs>
          <linearGradient id="stockArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        {[35, 72, 110, 148].map((gy, idx) => (
          <line
            key={idx}
            x1="25"
            y1={gy}
            x2="495"
            y2={gy}
            stroke="rgba(255,255,255,0.06)"
            strokeDasharray="4 4"
          />
        ))}
        <polygon points={areaPoints} fill="url(#stockArea)" />
        <polyline
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          points={polylinePoints}
        />
        {points.map((pt, idx) => {
          const isActive = activePoint.month === pt.month;
          return (
            <g
              key={idx}
              onMouseEnter={() => setActivePoint(pt)}
              className="cursor-pointer"
            >
              {isActive && (
                <line
                  x1={pt.x}
                  y1="20"
                  x2={pt.x}
                  y2="150"
                  stroke="#a855f7"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              )}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={isActive ? 6.5 : 4}
                fill={isActive ? "#a855f7" : "#10b981"}
                stroke="#05070e"
                strokeWidth="2"
              />
              <text
                x={pt.x}
                y="168"
                textAnchor="middle"
                fill={isActive ? "#ffffff" : "#64748b"}
                fontSize="9"
              >
                {pt.month}
              </text>
              {isActive && (
                <g>
                  <rect
                    x={pt.x - 34}
                    y={pt.y - 28}
                    width="68"
                    height="18"
                    rx="5"
                    fill="#a855f7"
                  />
                  <text
                    x={pt.x}
                    y={pt.y - 16}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="9"
                    fontWeight="bold"
                  >
                    +{pt.solved} Qs
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// ============================================================================
// 6. ANIMATED 3D PENCIL SVG + WHITEBOARD + AI VOICE NARRATOR COMPONENT
//    -> Appears automatically after the UI screenshot OR on button click!
//    -> Pencil physically writes "The current problem is..." & "We solve this..."
//    -> Speaks aloud using Web Speech API (window.speechSynthesis)!
// ============================================================================
const Floating3DPencil = () => (
  <motion.span
    animate={{
      rotate: [-10, 12, -10],
      y: [0, -4, 0],
    }}
    transition={{ duration: 0.28, repeat: Infinity, ease: "easeInOut" }}
    className="inline-flex items-center ml-1 align-middle select-none pointer-events-none"
    style={{ transformOrigin: "bottom left" }}
  >
    <svg
      width="26"
      height="26"
      viewBox="0 0 36 36"
      className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]"
    >
      {/* Pencil Eraser (Pink) */}
      <path
        d="M28 2 L34 8 L30 12 L24 6 Z"
        fill="#f43f5e"
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      {/* Metallic Ferrule */}
      <path d="M24 6 L30 12 L27 15 L21 9 Z" fill="#cbd5e1" />
      {/* Yellow Wooden Body */}
      <path
        d="M21 9 L27 15 L12 30 L6 24 Z"
        fill="#facc15"
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      {/* Wood Tip Cone */}
      <path d="M6 24 L12 30 L3 33 Z" fill="#fed7aa" />
      {/* Graphite Lead Point */}
      <path d="M3 33 L6 32 L4 30 Z" fill="#0f172a" />
    </svg>
  </motion.span>
);

const AIWhiteboardExplainer = ({
  project,
  voiceEnabled,
  onToggleVoice,
  replayKey,
  onReplay,
}) => {
  const fullProblem = project.problemText;
  const fullSolution = project.solutionText;
  const totalChars = fullProblem.length + fullSolution.length;

  const [charCount, setCharCount] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Trigger Pencil Writing + AI Voice Synthesis
  useEffect(() => {
    setCharCount(0);

    // 1. Start Pencil Typing Interval
    const typeInterval = setInterval(() => {
      setCharCount((prev) => {
        if (prev >= totalChars) {
          clearInterval(typeInterval);
          return totalChars;
        }
        return prev + 1;
      });
    }, 36);

    // 2. Start AI Voice Narration via Web Speech API
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      if (voiceEnabled) {
        const script = `${project.title}. The current problem is: ${fullProblem} And we solve this problem by: ${fullSolution}`;
        const utterance = new SpeechSynthesisUtterance(script);
        utterance.rate = 1.06;
        utterance.pitch = 1.02;
        utterance.lang = "en-US";

        const voices = window.speechSynthesis.getVoices();
        const preferredVoice =
          voices.find(
            (v) =>
              v.name.includes("Google") ||
              v.name.includes("Natural") ||
              v.name.includes("English")
          ) || voices[0];
        if (preferredVoice) utterance.voice = preferredVoice;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
      }
    }

    return () => {
      clearInterval(typeInterval);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
    };
  }, [project, replayKey, voiceEnabled, fullProblem, fullSolution, totalChars]);

  const typedProblem = fullProblem.slice(
    0,
    Math.min(charCount, fullProblem.length)
  );
  const typedSolution =
    charCount > fullProblem.length
      ? fullSolution.slice(0, charCount - fullProblem.length)
      : "";

  const isWritingProblem = charCount > 0 && charCount <= fullProblem.length;
  const isWritingSolution =
    charCount > fullProblem.length && charCount < totalChars;

  return (
    <div className="bg-[#f8fafc] text-slate-900 border-4 border-slate-300 rounded-2xl p-3.5 h-[245px] flex flex-col justify-between relative overflow-hidden shadow-inner">
      {/* Subtle Whiteboard Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:18px_18px] opacity-70 pointer-events-none" />

      {/* Top Whiteboard Header + Live AI Voice Status */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-300 pb-1.5">
        <div className="flex items-center gap-2">
          <span className="bg-slate-900 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1">
            <FiEdit3 size={10} /> AI WHITEBOARD EXPLAINER
          </span>
          {isSpeaking && (
            <span className="text-[9px] font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-2 py-0.5 rounded-full flex items-center gap-1">
              <FiVolume2 className="animate-bounce" /> AI Voice Speaking...
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onToggleVoice}
            className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 border ${
              voiceEnabled
                ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                : "bg-rose-100 text-rose-800 border-rose-300"
            }`}
          >
            {voiceEnabled ? <FiVolume2 size={11} /> : <FiVolumeX size={11} />}
            {voiceEnabled ? "Voice ON" : "Muted"}
          </button>
          <button
            onClick={onReplay}
            className="text-[9px] font-mono font-bold bg-slate-200 hover:bg-slate-300 text-slate-800 px-2 py-0.5 rounded flex items-center gap-1"
            title="Replay Pencil & Voice"
          >
            <FiRefreshCw size={10} /> Replay
          </button>
        </div>
      </div>

      {/* Whiteboard Hand-Written Problem & Solution Body */}
      <div className="relative z-10 flex-1 py-2 space-y-2 overflow-y-auto text-left">
        {/* 1. THE CURRENT PROBLEM */}
        <div className="bg-rose-50/90 border-l-4 border-rose-500 p-2 rounded-r-xl">
          <p className="text-[9px] font-mono font-black uppercase text-rose-600 tracking-wider">
            1. THE CURRENT PROBLEM:
          </p>
          <p className="text-[11px] font-semibold text-slate-800 leading-snug mt-0.5">
            "{typedProblem}"{isWritingProblem && <Floating3DPencil />}
          </p>
        </div>

        {/* 2. HOW WE SOLVE IT */}
        {charCount > fullProblem.length && (
          <div className="bg-emerald-50/95 border-l-4 border-emerald-600 p-2 rounded-r-xl">
            <p className="text-[9px] font-mono font-black uppercase text-emerald-700 tracking-wider">
              2. HOW WE SOLVE THIS PROBLEM:
            </p>
            <p className="text-[11px] font-semibold text-slate-900 leading-snug mt-0.5">
              "{typedSolution}"{isWritingSolution && <Floating3DPencil />}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Hand-Drawn Sketch Diagram on Whiteboard */}
      <div className="relative z-10 pt-1.5 border-t border-slate-300 flex items-center justify-between text-[9px] font-mono">
        <div className="flex items-center gap-1.5 flex-wrap">
          {project.sketchNodes.map((node, i) => (
            <React.Fragment key={node}>
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.35 }}
                className="px-2 py-0.5 rounded border-2 border-dashed border-slate-700 bg-yellow-100/80 text-slate-900 font-bold"
              >
                ✏️ {node}
              </motion.span>
              {i < project.sketchNodes.length - 1 && (
                <span className="font-black text-slate-700">━━►</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <span className="text-[8.5px] text-slate-500 font-bold">
          {Math.round((charCount / totalChars) * 100)}% Drawn
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// 7. FACTUAL UI SCREENSHOT RENDERER (SLIDE 1 BEFORE WHITEBOARD)
// ============================================================================
const ProjectVisualScreen = ({ projectId }) => {
  if (projectId === "ola") {
    return (
      <div className="bg-[#08090d] border border-emerald-500/30 rounded-2xl p-3 font-sans text-[10px] h-[245px] flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-white">Data Agent Studio</span>
            <span className="text-[8px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 px-1.5 py-0.5 rounded-full">
              ENTERPRISE
            </span>
          </div>
          <span className="text-[9px] text-purple-300 font-mono">
            7-Agent LangGraph Cluster
          </span>
        </div>
        <div className="grid grid-cols-12 gap-2 flex-1 pt-2">
          <div className="col-span-4 border-r border-white/10 pr-1.5 space-y-1">
            {[
              "SQL Analyst",
              "ETL Pipeline",
              "Data Profiler",
              "Viz Engine",
              "ML Scientist",
              "Knowledge RAG",
            ].map((ag, i) => (
              <div
                key={ag}
                className={`px-1.5 py-0.5 rounded text-[9px] flex items-center justify-between ${
                  i === 2
                    ? "bg-purple-500/20 text-white border border-purple-400/40"
                    : "text-gray-400"
                }`}
              >
                <span>{ag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            ))}
          </div>
          <div className="col-span-8 flex flex-col justify-between">
            <div className="bg-[#12141c] border border-white/10 rounded-lg p-2 text-[9px] text-gray-300 flex justify-between">
              <span>Ask cluster to extract, analyze, or forecast...</span>
              <span className="bg-emerald-400 text-black px-2 rounded font-bold">
                Execute →
              </span>
            </div>
            <div className="bg-[#0d1017] border border-emerald-500/30 rounded-lg p-2 font-mono text-[9px] space-y-1">
              <p className="text-emerald-400">
                ✓ LangGraph Supervisor → SQL Analyst & Prophet ML
              </p>
              <p className="text-gray-400">
                Safety Validation Layer: 0 malicious SQL tokens. Profiling
                complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "layoff") {
    return (
      <div className="bg-[#070b14] border border-rose-500/30 rounded-2xl p-3 text-[10px] h-[245px] flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-[8.5px] font-mono text-emerald-400">
            ● Yahoo Finance + Google News RSS + 59-Feature XGBoost
          </span>
          <span className="text-[8.5px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full">
            FinBERT Audit
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 my-1">
          <div className="bg-[#0e1525] p-1.5 rounded border border-white/10">
            <p className="text-[7.5px] text-gray-400">EVENTS</p>
            <p className="text-xs font-black text-white">3,622</p>
          </div>
          <div className="bg-[#0e1525] p-1.5 rounded border border-white/10">
            <p className="text-[7.5px] text-gray-400">IMPACTED</p>
            <p className="text-xs font-black text-rose-400">6,14,375</p>
          </div>
          <div className="bg-[#0e1525] p-1.5 rounded border border-white/10">
            <p className="text-[7.5px] text-gray-400">TICKERS</p>
            <p className="text-xs font-black text-indigo-400">2,587+</p>
          </div>
          <div className="bg-[#0e1525] p-1.5 rounded border border-white/10">
            <p className="text-[7.5px] text-gray-400">NVDA RISK</p>
            <p className="text-xs font-black text-emerald-400">28.8/100</p>
          </div>
        </div>
        <div className="bg-[#0b111e] border border-white/10 rounded-lg p-2 font-mono text-[8.5px] space-y-1">
          <div className="flex justify-between text-white">
            <span>Meta (META) • $777.59</span>
            <span className="text-emerald-400">+36.4% (STABLE)</span>
          </div>
          <div className="flex justify-between text-white">
            <span>Boeing (BA) • $196.80</span>
            <span className="text-rose-400">-18.0% (ELEVATED)</span>
          </div>
          <div className="text-cyan-300">
            ✓ SHAP Top Predictor: industry_layoffs_30d (0.0703)
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "yatra") {
    return (
      <div className="bg-[#060a0e] border border-cyan-500/30 rounded-2xl p-3 text-[10px] h-[245px] flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <span className="font-bold text-white">
            YatraSmriti (Codex) — Railway Throughput Live
          </span>
          <span className="text-[8.5px] bg-teal-400 text-black font-bold px-2 py-0.5 rounded">
            124 tr/hr (↗ 8.5%)
          </span>
        </div>
        <div className="grid grid-cols-12 gap-2 items-center my-auto">
          <div className="col-span-4 space-y-1 font-mono text-[8.5px]">
            <div className="bg-[#261914] border border-amber-500/30 p-1.5 rounded">
              <p className="text-rose-300">AVG DELAY: 8.5m</p>
              <p className="text-emerald-400">↙ -12.3% Reduced</p>
            </div>
            <div className="bg-[#171329] border border-purple-500/30 p-1.5 rounded">
              <p className="text-purple-300">UTILIZATION: 78%</p>
            </div>
          </div>
          <div className="col-span-8 bg-[#090d12] border border-white/10 rounded-lg p-2">
            <svg viewBox="0 0 200 75" className="w-full h-24">
              <path
                d="M 20 20 Q 100 5 180 25"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="2"
              />
              <path
                d="M 15 55 Q 95 35 175 58"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2"
              />
              <circle cx="20" cy="20" r="3.5" fill="#10b981" />
              <text x="10" y="13" fill="#fff" fontSize="6.5">
                Ghaziabad
              </text>
              <circle cx="180" cy="25" r="3.5" fill="#10b981" />
              <text x="155" y="18" fill="#fff" fontSize="6.5">
                Dwarka
              </text>
              <circle cx="95" cy="46" r="4" fill="#f43f5e" />
              <text x="75" y="62" fill="#fda4af" fontSize="6.5">
                Train 901 → Reroute
              </text>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#070a12] border border-purple-500/30 rounded-2xl p-3 text-[10px] h-[245px] flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
        <span className="font-bold text-white flex items-center gap-1.5">
          <FiPhoneCall className="text-emerald-400 animate-bounce" /> Autonomous
          AI Sales Calling Agent
        </span>
        <span className="text-[8.5px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">
          380ms Latency
        </span>
      </div>
      <div className="space-y-2 my-auto font-mono text-[9px]">
        <div className="bg-white/[0.03] p-2 rounded border border-white/10 text-gray-300">
          <b className="text-cyan-400">Lead:</b> "Can your AI agent handle
          outbound qualification calls?"
        </div>
        <div className="bg-purple-950/40 p-2 rounded border border-purple-500/40 text-gray-200">
          <b className="text-purple-300">Claude Voice Router:</b> Dynamically
          pitches product benefits, resolves objections & books meeting on CRM!
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 8. 4 PROJECTS DATA (With Problem + Solution Scripts for Whiteboard & Voice)
// ============================================================================
const PROJECTS_DATA = [
  {
    id: "ola",
    num: "01",
    title: "OLA.AI Data Agent",
    subtitle: "7-Agent LangGraph Analytics Studio",
    badge: "LangGraph + Prophet ML",
    tools: ["React.js", "FastAPI", "LangGraph", "RAG", "Prophet", "Python"],
    live: "https://ola-ai-data-agent.vercel.app/",
    repo: "https://github.com/Vaibhavtech2006/OLA-AI-Data-agent",
    problemText:
      "Data teams waste hours writing complex SQL, cleaning messy ETL pipelines, and risking unsafe queries on production databases.",
    solutionText:
      "We built a 7-agent LangGraph cluster with a pre-execution SQL safety guard, automated profiling, and Prophet ML forecasting.",
    sketchNodes: ["User Query", "SQL Safety Guard", "7-Agent LangGraph"],
  },
  {
    id: "layoff",
    num: "02",
    title: "LayoffRadar AI",
    subtitle: "Global Layoff & Market Distress Center",
    badge: "59-Feature XGBoost + FinBERT",
    tools: ["Python", "XGBoost", "FinBERT", "SHAP", "Yahoo Finance", "React"],
    live: "https://github.com/Vaibhavtech2006/LayoffRadar_AI",
    repo: "https://github.com/Vaibhavtech2006/layoff_model",
    repoLabel2: "ML Model Repo",
    problemText:
      "Employees and investors get blindsided by sudden corporate layoffs because market distress signals are scattered across news and stocks.",
    solutionText:
      "We engineered a 59-feature calibrated XGBoost model fused with live FinBERT news sentiment and SHAP explainability to score layoff risk.",
    sketchNodes: ["Yahoo + News RSS", "FinBERT + XGBoost", "Risk Score 0-100"],
  },
  {
    id: "yatra",
    num: "03",
    title: "YatraSmriti",
    subtitle: "AI Railway Traffic & Delay Simulator",
    badge: "124 tr/hr • -12.3% Delay",
    tools: ["React.js", "Python AI Model", "Graph Routing", "Live Telemetry"],
    live: "https://github.com/Vaibhavtech2006/train_simulation",
    repo: "https://github.com/Nipun1a/YatraSmithi-nipun",
    liveLabel: "Frontend Repo",
    repoLabel2: "YatraSmriti Model",
    problemText:
      "Cascading train delays at congested railway junctions cause massive network bottlenecks and slow manual conflict resolution.",
    solutionText:
      "We created an AI railway simulator that boosts section throughput to 124 trains per hour and cuts delays by 12.3% with live Hold and Reroute controls.",
    sketchNodes: ["Live Track Graph", "AI Delay Optimizer", "124 tr/hr Flow"],
  },
  {
    id: "calling",
    num: "04",
    title: "Calling Agent AI",
    subtitle: "Autonomous AI Salesman & Voice Router",
    badge: "Claude API + Node.js",
    tools: ["Node.js", "Claude API", "WebSockets", "Agentic AI"],
    live: "https://github.com/Vaibhavtech2006/AgentAI",
    repo: "https://github.com/Vaibhavtech2006/AgentAI",
    problemText:
      "Human sales teams cannot scale thousands of outbound qualification calls 24/7, and traditional IVR bots sound robotic and slow.",
    solutionText:
      "We integrated Claude API with low-latency Node.js voice streams to build an autonomous AI salesman that pitches, handles objections, and books meetings.",
    sketchNodes: ["Voice Stream", "Claude Sales Brain", "Auto CRM Booking"],
  },
];

// ============================================================================
// 9. INVERTED-PYRAMID TECH STACK DATA
// ============================================================================
const TECH_PYRAMID_ROWS = [
  [
    { name: "HTML5", slug: "html5", color: "E34F26" },
    { name: "CSS3", slug: "css", color: "1572B6" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { name: "TypeScript", slug: "typescript", color: "3178C6" },
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "C++", slug: "cplusplus", color: "00599C" },
    { name: "C", slug: "c", color: "A8B9CC" },
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
    { name: "Angular", slug: "angular", color: "DD0031" },
    { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  ],
  [
    { name: "FastAPI", slug: "fastapi", color: "009688" },
    { name: "Express", slug: "express", color: "ffffff" },
    { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
    { name: "Framer", slug: "framer", color: "0055FF" },
    { name: "Three.js", slug: "threedotjs", color: "ffffff" },
    { name: "LangChain", slug: "langchain", color: "1C3C3C" },
    { name: "OpenAI", slug: "openai", color: "ffffff" },
    { name: "Claude AI", slug: "anthropic", color: "D97757" },
    { name: "PyTorch", slug: "pytorch", color: "EE4C2C" },
    { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
  ],
  [
    { name: "Scikit-Learn", slug: "scikitlearn", color: "F7931E" },
    { name: "Pandas", slug: "pandas", color: "150458" },
    { name: "NumPy", slug: "numpy", color: "013243" },
    { name: "HuggingFace", slug: "huggingface", color: "FFD21E" },
    { name: "MongoDB", slug: "mongodb", color: "47A248" },
    { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
    { name: "MySQL", slug: "mysql", color: "4479A1" },
    { name: "Redis", slug: "redis", color: "FF4438" },
  ],
  [
    { name: "Docker", slug: "docker", color: "2496ED" },
    { name: "Linux", slug: "linux", color: "FCC624" },
    { name: "Git", slug: "git", color: "F05032" },
    { name: "GitHub", slug: "github", color: "ffffff" },
    { name: "Postman", slug: "postman", color: "FF6C37" },
    { name: "LeetCode", slug: "leetcode", color: "FFA116" },
  ],
];

// ============================================================================
// 10. MAIN PORTFOLIO APPLICATION
// ============================================================================
const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [avatarMode, setAvatarMode] = useState("clay");
  const [waveTrigger, setWaveTrigger] = useState(0);
  const [glowColor, setGlowColor] = useState("purple");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [photoGlare, setPhotoGlare] = useState({ x: 50, y: 50, opacity: 0 });

  // Active Project + Auto-Switching Mode ("ui" -> automatically becomes "whiteboard")
  const [activeProject, setActiveProject] = useState(PROJECTS_DATA[0]);
  const [coreMode, setCoreMode] = useState("ui"); // "ui" | "whiteboard"
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [replayKey, setReplayKey] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Automatically transition from UI Screenshot to AI Whiteboard after 3.2 seconds!
  useEffect(() => {
    if (coreMode === "ui") {
      const timer = setTimeout(() => {
        setCoreMode("whiteboard");
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [activeProject, coreMode]);

  // Select a project from any of the 4 corners
  const handleSelectProject = (proj, startOnWhiteboard = false) => {
    setActiveProject(proj);
    setCoreMode(startOnWhiteboard ? "whiteboard" : "ui");
    setReplayKey((k) => k + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 35);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  if (loading) {
    return (
      <div className="relative flex items-center justify-center h-screen w-screen bg-[#e5e7eb] text-black overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-[11vw] font-black tracking-tighter uppercase text-[#111827] flex gap-12"
        >
          <span>AI ENGINEER</span>
          <span>FULL STACK DEVELOPER</span>
          <span>AI ENGINEER</span>
          <span>FULL STACK DEVELOPER</span>
        </motion.div>
        <motion.div className="absolute z-20 bg-[#11131a] text-white px-10 py-5 rounded-full shadow-2xl border border-purple-500/40 flex items-center gap-6 font-mono text-sm tracking-widest uppercase">
          {progress < 100 ? (
            <>
              <span>LOADING</span>
              <span className="text-purple-400 font-bold">{progress}%</span>
            </>
          ) : (
            <span className="text-emerald-300 font-bold">✦ WELCOME ✦</span>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#040509] min-h-screen text-gray-200 font-sans selection:bg-purple-500 selection:text-white scroll-smooth md:cursor-none overflow-x-hidden">
      <CustomColorfulCursor />

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 origin-left z-[100]"
      />

      {/* Ambient Spotlight + Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.08), rgba(16, 185, 129, 0.04) 40%, transparent 80%)`,
          }}
          className="fixed inset-0 z-0"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <nav className="w-full max-w-5xl bg-[#090d16]/85 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3.5 flex justify-between items-center shadow-2xl">
          <a
            href="#hero"
            data-cursor-hover
            className="font-black text-xl tracking-tighter text-white flex items-center gap-1.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            VK<span className="text-purple-400">.AI</span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-gray-300">
            <a
              href="#about"
              data-cursor-hover
              className="hover:text-purple-400"
            >
              // About
            </a>
            <a
              href="#leetcode"
              data-cursor-hover
              className="hover:text-emerald-400"
            >
              // LeetCode
            </a>
            <a href="#work" data-cursor-hover className="hover:text-purple-400">
              // AI Whiteboard
            </a>
            <a
              href="#techstack"
              data-cursor-hover
              className="hover:text-cyan-400"
            >
              // Stack
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleResumeDownload}
              data-cursor-hover
              className="text-xs font-mono font-bold bg-emerald-500/15 hover:bg-emerald-400 text-emerald-300 hover:text-black border border-emerald-400/40 px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all"
            >
              <FiDownload size={14} /> Resume
            </button>
            <a
              href="mailto:khandelwalvaibhav2006@gmail.com"
              data-cursor-hover
              className="hidden sm:inline-flex text-xs font-mono font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-black px-4 py-2 rounded-xl"
            >
              Hire Me ↗
            </a>
          </div>
        </nav>
      </header>

      {/* FLOATING BOTTOM-RIGHT RESUME BUTTON */}
      <button
        onClick={handleResumeDownload}
        data-cursor-hover
        className="fixed right-6 md:right-10 bottom-8 z-40 hidden sm:flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-300 hover:text-black bg-[#0b101b]/90 hover:bg-emerald-400 border border-emerald-400/50 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all font-bold"
      >
        DOWNLOAD RESUME <FiDownload />
      </button>

      {/* ==================================================================== */}
      {/* SECTION 1: HERO WITH PIXAR 3D CHARACTER (BOTH HANDS POINT AT CURSOR) */}
      {/* ==================================================================== */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-16 pt-24 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-6 z-10">
          <div className="lg:col-span-4 text-center lg:text-left order-2 lg:order-1 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for AI/ML & SDE Roles
            </div>
            <p className="text-purple-400 font-medium text-lg">Hello! I'm</p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight uppercase leading-[1.03]">
              VAIBHAV <br /> KHANDELWAL
            </h1>
            <p className="text-xs font-mono text-gray-400">
              +91-8178263574 • khandelwalvaibhav2006@gmail.com
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2 font-mono text-xs">
              <a
                href="#work"
                data-cursor-hover
                className="bg-white text-black px-5 py-3 rounded-xl font-bold hover:bg-purple-400 hover:text-white transition-all"
              >
                Watch AI Whiteboard ↘
              </a>
              <button
                onClick={handleResumeDownload}
                data-cursor-hover
                className="bg-emerald-500/15 border border-emerald-400/50 text-emerald-300 px-5 py-3 rounded-xl hover:bg-emerald-400 hover:text-black font-bold flex items-center gap-2 transition-all"
              >
                <FiDownload /> Download Resume
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <PixarStandingMan3D
              mode={avatarMode}
              onToggleMode={() =>
                setAvatarMode((m) => (m === "clay" ? "robot" : "clay"))
              }
            />
          </div>

          <div className="lg:col-span-4 text-center lg:text-left order-3 lg:pl-6">
            <p className="text-gray-400 text-lg mb-1">An</p>
            <span className="block text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(168,85,247,0.5)]">
              AI / ML ENGINEER
            </span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-white -mt-2">
              FULL-STACK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-300">
                DEVELOPER
              </span>
            </h2>
            <p className="text-gray-400 text-xs font-mono mt-4">
              B.Tech CS (AI) + Minor in Cyber Security @ ABESIT
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: "ABOUT / Hi there!" WITH REAL PHOTO (vaibhavImg)          */}
      {/* ==================================================================== */}
      <section
        id="about"
        className="relative max-w-6xl mx-auto px-6 md:px-16 py-24"
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 font-bold">
            ABOUT
          </span>
          <div className="h-[1px] w-60 bg-gradient-to-r from-purple-500/60 to-transparent" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-12">
          Hi there!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <TiltCard3D intensity={9}>
              <div
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setPhotoGlare({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                    opacity: 0.35,
                  });
                }}
                onMouseLeave={() =>
                  setPhotoGlare((p) => ({ ...p, opacity: 0 }))
                }
                data-cursor-hover
                className="relative rounded-3xl border-2 border-white/80 bg-[#0d111a] overflow-hidden shadow-[12px_12px_0px_#9333ea] hover:shadow-[14px_14px_0px_#10b981] transition-all duration-500 group"
              >
                <img
                  src={vaibhavImg}
                  alt="Vaibhav Khandelwal"
                  className="w-full h-[390px] sm:h-[430px] object-cover object-top contrast-[1.07] saturate-[1.12] group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  style={{
                    background: `radial-gradient(circle at ${photoGlare.x}% ${photoGlare.y}%, rgba(255,255,255,0.4) 0%, transparent 70%)`,
                    opacity: photoGlare.opacity,
                  }}
                  className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
                />
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-30 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                      ● Real Human Behind the AI
                    </span>
                    <p className="text-white font-black text-lg">
                      Vaibhav Khandelwal
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-white/10 border border-white/20 px-3 py-1 rounded-xl text-purple-300">
                    ABESIT '27
                  </span>
                </div>
              </div>
            </TiltCard3D>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              I build AI stuff and anything else I find interesting—{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-emerald-300">
                autonomous multi-agent systems, RAG pipelines, Full-Stack apps
              </span>
              , and generally anything that looks shiny at 2AM in the morning :)
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Pursuing my{" "}
              <b className="text-white">
                B.Tech in Computer Science (AI) with Minor in Cyber Security at
                ABESIT (2023–2027)
              </b>
              , twice shortlisted for{" "}
              <b className="text-emerald-400">
                Smart India Hackathon (SIH 2024 & 2025)
              </b>
              , and certified in{" "}
              <b className="text-purple-300">
                Anthropic Claude 101, Tata Group GenAI Analytics, and Google AI
              </b>
              .
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Right now I split my time between building Angular/TypeScript
              components for the Meta Developer Dashboard at{" "}
              <b className="text-emerald-400">Architects Lab</b> and Highcharts
              telemetry visualizations at{" "}
              <b className="text-purple-300">Cavisson Systems</b>.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={handleResumeDownload}
                data-cursor-hover
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-mono text-xs font-black uppercase flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.35)]"
              >
                <FiDownload /> Download Official Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 3: LEETCODE STOCK-MARKET LINE GRAPH & ANALYTICS              */}
      {/* ==================================================================== */}
      <section id="leetcode" className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <TiltCard3D intensity={4}>
          <div className="bg-gradient-to-br from-[#0c111d] via-[#090d16] to-[#060911] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 flex items-center gap-1.5">
                    <FiZap /> Algorithmic Stock Telemetry
                  </span>
                  <h3 className="text-3xl font-black text-white mt-1">
                    LeetCode Analytics
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#111827]/90 border border-white/10 p-4 rounded-2xl">
                    <p className="text-[10px] text-gray-400 font-mono uppercase">
                      Contest Rating
                    </p>
                    <p className="text-3xl font-black text-white mt-1">1,815</p>
                    <span className="text-[10px] font-mono text-emerald-400">
                      ▲ Top ~6% Global
                    </span>
                  </div>
                  <div className="bg-[#111827]/90 border border-white/10 p-4 rounded-2xl">
                    <p className="text-[10px] text-gray-400 font-mono uppercase">
                      Total Solved
                    </p>
                    <p className="text-3xl font-black text-yellow-400 mt-1">
                      677
                    </p>
                    <span className="text-[10px] font-mono text-purple-300">
                      SIH '24 & '25 Finalist
                    </span>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs bg-[#070a12] p-4 rounded-2xl border border-white/10">
                  {[
                    { label: "Easy (208)", pct: "38%", c: "bg-cyan-400" },
                    { label: "Medium (409)", pct: "74%", c: "bg-purple-400" },
                    { label: "Hard (60)", pct: "28%", c: "bg-rose-500" },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="flex justify-between mb-1 text-gray-300">
                        <span>{b.label}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                        <div
                          style={{ width: b.pct }}
                          className={`h-full ${b.c} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <LeetCodeStockChart />
              </div>
            </div>
          </div>
        </TiltCard3D>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 4: 4-CORNER ORBITAL CIRCLE WITH AUTO WHITEBOARD + AI VOICE   */}
      {/* ==================================================================== */}
      <section
        id="work"
        className="relative max-w-7xl mx-auto px-4 sm:px-8 py-24"
      >
        <div className="text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            // Interactive 4-Corner Orbital Circle + AI Voice Whiteboard
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mt-1">
            My <span className="text-purple-400">Work</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs mt-2">
            Hover or Click any Corner Project ➔ Shows Live UI first, then
            automatically opens the Whiteboard where a Pencil writes & AI Voice
            explains Problem vs. Solution!
          </p>
        </div>

        <div className="relative min-h-[780px] flex items-center justify-center py-10">
          {/* Outer & Inner Orbital Circle Rings */}
          <div className="hidden lg:block absolute w-[740px] h-[740px] rounded-full border border-dashed border-purple-500/30 pointer-events-none" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="hidden lg:block absolute w-[600px] h-[600px] rounded-full border border-emerald-500/20 pointer-events-none"
          >
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_#10b981] absolute -top-1.5 left-1/2" />
            <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7] absolute -bottom-1.5 left-1/2" />
          </motion.div>

          {/* SVG Diagonal Laser Lines Connecting 4 Corners to Center Core */}
          <svg
            viewBox="0 0 1000 760"
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
          >
            <line
              x1="180"
              y1="120"
              x2="500"
              y2="380"
              stroke={
                activeProject.id === "ola"
                  ? "#10b981"
                  : "rgba(168,85,247,0.18)"
              }
              strokeWidth={activeProject.id === "ola" ? "3" : "1.5"}
              strokeDasharray="6 6"
            />
            <line
              x1="820"
              y1="120"
              x2="500"
              y2="380"
              stroke={
                activeProject.id === "layoff"
                  ? "#f43f5e"
                  : "rgba(168,85,247,0.18)"
              }
              strokeWidth={activeProject.id === "layoff" ? "3" : "1.5"}
              strokeDasharray="6 6"
            />
            <line
              x1="180"
              y1="640"
              x2="500"
              y2="380"
              stroke={
                activeProject.id === "yatra"
                  ? "#06b6d4"
                  : "rgba(168,85,247,0.18)"
              }
              strokeWidth={activeProject.id === "yatra" ? "3" : "1.5"}
              strokeDasharray="6 6"
            />
            <line
              x1="820"
              y1="640"
              x2="500"
              y2="380"
              stroke={
                activeProject.id === "calling"
                  ? "#a855f7"
                  : "rgba(168,85,247,0.18)"
              }
              strokeWidth={activeProject.id === "calling" ? "3" : "1.5"}
              strokeDasharray="6 6"
            />
          </svg>

          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-20">
            {/* LEFT 2 CORNERS (01 OLA.AI & 03 YatraSmriti) */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-8 lg:h-[640px]">
              {[PROJECTS_DATA[0], PROJECTS_DATA[2]].map((proj) => {
                const isSelected = activeProject.id === proj.id;
                return (
                  <motion.div
                    key={proj.id}
                    onMouseEnter={() => handleSelectProject(proj, false)}
                    onClick={() => handleSelectProject(proj, true)}
                    whileHover={{ scale: 1.05 }}
                    data-cursor-hover
                    className={`p-5 rounded-3xl border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-[#12172a] border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
                        : "bg-[#0a0d18]/90 border-white/10 hover:border-purple-400/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-black font-mono text-purple-400">
                        {proj.num}
                      </span>
                      <span className="text-[9px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-emerald-300">
                        {proj.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {proj.subtitle}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-emerald-300">
                      <span>✏️ Click for AI Whiteboard ➔</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CENTER OF THE CIRCLE: AUTO-SWITCHING UI SCREENSHOT + AI WHITEBOARD */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.25 }}
                  className="bg-gradient-to-b from-[#11162b] via-[#0b0e1a] to-[#070911] border-2 border-purple-400/60 rounded-[2.5rem] p-6 sm:p-7 shadow-[0_0_90px_rgba(168,85,247,0.35)] relative"
                >
                  {/* Top Mode Switcher Bar (Slide 1: UI Preview vs Slide 2: AI Whiteboard + Voice) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
                        {activeProject.num} // {activeProject.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[10px]">
                      <button
                        onClick={() => setCoreMode("ui")}
                        data-cursor-hover
                        className={`px-3 py-1 rounded-xl flex items-center gap-1 transition-all ${
                          coreMode === "ui"
                            ? "bg-emerald-400 text-black font-black shadow-[0_0_15px_#10b981]"
                            : "bg-white/10 text-gray-300 hover:text-white"
                        }`}
                      >
                        <FiMonitor size={11} /> 1. Live UI
                      </button>
                      <button
                        onClick={() => {
                          setCoreMode("whiteboard");
                          setReplayKey((k) => k + 1);
                        }}
                        data-cursor-hover
                        className={`px-3 py-1 rounded-xl flex items-center gap-1 transition-all ${
                          coreMode === "whiteboard"
                            ? "bg-purple-500 text-white font-black shadow-[0_0_15px_#a855f7]"
                            : "bg-white/10 text-gray-300 hover:text-white"
                        }`}
                      >
                        <FiEdit3 size={11} /> 2. AI Whiteboard + Voice 🔊
                      </button>
                    </div>
                  </div>

                  {/* Auto-Advance Progress Indicator when on UI Slide */}
                  {coreMode === "ui" && (
                    <div className="mb-2.5">
                      <div className="flex justify-between text-[9px] font-mono text-cyan-300 mb-1">
                        <span>
                          Showing Project UI... Auto-switching to Pencil
                          Whiteboard & AI Voice in 3s
                        </span>
                        <button
                          onClick={() => setCoreMode("whiteboard")}
                          className="underline font-bold"
                        >
                          Skip to Whiteboard ➔
                        </button>
                      </div>
                      <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3.2, ease: "linear" }}
                          className="h-full bg-gradient-to-r from-emerald-400 to-purple-400"
                        />
                      </div>
                    </div>
                  )}

                  {/* SLIDE CONTENT: EITHER FACTUAL UI SCREENSHOT OR MOVING PENCIL WHITEBOARD */}
                  {coreMode === "ui" ? (
                    <ProjectVisualScreen projectId={activeProject.id} />
                  ) : (
                    <AIWhiteboardExplainer
                      project={activeProject}
                      voiceEnabled={voiceEnabled}
                      onToggleVoice={() => setVoiceEnabled((v) => !v)}
                      replayKey={replayKey}
                      onReplay={() => setReplayKey((k) => k + 1)}
                    />
                  )}

                  {/* Bottom Summary & Action Links */}
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black text-white">
                        {activeProject.title}
                      </h3>
                      <span className="text-xs font-mono text-emerald-400">
                        {activeProject.subtitle}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tools.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono bg-purple-500/15 border border-purple-400/30 px-2.5 py-1 rounded-lg text-purple-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={activeProject.live}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor-hover
                          className="text-xs font-mono font-bold bg-emerald-400 text-black px-4 py-2 rounded-xl flex items-center gap-1.5"
                        >
                          {activeProject.liveLabel || "Live / UI"}{" "}
                          <FiExternalLink />
                        </a>
                        <a
                          href={activeProject.repo}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor-hover
                          className="text-xs font-mono text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl flex items-center gap-1.5"
                        >
                          <FiGithub /> {activeProject.repoLabel2 || "GitHub"}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT 2 CORNERS (02 LayoffRadar & 04 Calling Agent) */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-8 lg:h-[640px]">
              {[PROJECTS_DATA[1], PROJECTS_DATA[3]].map((proj) => {
                const isSelected = activeProject.id === proj.id;
                return (
                  <motion.div
                    key={proj.id}
                    onMouseEnter={() => handleSelectProject(proj, false)}
                    onClick={() => handleSelectProject(proj, true)}
                    whileHover={{ scale: 1.05 }}
                    data-cursor-hover
                    className={`p-5 rounded-3xl border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-[#12172a] border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
                        : "bg-[#0a0d18]/90 border-white/10 hover:border-purple-400/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-black font-mono text-purple-400">
                        {proj.num}
                      </span>
                      <span className="text-[9px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-emerald-300">
                        {proj.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {proj.subtitle}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-emerald-300">
                      <span>← Click for AI Whiteboard ✏️</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 5: MY CAREER & EXPERIENCE                                    */}
      {/* ==================================================================== */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-16 py-24">
        <h2 className="text-4xl sm:text-6xl font-bold text-white text-center mb-16">
          My career &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
            experience
          </span>
        </h2>

        <div className="relative space-y-14">
          <div className="hidden md:block absolute left-[42%] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-400 via-emerald-400/50 to-transparent" />
          {[
            {
              role: "SDE Intern",
              sub: "Architects Lab • Gurugram",
              year: "2026",
              desc: "Translated product requirements for the Meta Developer Dashboard into modular Angular & TypeScript components and REST API integrations.",
            },
            {
              role: "Angular Developer Intern",
              sub: "Cavisson Systems • Noida",
              year: "2025–26",
              desc: "Developed Highcharts-based telemetry visualizations, integrated multiple REST APIs, and performed systematic UI quality checks.",
            },
            {
              role: "Full-Stack Developer",
              sub: "Zidio Development • Remote",
              year: "2025",
              desc: "Developed, tested, and deployed full-stack React.js and Node.js applications and managed Linux server environments.",
            },
          ].map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-purple-400 text-sm">{exp.sub}</p>
              </div>
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="text-3xl font-black text-white">
                  {exp.year}
                </span>
                <span className="hidden md:block w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_15px_#10b981]" />
              </div>
              <div className="md:col-span-5 text-gray-400 text-sm leading-relaxed">
                {exp.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 6: INVERTED PYRAMID "TECH STACK"                             */}
      {/* ==================================================================== */}
      <section
        id="techstack"
        className="relative max-w-6xl mx-auto px-4 sm:px-8 py-24 text-center"
      >
        <h2 className="text-4xl sm:text-6xl font-light tracking-[0.18em] text-white uppercase mb-14">
          TECH STACK
        </h2>
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] h-[340px] rounded-full blur-[130px] pointer-events-none ${
            glowColor === "purple"
              ? "bg-purple-600/35"
              : glowColor === "cyan"
              ? "bg-cyan-500/35"
              : "bg-emerald-500/35"
          }`}
        />

        <div className="relative z-10 flex flex-col items-center gap-3">
          {TECH_PYRAMID_ROWS.map((row, rIdx) => (
            <div
              key={rIdx}
              className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5"
            >
              {row.map((tech, cIdx) => (
                <motion.div
                  key={`${tech.name}-${waveTrigger}`}
                  animate={
                    waveTrigger > 0
                      ? { y: [0, -16, 0], rotateY: [0, 180, 360] }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: rIdx * 0.05 + cIdx * 0.03,
                  }}
                  whileHover={{ y: -6, scale: 1.12 }}
                  data-cursor-hover
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.04] hover:bg-purple-500/20 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center gap-1.5"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                    alt={tech.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                  />
                  <span className="text-[9px] sm:text-[10px] text-gray-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setWaveTrigger((w) => w + 1)}
            data-cursor-hover
            className="px-6 py-2 rounded-lg bg-purple-500/30 hover:bg-purple-500 border border-purple-400/40 text-xs font-mono text-white"
          >
            ⚡ Trigger 3D Matrix Wave
          </button>
          <button
            onClick={() =>
              setGlowColor((c) =>
                c === "purple" ? "cyan" : c === "cyan" ? "emerald" : "purple"
              )
            }
            data-cursor-hover
            className="px-6 py-2 rounded-lg bg-emerald-500/30 hover:bg-emerald-500 border border-emerald-400/40 text-xs font-mono text-white"
          >
            🎨 Switch Nebula ({glowColor.toUpperCase()})
          </button>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 7: GIANT FOOTER                                              */}
      {/* ==================================================================== */}
      <footer
        id="contact"
        className="relative max-w-6xl mx-auto px-6 md:px-16 pt-20 pb-24 border-t border-white/10"
      >
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase mb-12">
          VAIBHAV KHANDELWAL
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          <div className="space-y-4">
            <p className="text-gray-400 font-mono">
              +91-8178263574 <br /> khandelwalvaibhav2006@gmail.com
            </p>
            <button
              onClick={handleResumeDownload}
              data-cursor-hover
              className="text-emerald-400 font-mono flex items-center gap-2 hover:underline"
            >
              <FiDownload /> Download Vaibhav_khresume.pdf
            </button>
          </div>
          <div className="space-y-2">
            {[
              { name: "GitHub", url: "https://github.com/Vaibhavtech2006" },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/vaibhav-khandelwal-8686a2294/",
              },
              {
                name: "LeetCode (1815)",
                url: "https://leetcode.com/u/Vaibhavtech2006/",
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="flex justify-between py-1 border-b border-white/15 text-white hover:text-purple-400"
              >
                <span>{s.name}</span>
                <span>↗</span>
              </a>
            ))}
          </div>
          <div className="md:text-right text-gray-400">
            <p>B.Tech CS (AI) • Minor: Cyber Security @ ABESIT</p>
            <p className="text-emerald-400 font-mono text-xs mt-2">
              ● System Online • © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;