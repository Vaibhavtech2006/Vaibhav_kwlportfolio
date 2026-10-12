import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiTrendingUp, FiDatabase, FiCpu } from 'react-icons/fi';

// TERE IMAGES KE PATHS YAHAN HAIN
import vaibhavImg from "./assets/vaibhavimg.png"; 
import cartoonImg from "./assets/cartoon.png"; // Yahan apni cartoon image ka naam daal dena

// --- ADVANCED 3D MOUSE TRACKING TILT COMPONENT (TERI ORIGINAL IMAGE KE LIYE) ---
const TiltImage3D = ({ src }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative w-72 h-72 md:w-96 md:h-96 cursor-pointer z-20"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-green-500 via-blue-500 to-purple-600 rounded-3xl opacity-30 blur-2xl"
        style={{ transform: "translateZ(-30px)" }}
      ></div>
      <div 
        className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-[#0e0e0e] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
      >
        <img 
          src={src} 
          alt="Vaibhav Khandelwal" 
          className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

// --- 3D GLASS BALL EFFECT (CARTOON AVATAR KE LIYE) ---
const GlassBubble3D = ({ src }) => {
  return (
    <motion.div
      animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center mx-auto"
    >
      {/* 3D Glass Sphere Structure */}
      <div className="absolute inset-0 rounded-full border border-white/30 shadow-[inset_0_-20px_40px_rgba(255,255,255,0.2),_0_20px_50px_rgba(0,0,0,0.8)] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md">
        {/* Fake Lighting/Shine reflection inside the ball */}
        <div className="absolute top-2 left-4 w-16 h-10 bg-white opacity-40 rounded-full blur-[8px] rotate-[-45deg]"></div>
        <div className="absolute bottom-4 right-4 w-10 h-6 bg-white opacity-20 rounded-full blur-[6px] rotate-[-45deg]"></div>
      </div>
      
      {/* Cartoon sitting inside the bubble */}
      <img 
        src={src} 
        alt="3D Assistant" 
        className="relative z-10 w-[85%] h-[85%] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]" 
      />
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#050505] text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-2xl font-mono tracking-widest text-green-400"
        >
          Initializing Environment...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-white selection:text-black scroll-smooth">
      
      {/* 3D BACKGROUND GRID & GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30vw] -left-[10vw] w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[100px]"
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#050505]/80 backdrop-blur-md z-50 border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-black text-xl tracking-tighter text-white">VK.</span>
          <div className="hidden md:flex gap-6 text-sm font-bold tracking-wider text-gray-500 uppercase">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* HERO SECTION - TERA ORIGINAL LAYOUT */}
        <section id="about" className="flex flex-col md:flex-row items-center justify-between gap-12 pt-10 min-h-[85vh]">
          
          <div className="flex-1 space-y-6 z-10 relative">
            
            {/* FLOATING 3D CARTOON BUBBLE (Tujhe jahan chahiye, uske hisaab se absolute position kar sakte hain) */}
            <div className="hidden lg:block absolute -top-20 right-10">
               <GlassBubble3D src={cartoonImg} />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/20 text-green-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
              Engineering <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Scalable Systems.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Hi, I'm Vaibhav Khandelwal. AI Engineer & Full Stack Developer. I build autonomous agents, ML predictive models, and robust backend architectures. B.Tech CS (AI) @ ABESIT.
            </p>
            <div className="flex gap-4 pt-4 font-mono text-sm">
              <a href="#projects" className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors font-bold">
                View Architecture ↘
              </a>
              <a href="https://github.com/Vaibhavtech2006" target="_blank" rel="noreferrer" className="bg-[#111] border border-gray-800 px-6 py-3 rounded hover:border-gray-500 transition-colors text-white flex items-center gap-2">
                <FiGithub /> GitHub
              </a>
            </div>
            
            {/* Mobile View me Cartoon Avatar Text ke neeche aayega */}
            <div className="block lg:hidden mt-10">
               <GlassBubble3D src={cartoonImg} />
            </div>
          </div>

          {/* RIGHT SIDE: TERI REAL IMAGE W/ 3D HOVER */}
          <div className="w-full md:w-auto flex justify-center mt-10 md:mt-0">
             <TiltImage3D src={vaibhavImg} />
          </div>

        </section>

        {/* LEETCODE SECTION */}
        <section>
          <div className="bg-[#0e0e0e] border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
                <FiTrendingUp className="text-yellow-500" /> LeetCode Stats
              </h3>
              <p className="text-gray-500 text-sm mb-6">@Vaibhavtech2006</p>
              
              <div className="flex items-center gap-4">
                <div className="bg-[#161616] border border-gray-800 px-6 py-4 rounded-2xl">
                   <p className="text-xs text-gray-500 font-mono uppercase mb-1">Contest Rating</p>
                   <p className="text-4xl font-black text-white">1,815</p>
                </div>
                <div className="bg-[#161616] border border-gray-800 px-6 py-4 rounded-2xl">
                   <p className="text-xs text-gray-500 font-mono uppercase mb-1">Total Solved</p>
                   <p className="text-4xl font-black text-yellow-500">677</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 bg-[#161616] border border-gray-800 p-6 rounded-2xl font-mono text-sm">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1"><span className="text-cyan-400">Easy</span><span className="text-gray-400">208</span></div>
                    <div className="w-full h-1.5 bg-gray-900 rounded-full"><div className="bg-cyan-400 h-full w-[35%] rounded-full"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1"><span className="text-yellow-400">Medium</span><span className="text-gray-400">409</span></div>
                    <div className="w-full h-1.5 bg-gray-900 rounded-full"><div className="bg-yellow-400 h-full w-[45%] rounded-full"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1"><span className="text-red-400">Hard</span><span className="text-gray-400">60</span></div>
                    <div className="w-full h-1.5 bg-gray-900 rounded-full"><div className="bg-red-400 h-full w-[20%] rounded-full"></div></div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* PROJECTS (SYSTEM ARCHITECTURE UI) */}
        <section id="projects">
          <h2 className="text-3xl font-bold text-white mb-2">Architectures & Projects</h2>
          <p className="text-gray-500 mb-10">Things I've engineered, modeled, and shipped</p>
          
          <div className="space-y-12">
            
            {/* PROJECT 1: OLA.AI */}
            <div className="bg-[#0e0e0e] border border-gray-800 rounded-2xl p-1 md:p-2 group hover:border-gray-600 transition-colors">
              <div className="bg-[#161616] rounded-xl border border-gray-800 overflow-hidden">
                <div className="px-4 py-3 bg-[#111] border-b border-gray-800 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-gray-500">github.com/Vaibhavtech2006/OLA-AI-Data-agent</span>
                  <div className="w-10"></div>
                </div>
                
                <div className="p-10 flex flex-col items-center justify-center min-h-[300px] relative font-mono text-xs text-gray-300">
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:100%_40px] opacity-20 pointer-events-none"></div>
                  <div className="border border-gray-700 bg-black px-6 py-2 rounded-full z-10 flex items-center gap-2">
                    <span>User Query</span> <span className="text-gray-500">•</span> <span className="text-blue-400">FastAPI</span>
                  </div>
                  <div className="h-10 border-l border-dashed border-gray-600 my-1 relative"></div>
                  <div className="border border-indigo-500/50 bg-indigo-900/20 px-8 py-3 rounded-xl z-10 shadow-[0_0_20px_rgba(99,102,241,0.2)] flex items-center gap-2">
                    <span className="text-white">LangGraph Planner</span> <span className="text-gray-500">•</span> <span className="text-indigo-400">Groq LLM</span>
                  </div>
                  <div className="relative w-full max-w-[400px] h-12 mt-2">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full border-t border-dashed border-gray-600"></div>
                     {[10, 36, 63, 90].map((leftPos, i) => (
                       <div key={i} className="absolute top-0 h-full border-l border-dashed border-gray-600" style={{ left: `${leftPos}%` }}>
                         <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]"></div>
                       </div>
                     ))}
                  </div>
                  <div className="flex justify-between w-full max-w-[450px] gap-2 z-10 mt-2">
                    {['SQL Agent', 'ETL Node', 'EDA Agent', 'ML Trainer'].map((agent, i) => (
                      <div key={i} className="border border-gray-700 bg-[#0a0a0a] px-4 py-3 rounded-xl text-center hover:border-green-500/50 transition-colors">
                         <p className="font-bold text-white mb-1">{agent}</p>
                         <p className="text-[10px] text-gray-500">RAG</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-gray-500">01</span>
                  <span className="h-[1px] w-8 bg-gray-800"></span>
                  <span className="text-xs text-gray-500">Enterprise AI Architecture</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/30">Live</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">OLA.AI Data Agent</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Autonomous multi-agent analytics platform exploring the internals of dynamic task routing using LangGraph. Features a React IDE-style dashboard for real-time execution tracing and dataset profiling.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {['React.js', 'FastAPI', 'LangGraph', 'Python'].map(t => (
                      <span key={t} className="text-xs bg-[#161616] border border-gray-800 px-3 py-1.5 rounded text-gray-400">{t}</span>
                    ))}
                  </div>
                  <a href="https://ola-ai-data-agent.vercel.app/" target="_blank" rel="noreferrer" className="text-sm font-medium text-white hover:text-green-400 transition-colors border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2">
                    Source code <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* PROJECT 2: LayoffRadar AI */}
            <div className="bg-[#0e0e0e] border border-gray-800 rounded-2xl p-1 md:p-2 group hover:border-gray-600 transition-colors">
              <div className="bg-[#161616] rounded-xl border border-gray-800 overflow-hidden">
                <div className="px-4 py-3 bg-[#111] border-b border-gray-800 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                  </div>
                  <span className="text-xs font-mono text-gray-500">github.com/Vaibhavtech2006/LayoffRadar_AI</span>
                  <div className="w-10"></div>
                </div>
                
                <div className="p-10 flex flex-col md:flex-row items-center justify-center gap-4 min-h-[200px] relative font-mono text-xs text-gray-300">
                  <div className="border border-gray-700 bg-[#0a0a0a] px-6 py-4 rounded-xl text-center z-10 w-40">
                    <FiDatabase className="mx-auto mb-2 text-gray-500" size={20} />
                    <p className="font-bold text-white">Historical Data</p>
                    <p className="text-[10px] text-gray-500">JSON / CSV</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-600">→</span>
                    <span className="text-[10px] text-gray-600 mt-1">Pre-processing</span>
                  </div>
                  <div className="border border-red-500/50 bg-red-900/20 px-6 py-4 rounded-xl text-center z-10 w-40 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                    <FiCpu className="mx-auto mb-2 text-red-400" size={20} />
                    <p className="font-bold text-white">Predictive Model</p>
                    <p className="text-[10px] text-red-400">Scikit-Learn</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-600">→</span>
                    <span className="text-[10px] text-gray-600 mt-1">Forecast</span>
                  </div>
                  <div className="border border-gray-700 bg-[#0a0a0a] px-6 py-4 rounded-xl text-center z-10 w-40">
                    <FiTrendingUp className="mx-auto mb-2 text-green-400" size={20} />
                    <p className="font-bold text-white">Insights UI</p>
                    <p className="text-[10px] text-gray-500">React Dashboard</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-gray-500">02</span>
                  <span className="h-[1px] w-8 bg-gray-800"></span>
                  <span className="text-xs text-gray-500">Machine Learning Pipeline</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">LayoffRadar AI</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  A predictive AI model and analytics platform built to track, analyze, and forecast tech industry layoffs. Utilizes historical data trends and machine learning algorithms to provide actionable insights.
                </p>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex gap-2 flex-wrap">
                    {['Python', 'Scikit-Learn', 'Data Analytics', 'React'].map(t => (
                      <span key={t} className="text-xs bg-[#161616] border border-gray-800 px-3 py-1.5 rounded text-gray-400">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="https://github.com/Vaibhavtech2006/LayoffRadar_AI" target="_blank" rel="noreferrer" className="text-xs font-medium text-white hover:text-green-400 transition-colors border border-gray-700 px-3 py-2 rounded-lg flex items-center gap-2">
                       UI Repo <FiGithub />
                    </a>
                    <a href="https://github.com/Vaibhavtech2006/layoff_model" target="_blank" rel="noreferrer" className="text-xs font-medium text-white hover:text-red-400 transition-colors border border-gray-700 px-3 py-2 rounded-lg flex items-center gap-2">
                       ML Repo <FiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 3: Agent AI Voice */}
            <div className="bg-[#0e0e0e] border border-gray-800 rounded-2xl p-6 group hover:border-gray-600 transition-colors flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-gray-500">03</span>
                  <span className="text-xs text-gray-500">Voice Routing Logic</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Free Calling Agent AI</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Autonomous AI-powered calling agent utilizing Agentic workflows to automate complex voice interactions. Integrated Claude API with a Node.js backend.
                </p>
                <div className="flex gap-2 mb-6">
                  {['Node.js', 'Claude API', 'Agentic AI'].map(t => (
                    <span key={t} className="text-xs bg-[#161616] border border-gray-800 px-2 py-1 rounded text-gray-400">{t}</span>
                  ))}
                </div>
                <a href="https://github.com/Vaibhavtech2006/AgentAI" target="_blank" rel="noreferrer" className="text-sm border border-gray-700 text-white px-4 py-2 rounded-lg font-bold flex items-center justify-center gap-2 w-fit hover:bg-gray-800 transition-colors">
                  <FiGithub /> Source Code
                </a>
              </div>
              <div className="md:w-1/2 bg-[#161616] rounded-xl border border-gray-800 p-6 font-mono text-xs text-gray-400 flex flex-col justify-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                 <div className="space-y-4 z-10">
                    <div className="flex items-center gap-4">
                      <div className="px-3 py-1 border border-green-500/50 text-green-400 rounded bg-green-900/20 shadow-[0_0_10px_rgba(74,222,128,0.1)]">Incoming Call Audio</div>
                      <span className="text-gray-600">→</span>
                      <div className="px-3 py-1 border border-gray-700 rounded bg-black">Node.js Stream</div>
                    </div>
                    <div className="flex items-center gap-4 pl-10 border-l border-gray-700 ml-6 pb-2">
                      <span className="text-gray-600 -ml-1">↳</span>
                      <div className="px-3 py-1 border border-purple-500/50 text-purple-400 rounded bg-purple-900/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]">Claude Context API</div>
                    </div>
                    <div className="flex items-center gap-4 pl-10 border-l border-gray-700 ml-6">
                      <span className="text-gray-600 -ml-1">↳</span>
                      <div className="px-3 py-1 border border-blue-500/50 text-blue-400 rounded bg-blue-900/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]">Agentic Call Router</div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </section>

        {/* EXPERIENCE MINIMAL LIST */}
        <section id="experience">
          <h2 className="text-3xl font-bold text-white mb-10">Experience</h2>
          <div className="border-l border-gray-800 ml-2 space-y-12">
            {[
              {
                role: "Software Development Engineer Intern",
                company: "Architects Lab",
                date: "Aug 2026 – Aug 2026",
                desc: "Translated product requirements for Meta Developer Dashboard into Angular & TypeScript components. Developed REST API integrations."
              },
              {
                role: "Angular Developer Intern",
                company: "Cavisson Systems",
                date: "Sept 2025 – June 2026",
                desc: "Developed Highcharts-based visualizations and integrated REST APIs. Systematic debugging and UI quality checks."
              },
              {
                role: "Full Stack Web Developer",
                company: "Zidio Development",
                date: "Feb 2025 – Apr 2025",
                desc: "Deployed web apps using React.js and Node.js. Managed Linux servers."
              }
            ].map((exp, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-gray-500 rounded-full ring-4 ring-[#050505]"></div>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-mono text-gray-500">{exp.date}</span>
                </div>
                <p className="text-green-400 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER & CONTACT */}
        <section className="py-20 border-t border-gray-900 text-center">
          <p className="text-gray-500 font-mono text-sm mb-6">System Online • Ready for deployment</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's build something.</h2>
          <p className="text-gray-400 mb-10">Roles, collaborations, or an open-source bounty you want shipped.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
             <div className="bg-[#111] border border-gray-800 px-6 py-3 rounded-lg text-gray-300 font-mono text-sm flex items-center gap-4">
                <FiMail /> khandelwalvaibhav2006@gmail.com
             </div>
          </div>
          
          <div className="flex justify-center gap-6 mt-16 text-gray-500">
             <a href="https://github.com/Vaibhavtech2006" className="hover:text-white"><FiGithub size={24} /></a>
             <a href="https://www.linkedin.com/in/vaibhav-khandelwal-8686a2294/" className="hover:text-blue-500"><FiLinkedin size={24} /></a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;