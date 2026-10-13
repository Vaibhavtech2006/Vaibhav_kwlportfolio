import React, { useState, useEffect } from "react";
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
} from "react-icons/fi";

// TERI REAL IMAGE KA PATH (About "Hi there!" section ke liye)
import vaibhavImg from "./assets/vaibhavimg.png";

// ============================================================================
// 1. CUSTOM COLOURFUL LIQUID ORB CURSOR (From Code 2 + Video Reference)
// ============================================================================
const CustomColorfulCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const springConfig = { damping: 22, stiffness: 280, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const trailConfig = { damping: 35, stiffness: 140, mass: 0.9 };
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]");
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
      {/* Large Multi-Color Ambient Nebula Following Mouse */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="fixed -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-600/20 via-fuchsia-500/15 to-emerald-400/15 blur-3xl mix-blend-screen"
      />

      {/* Main Colourful Liquid Orb */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        animate={{
          scale: clicked ? 0.75 : hovered ? 1.9 : 1,
          rotate: hovered ? 120 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 via-fuchsia-300 to-cyan-300 opacity-85 shadow-[0_0_30px_rgba(192,132,252,0.9),0_0_60px_rgba(34,211,238,0.5)] mix-blend-difference"
      />

      {/* Center Spark */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="fixed -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#fff]"
      />
    </div>
  );
};

// ============================================================================
// 2. REUSABLE 3D PERSPECTIVE TILT CARD (From Code 1)
// ============================================================================
const TiltCard3D = ({ children, className = "", intensity = 7 }) => {
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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1200px" }} className="w-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative transition-shadow duration-500 ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

// ============================================================================
// 3. CUTE FULL-BODY 3D ARTICULATED CHARACTER (CLAY VAIBHAV + ASTRO ROBOT)
//    -> Head, Eyes, Torso, Both Arms/Hands, and Both Legs move with physics!
// ============================================================================
const CuteFullBodyCharacter3D = ({ mode = "clay", onToggleMode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [blink, setBlink] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [faceLight, setFaceLight] = useState({ x: 50, y: 50, active: false });

  const springX = useSpring(mouseX, { stiffness: 110, damping: 14 });
  const springY = useSpring(mouseY, { stiffness: 110, damping: 14 });

  // Whole Scene 3D Tilt
  const sceneRotateY = useTransform(springX, [-0.5, 0.5], ["-22deg", "22deg"]);
  const sceneRotateX = useTransform(springY, [-0.5, 0.5], ["14deg", "-14deg"]);

  // Articulated Body Parts Transforms (Different intensities for full-body physics)
  const headX = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const headY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const headRotate = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const eyeX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const eyeY = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  const torsoX = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const torsoY = useTransform(springY, [-0.5, 0.5], [-4, 4]);
  const torsoRotate = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  // Arms swing with mouse + wave
  const leftArmRotate = useTransform(springX, [-0.5, 0.5], [-25, 20]);
  const rightArmRotate = useTransform(springY, [-0.5, 0.5], [15, -20]);

  // Legs swing in opposite parallax for 3D floating gravity effect
  const leftLegX = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const rightLegX = useTransform(springX, [-0.5, 0.5], [12, -4]);
  const legRotate = useTransform(springX, [-0.5, 0.5], [10, -10]);

  useEffect(() => {
    const handleGlobalMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleGlobalMove);
    return () => window.removeEventListener("mousemove", handleGlobalMove);
  }, [mouseX, mouseY]);

  // Cute Blinking Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const triggerJump = () => {
    if (isJumping) return;
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 750);
  };

  return (
    <div
      style={{ perspective: "1300px" }}
      className="relative flex flex-col items-center justify-center select-none"
    >
      {/* Top Mode Toggle Pill */}
      <div className="flex items-center gap-2 mb-2 z-30">
        <motion.button
          onClick={onToggleMode}
          data-cursor-hover
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-purple-500/25 border border-purple-400/35 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-purple-200 flex items-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          {mode === "clay"
            ? "Cute 3D Vaibhav • Switch to Astro-Bot 🤖"
            : "Cute Astro-Bot • Switch to Clay Vaibhav 🧑🏻"}
        </motion.button>
      </div>

      {/* Main 3D Character Stage */}
      <motion.div
        onClick={triggerJump}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setFaceLight({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
            active: true,
          });
        }}
        onMouseLeave={() => setFaceLight((p) => ({ ...p, active: false }))}
        animate={
          isJumping
            ? { y: [0, -45, 0], rotateZ: [0, -6, 6, 0], scale: [1, 1.08, 1] }
            : { y: [-8, 8, -8] }
        }
        transition={
          isJumping
            ? { duration: 0.7, ease: "easeOut" }
            : { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
        style={{
          rotateX: sceneRotateX,
          rotateY: sceneRotateY,
          transformStyle: "preserve-3d",
        }}
        data-cursor-hover
        title="Click me to jump!"
        className="relative w-[330px] h-[440px] sm:w-[390px] sm:h-[490px] flex items-center justify-center cursor-pointer"
      >
        {/* Ambient Backlight Aura */}
        <div
          style={{ transform: "translateZ(-50px)" }}
          className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-purple-600/40 via-fuchsia-500/25 to-cyan-400/30 blur-3xl pointer-events-none"
        />

        {/* Interactive Cursor Flashlight on Character */}
        <div
          style={{
            transform: "translateZ(75px)",
            background: `radial-gradient(130px circle at ${faceLight.x}% ${faceLight.y}%, rgba(192, 132, 252, 0.42), rgba(56, 189, 248, 0.2) 45%, transparent 75%)`,
            opacity: faceLight.active ? 1 : 0,
          }}
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-200 mix-blend-screen z-40"
        />

        {/* Floating "HI! 👋" Speech Bubble */}
        <motion.div
          animate={{ y: [-4, 4, -4], scale: isJumping ? 1.2 : 1 }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transform: "translateZ(80px)" }}
          className="absolute top-6 right-4 sm:right-6 bg-white text-black font-black text-xs px-3 py-1.5 rounded-2xl rounded-bl-none shadow-[0_10px_25px_rgba(168,85,247,0.5)] z-30"
        >
          {isJumping ? " Let's Build! 🚀" : "Hi! Click Me 👋"}
        </motion.div>

        {/* ================================================================ */}
        {/* FULL-BODY MULTI-JOINT 3D SVG RIG                                 */}
        {/* ================================================================ */}
        <svg
          viewBox="0 0 400 500"
          className="w-full h-full overflow-visible drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
        >
          <defs>
            {/* Cute Warm 3D Clay Skin */}
            <radialGradient id="cuteSkin" cx="38%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#ffede4" />
              <stop offset="50%" stopColor="#f2bfa6" />
              <stop offset="88%" stopColor="#c9886b" />
              <stop offset="100%" stopColor="#9333ea" />
            </radialGradient>

            {/* Cute Glossy White/Titanium Astro-Bot Shell */}
            <radialGradient id="cuteBot" cx="35%" cy="25%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="55%" stopColor="#cbd5e1" />
              <stop offset="88%" stopColor="#475569" />
              <stop offset="100%" stopColor="#38bdf8" />
            </radialGradient>

            {/* 3D Purple/Cyber Hoodie Gradient */}
            <radialGradient id="cuteHoodie" cx="35%" cy="25%" r="75%">
              <stop
                offset="0%"
                stopColor={mode === "clay" ? "#a855f7" : "#f8fafc"}
              />
              <stop
                offset="55%"
                stopColor={mode === "clay" ? "#6d28d9" : "#94a3b8"}
              />
              <stop
                offset="95%"
                stopColor={mode === "clay" ? "#2e1065" : "#1e293b"}
              />
            </radialGradient>

            {/* 3D Dark Pants / Mech Legs */}
            <linearGradient id="cutePants" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* 3D Fluffy Hair */}
            <radialGradient id="cuteHair" cx="35%" cy="20%" r="75%">
              <stop offset="0%" stopColor="#3f3f5a" />
              <stop offset="50%" stopColor="#181826" />
              <stop offset="92%" stopColor="#090910" />
              <stop offset="100%" stopColor="#7e22ce" />
            </radialGradient>
          </defs>

          {/* -------------------------------------------------------------- */}
          {/* 1. FLOatingHologramShadow & Jet Thruster Rings Below Feet      */}
          {/* -------------------------------------------------------------- */}
          <motion.ellipse
            cx="200"
            cy="472"
            rx="75"
            ry="14"
            fill="rgba(168, 85, 247, 0.28)"
            animate={{ scaleX: [0.9, 1.1, 0.9], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.ellipse
            cx="200"
            cy="472"
            rx="42"
            ry="7"
            fill="rgba(34, 211, 238, 0.45)"
            animate={{ scaleX: [1.1, 0.8, 1.1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* -------------------------------------------------------------- */}
          {/* 2. ARTICULATED LEGS & CUTE 3D SNEAKERS / JET BOOTS             */}
          {/* -------------------------------------------------------------- */}
          <motion.g
            style={{
              x: leftLegX,
              rotate: legRotate,
              originX: "175px",
              originY: "355px",
            }}
          >
            {/* Left Leg */}
            <rect
              x="152"
              y="348"
              width="36"
              height="74"
              rx="18"
              fill="url(#cutePants)"
            />
            {/* Left Cute Chunky Sneaker */}
            <rect
              x="140"
              y="410"
              width="52"
              height="32"
              rx="16"
              fill="#f8fafc"
              stroke="#a855f7"
              strokeWidth="3"
            />
            <rect
              x="142"
              y="434"
              width="48"
              height="8"
              rx="4"
              fill="#22d3ee"
            />
          </motion.g>

          <motion.g
            style={{
              x: rightLegX,
              rotate: legRotate,
              originX: "225px",
              originY: "355px",
            }}
          >
            {/* Right Leg */}
            <rect
              x="212"
              y="348"
              width="36"
              height="74"
              rx="18"
              fill="url(#cutePants)"
            />
            {/* Right Cute Chunky Sneaker */}
            <rect
              x="208"
              y="410"
              width="52"
              height="32"
              rx="16"
              fill="#f8fafc"
              stroke="#a855f7"
              strokeWidth="3"
            />
            <rect
              x="210"
              y="434"
              width="48"
              height="8"
              rx="4"
              fill="#22d3ee"
            />
          </motion.g>

          {/* -------------------------------------------------------------- */}
          {/* 3. ARTICULATED LEFT ARM (WAVING "HI!" HAND)                    */}
          {/* -------------------------------------------------------------- */}
          <motion.g
            style={{
              x: torsoX,
              y: torsoY,
              rotate: leftArmRotate,
              originX: "135px",
              originY: "255px",
            }}
            animate={{ rotate: [-12, 18, -12] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Waving Arm Sleeve */}
            <rect
              x="68"
              y="205"
              width="75"
              height="40"
              rx="20"
              transform="rotate(-38 105 225)"
              fill="url(#cuteHoodie)"
            />
            {/* Cute Round 3D Hand + Thumb */}
            <circle
              cx="74"
              cy="192"
              r="20"
              fill={mode === "clay" ? "url(#cuteSkin)" : "url(#cuteBot)"}
            />
            <circle
              cx="88"
              cy="182"
              r="8"
              fill={mode === "clay" ? "url(#cuteSkin)" : "url(#cuteBot)"}
            />
          </motion.g>

          {/* -------------------------------------------------------------- */}
          {/* 4. ARTICULATED TORSO (CUTE HOODIE / ASTRO-MECH SUIT)           */}
          {/* -------------------------------------------------------------- */}
          <motion.g
            style={{
              x: torsoX,
              y: torsoY,
              rotate: torsoRotate,
              originX: "200px",
              originY: "300px",
            }}
          >
            {/* Main Chibi Rounded Torso */}
            <rect
              x="126"
              y="232"
              width="148"
              height="135"
              rx="52"
              fill="url(#cuteHoodie)"
            />
            {/* Hoodie Front Pocket */}
            <path
              d="M 150 318 L 250 318 L 260 352 C 260 358, 140 358, 140 352 Z"
              fill="rgba(0,0,0,0.22)"
            />
            {/* Cute Hoodie Drawstrings */}
            <line
              x1="182"
              y1="242"
              x2="182"
              y2="282"
              stroke="#e2e8f0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="218"
              y1="242"
              x2="218"
              y2="282"
              stroke="#e2e8f0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Glowing "VK.AI" Reactor Badge on Chest */}
            <rect
              x="172"
              y="272"
              width="56"
              height="26"
              rx="13"
              fill="#090d16"
              stroke="#22d3ee"
              strokeWidth="2"
            />
            <text
              x="200"
              y="289"
              textAnchor="middle"
              fill="#38bdf8"
              fontSize="11"
              fontFamily="monospace"
              fontWeight="bold"
            >
              VK.AI
            </text>
          </motion.g>

          {/* -------------------------------------------------------------- */}
          {/* 5. ARTICULATED RIGHT ARM (HOLDING GLOWING AI CUBE / LAPTOP)    */}
          {/* -------------------------------------------------------------- */}
          <motion.g
            style={{
              x: torsoX,
              y: torsoY,
              rotate: rightArmRotate,
              originX: "265px",
              originY: "255px",
            }}
          >
            {/* Right Arm Sleeve */}
            <rect
              x="255"
              y="238"
              width="72"
              height="40"
              rx="20"
              transform="rotate(28 290 258)"
              fill="url(#cuteHoodie)"
            />
            {/* Cute Right Hand */}
            <circle
              cx="318"
              cy="278"
              r="19"
              fill={mode === "clay" ? "url(#cuteSkin)" : "url(#cuteBot)"}
            />
            {/* Floating Holographic Mini AI Cube above Right Hand */}
            <motion.g
              animate={{ y: [-6, 6, -6], rotate: [0, 12, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <rect
                x="302"
                y="222"
                width="34"
                height="34"
                rx="8"
                fill="rgba(34, 211, 238, 0.2)"
                stroke="#22d3ee"
                strokeWidth="2.5"
              />
              <circle cx="319" cy="239" r="6" fill="#a855f7" />
            </motion.g>
          </motion.g>

          {/* -------------------------------------------------------------- */}
          {/* 6. ARTICULATED CUTE CHIBI HEAD, BIG EYES, BEARD & GLASSES      */}
          {/* -------------------------------------------------------------- */}
          <motion.g
            style={{
              x: headX,
              y: headY,
              rotate: headRotate,
              originX: "200px",
              originY: "160px",
            }}
          >
            {/* Cute Robot Antenna (Visible in Robot Mode) */}
            {mode === "robot" && (
              <g>
                <line
                  x1="200"
                  y1="20"
                  x2="200"
                  y2="55"
                  stroke="#38bdf8"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle
                  cx="200"
                  cy="18"
                  r="10"
                  fill="#f43f5e"
                  className="animate-ping"
                />
                <circle cx="200" cy="18" r="10" fill="#f43f5e" />
              </g>
            )}

            {/* Cute Round Ears */}
            <circle
              cx="94"
              cy="162"
              r="22"
              fill={mode === "clay" ? "url(#cuteSkin)" : "url(#cuteBot)"}
            />
            <circle cx="96" cy="162" r="11" fill="rgba(244, 114, 182, 0.35)" />
            <circle
              cx="306"
              cy="162"
              r="22"
              fill={mode === "clay" ? "url(#cuteSkin)" : "url(#cuteBot)"}
            />
            <circle cx="304" cy="162" r="11" fill="rgba(244, 114, 182, 0.35)" />

            {/* Big Cute Chibi Head Squircle */}
            <rect
              x="98"
              y="52"
              width="204"
              height="194"
              rx="86"
              fill={mode === "clay" ? "url(#cuteSkin)" : "url(#cuteBot)"}
            />

            {/* Cute Rosy Blush Cheeks */}
            <ellipse
              cx="132"
              cy="182"
              rx="16"
              ry="9"
              fill="rgba(244, 114, 182, 0.42)"
            />
            <ellipse
              cx="268"
              cy="182"
              rx="16"
              ry="9"
              fill="rgba(244, 114, 182, 0.42)"
            />

            {/* Cute Groomed Beard + Happy Smile (Clay Mode) OR LED Visor (Robot Mode) */}
            {mode === "clay" ? (
              <g>
                {/* Soft Rounded Chibi Beard */}
                <path
                  d="M 102 175 C 102 232, 145 248, 200 248 C 255 248, 298 232, 298 175 C 288 195, 270 212, 242 214 C 228 215, 220 198, 200 198 C 180 198, 172 215, 158 214 C 130 212, 112 195, 102 175 Z"
                  fill="#1a1a28"
                  opacity="0.9"
                />
                {/* Cute Mustache */}
                <path
                  d="M 164 198 Q 182 188 200 195 Q 218 188 236 198"
                  fill="none"
                  stroke="#12121c"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {/* Cute Happy Open Smile */}
                <path
                  d="M 180 205 Q 200 224 220 205 Z"
                  fill="#f43f5e"
                />
                <path
                  d="M 183 206 Q 200 212 217 206"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            ) : (
              /* Cute Robot Happy LED Mouth */
              <path
                d="M 175 204 Q 200 222 225 204"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="6"
                strokeLinecap="round"
              />
            )}

            {/* BIG CUTE GLOSSY PIXAR/ANIME EYES (Track the Cursor!) */}
            <ellipse
              cx="156"
              cy="152"
              rx="25"
              ry={blink ? "2.5" : "24"}
              fill="#ffffff"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth="2"
            />
            <ellipse
              cx="244"
              cy="152"
              rx="25"
              ry={blink ? "2.5" : "24"}
              fill="#ffffff"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth="2"
            />

            {!blink && (
              <motion.g style={{ x: eyeX, y: eyeY }}>
                {/* Left Big Glossy Iris */}
                <circle
                  cx="156"
                  cy="152"
                  r="15"
                  fill={mode === "clay" ? "#291d18" : "#0284c7"}
                />
                <circle cx="156" cy="152" r="9" fill="#09090b" />
                {/* Big Cute Sparkle Catchlights */}
                <circle cx="150" cy="145" r="5" fill="#ffffff" />
                <circle cx="162" cy="158" r="2.5" fill="#ffffff" />
                <circle cx="156" cy="160" r="2" fill="#a855f7" />

                {/* Right Big Glossy Iris */}
                <circle
                  cx="244"
                  cy="152"
                  r="15"
                  fill={mode === "clay" ? "#291d18" : "#0284c7"}
                />
                <circle cx="244" cy="152" r="9" fill="#09090b" />
                <circle cx="238" cy="145" r="5" fill="#ffffff" />
                <circle cx="250" cy="158" r="2.5" fill="#ffffff" />
                <circle cx="244" cy="160" r="2" fill="#a855f7" />
              </motion.g>
            )}

            {/* Cute Button Nose */}
            <ellipse
              cx="200"
              cy="174"
              rx="8"
              ry="6"
              fill={mode === "clay" ? "#e09f83" : "#94a3b8"}
            />

            {/* Expressive Eyebrows */}
            <path
              d="M 130 118 Q 156 108 178 118"
              fill="none"
              stroke="#14141f"
              strokeWidth="8.5"
              strokeLinecap="round"
            />
            <path
              d="M 222 118 Q 244 108 270 118"
              fill="none"
              stroke="#14141f"
              strokeWidth="8.5"
              strokeLinecap="round"
            />

            {/* VAIBHAV'S SIGNATURE TRANSPARENT GLASSES */}
            <g>
              <rect
                x="116"
                y="122"
                width="78"
                height="58"
                rx="22"
                fill="rgba(255, 255, 255, 0.08)"
                stroke="rgba(241, 245, 249, 0.85)"
                strokeWidth="4.5"
              />
              <rect
                x="206"
                y="122"
                width="78"
                height="58"
                rx="22"
                fill="rgba(255, 255, 255, 0.08)"
                stroke="rgba(241, 245, 249, 0.85)"
                strokeWidth="4.5"
              />
              <path
                d="M 194 142 Q 200 137 206 142"
                fill="none"
                stroke="rgba(241, 245, 249, 0.9)"
                strokeWidth="4.5"
              />
              {/* Lens Shine */}
              <path
                d="M 128 128 L 144 128 L 132 170 L 120 170 Z"
                fill="rgba(255,255,255,0.25)"
              />
              <path
                d="M 218 128 L 234 128 L 222 170 L 210 170 Z"
                fill="rgba(255,255,255,0.25)"
              />
            </g>

            {/* CUTE FLUFFY WAVY HAIR WITH BOUNCING AHOGE STRAND */}
            {mode === "clay" && (
              <g>
                <path
                  d="M 94 136 C 88 70, 135 32, 200 34 C 265 32, 312 70, 306 136 C 296 105, 275 88, 246 86 C 220 98, 180 98, 152 84 C 125 88, 104 105, 94 136 Z"
                  fill="url(#cuteHair)"
                />
                {/* Cute Bouncing Hair Tuft on Top */}
                <path
                  d="M 195 36 Q 215 8 232 24 Q 218 28 208 38 Z"
                  fill="url(#cuteHair)"
                />
              </g>
            )}
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};

// ============================================================================
// 4. 3D CODING DESK SCENE FOR "WHAT I DO" (From Code 2 + Video 2)
// ============================================================================
const CodingAtDesk3D = () => {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[420px] mx-auto flex items-center justify-center"
    >
      <div className="absolute top-12 right-12 w-48 h-48 bg-fuchsia-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 left-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <svg
        viewBox="0 0 420 380"
        className="w-full h-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)]"
      >
        <defs>
          <linearGradient id="deskTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="pinkScreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <radialGradient id="clayBody" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </radialGradient>
        </defs>

        <ellipse
          cx="210"
          cy="345"
          rx="155"
          ry="18"
          fill="rgba(168,85,247,0.18)"
        />
        <rect x="95" y="160" width="22" height="115" rx="10" fill="#94a3b8" />
        <rect x="105" y="265" width="75" height="16" rx="8" fill="#cbd5e1" />
        <rect x="132" y="280" width="14" height="60" fill="#64748b" />
        <path
          d="M 105 340 L 175 340"
          stroke="#94a3b8"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M 145 255 L 205 255 L 205 325 L 182 325 L 182 275 L 145 275 Z"
          fill="url(#clayBody)"
        />
        <rect x="178" y="320" width="38" height="18" rx="9" fill="#e2e8f0" />
        <rect
          x="118"
          y="152"
          width="68"
          height="112"
          rx="30"
          fill="url(#clayBody)"
        />
        <circle cx="156" cy="112" r="34" fill="url(#clayBody)" />
        <path d="M 124 106 C 124 72, 188 72, 188 106 Z" fill="#1e1b4b" />
        <rect
          x="166"
          y="102"
          width="24"
          height="14"
          rx="4"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="2.5"
        />

        <path
          d="M 155 178 L 205 212 L 245 208"
          fill="none"
          stroke="url(#clayBody)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <polygon
          points="190,218 365,218 385,232 175,232"
          fill="url(#deskTop)"
        />
        <rect x="205" y="232" width="12" height="108" fill="#64748b" />
        <rect x="345" y="232" width="12" height="108" fill="#475569" />

        <rect
          x="265"
          y="110"
          width="75"
          height="78"
          rx="10"
          fill="url(#pinkScreen)"
          className="animate-pulse"
        />
        <rect x="296" y="188" width="12" height="30" fill="#cbd5e1" />
        <rect x="278" y="214" width="48" height="6" rx="3" fill="#e2e8f0" />

        <line
          x1="280"
          y1="130"
          x2="320"
          y2="130"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
        />
        <line
          x1="280"
          y1="146"
          x2="310"
          y2="146"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.65"
        />
        <line
          x1="280"
          y1="162"
          x2="326"
          y2="162"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </motion.div>
  );
};

// ============================================================================
// 5. INVERTED-PYRAMID TECH STACK DATA (Matches Video 1 & Video 2)
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
    { name: "Socket.io", slug: "socketdotio", color: "ffffff" },
    { name: "GraphQL", slug: "graphql", color: "E10098" },
  ],
  [
    { name: "Vercel", slug: "vercel", color: "ffffff" },
    { name: "Vite", slug: "vite", color: "646CFF" },
    { name: "Postman", slug: "postman", color: "FF6C37" },
    { name: "LeetCode", slug: "leetcode", color: "FFA116" },
  ],
  [
    { name: "Figma", slug: "figma", color: "F24E1E" },
    { name: "Jupyter", slug: "jupyter", color: "F37626" },
  ],
];

// ============================================================================
// 6. MAIN COMBINED PORTFOLIO APPLICATION
// ============================================================================
const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [avatarMode, setAvatarMode] = useState("clay");
  const [waveTrigger, setWaveTrigger] = useState(0);
  const [glowColor, setGlowColor] = useState("purple");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [photoGlare, setPhotoGlare] = useState({ x: 50, y: 50, opacity: 0 });

  // Top Scroll Laser Bar (from Code 1)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Marquee Loader Counter (0% -> 100% -> WELCOME)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + 4;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Global Mouse Spotlight Tracker (from Code 1)
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  // LOADER SCREEN
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

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute z-20 bg-[#11131a] text-white px-10 py-5 rounded-full shadow-[0_20px_60px_rgba(124,58,237,0.45)] border border-purple-500/40 flex items-center gap-6 min-w-[260px] justify-center font-mono text-sm tracking-widest uppercase"
        >
          {progress < 100 ? (
            <>
              <span className="text-gray-300">LOADING</span>
              <span className="text-purple-400 font-bold text-base">
                {progress}%
              </span>
            </>
          ) : (
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-emerald-300 font-bold tracking-[0.25em]"
            >
              ✦ WELCOME ✦
            </motion.span>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#040509] min-h-screen text-gray-200 font-sans selection:bg-purple-500 selection:text-white scroll-smooth md:cursor-none overflow-x-hidden">
      {/* 1. CUSTOM COLOURFUL ORB CURSOR */}
      <CustomColorfulCursor />

      {/* 2. TOP SCROLL LASER PROGRESS BAR (From Code 1) */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 origin-left z-[100] shadow-[0_0_15px_#a855f7]"
      />

      {/* 3. DYNAMIC MOUSE SPOTLIGHT + 3D PERSPECTIVE GRID (From Code 1) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.08), rgba(16, 185, 129, 0.04) 40%, transparent 80%)`,
          }}
          className="fixed inset-0 z-0 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_10%,#000_65%,transparent_100%)] opacity-40" />
      </div>

      {/* 4. FIXED CHROME HUD NAVBAR */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-5xl bg-[#090d16]/75 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3.5 flex justify-between items-center shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
          <a
            href="#hero"
            data-cursor-hover
            className="font-black text-xl tracking-tighter text-white flex items-center gap-1.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            VK<span className="text-purple-400">.AI</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-gray-300">
            <a
              href="#about"
              data-cursor-hover
              className="hover:text-purple-400 transition-colors"
            >
              // About
            </a>
            <a
              href="#leetcode"
              data-cursor-hover
              className="hover:text-emerald-400 transition-colors"
            >
              // LeetCode
            </a>
            <a
              href="#work"
              data-cursor-hover
              className="hover:text-purple-400 transition-colors"
            >
              // Architectures
            </a>
            <a
              href="#techstack"
              data-cursor-hover
              className="hover:text-cyan-400 transition-colors"
            >
              // Stack
            </a>
          </div>

          <a
            href="mailto:khandelwalvaibhav2006@gmail.com"
            data-cursor-hover
            className="text-xs font-mono font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 text-black px-4 py-2 rounded-xl hover:opacity-90 transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)]"
          >
            Hire Me ↗
          </a>
        </motion.nav>
      </header>

      {/* FIXED LEFT VERTICAL SOCIAL BAR */}
      <div className="fixed left-5 md:left-10 bottom-10 z-40 hidden sm:flex flex-col gap-5 text-gray-400">
        <a
          href="https://github.com/Vaibhavtech2006"
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="hover:text-white hover:scale-125 transition-all"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/vaibhav-khandelwal-8686a2294/"
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="hover:text-purple-400 hover:scale-125 transition-all"
        >
          <FiLinkedin size={20} />
        </a>
        <a
          href="#leetcode"
          data-cursor-hover
          className="hover:text-yellow-400 hover:scale-125 transition-all"
        >
          <FiCode size={20} />
        </a>
        <a
          href="mailto:khandelwalvaibhav2006@gmail.com"
          data-cursor-hover
          className="hover:text-emerald-400 hover:scale-125 transition-all"
        >
          <FiMail size={20} />
        </a>
      </div>

      {/* FIXED BOTTOM-RIGHT RESUME BUTTON */}
      <a
        href="mailto:khandelwalvaibhav2006@gmail.com?subject=Resume%20Request%20-%20Vaibhav%20Khandelwal"
        data-cursor-hover
        className="fixed right-6 md:right-10 bottom-8 z-40 hidden sm:flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-gray-300 hover:text-purple-300 bg-white/[0.04] hover:bg-purple-500/20 border border-white/10 hover:border-purple-400/50 backdrop-blur-md px-4 py-2.5 rounded-xl transition-all"
      >
        RESUME <FiFileText />
      </a>

      {/* ==================================================================== */}
      {/* SECTION 1: HERO WITH CUTE FULL-BODY 3D MOVING CHARACTER              */}
      {/* ==================================================================== */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-16 pt-24 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-6 z-10">
          {/* LEFT NAME & STATUS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 text-center lg:text-left order-2 lg:order-1 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for Opportunities
            </div>
            <p className="text-purple-400 font-medium text-lg md:text-xl">
              Hello! I'm
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight uppercase leading-[1.03]">
              VAIBHAV <br /> KHANDELWAL
            </h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2 font-mono text-xs">
              <a
                href="#work"
                data-cursor-hover
                className="bg-white text-black px-5 py-3 rounded-xl font-bold hover:bg-purple-400 hover:text-white transition-all"
              >
                View Systems ↘
              </a>
              <a
                href="#about"
                data-cursor-hover
                className="bg-white/[0.05] border border-white/15 text-white px-5 py-3 rounded-xl hover:border-purple-400 transition-all"
              >
                Meet Real Me →
              </a>
            </div>
          </motion.div>

          {/* CENTER CUTE FULL-BODY 3D CHARACTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-4 flex justify-center order-1 lg:order-2"
          >
            <CuteFullBodyCharacter3D
              mode={avatarMode}
              onToggleMode={() =>
                setAvatarMode((m) => (m === "clay" ? "robot" : "clay"))
              }
            />
          </motion.div>

          {/* RIGHT ROLE BLOCK WITH GHOST OUTLINE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 text-center lg:text-left order-3 lg:pl-6"
          >
            <p className="text-gray-400 text-lg mb-1">An</p>
            <div className="relative">
              <span
                aria-hidden="true"
                className="block text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(168,85,247,0.5)] select-none"
              >
                AI ENGINEER
              </span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-white -mt-2">
                FULL-STACK <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-300">
                  DEVELOPER
                </span>
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-mono mt-4">
              LangGraph • FastAPI • React • Scikit-Learn
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: "ABOUT / Hi there!" WITH REAL PHOTO (Matches Screenshot!) */}
      {/* ==================================================================== */}
      <section
        id="about"
        className="relative max-w-6xl mx-auto px-6 md:px-16 py-28"
      >
        {/* Top "ABOUT ────────" Header from Screenshot */}
        <div className="flex items-center gap-4 mb-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 font-bold">
            ABOUT
          </span>
          <div className="h-[1px] w-48 sm:w-72 bg-gradient-to-r from-purple-500/60 to-transparent" />
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-12">
          Hi there!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: VAIBHAV'S REAL PHOTO IN 3D NEO-BRUTALIST STUDIO FRAME */}
          <div className="lg:col-span-5">
            <TiltCard3D intensity={10}>
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
                {/* Studio Ambient Glow Behind Photo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/25 via-transparent to-emerald-400/20 pointer-events-none z-10" />

                {/* THE REAL PHOTO (vaibhavImg) */}
                <img
                  src={vaibhavImg}
                  alt="Vaibhav Khandelwal"
                  className="w-full h-[390px] sm:h-[440px] object-cover object-top contrast-[1.07] saturate-[1.12] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Interactive Holographic Glare */}
                <div
                  style={{
                    background: `radial-gradient(circle at ${photoGlare.x}% ${photoGlare.y}%, rgba(255,255,255,0.4) 0%, rgba(168,85,247,0.15) 40%, transparent 70%)`,
                    opacity: photoGlare.opacity,
                  }}
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-overlay z-20"
                />

                {/* Bottom Badge Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-30 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Real Human Behind the AI
                    </span>
                    <p className="text-white font-black text-lg">
                      Vaibhav Khandelwal
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-xl text-purple-300">
                    B.Tech CS (AI)
                  </span>
                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* RIGHT: WITTY CONVERSATIONAL BIO (Matches Screenshot Style!) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white leading-[1.3]">
              I build AI stuff and anything else I find interesting—{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-emerald-300">
                autonomous multi-agent systems, RAG pipelines, Full-Stack apps
              </span>
              , and generally anything that looks shiny at 2AM in the morning :)
            </h3>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Pursuing my{" "}
              <span className="text-white font-medium">
                B.Tech in Computer Science (AI) at ABESIT
              </span>
              , with a{" "}
              <span className="text-yellow-400 font-semibold">
                1,815 Contest Rating (677+ problems solved) on LeetCode
              </span>{" "}
              under my belt, because apparently one engineering courseload
              wasn't enough of a brain workout.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Right now, I split my time between building production-grade UI
              architectures as an{" "}
              <span className="text-emerald-400 font-medium">
                SDE Intern at Architects Lab
              </span>{" "}
              (working on Meta Developer Dashboard components), and crafting
              high-frequency telemetry visualizations at{" "}
              <span className="text-purple-300 font-medium">
                Cavisson Systems
              </span>
              .
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I like architecting scalable systems, stress-testing them, and
              occasionally wondering why I decided to automate everything in the
              first place.
            </p>

            {/* Quick Highlight Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "⚡ LangGraph & Multi-Agent AI",
                "🏆 1,815 LeetCode Rating",
                "🚀 Full-Stack (React / Angular / FastAPI)",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-white/[0.04] border border-white/10 px-3.5 py-2 rounded-xl text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 3: LEETCODE PERFORMANCE BENTO (From Code 1)                  */}
      {/* ==================================================================== */}
      <section id="leetcode" className="max-w-6xl mx-auto px-6 md:px-16 py-12">
        <TiltCard3D intensity={5}>
          <div className="bg-gradient-to-br from-[#0c111d] via-[#090d16] to-[#060911] border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
              <div className="flex-1 space-y-6 w-full">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 flex items-center gap-1.5">
                      <FiZap /> Algorithmic Problem Solving
                    </span>
                    <h3 className="text-3xl font-black text-white mt-1">
                      LeetCode Telemetry
                    </h3>
                  </div>
                  <a
                    href="https://leetcode.com/u/Vaibhavtech2006/"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="text-xs font-mono bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 px-3.5 py-1.5 rounded-full hover:bg-yellow-500/20 transition-colors"
                  >
                    @Vaibhavtech2006 ↗
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-[#111827]/80 border border-white/10 p-5 rounded-2xl">
                    <p className="text-xs text-gray-400 font-mono uppercase">
                      Contest Rating
                    </p>
                    <p className="text-3xl sm:text-4xl font-black text-white mt-1">
                      1,815
                    </p>
                    <span className="text-[11px] font-mono text-emerald-400">
                      ▲ Top ~6% Global
                    </span>
                  </div>

                  <div className="bg-[#111827]/80 border border-white/10 p-5 rounded-2xl">
                    <p className="text-xs text-gray-400 font-mono uppercase">
                      Problems Solved
                    </p>
                    <p className="text-3xl sm:text-4xl font-black text-yellow-400 mt-1">
                      677
                    </p>
                    <span className="text-[11px] font-mono text-gray-400">
                      Active Streak
                    </span>
                  </div>

                  <div className="col-span-2 sm:col-span-1 bg-[#111827]/80 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                    <p className="text-xs text-gray-400 font-mono uppercase">
                      Core Mastery
                    </p>
                    <p className="text-sm font-bold text-cyan-300 mt-2">
                      Graphs, DP, Trees & Greedy
                    </p>
                    <span className="text-[11px] font-mono text-gray-500">
                      C++ / Python
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[44%] bg-[#070a12] border border-white/10 p-6 rounded-2xl font-mono text-sm space-y-5">
                {[
                  {
                    label: "Easy",
                    count: 208,
                    pct: "38%",
                    color: "from-cyan-400 to-teal-400",
                    text: "text-cyan-400",
                  },
                  {
                    label: "Medium",
                    count: 409,
                    pct: "74%",
                    color: "from-purple-400 to-fuchsia-500",
                    text: "text-purple-400",
                  },
                  {
                    label: "Hard",
                    count: 60,
                    pct: "28%",
                    color: "from-rose-500 to-amber-500",
                    text: "text-rose-400",
                  },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className={`${bar.text} font-bold`}>
                        {bar.label}
                      </span>
                      <span className="text-white font-bold">
                        {bar.count}{" "}
                        <span className="text-gray-600 text-xs">solved</span>
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: bar.pct }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={`bg-gradient-to-r ${bar.color} h-full rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TiltCard3D>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 4: WHAT I DO (3D Coding Desk + Corner-Bracket Cards)         */}
      {/* ==================================================================== */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
              WHAT I DO
            </h2>
            <CodingAtDesk3D />
          </div>

          <div className="lg:col-span-6 space-y-6">
            {[
              {
                title: "AI DEVELOPER",
                desc: "Developing autonomous multi-agent workflows, RAG pipelines, and predictive ML models using Python, LangGraph, Groq LLM, Claude API, and Scikit-Learn.",
              },
              {
                title: "FULL-STACK",
                desc: "Building responsive, high-throughput web applications and real-time telemetry dashboards using React.js, Angular, TypeScript, FastAPI, and Node.js.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 6 }}
                data-cursor-hover
                className="relative p-7 border border-dashed border-gray-700 hover:border-purple-400/70 bg-[#090910]/90 transition-all group"
              >
                <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-400" />
                <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-400" />
                <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-purple-400" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-400" />

                <h3 className="text-2xl font-black text-white tracking-tight mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 5: MY WORK (COMBINED LIVE ANIMATED 3D ARCHITECTURE DIAGRAMS) */}
      {/* ==================================================================== */}
      <section
        id="work"
        className="relative max-w-6xl mx-auto px-6 md:px-16 py-24 space-y-16"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              // Production Systems & Pipelines
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-1">
              My <span className="text-purple-400">Work</span>
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs">
            Live animated data-packet architectures • 3D Tilt
          </p>
        </div>

        {/* PROJECT 01: OLA.AI DATA AGENT (With Full Animated LangGraph Tree) */}
        <TiltCard3D intensity={5}>
          <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-2 md:p-3 hover:border-emerald-500/40 transition-colors shadow-[0_25px_80px_rgba(0,0,0,0.75)]">
            <div className="bg-[#060911] rounded-2xl border border-gray-800/80 overflow-hidden">
              <div className="px-5 py-3.5 bg-[#0b101b] border-b border-gray-800 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-2">
                  <FiActivity className="animate-pulse" />
                  langgraph://ola-ai-multi-agent-runtime
                </span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  LIVE
                </span>
              </div>

              <div className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[310px] relative font-mono text-xs">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

                <div className="border border-cyan-500/40 bg-[#0c1424] px-6 py-2.5 rounded-full z-10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-white font-bold">User Query</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-400">FastAPI Gateway</span>
                </div>

                <div className="h-10 w-[2px] bg-gray-800 my-1 relative overflow-hidden">
                  <motion.div
                    animate={{ y: [-20, 44] }}
                    transition={{
                      duration: 1.1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-full h-5 bg-gradient-to-b from-transparent via-cyan-400 to-emerald-400"
                  />
                </div>

                <div className="border border-purple-400/50 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-emerald-950/60 px-8 py-3 rounded-2xl z-10 flex items-center gap-3 shadow-[0_0_30px_rgba(168,85,247,0.25)]">
                  <FiCpu className="text-purple-400" size={18} />
                  <span className="text-white font-bold">
                    LangGraph Planner
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-emerald-400">Groq LPU</span>
                </div>

                <div className="relative w-full max-w-[500px] h-10 mt-2">
                  <div className="absolute top-0 left-[12%] right-[12%] h-[2px] bg-gray-800" />
                  {[12, 37, 63, 88].map((leftPos, i) => (
                    <div
                      key={i}
                      className="absolute top-0 h-full w-[2px] bg-gray-800 overflow-hidden"
                      style={{ left: `${leftPos}%` }}
                    >
                      <motion.div
                        animate={{ y: [-15, 44] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "linear",
                        }}
                        className="w-full h-4 bg-emerald-400"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-[560px] z-10 mt-2">
                  {[
                    { name: "SQL Agent", sub: "Query Synth" },
                    { name: "ETL Node", sub: "Clean Pipeline" },
                    { name: "EDA Agent", sub: "Auto Profiling" },
                    { name: "ML Trainer", sub: "AutoML Fit" },
                  ].map((agent, i) => (
                    <div
                      key={i}
                      className="border border-gray-800 bg-[#0b101b] p-3 rounded-xl text-center"
                    >
                      <p className="font-bold text-white mb-0.5">
                        {agent.name}
                      </p>
                      <p className="text-[10px] text-emerald-400">
                        {agent.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl font-black text-white/90">01</span>
                <span className="text-xs font-mono text-emerald-400 uppercase">
                  Autonomous Multi-Agent Analytics
                </span>
              </div>
              <h3 className="text-3xl font-black text-white mb-3">
                OLA.AI Data Agent
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Autonomous multi-agent analytics platform built with LangGraph
                for dynamic task routing across SQL, ETL, EDA, and ML nodes.
                Includes an IDE-style React dashboard for real-time execution
                tracing.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {["React.js", "FastAPI", "LangGraph", "Groq LLM", "Python"].map(
                    (t) => (
                      <span
                        key={t}
                        className="text-xs font-mono bg-[#131b2e] border border-white/10 px-3 py-1.5 rounded-lg text-gray-300"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://ola-ai-data-agent.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="text-xs font-mono font-bold bg-emerald-400 text-black px-5 py-2.5 rounded-xl hover:bg-emerald-300 transition-colors flex items-center gap-2"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                  <a
                    href="https://github.com/Vaibhavtech2006/OLA-AI-Data-agent"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="text-xs font-mono text-white border border-gray-700 px-4 py-2.5 rounded-xl flex items-center gap-2 hover:border-emerald-400"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TiltCard3D>

        {/* PROJECT 02 & 03 GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PROJECT 02: LAYOFFRADAR AI */}
          <TiltCard3D intensity={6}>
            <div className="bg-[#0b0f19] border border-white/10 hover:border-rose-500/40 rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-white/90">02</span>
                  <span className="text-xs font-mono text-rose-400">
                    ML Forecasting Pipeline
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  LayoffRadar AI
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Predictive intelligence platform built to track, analyze, and
                  forecast tech industry layoffs using historical signals and
                  Scikit-Learn models.
                </p>

                {/* Animated Mini Horizontal Stream */}
                <div className="bg-[#060911] border border-gray-800 rounded-2xl p-5 mb-6 flex items-center justify-between font-mono text-xs">
                  <div className="text-center">
                    <FiDatabase className="mx-auto text-cyan-400 mb-1" />
                    <span className="text-[10px] text-white">CSV Data</span>
                  </div>
                  <div className="w-12 h-[2px] bg-gray-800 relative overflow-hidden">
                    <motion.div
                      animate={{ x: [-15, 48] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-full bg-rose-400"
                    />
                  </div>
                  <div className="text-center border border-rose-500/40 bg-rose-950/20 px-3 py-2 rounded-xl">
                    <FiCpu className="mx-auto text-rose-400 mb-1" />
                    <span className="text-[10px] text-rose-300">
                      Scikit-Learn
                    </span>
                  </div>
                  <div className="w-12 h-[2px] bg-gray-800 relative overflow-hidden">
                    <motion.div
                      animate={{ x: [-15, 48] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.3,
                      }}
                      className="w-5 h-full bg-emerald-400"
                    />
                  </div>
                  <div className="text-center">
                    <FiTrendingUp className="mx-auto text-emerald-400 mb-1" />
                    <span className="text-[10px] text-white">Radar UI</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Vaibhavtech2006/LayoffRadar_AI"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="text-xs font-mono text-white border border-gray-700 hover:border-emerald-400 px-3.5 py-2 rounded-xl flex items-center gap-1.5"
                  >
                    UI Repo <FiGithub />
                  </a>
                  <a
                    href="https://github.com/Vaibhavtech2006/layoff_model"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="text-xs font-mono text-white border border-gray-700 hover:border-rose-400 px-3.5 py-2 rounded-xl flex items-center gap-1.5"
                  >
                    ML Repo <FiGithub />
                  </a>
                </div>
                <span className="text-[11px] font-mono text-gray-500">
                  Python • React
                </span>
              </div>
            </div>
          </TiltCard3D>

          {/* PROJECT 03: FREE CALLING AGENT AI */}
          <TiltCard3D intensity={6}>
            <div className="bg-[#0b0f19] border border-white/10 hover:border-cyan-500/40 rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-white/90">03</span>
                  <span className="text-xs font-mono text-cyan-400">
                    Voice Agentic Workflow
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  Free Calling Agent AI
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Autonomous voice calling agent leveraging low-latency audio
                  streams and Claude LLM context routing to automate real-time
                  phone interactions.
                </p>

                <div className="bg-[#060911] border border-gray-800 rounded-2xl p-4 mb-6 font-mono text-xs space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-300">
                      🎙️ Audio Stream
                    </span>
                    <span className="text-emerald-400 animate-pulse">━━►</span>
                    <span className="px-2.5 py-1 rounded bg-purple-950/40 border border-purple-500/40 text-purple-300">
                      🧠 Claude API
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span className="text-cyan-400">↳</span>
                    <span className="px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-500/40 text-cyan-300">
                      ⚡ Autonomous Call Router (Node.js)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10">
                <a
                  href="https://github.com/Vaibhavtech2006/AgentAI"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="text-xs font-mono text-white border border-gray-700 hover:border-cyan-400 px-4 py-2 rounded-xl flex items-center gap-2"
                >
                  <FiGithub /> Source Code
                </a>
                <span className="text-[11px] font-mono text-gray-500">
                  Node.js • Claude API
                </span>
              </div>
            </div>
          </TiltCard3D>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 6: MY CAREER & EXPERIENCE (Glowing Purple Beam Timeline)     */}
      {/* ==================================================================== */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-16 py-28">
        <div className="text-center mb-20 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            My career & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
              experience
            </span>
          </h2>
        </div>

        <div className="relative space-y-16">
          <div className="hidden md:block absolute left-[42%] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-400 via-emerald-400/50 to-transparent shadow-[0_0_15px_#a855f7]" />

          {[
            {
              role: "SDE Intern",
              sub: "Architects Lab",
              year: "2026",
              desc: "Translated product requirements for the Meta Developer Dashboard into modular Angular & TypeScript components with end-to-end REST API integrations.",
            },
            {
              role: "Angular Developer",
              sub: "Cavisson Systems",
              year: "2025",
              desc: "Developed interactive Highcharts data visualizations and integrated REST APIs. Performed systematic debugging and enterprise UI quality checks.",
            },
            {
              role: "Full-Stack Developer",
              sub: "Zidio Development",
              year: "2025",
              desc: "Built and deployed full-stack web applications from frontend to backend using React.js and Node.js while managing Linux servers.",
            },
          ].map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative"
            >
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {exp.role}
                </h3>
                <p className="text-purple-400 text-sm font-medium mt-1">
                  {exp.sub}
                </p>
              </div>

              <div className="md:col-span-3 flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {exp.year}
                </span>
                <span className="hidden md:block w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_20px_#10b981]" />
              </div>

              <div className="md:col-span-5 text-gray-400 text-sm sm:text-base leading-relaxed">
                {exp.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 7: INVERTED PYRAMID "TECH STACK" (Video 1 & Video 2 Match)   */}
      {/* ==================================================================== */}
      <section
        id="techstack"
        className="relative max-w-6xl mx-auto px-4 sm:px-8 py-28 text-center"
      >
        <h2 className="text-4xl sm:text-6xl font-light tracking-[0.18em] text-white uppercase mb-16">
          TECH STACK
        </h2>

        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] h-[340px] sm:h-[460px] rounded-full blur-[130px] pointer-events-none transition-colors duration-700 ${
            glowColor === "purple"
              ? "bg-purple-600/35"
              : glowColor === "cyan"
              ? "bg-cyan-500/35"
              : "bg-emerald-500/35"
          }`}
        />

        <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
          {TECH_PYRAMID_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5"
            >
              {row.map((tech, colIndex) => (
                <motion.div
                  key={`${tech.name}-${waveTrigger}`}
                  initial={{ opacity: 0, y: 20, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  animate={
                    waveTrigger > 0
                      ? {
                          y: [0, -18, 0],
                          rotateY: [0, 180, 360],
                          scale: [1, 1.15, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: rowIndex * 0.06 + colIndex * 0.03,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.14,
                    borderColor: "rgba(192, 132, 252, 0.8)",
                  }}
                  data-cursor-hover
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.04] hover:bg-purple-500/[0.15] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center gap-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.45)] transition-colors group"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                    alt={tech.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="text-[9px] sm:text-[10px] font-medium text-gray-300 group-hover:text-white tracking-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-16 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-xs font-mono text-gray-400">
              Play With Me ➔
            </span>
            <button
              onClick={() => setWaveTrigger((w) => w + 1)}
              data-cursor-hover
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500/40 to-indigo-500/40 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/40 text-xs font-mono text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
            >
              ⚡ Trigger 3D Matrix Wave
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-xs font-mono text-gray-400">
              Switch Nebula ➔
            </span>
            <button
              onClick={() =>
                setGlowColor((c) =>
                  c === "purple" ? "cyan" : c === "cyan" ? "emerald" : "purple"
                )
              }
              data-cursor-hover
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-500/40 to-purple-500/40 hover:from-emerald-500 hover:to-purple-500 border border-emerald-400/40 text-xs font-mono text-white shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all"
            >
              🎨 Cycle Nebula Glow ({glowColor.toUpperCase()})
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 8: GIANT FOOTER & CONTACT                                    */}
      {/* ==================================================================== */}
      <footer
        id="contact"
        className="relative max-w-6xl mx-auto px-6 md:px-16 pt-20 pb-24 border-t border-white/10"
      >
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase mb-14">
          VAIBHAV KHANDELWAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          <div className="space-y-6">
            <div>
              <p className="text-gray-500 text-xs mb-1">Email</p>
              <a
                href="mailto:khandelwalvaibhav2006@gmail.com"
                data-cursor-hover
                className="text-white hover:text-purple-400 transition-colors font-mono"
              >
                khandelwalvaibhav2006@gmail.com
              </a>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Location & Education</p>
              <p className="text-white">India • B.Tech CS (AI) @ ABESIT</p>
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-3">Social</p>
            <div className="space-y-2.5 max-w-[200px]">
              {[
                { name: "Github", url: "https://github.com/Vaibhavtech2006" },
                {
                  name: "Linkedin",
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
                  className="flex items-center justify-between py-1.5 border-b border-white/15 text-white hover:text-purple-400 hover:border-purple-400 transition-colors"
                >
                  <span>{s.name}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-2 md:text-right">
            <p className="text-gray-400">
              Designed and Engineered <br />
              by{" "}
              <span className="text-purple-400 font-semibold">
                Vaibhav Khandelwal
              </span>
            </p>
            <p className="text-emerald-400 font-mono text-xs">
              ● System Online • © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;