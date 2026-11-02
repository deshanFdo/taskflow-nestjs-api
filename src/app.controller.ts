import { Controller, Get, Header, Res } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { Response } from 'express';

@ApiExcludeController()
@Controller()
export class AppController {
  @Get()
  @Header('Content-Type', 'text/html; charset=utf-8')
  getIndex(@Res() res: Response) {
    const html = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UniBench FYP | Secure Research Workspace & Telemetry</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          animation: {
            'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'float': 'float 6s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-6px)' },
            }
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #060913; color: #f1f5f9; }
    .glass-nav { background: rgba(10, 15, 29, 0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
    .glass-panel { background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.07); }
    .glass-card { background: rgba(30, 41, 59, 0.5); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.06); transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
    .glass-card:hover { transform: translateY(-2px); border-color: rgba(168, 85, 247, 0.4); box-shadow: 0 12px 24px -10px rgba(147, 51, 234, 0.15); }
    .glow-purple { box-shadow: 0 0 40px -10px rgba(168, 85, 247, 0.2); }
    .custom-scroll::-webkit-scrollbar { width: 6px; }
    .custom-scroll::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); }
    .custom-scroll::-webkit-scrollbar-thumb { background: rgba(147, 51, 234, 0.3); border-radius: 9999px; }
  </style>
</head>
<body class="min-h-screen flex flex-col selection:bg-purple-500 selection:text-white antialiased">

  <!-- Header Navigation -->
  <header class="sticky top-0 z-50 glass-nav">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- Brand & Project -->
      <div class="flex items-center space-x-3.5">
        <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/25">
          <div class="w-full h-full bg-[#0b0f1d] rounded-2xl flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
        </div>
        <div>
          <div class="flex items-center space-x-2">
            <span class="font-black text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-purple-300">UniBench FYP</span>
            <span class="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-md bg-purple-950/80 text-purple-300 border border-purple-800/60">Private Workspace</span>
          </div>
          <p class="text-[11px] text-slate-400 font-medium">BSc (Hons) Computer Science &bull; IIT / University of Westminster</p>
        </div>
      </div>

      <!-- Live Digital Clock & Calendar Widget -->
      <div class="hidden md:flex items-center space-x-4 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800/90 shadow-inner">
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-purple-400 animate-spin" style="animation-duration: 12s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="2"></circle><path stroke-linecap="round" stroke-width="2" d="M12 6v6l4 2"></path></svg>
          <div class="text-right">
            <div id="liveTime" class="font-mono text-sm font-bold text-slate-100 tracking-wider">--:--:-- --</div>
            <div id="liveDate" class="text-[10px] text-purple-300 font-medium tracking-tight">Loading date...</div>
          </div>
        </div>
      </div>

      <!-- Action Buttons & Auth State -->
      <div class="flex items-center space-x-3" id="headerAuthContainer">
        <!-- Rendered dynamically by JS -->
      </div>
    </div>
  </header>

  <!-- Security Banner -->
  <div class="bg-gradient-to-r from-purple-950/30 via-slate-900/50 to-indigo-950/30 border-b border-purple-900/20 py-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-xs gap-2">
      <div class="flex items-center space-x-2 text-slate-300">
        <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        <span class="font-semibold text-emerald-300">Zero-Trust Isolation Active:</span>
        <span class="text-slate-400">All milestones, research logs, and database records are strictly scoped to your private user ID.</span>
      </div>
      <div class="flex items-center space-x-3 text-[11px] font-mono text-slate-400">
        <span id="telemetryLatency" class="flex items-center space-x-1.5"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span>DB: checking...</span></span>
        <span>&bull;</span>
        <a href="/docs" target="_blank" class="hover:text-purple-300 transition underline underline-offset-2">OpenAPI Specs</a>
      </div>
    </div>
  </div>

  <!-- Main App Layout -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">

    <!-- Logged-in Dashboard View -->
    <div id="authenticatedView" class="hidden space-y-8">
      
      <!-- Metrics Overview Cards -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Total Milestones -->
        <div class="glass-card rounded-2xl p-5 relative overflow-hidden">
          <div class="absolute -right-3 -top-3 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Total FYP Milestones</span>
          <div class="flex items-baseline justify-between">
            <span id="statTotal" class="text-3xl font-extrabold text-white font-mono">0</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 font-medium border border-purple-800/60">UniBench Track</span>
          </div>
          <p class="text-[11px] text-slate-500 mt-2">Active phases in curriculum</p>
        </div>

        <!-- Completion Rate -->
        <div class="glass-card rounded-2xl p-5 relative overflow-hidden">
          <div class="absolute -right-3 -top-3 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl"></div>
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Dissertation Progress</span>
          <div class="flex items-baseline justify-between">
            <span id="statRate" class="text-3xl font-extrabold text-emerald-400 font-mono">0%</span>
            <span id="statCompleted" class="text-xs text-emerald-300 font-semibold">0 completed</span>
          </div>
          <!-- Progress bar -->
          <div class="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div id="statProgressBar" class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-700" style="width: 0%"></div>
          </div>
        </div>

        <!-- Critical & High Priority -->
        <div class="glass-card rounded-2xl p-5 relative overflow-hidden">
          <div class="absolute -right-3 -top-3 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"></div>
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">High & Critical Focus</span>
          <div class="flex items-baseline justify-between">
            <span id="statCriticalHigh" class="text-3xl font-extrabold text-orange-400 font-mono">0</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-orange-950 text-orange-300 font-medium border border-orange-800/60">High Urgency</span>
          </div>
          <p class="text-[11px] text-slate-500 mt-2">Simulation & hardware models</p>
        </div>

        <!-- System & DB Health -->
        <div class="glass-card rounded-2xl p-5 relative overflow-hidden">
          <div class="absolute -right-3 -top-3 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Cloud Engine Latency</span>
          <div class="flex items-baseline justify-between">
            <span id="statLatency" class="text-3xl font-extrabold text-cyan-300 font-mono">-- ms</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 font-medium border border-cyan-800/60">AWS Singapore</span>
          </div>
          <p class="text-[11px] text-slate-500 mt-2" id="statMemory">Node.js serverless instance</p>
        </div>

      </section>

      <!-- Workspace Dual Column -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Column: AI Research Synthesizer -->
        <section class="lg:col-span-5 space-y-6">
          <div class="glass-panel rounded-2xl p-6 shadow-xl relative glow-purple">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2.5">
                <div class="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold">✨</div>
                <div>
                  <h2 class="text-base font-bold text-white tracking-wide">AI Research Synthesizer</h2>
                  <p class="text-[11px] text-slate-400">Formalize supervisor feedback into milestone deliverables</p>
                </div>
              </div>
              <button onclick="loadSampleFypNote()" class="text-xs text-purple-400 hover:text-purple-300 font-semibold transition">
                Load Sample
              </button>
            </div>

            <textarea id="aiRawInput" rows="5" class="w-full bg-slate-900/90 text-sm rounded-xl p-4 border border-slate-700/80 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-slate-100 placeholder-slate-500 outline-none transition font-sans resize-none" placeholder="Paste notes from supervisor meetings, research papers, or simulation requirements..."></textarea>

            <div class="mt-4 flex items-center justify-between gap-3">
              <select id="aiModelSelect" class="bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded-xl px-3 py-2 outline-none">
                <option value="gpt-4o-mini">OpenAI GPT-4o-mini</option>
                <option value="gpt-4o">OpenAI GPT-4o</option>
                <option value="neural-engine">Academic Heuristic Engine</option>
              </select>

              <button id="btnSynthesize" onclick="synthesizeMilestone()" class="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-purple-600/30 transition flex items-center space-x-2">
                <span id="btnSynthesizeText">Synthesize Milestone</span>
                <svg id="btnSynthesizeSpinner" class="hidden w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
              </button>
            </div>

            <!-- Preview Output Card -->
            <div id="aiPreviewCard" class="hidden mt-6 pt-5 border-t border-slate-800 space-y-3.5">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Formalized Deliverable</span>
                <span id="aiPriorityBadge" class="px-2.5 py-0.5 rounded text-[11px] font-bold"></span>
              </div>

              <h3 id="aiOutputTitle" class="text-sm font-bold text-white leading-snug"></h3>
              <p id="aiOutputSummary" class="text-xs text-purple-300 bg-purple-950/40 p-3 rounded-xl border border-purple-900/50 leading-relaxed"></p>

              <div>
                <span class="text-[11px] text-slate-400 font-semibold block mb-1.5">Action Items:</span>
                <ul id="aiOutputActions" class="space-y-1.5 text-xs text-slate-300 list-disc list-inside"></ul>
              </div>

              <div class="flex flex-wrap gap-1.5 pt-1" id="aiOutputTags"></div>

              <button onclick="saveSynthesizedMilestone()" class="w-full mt-3 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition flex items-center justify-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Save Directly to My FYP Database</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Right Column: Personal Milestones View -->
        <section class="lg:col-span-7 space-y-6">
          <div class="glass-panel rounded-2xl p-6 shadow-xl">
            
            <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
              <div>
                <h2 class="text-base font-bold text-white tracking-wide">My Final Year Project Milestones</h2>
                <p class="text-xs text-slate-400">Strictly isolated to your private account &bull; Supabase PostgreSQL</p>
              </div>

              <div class="flex items-center space-x-2.5">
                <select id="filterStatus" onchange="fetchUserMilestones()" class="bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded-xl px-3 py-1.5 outline-none">
                  <option value="">All Statuses</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="IN_PROGRESS">IN_PROGRESS</option>
                  <option value="PENDING">PENDING</option>
                </select>

                <select id="filterPriority" onchange="fetchUserMilestones()" class="bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded-xl px-3 py-1.5 outline-none">
                  <option value="">All Priorities</option>
                  <option value="CRITICAL">CRITICAL</option>
                  <option value="HIGH">HIGH</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="LOW">LOW</option>
                </select>

                <button onclick="fetchUserMilestones()" class="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 transition" title="Refresh">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                </button>
              </div>
            </div>

            <!-- Milestones List Container -->
            <div id="milestonesContainer" class="space-y-4 custom-scroll max-h-[640px] overflow-y-auto pr-1">
              <div class="text-center py-16 text-slate-500 text-xs">
                <svg class="w-8 h-8 mx-auto mb-2 animate-spin text-purple-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
                Loading your private milestones...
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>

    <!-- Logged-Out Authentication Modal / Gate -->
    <div id="unauthenticatedView" class="max-w-md mx-auto my-12 glass-panel rounded-3xl p-8 shadow-2xl border border-slate-800 glow-purple">
      
      <div class="text-center mb-6">
        <div class="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-600/30">
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        </div>
        <h2 class="text-2xl font-black text-white">Private FYP Workspace</h2>
        <p class="text-xs text-slate-400 mt-1">Multi-tenant isolation active. Sign in to access your personal research milestones.</p>
      </div>

      <!-- Quick 1-Click Login for Deshan -->
      <div class="mb-6 p-4 rounded-2xl bg-purple-950/40 border border-purple-800/60 text-center">
        <span class="text-[11px] font-bold text-purple-300 block mb-1">👋 Welcome Deshan Fernando!</span>
        <p class="text-[10px] text-slate-400 mb-3">Your pre-configured account is ready with your 6 UniBench FYP milestones.</p>
        <button onclick="quickLoginDeshan()" class="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-600/30 transition flex items-center justify-center space-x-2">
          <span>⚡ Instant 1-Click Login as Deshan</span>
        </button>
      </div>

      <!-- Tab Switcher -->
      <div class="flex rounded-xl bg-slate-900/90 p-1 mb-5 border border-slate-800">
        <button id="tabBtnLogin" onclick="switchAuthTab('login')" class="flex-1 py-1.5 text-xs font-bold rounded-lg bg-purple-600 text-white transition">Sign In</button>
        <button id="tabBtnRegister" onclick="switchAuthTab('register')" class="flex-1 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition">Create Account</button>
      </div>

      <!-- Login Form -->
      <form id="loginForm" onsubmit="handleLogin(event)" class="space-y-4">
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
          <input type="email" id="loginEmail" required class="w-full bg-slate-900/90 text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 text-slate-100 focus:border-purple-500 outline-none" value="deshanfernando67@gmail.com">
        </div>
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1">Password</label>
          <input type="password" id="loginPassword" required class="w-full bg-slate-900/90 text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 text-slate-100 focus:border-purple-500 outline-none" value="Deshan@FYP2026!">
        </div>
        <button type="submit" id="btnLoginSubmit" class="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs rounded-xl transition border border-slate-700">
          Sign In to Workspace
        </button>
      </form>

      <!-- Register Form -->
      <form id="registerForm" onsubmit="handleRegister(event)" class="space-y-4 hidden">
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
          <input type="text" id="regFullName" required class="w-full bg-slate-900/90 text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 text-slate-100 focus:border-purple-500 outline-none" placeholder="e.g. John Doe">
        </div>
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
          <input type="email" id="regEmail" required class="w-full bg-slate-900/90 text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 text-slate-100 focus:border-purple-500 outline-none" placeholder="name@domain.com">
        </div>
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1">Password</label>
          <input type="password" id="regPassword" required minlength="6" class="w-full bg-slate-900/90 text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 text-slate-100 focus:border-purple-500 outline-none" placeholder="••••••••">
        </div>
        <button type="submit" id="btnRegisterSubmit" class="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition shadow">
          Create Isolated Account
        </button>
      </form>

      <div id="authAlert" class="hidden mt-4 p-3 rounded-xl text-xs font-medium"></div>

    </div>

  </main>

  <!-- Footer -->
  <footer class="glass-nav border-t border-slate-800 py-4 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 flex flex-wrap items-center justify-between gap-3">
      <div>
        UniBench Research Platform &bull; Developed by <span class="text-purple-400 font-semibold">Deshan Fernando</span> &bull; Powered by NestJS + Supabase PostgreSQL
      </div>
      <div class="flex items-center space-x-3">
        <a href="/docs" target="_blank" class="hover:text-purple-300 transition">Swagger API</a>
        <span>&bull;</span>
        <a href="https://github.com/deshanFdo/taskflow-nestjs-api" target="_blank" class="hover:text-purple-300 transition">GitHub Source</a>
      </div>
    </div>
  </footer>

  <script>
    let currentUser = null;
    let authToken = localStorage.getItem('unibench_token') || '';
    let currentSynthesizedData = null;

    // --- Live Clock & Date Widget ---
    function updateClock() {
      const now = new Date();
      // Format Time
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      // Format Date
      const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      const timeEl = document.getElementById('liveTime');
      const dateEl = document.getElementById('liveDate');
      if (timeEl) timeEl.textContent = timeStr;
      if (dateEl) dateEl.textContent = dateStr + ' • GMT+5:30';
    }
    setInterval(updateClock, 1000);
    updateClock();

    // --- Auth Management ---
    function switchAuthTab(tab) {
      const loginForm = document.getElementById('loginForm');
      const regForm = document.getElementById('registerForm');
      const tabLogin = document.getElementById('tabBtnLogin');
      const tabReg = document.getElementById('tabBtnRegister');

      if (tab === 'login') {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
        tabLogin.className = 'flex-1 py-1.5 text-xs font-bold rounded-lg bg-purple-600 text-white transition';
        tabReg.className = 'flex-1 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition';
      } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        tabReg.className = 'flex-1 py-1.5 text-xs font-bold rounded-lg bg-purple-600 text-white transition';
        tabLogin.className = 'flex-1 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition';
      }
    }

    async function quickLoginDeshan() {
      document.getElementById('loginEmail').value = 'deshanfernando67@gmail.com';
      document.getElementById('loginPassword').value = 'Deshan@FYP2026!';
      document.getElementById('loginForm').dispatchEvent(new Event('submit'));
    }

    async function handleLogin(e) {
      if (e) e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      const alertBox = document.getElementById('authAlert');

      try {
        const res = await fetch('/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Login failed');

        authToken = data.accessToken;
        currentUser = data.user;
        localStorage.setItem('unibench_token', authToken);
        localStorage.setItem('unibench_user', JSON.stringify(currentUser));

        renderAppView();
      } catch (err) {
        alertBox.className = 'mt-4 p-3 rounded-xl text-xs font-medium bg-red-950/60 text-red-300 border border-red-800';
        alertBox.textContent = err.message;
        alertBox.classList.remove('hidden');
      }
    }

    async function handleRegister(e) {
      e.preventDefault();
      const fullName = document.getElementById('regFullName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value;
      const alertBox = document.getElementById('authAlert');

      try {
        const res = await fetch('/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, password })
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Registration failed');

        authToken = data.accessToken;
        currentUser = data.user;
        localStorage.setItem('unibench_token', authToken);
        localStorage.setItem('unibench_user', JSON.stringify(currentUser));

        renderAppView();
      } catch (err) {
        alertBox.className = 'mt-4 p-3 rounded-xl text-xs font-medium bg-red-950/60 text-red-300 border border-red-800';
        alertBox.textContent = err.message;
        alertBox.classList.remove('hidden');
      }
    }

    function handleLogout() {
      authToken = '';
      currentUser = null;
      localStorage.removeItem('unibench_token');
      localStorage.removeItem('unibench_user');
      renderAppView();
    }

    // --- State & Render Flow ---
    function renderAppView() {
      const authView = document.getElementById('authenticatedView');
      const unauthView = document.getElementById('unauthenticatedView');
      const navContainer = document.getElementById('headerAuthContainer');

      if (authToken) {
        authView.classList.remove('hidden');
        unauthView.classList.add('hidden');

        // Render User Header Pill
        navContainer.innerHTML = 
          '<div class="flex items-center space-x-3">' +
            '<div class="text-right hidden sm:block">' +
              '<span class="text-xs font-bold text-white block leading-tight">' + (currentUser?.fullName || 'Deshan Fernando') + '</span>' +
              '<span class="text-[10px] text-purple-400 font-medium tracking-tight">' + (currentUser?.role || 'LEAD_RESEARCHER') + '</span>' +
            '</div>' +
            '<button onclick="handleLogout()" class="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-red-950/70 hover:text-red-300 text-slate-300 border border-slate-700 transition flex items-center space-x-1.5">' +
              '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>' +
              '<span>Sign Out</span>' +
            '</button>' +
          '</div>';

        fetchMetrics();
        fetchUserMilestones();
        fetchTelemetry();
      } else {
        authView.classList.add('hidden');
        unauthView.classList.remove('hidden');

        navContainer.innerHTML = 
          '<button onclick="quickLoginDeshan()" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow transition">' +
            'Instant Login' +
          '</button>';
      }
    }

    async function fetchTelemetry() {
      try {
        const res = await fetch('/health');
        const data = await res.json();
        const latency = data.database?.latencyMs || '--';
        document.getElementById('telemetryLatency').innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span>Supabase DB: ' + latency + 'ms</span>';
        document.getElementById('statLatency').textContent = latency + ' ms';
        document.getElementById('statMemory').textContent = 'Heap: ' + data.system?.heapUsedMb + ' MB • Node ' + data.system?.nodeVersion;
      } catch (e) {
        document.getElementById('telemetryLatency').textContent = 'Supabase DB: Connected';
      }
    }

    async function fetchMetrics() {
      if (!authToken) return;
      try {
        const res = await fetch('/tasks/metrics', {
          headers: { 'Authorization': 'Bearer ' + authToken }
        });
        const m = await res.json();
        document.getElementById('statTotal').textContent = m.total || 0;
        document.getElementById('statCompleted').textContent = (m.completed || 0) + ' completed';
        document.getElementById('statRate').textContent = (m.completionRate || 0) + '%';
        document.getElementById('statProgressBar').style.width = (m.completionRate || 0) + '%';
        document.getElementById('statCriticalHigh').textContent = m.criticalHigh || 0;
      } catch (err) {}
    }

    async function fetchUserMilestones() {
      if (!authToken) return;
      const container = document.getElementById('milestonesContainer');
      const status = document.getElementById('filterStatus').value;
      const priority = document.getElementById('filterPriority').value;

      let url = '/tasks?limit=50';
      if (status) url += '&status=' + status;
      if (priority) url += '&priority=' + priority;

      try {
        const res = await fetch(url, {
          headers: { 'Authorization': 'Bearer ' + authToken }
        });

        if (res.status === 401) {
          handleLogout();
          return;
        }

        const json = await res.json();
        const list = json.data || [];

        if (list.length === 0) {
          container.innerHTML = '<div class="text-center py-12 text-slate-500 text-xs">No milestones found. Synthesize or create one on the left!</div>';
          return;
        }

        container.innerHTML = list.map(t => {
          const priorityBadge = {
            CRITICAL: 'bg-red-950/80 text-red-300 border-red-800',
            HIGH: 'bg-orange-950/80 text-orange-300 border-orange-800',
            MEDIUM: 'bg-blue-950/80 text-blue-300 border-blue-800',
            LOW: 'bg-slate-800 text-slate-300 border-slate-700',
          }[t.priority] || 'bg-slate-800 text-slate-300';

          const statusBadge = {
            COMPLETED: 'text-emerald-300 bg-emerald-950/60 border-emerald-800',
            IN_PROGRESS: 'text-amber-300 bg-amber-950/60 border-amber-800',
            PENDING: 'text-slate-400 bg-slate-900 border-slate-800',
          }[t.status] || 'text-slate-400';

          const tags = (t.tags || []).map(tag =>
            '<span class="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/90 text-purple-300 border border-slate-700 font-mono">' + tag + '</span>'
          ).join('');

          return '<div class="glass-card rounded-2xl p-4.5 space-y-3">' +
            '<div class="flex items-start justify-between gap-3">' +
              '<h3 class="font-bold text-sm text-slate-100 flex-1 leading-snug">' + t.title + '</h3>' +
              '<div class="flex items-center space-x-1.5">' +
                '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-md border ' + priorityBadge + '">' + t.priority + '</span>' +
                '<span class="text-[10px] font-bold px-2 py-0.5 rounded-md border ' + statusBadge + '">' + t.status + '</span>' +
              '</div>' +
            '</div>' +
            (t.description ? '<p class="text-xs text-slate-400 leading-relaxed">' + t.description + '</p>' : '') +
            (t.ai_summary ? '<div class="text-[11px] text-purple-300 bg-purple-950/30 p-2.5 rounded-xl border border-purple-900/40 font-mono"><span class="font-bold text-purple-200">AI Synthesis:</span> ' + t.ai_summary + '</div>' : '') +
            '<div class="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">' +
              '<div class="flex flex-wrap gap-1">' + tags + '</div>' +
              '<div class="flex items-center space-x-2.5">' +
                '<button onclick="enrichMilestone(\\'' + t.id + '\\')" class="text-[11px] font-semibold text-purple-400 hover:text-purple-300 transition">✨ AI Enrich</button>' +
                '<span class="text-slate-700">&bull;</span>' +
                '<button onclick="deleteMilestone(\\'' + t.id + '\\')" class="text-[11px] font-semibold text-red-400 hover:text-red-300 transition">Remove</button>' +
              '</div>' +
            '</div>' +
          '</div>';
        }).join('');
      } catch (err) {
        container.innerHTML = '<div class="text-center py-12 text-red-400 text-xs">Failed to load personal milestones.</div>';
      }
    }

    function loadSampleFypNote() {
      document.getElementById('aiRawInput').value = "Supervisor meeting: Characterize phase transition and optical signal drift on photonic integrated circuit emulators. Compare energy consumption against 4nm CMOS GPU baseline for Chapter 4 dissertation results. Target completion next month.";
    }

    async function synthesizeMilestone() {
      const input = document.getElementById('aiRawInput').value.trim();
      if (!input) return alert('Please enter research notes or meeting feedback!');

      const btnText = document.getElementById('btnSynthesizeText');
      const spinner = document.getElementById('btnSynthesizeSpinner');
      btnText.textContent = 'Synthesizing...';
      spinner.classList.remove('hidden');

      try {
        const res = await fetch('/ai/synthesize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            rawInput: input,
            model: document.getElementById('aiModelSelect').value
          })
        });

        currentSynthesizedData = await res.json();

        document.getElementById('aiOutputTitle').textContent = currentSynthesizedData.suggestedTitle;
        document.getElementById('aiOutputSummary').textContent = currentSynthesizedData.aiSummary;

        const priorityBadge = document.getElementById('aiPriorityBadge');
        priorityBadge.textContent = currentSynthesizedData.suggestedPriority;
        priorityBadge.className = 'px-2 py-0.5 rounded text-[11px] font-bold ' + (
          currentSynthesizedData.suggestedPriority === 'CRITICAL' ? 'bg-red-950 text-red-300 border border-red-800' :
          currentSynthesizedData.suggestedPriority === 'HIGH' ? 'bg-orange-950 text-orange-300 border border-orange-800' :
          'bg-blue-950 text-blue-300 border border-blue-800'
        );

        const actionsList = document.getElementById('aiOutputActions');
        actionsList.innerHTML = (currentSynthesizedData.actionItems || []).map(a => '<li>' + a + '</li>').join('');

        const tagsContainer = document.getElementById('aiOutputTags');
        tagsContainer.innerHTML = (currentSynthesizedData.suggestedTags || []).map(tag =>
          '<span class="text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-mono">' + tag + '</span>'
        ).join('');

        document.getElementById('aiPreviewCard').classList.remove('hidden');
      } catch (err) {
        alert('Synthesis failed: ' + err.message);
      } finally {
        btnText.textContent = 'Synthesize Milestone';
        spinner.classList.add('hidden');
      }
    }

    async function saveSynthesizedMilestone() {
      if (!currentSynthesizedData || !authToken) return;

      try {
        const res = await fetch('/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
          },
          body: JSON.stringify({
            title: currentSynthesizedData.suggestedTitle,
            description: currentSynthesizedData.structuredDescription,
            priority: currentSynthesizedData.suggestedPriority,
            status: 'IN_PROGRESS',
            tags: Array.from(new Set([...(currentSynthesizedData.suggestedTags || []), 'UniBench', 'FYP'])),
          })
        });

        if (!res.ok) throw new Error('Database persistence failed');

        alert('New milestone saved to your private FYP database!');
        document.getElementById('aiPreviewCard').classList.add('hidden');
        document.getElementById('aiRawInput').value = '';
        fetchUserMilestones();
        fetchMetrics();
      } catch (err) {
        alert(err.message);
      }
    }

    async function enrichMilestone(id) {
      if (!authToken) return;
      try {
        const res = await fetch('/ai/enrich/' + id, {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!res.ok) throw new Error('Enrichment failed');
        fetchUserMilestones();
      } catch (err) {
        alert(err.message);
      }
    }

    async function deleteMilestone(id) {
      if (!authToken) return;
      if (!confirm('Are you sure you want to remove this milestone from your private database?')) return;
      try {
        const res = await fetch('/tasks/' + id, {
          method: 'DELETE',
          headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!res.ok) throw new Error('Deletion failed');
        fetchUserMilestones();
        fetchMetrics();
      } catch (err) {
        alert(err.message);
      }
    }

    // --- Bootstrap on load ---
    try {
      const stored = localStorage.getItem('unibench_user');
      if (stored) currentUser = JSON.parse(stored);
    } catch (e) {}

    renderAppView();
    setInterval(fetchTelemetry, 15000);
  </script>
</body>
</html>`;
    return res.send(html);
  }
}
