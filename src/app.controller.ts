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
  <title>UniBench FYP | Full-Fledged Research & Milestone Tracker</title>
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
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #060913; color: #f1f5f9; }
    .glass-sidebar { background: rgba(10, 15, 29, 0.95); backdrop-filter: blur(20px); border-right: 1px solid rgba(255, 255, 255, 0.08); }
    .glass-nav { background: rgba(10, 15, 29, 0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
    .glass-panel { background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.07); }
    .glass-card { background: rgba(30, 41, 59, 0.55); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.06); transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
    .glass-card:hover { transform: translateY(-2px); border-color: rgba(168, 85, 247, 0.45); box-shadow: 0 12px 24px -10px rgba(147, 51, 234, 0.15); }
    .glow-purple { box-shadow: 0 0 40px -10px rgba(168, 85, 247, 0.2); }
    .custom-scroll::-webkit-scrollbar { width: 6px; }
    .custom-scroll::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); }
    .custom-scroll::-webkit-scrollbar-thumb { background: rgba(147, 51, 234, 0.3); border-radius: 9999px; }
  </style>
</head>
<body class="min-h-screen flex selection:bg-purple-500 selection:text-white antialiased overflow-x-hidden">

  <!-- LEFT SIDEBAR -->
  <aside id="sidebar" class="w-64 glass-sidebar fixed inset-y-0 left-0 z-40 flex flex-col transition-all duration-300">
    <!-- Sidebar Header -->
    <div class="h-20 flex items-center px-6 border-b border-slate-800/80 gap-3">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/25 flex-shrink-0">
        <div class="w-full h-full bg-[#0b0f1d] rounded-xl flex items-center justify-center">
          <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
        </div>
      </div>
      <div class="overflow-hidden">
        <h1 class="font-black text-base tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 truncate" id="sidebarProjectTitle">UniBench FYP</h1>
        <p class="text-[10px] text-purple-400 font-bold uppercase tracking-wider">v2.0 Research Suite</p>
      </div>
    </div>

    <!-- Navigation Menu Items -->
    <nav class="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scroll">
      <button onclick="switchView('tracker')" id="nav-tracker" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-purple-600/20 text-purple-300 border border-purple-500/30 transition">
        <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
        <span>Milestone Tracker</span>
      </button>

      <button onclick="switchView('ai')" id="nav-ai" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition">
        <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        <span>AI Research Synthesizer</span>
      </button>

      <button onclick="switchView('analytics')" id="nav-analytics" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition">
        <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        <span>Research Analytics</span>
      </button>

      <button onclick="switchView('settings')" id="nav-settings" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition">
        <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>
        <span>Project Customization</span>
      </button>

      <button onclick="switchView('security')" id="nav-security" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition">
        <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        <span>Privacy & Zero-Trust</span>
      </button>

      <div class="pt-4 pb-2 border-t border-slate-800/80">
        <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3.5">API & Documentation</span>
      </div>

      <a href="/docs" target="_blank" class="w-full flex items-center space-x-3 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 transition">
        <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
        <span>Swagger OpenAPI</span>
      </a>

      <a href="https://github.com/deshanFdo/taskflow-nestjs-api" target="_blank" class="w-full flex items-center space-x-3 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 transition">
        <svg class="w-4 h-4 text-slate-400 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        <span>GitHub Repository</span>
      </a>
    </nav>

    <!-- Sidebar Bottom User Profile -->
    <div class="p-4 border-t border-slate-800/80 bg-slate-950/60" id="sidebarUserProfile">
      <!-- Populated dynamically -->
    </div>
  </aside>

  <!-- MAIN VIEWPORT (Offset by Sidebar) -->
  <div class="flex-1 ml-64 flex flex-col min-h-screen">

    <!-- Top Navigation Header -->
    <header class="h-20 glass-nav sticky top-0 z-30 flex items-center justify-between px-8">
      
      <!-- Left: Dynamic Subheader & Active View Title -->
      <div>
        <h2 id="viewHeaderTitle" class="text-lg font-extrabold text-white tracking-tight">Milestone Tracker</h2>
        <p id="viewHeaderSubtitle" class="text-xs text-slate-400">Manage and customize your Final Year Project deliverables</p>
      </div>

      <!-- Right: Live Clock & Date Widget + Action Button -->
      <div class="flex items-center space-x-4">
        <!-- Live Clock -->
        <div class="flex items-center space-x-3 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <div class="text-right">
            <div id="liveClock" class="font-mono text-sm font-bold text-white tracking-wider">--:--:-- --</div>
            <div id="liveDate" class="text-[10px] text-purple-300 font-medium">Loading date...</div>
          </div>
        </div>

        <!-- Add Milestone Button -->
        <button onclick="openCreateModal()" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-600/30 transition flex items-center space-x-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          <span>New Milestone</span>
        </button>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="flex-1 p-8 space-y-8">
      
      <!-- AUTHENTICATED WORKSPACE CONTAINER -->
      <div id="authAppContainer" class="space-y-8">

        <!-- 1. TRACKER VIEW (Kanban & List) -->
        <div id="view-tracker-content" class="space-y-6">
          
          <!-- Top Telemetry & Metric Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="glass-card rounded-2xl p-5">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Total Milestones</span>
              <div class="flex items-baseline justify-between">
                <span id="metricTotal" class="text-3xl font-extrabold text-white font-mono">0</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">FYP Track</span>
              </div>
              <p class="text-[11px] text-slate-500 mt-2">Active phases in curriculum</p>
            </div>

            <div class="glass-card rounded-2xl p-5">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Thesis Completion</span>
              <div class="flex items-baseline justify-between">
                <span id="metricRate" class="text-3xl font-extrabold text-emerald-400 font-mono">0%</span>
                <span id="metricCompleted" class="text-xs text-emerald-300 font-semibold">0 done</span>
              </div>
              <div class="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div id="metricProgressBar" class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-700" style="width: 0%"></div>
              </div>
            </div>

            <div class="glass-card rounded-2xl p-5">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Critical Urgency</span>
              <div class="flex items-baseline justify-between">
                <span id="metricCritical" class="text-3xl font-extrabold text-orange-400 font-mono">0</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-800">High Focus</span>
              </div>
              <p class="text-[11px] text-slate-500 mt-2">Requires experimental runs</p>
            </div>

            <div class="glass-card rounded-2xl p-5">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Supabase DB Latency</span>
              <div class="flex items-baseline justify-between">
                <span id="metricLatency" class="text-3xl font-extrabold text-cyan-300 font-mono">-- ms</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">PostgreSQL</span>
              </div>
              <p class="text-[11px] text-slate-500 mt-2" id="metricHost">AWS Singapore ap-southeast-1</p>
            </div>
          </div>

          <!-- Controls Bar -->
          <div class="glass-panel rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
            
            <div class="flex items-center space-x-3 flex-1 min-w-[240px]">
              <div class="relative w-full max-w-xs">
                <input type="text" id="searchInput" oninput="debounceFetch()" placeholder="Search milestones or tags..." class="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-purple-500">
                <svg class="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>

              <select id="filterStatus" onchange="fetchMilestones()" class="bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded-xl px-3 py-2 outline-none">
                <option value="">All Statuses</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="PENDING">PENDING</option>
              </select>

              <select id="filterPriority" onchange="fetchMilestones()" class="bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded-xl px-3 py-2 outline-none">
                <option value="">All Priorities</option>
                <option value="CRITICAL">CRITICAL</option>
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
              </select>
            </div>

            <!-- View Toggles: Kanban vs List -->
            <div class="flex items-center space-x-2">
              <button onclick="setViewMode('kanban')" id="btnViewKanban" class="px-3 py-1.5 text-xs font-bold rounded-lg bg-purple-600 text-white transition flex items-center space-x-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"/></svg>
                <span>Kanban Board</span>
              </button>
              <button onclick="setViewMode('list')" id="btnViewList" class="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 text-slate-400 hover:text-white transition flex items-center space-x-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                <span>List View</span>
              </button>
            </div>

          </div>

          <!-- Milestones View Container (Kanban or List) -->
          <div id="milestonesViewContainer">
            <!-- Rendered by JS -->
          </div>

        </div>

        <!-- 2. AI SYNTHESIZER VIEW -->
        <div id="view-ai-content" class="hidden space-y-6">
          <div class="glass-panel rounded-3xl p-8 glow-purple max-w-4xl mx-auto space-y-6">
            <div class="flex items-center justify-between border-b border-slate-800 pb-5">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-lg">✨</div>
                <div>
                  <h3 class="text-lg font-bold text-white">AI Research Synthesizer</h3>
                  <p class="text-xs text-slate-400">Powered by Google Gemini 1.5 Flash (via securely injected Vercel API key)</p>
                </div>
              </div>
              <button onclick="loadSampleFypNote()" class="text-xs text-purple-400 hover:text-purple-300 font-bold px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-800/60 transition">
                Load Supervisor Sample
              </button>
            </div>

            <textarea id="aiRawInputFull" rows="6" class="w-full bg-slate-900/90 text-sm rounded-2xl p-4 border border-slate-700/80 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-slate-100 placeholder-slate-500 outline-none transition font-sans resize-none" placeholder="Paste unorganized notes from your supervisor, academic paper abstract, or experimental benchmarks to synthesize..."></textarea>

            <div class="flex items-center justify-between pt-2">
              <span class="text-xs text-emerald-400 font-medium flex items-center space-x-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Encrypted API Key Active in Vercel Cloud</span>
              </span>

              <button id="btnSynthesizeFull" onclick="synthesizeMilestoneFull()" class="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-600/30 transition flex items-center space-x-2">
                <span id="btnSynthesizeFullText">Synthesize Milestone with Gemini</span>
                <svg id="btnSynthesizeFullSpinner" class="hidden w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
              </button>
            </div>

            <!-- Preview Result Box -->
            <div id="aiFullPreviewBox" class="hidden mt-6 p-6 rounded-2xl bg-slate-900/90 border border-purple-500/30 space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Formalized Deliverable</span>
                <span id="aiFullPriorityBadge" class="px-2.5 py-0.5 rounded text-xs font-bold"></span>
              </div>

              <h4 id="aiFullTitle" class="text-base font-bold text-white"></h4>
              <p id="aiFullSummary" class="text-xs text-purple-300 bg-purple-950/40 p-3 rounded-xl border border-purple-900/50 leading-relaxed"></p>

              <div>
                <span class="text-xs text-slate-400 font-semibold block mb-1.5">Deliverable Breakdown:</span>
                <ul id="aiFullActions" class="space-y-1.5 text-xs text-slate-300 list-disc list-inside"></ul>
              </div>

              <div class="flex flex-wrap gap-1.5" id="aiFullTags"></div>

              <button onclick="saveFullAiMilestone()" class="w-full mt-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Save Directly to My FYP Database</span>
              </button>
            </div>
          </div>
        </div>

        <!-- 3. PROJECT CUSTOMIZATION VIEW -->
        <div id="view-settings-content" class="hidden space-y-6">
          <div class="glass-panel rounded-3xl p-8 max-w-3xl mx-auto space-y-6">
            <div class="border-b border-slate-800 pb-4">
              <h3 class="text-lg font-bold text-white">Project Customization</h3>
              <p class="text-xs text-slate-400">Tailor the workspace metadata, supervisor details, and dissertation timeline.</p>
            </div>

            <form onsubmit="saveProjectCustomization(event)" class="space-y-5">
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">Project Title</label>
                <input type="text" id="custProjectTitle" class="w-full bg-slate-900 border border-slate-700 text-sm rounded-xl px-4 py-2.5 text-white outline-none focus:border-purple-500" value="UniBench FYP">
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">Degree & University</label>
                  <input type="text" id="custUniversity" class="w-full bg-slate-900 border border-slate-700 text-sm rounded-xl px-4 py-2.5 text-white outline-none focus:border-purple-500" value="BSc (Hons) Computer Science, IIT / Westminster">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">Target Defense Date</label>
                  <input type="text" id="custDefenseDate" class="w-full bg-slate-900 border border-slate-700 text-sm rounded-xl px-4 py-2.5 text-white outline-none focus:border-purple-500" value="May 2027">
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">Supervisor & Research Group</label>
                <input type="text" id="custSupervisor" class="w-full bg-slate-900 border border-slate-700 text-sm rounded-xl px-4 py-2.5 text-white outline-none focus:border-purple-500" value="Dr. Informatics / Physical Neural Computing Lab">
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">Target Substrate Domains</label>
                <input type="text" id="custSubstrates" class="w-full bg-slate-900 border border-slate-700 text-sm rounded-xl px-4 py-2.5 text-white outline-none focus:border-purple-500" value="Memristor, Photonics, Neuromorphic, Joules/MAC">
              </div>

              <button type="submit" class="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg transition">
                Save Workspace Customization
              </button>
            </form>
          </div>
        </div>

        <!-- 4. RESEARCH ANALYTICS VIEW -->
        <div id="view-analytics-content" class="hidden space-y-6">
          <div class="glass-panel rounded-3xl p-8 max-w-4xl mx-auto space-y-6">
            <h3 class="text-lg font-bold text-white border-b border-slate-800 pb-4">Research & Dissertation Analytics</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <span class="text-3xl font-extrabold text-purple-400 font-mono" id="anaTotal">6</span>
                <span class="block text-xs text-slate-400 mt-1 font-semibold">Total Phases</span>
              </div>
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <span class="text-3xl font-extrabold text-emerald-400 font-mono" id="anaCompleted">2</span>
                <span class="block text-xs text-slate-400 mt-1 font-semibold">Verified Completed</span>
              </div>
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <span class="text-3xl font-extrabold text-amber-400 font-mono" id="anaRemaining">4</span>
                <span class="block text-xs text-slate-400 mt-1 font-semibold">Active & Pending</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider">Substrate Research Coverage</h4>
              <div class="flex flex-wrap gap-2 pt-1" id="anaTagsDistribution">
                <!-- tags distribution -->
              </div>
            </div>
          </div>
        </div>

        <!-- 5. SECURITY & PRIVACY VIEW -->
        <div id="view-security-content" class="hidden space-y-6">
          <div class="glass-panel rounded-3xl p-8 max-w-3xl mx-auto space-y-6">
            <div class="border-b border-slate-800 pb-4 flex items-center space-x-3">
              <div class="w-10 h-10 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">🔒</div>
              <div>
                <h3 class="text-lg font-bold text-white">Zero-Trust Isolation Architecture</h3>
                <p class="text-xs text-slate-400">Guaranteed partition privacy for your research records</p>
              </div>
            </div>

            <div class="space-y-4 text-xs text-slate-300 leading-relaxed">
              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span class="font-bold text-emerald-400 block mb-1">Row-Level Database Security (PostgreSQL)</span>
                Every SQL query executed by the NestJS backend strictly enforces <code class="text-purple-300 font-mono">WHERE user_id = :authenticatedUserId</code>. An unauthenticated or foreign user cannot access or query your rows.
              </div>

              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span class="font-bold text-purple-400 block mb-1">Encrypted Vercel Environment Variables</span>
                The Gemini AI API Key is stored securely within Vercel's encrypted serverless key-vault and is never exposed in git, client bundles, or frontend DOM.
              </div>

              <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span class="font-bold text-cyan-400 block mb-1">JWT Bearer Token Signature</span>
                Session verification runs with cryptographic signatures expiring after 7 days of inactivity.
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- UNAUTHENTICATED LOGIN / REGISTRATION GATE -->
      <div id="unauthGateContainer" class="max-w-md mx-auto my-12 glass-panel rounded-3xl p-8 shadow-2xl border border-slate-800 glow-purple">
        <div class="text-center mb-6">
          <div class="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-600/30">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <h2 class="text-2xl font-black text-white">Private FYP Workspace</h2>
          <p class="text-xs text-slate-400 mt-1">Multi-tenant isolation active. Sign in to access your personal research milestones.</p>
        </div>

        <!-- 1-Click Quick Login for Deshan -->
        <div class="mb-6 p-4 rounded-2xl bg-purple-950/40 border border-purple-800/60 text-center">
          <span class="text-xs font-bold text-purple-300 block mb-1">👋 Welcome Deshan Fernando!</span>
          <p class="text-[11px] text-slate-400 mb-3">Your pre-configured account is ready with your 6 UniBench FYP milestones.</p>
          <button onclick="quickLoginDeshan()" class="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-600/30 transition flex items-center justify-center space-x-2">
            <span>⚡ Instant 1-Click Login as Deshan</span>
          </button>
        </div>

        <div class="flex rounded-xl bg-slate-900/90 p-1 mb-5 border border-slate-800">
          <button id="tabBtnLogin" onclick="switchAuthTab('login')" class="flex-1 py-1.5 text-xs font-bold rounded-lg bg-purple-600 text-white transition">Sign In</button>
          <button id="tabBtnRegister" onclick="switchAuthTab('register')" class="flex-1 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition">Create Account</button>
        </div>

        <form id="loginForm" onsubmit="handleLogin(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-medium text-slate-300 mb-1">Email</label>
            <input type="email" id="loginEmail" required class="w-full bg-slate-900/90 text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 text-slate-100 outline-none" value="deshanfernando67@gmail.com">
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-300 mb-1">Password</label>
            <input type="password" id="loginPassword" required class="w-full bg-slate-900/90 text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 text-slate-100 outline-none" value="Deshan@FYP2026!">
          </div>
          <button type="submit" class="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs rounded-xl transition border border-slate-700">
            Sign In to Workspace
          </button>
        </form>

        <form id="registerForm" onsubmit="handleRegister(event)" class="space-y-4 hidden">
          <div>
            <label class="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
            <input type="text" id="regFullName" required class="w-full bg-slate-900/90 text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 text-slate-100 outline-none" placeholder="e.g. John Doe">
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-300 mb-1">Email</label>
            <input type="email" id="regEmail" required class="w-full bg-slate-900/90 text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 text-slate-100 outline-none" placeholder="name@domain.com">
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-300 mb-1">Password</label>
            <input type="password" id="regPassword" required minlength="6" class="w-full bg-slate-900/90 text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 text-slate-100 outline-none" placeholder="••••••••">
          </div>
          <button type="submit" class="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition shadow">
            Create Isolated Account
          </button>
        </form>

        <div id="authAlert" class="hidden mt-4 p-3 rounded-xl text-xs font-medium"></div>
      </div>

    </main>
  </div>

  <!-- EDIT / CUSTOMIZE MILESTONE MODAL -->
  <div id="editModal" class="hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="glass-panel rounded-3xl max-w-lg w-full p-6 space-y-4 border border-slate-700 glow-purple">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <h3 class="font-bold text-white text-base">Customize Milestone</h3>
        <button onclick="closeEditModal()" class="text-slate-400 hover:text-white">&times;</button>
      </div>

      <input type="hidden" id="editMilestoneId">

      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Milestone Title</label>
        <input type="text" id="editTitle" class="w-full bg-slate-900 border border-slate-700 text-sm rounded-xl p-2.5 text-white outline-none focus:border-purple-500">
      </div>

      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Description</label>
        <textarea id="editDesc" rows="3" class="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl p-2.5 text-white outline-none focus:border-purple-500"></textarea>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1">Status</label>
          <select id="editStatus" class="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl p-2 text-white outline-none">
            <option value="PENDING">PENDING</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1">Priority</label>
          <select id="editPriority" class="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl p-2 text-white outline-none">
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
            <option value="CRITICAL">CRITICAL</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Tags (comma-separated)</label>
        <input type="text" id="editTags" class="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl p-2.5 text-white outline-none focus:border-purple-500" placeholder="FYP, UniBench, Memristor">
      </div>

      <div class="flex items-center justify-end space-x-2 pt-2">
        <button onclick="closeEditModal()" class="px-4 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-semibold">Cancel</button>
        <button onclick="saveEditMilestone()" class="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold">Save Changes</button>
      </div>
    </div>
  </div>

  <!-- CREATE MILESTONE MODAL -->
  <div id="createModal" class="hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="glass-panel rounded-3xl max-w-lg w-full p-6 space-y-4 border border-slate-700 glow-purple">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <h3 class="font-bold text-white text-base">Create New FYP Milestone</h3>
        <button onclick="closeCreateModal()" class="text-slate-400 hover:text-white">&times;</button>
      </div>

      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Milestone Title</label>
        <input type="text" id="newTitle" placeholder="e.g. Milestone 7: Final Viva Presentation" class="w-full bg-slate-900 border border-slate-700 text-sm rounded-xl p-2.5 text-white outline-none focus:border-purple-500">
      </div>

      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Description</label>
        <textarea id="newDesc" rows="3" placeholder="Outline specific deliverables and methodologies..." class="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl p-2.5 text-white outline-none focus:border-purple-500"></textarea>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1">Status</label>
          <select id="newStatus" class="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl p-2 text-white outline-none">
            <option value="PENDING">PENDING</option>
            <option value="IN_PROGRESS" selected>IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1">Priority</label>
          <select id="newPriority" class="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl p-2 text-white outline-none">
            <option value="CRITICAL">CRITICAL</option>
            <option value="HIGH" selected>HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-xs font-medium text-slate-300 mb-1">Tags (comma-separated)</label>
        <input type="text" id="newTags" value="FYP, UniBench" class="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl p-2.5 text-white outline-none focus:border-purple-500">
      </div>

      <div class="flex items-center justify-end space-x-2 pt-2">
        <button onclick="closeCreateModal()" class="px-4 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-semibold">Cancel</button>
        <button onclick="submitCreateMilestone()" class="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-xs font-bold">Create Milestone</button>
      </div>
    </div>
  </div>

  <script>
    let authToken = localStorage.getItem('unibench_token') || '';
    let currentUser = null;
    let currentView = 'tracker';
    let viewMode = 'kanban'; // 'kanban' or 'list'
    let currentMilestones = [];
    let debounceTimer = null;
    let currentFullSynthesized = null;

    // --- Clock & Date Widget ---
    function updateLiveClock() {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      document.getElementById('liveClock').textContent = timeStr;
      document.getElementById('liveDate').textContent = dateStr + ' • GMT+5:30';
    }
    setInterval(updateLiveClock, 1000);
    updateLiveClock();

    // --- Sidebar Navigation Switcher ---
    function switchView(view) {
      currentView = view;
      const views = ['tracker', 'ai', 'settings', 'analytics', 'security'];
      views.forEach(v => {
        const content = document.getElementById('view-' + v + '-content');
        const nav = document.getElementById('nav-' + v);
        if (content) content.classList.add('hidden');
        if (nav) {
          nav.className = 'w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition';
        }
      });

      document.getElementById('view-' + view + '-content').classList.remove('hidden');
      const activeNav = document.getElementById('nav-' + view);
      if (activeNav) {
        activeNav.className = 'w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-purple-600/20 text-purple-300 border border-purple-500/30 transition';
      }

      const titles = {
        tracker: ['Milestone Tracker', 'Manage, customize, and advance your Final Year Project deliverables'],
        ai: ['AI Research Synthesizer', 'Powered by Google Gemini 1.5 Flash (via securely injected Vercel key)'],
        settings: ['Project Customization', 'Configure dissertation metadata, supervisor names, and target milestones'],
        analytics: ['Research Analytics', 'Dissertation progress, phase distributions, and telemetry metrics'],
        security: ['Privacy & Zero-Trust', 'Multi-tenant row-level partitioning with encrypted Vercel env keys'],
      }[view];

      if (titles) {
        document.getElementById('viewHeaderTitle').textContent = titles[0];
        document.getElementById('viewHeaderSubtitle').textContent = titles[1];
      }
    }

    function setViewMode(mode) {
      viewMode = mode;
      document.getElementById('btnViewKanban').className = mode === 'kanban' 
        ? 'px-3 py-1.5 text-xs font-bold rounded-lg bg-purple-600 text-white transition flex items-center space-x-1.5'
        : 'px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 text-slate-400 hover:text-white transition flex items-center space-x-1.5';
      document.getElementById('btnViewList').className = mode === 'list'
        ? 'px-3 py-1.5 text-xs font-bold rounded-lg bg-purple-600 text-white transition flex items-center space-x-1.5'
        : 'px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 text-slate-400 hover:text-white transition flex items-center space-x-1.5';
      renderMilestones();
    }

    // --- Authentication Functions ---
    function switchAuthTab(tab) {
      document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
      document.getElementById('registerForm').classList.toggle('hidden', tab === 'login');
      document.getElementById('tabBtnLogin').className = tab === 'login' ? 'flex-1 py-1.5 text-xs font-bold rounded-lg bg-purple-600 text-white' : 'flex-1 py-1.5 text-xs font-medium text-slate-400';
      document.getElementById('tabBtnRegister').className = tab === 'register' ? 'flex-1 py-1.5 text-xs font-bold rounded-lg bg-purple-600 text-white' : 'flex-1 py-1.5 text-xs font-medium text-slate-400';
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
        bootApp();
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
        bootApp();
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
      bootApp();
    }

    function bootApp() {
      const authContainer = document.getElementById('authAppContainer');
      const unauthGate = document.getElementById('unauthGateContainer');
      const sidebarProfile = document.getElementById('sidebarUserProfile');

      if (authToken) {
        authContainer.classList.remove('hidden');
        unauthGate.classList.add('hidden');

        sidebarProfile.innerHTML = 
          '<div class="flex items-center justify-between">' +
            '<div class="flex items-center space-x-2.5 overflow-hidden">' +
              '<div class="w-8 h-8 rounded-full bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0">' +
                (currentUser?.fullName ? currentUser.fullName.split(' ').map(n=>n[0]).join('') : 'DF') +
              '</div>' +
              '<div class="overflow-hidden">' +
                '<span class="text-xs font-bold text-white block truncate">' + (currentUser?.fullName || 'Deshan Fernando') + '</span>' +
                '<span class="text-[10px] text-purple-400 font-medium block truncate">' + (currentUser?.role || 'LEAD_RESEARCHER') + '</span>' +
              '</div>' +
            '</div>' +
            '<button onclick="handleLogout()" class="p-1.5 text-slate-400 hover:text-red-400 transition" title="Sign Out">' +
              '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>' +
            '</button>' +
          '</div>';

        fetchMilestones();
        fetchMetrics();
        fetchTelemetry();
      } else {
        authContainer.classList.add('hidden');
        unauthGate.classList.remove('hidden');
        sidebarProfile.innerHTML = '<button onclick="quickLoginDeshan()" class="w-full py-2 text-xs font-bold text-white bg-purple-600 rounded-xl hover:bg-purple-500">Sign In</button>';
      }
    }

    // --- Telemetry & Metrics ---
    async function fetchTelemetry() {
      try {
        const res = await fetch('/health');
        const data = await res.json();
        document.getElementById('metricLatency').textContent = (data.database?.latencyMs || '--') + ' ms';
      } catch (e) {}
    }

    async function fetchMetrics() {
      if (!authToken) return;
      try {
        const res = await fetch('/tasks/metrics', { headers: { 'Authorization': 'Bearer ' + authToken } });
        const m = await res.json();
        document.getElementById('metricTotal').textContent = m.total || 0;
        document.getElementById('metricCompleted').textContent = (m.completed || 0) + ' done';
        document.getElementById('metricRate').textContent = (m.completionRate || 0) + '%';
        document.getElementById('metricProgressBar').style.width = (m.completionRate || 0) + '%';
        document.getElementById('metricCritical').textContent = m.criticalHigh || 0;

        document.getElementById('anaTotal').textContent = m.total || 0;
        document.getElementById('anaCompleted').textContent = m.completed || 0;
        document.getElementById('anaRemaining').textContent = (m.total - m.completed) || 0;
      } catch (e) {}
    }

    function debounceFetch() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(fetchMilestones, 300);
    }

    async function fetchMilestones() {
      if (!authToken) return;
      const status = document.getElementById('filterStatus').value;
      const priority = document.getElementById('filterPriority').value;
      const search = document.getElementById('searchInput')?.value.trim();

      let url = '/tasks?limit=50';
      if (status) url += '&status=' + status;
      if (priority) url += '&priority=' + priority;
      if (search) url += '&search=' + encodeURIComponent(search);

      try {
        const res = await fetch(url, { headers: { 'Authorization': 'Bearer ' + authToken } });
        if (res.status === 401) return handleLogout();

        const json = await res.json();
        currentMilestones = json.data || [];
        renderMilestones();
        renderAnalyticsTags();
      } catch (e) {}
    }

    function renderMilestones() {
      const container = document.getElementById('milestonesViewContainer');

      if (viewMode === 'kanban') {
        renderKanban(container);
      } else {
        renderList(container);
      }
    }

    function renderKanban(container) {
      const statuses = [
        { id: 'PENDING', label: 'Pending / Planned', color: 'border-slate-800 bg-slate-900/40 text-slate-400' },
        { id: 'IN_PROGRESS', label: 'In Progress (Active Research)', color: 'border-amber-900/60 bg-amber-950/20 text-amber-300' },
        { id: 'COMPLETED', label: 'Completed & Validated', color: 'border-emerald-900/60 bg-emerald-950/20 text-emerald-300' }
      ];

      container.innerHTML = 
        '<div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">' +
          statuses.map(col => {
            const items = currentMilestones.filter(m => m.status === col.id);
            return '<div class="glass-panel rounded-2xl p-4.5 space-y-3.5 border ' + col.color + '">' +
              '<div class="flex items-center justify-between pb-2 border-b border-slate-800">' +
                '<span class="font-extrabold text-xs uppercase tracking-wider">' + col.label + '</span>' +
                '<span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">' + items.length + '</span>' +
              '</div>' +
              '<div class="space-y-3 min-h-[140px]">' +
                (items.length === 0 ? '<div class="text-center py-8 text-slate-600 text-[11px]">No items in this column</div>' : items.map(t => renderCardHtml(t)).join('')) +
              '</div>' +
            '</div>';
          }).join('') +
        '</div>';
    }

    function renderList(container) {
      if (currentMilestones.length === 0) {
        container.innerHTML = '<div class="glass-panel rounded-2xl p-12 text-center text-xs text-slate-500">No milestones match your filter.</div>';
        return;
      }
      container.innerHTML = '<div class="space-y-3">' + currentMilestones.map(t => renderCardHtml(t)).join('') + '</div>';
    }

    function renderCardHtml(t) {
      const priorityColors = {
        CRITICAL: 'bg-red-950 text-red-300 border-red-800',
        HIGH: 'bg-orange-950 text-orange-300 border-orange-800',
        MEDIUM: 'bg-blue-950 text-blue-300 border-blue-800',
        LOW: 'bg-slate-800 text-slate-300 border-slate-700',
      }[t.priority] || 'bg-slate-800 text-slate-300';

      const tagsHtml = (t.tags || []).map(tag =>
        '<span class="text-[9px] px-2 py-0.5 rounded-md bg-slate-900 text-purple-300 border border-slate-800 font-mono">' + tag + '</span>'
      ).join('');

      return '<div class="glass-card rounded-xl p-4 space-y-2.5 text-left">' +
        '<div class="flex items-start justify-between gap-2">' +
          '<h4 class="font-bold text-xs text-slate-100 leading-snug flex-1">' + t.title + '</h4>' +
          '<span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded border ' + priorityColors + '">' + t.priority + '</span>' +
        '</div>' +
        (t.description ? '<p class="text-[11px] text-slate-400 leading-relaxed line-clamp-3">' + t.description + '</p>' : '') +
        (t.ai_summary ? '<div class="text-[10px] text-purple-300 bg-purple-950/30 p-2 rounded-lg border border-purple-900/30 font-mono leading-tight"><span class="font-bold text-purple-200">Synthesis:</span> ' + t.ai_summary + '</div>' : '') +
        '<div class="flex items-center justify-between pt-2 border-t border-slate-800/80">' +
          '<div class="flex flex-wrap gap-1">' + tagsHtml + '</div>' +
          '<div class="flex items-center space-x-1.5 text-[11px]">' +
            '<button onclick="advanceStatus(\\'' + t.id + '\\', \\'' + t.status + '\\')" class="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white transition" title="Advance Phase">&rarr;</button>' +
            '<button onclick="openEditModal(\\'' + t.id + '\\')" class="text-purple-400 hover:text-purple-300 font-medium">Edit</button>' +
            '<button onclick="deleteMilestone(\\'' + t.id + '\\')" class="text-red-400 hover:text-red-300 font-medium ml-1">Del</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }

    function renderAnalyticsTags() {
      const container = document.getElementById('anaTagsDistribution');
      if (!container) return;
      const allTags = {};
      currentMilestones.forEach(m => (m.tags || []).forEach(tg => { allTags[tg] = (allTags[tg] || 0) + 1; }));
      container.innerHTML = Object.entries(allTags).map(([tag, cnt]) => 
        '<span class="px-3 py-1 rounded-xl bg-purple-950/60 border border-purple-800/60 text-purple-300 font-mono text-xs font-semibold">' + tag + ' (' + cnt + ')</span>'
      ).join('');
    }

    // --- Milestone CRUD & Customization ---
    function openCreateModal() { document.getElementById('createModal').classList.remove('hidden'); }
    function closeCreateModal() { document.getElementById('createModal').classList.add('hidden'); }

    async function submitCreateMilestone() {
      const title = document.getElementById('newTitle').value.trim();
      const description = document.getElementById('newDesc').value.trim();
      const status = document.getElementById('newStatus').value;
      const priority = document.getElementById('newPriority').value;
      const rawTags = document.getElementById('newTags').value;
      const tags = rawTags.split(',').map(s => s.trim()).filter(Boolean);

      if (!title) return alert('Please enter a milestone title');

      try {
        const res = await fetch('/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authToken },
          body: JSON.stringify({ title, description, status, priority, tags })
        });
        if (!res.ok) throw new Error('Creation failed');
        closeCreateModal();
        document.getElementById('newTitle').value = '';
        document.getElementById('newDesc').value = '';
        fetchMilestones();
        fetchMetrics();
      } catch (e) { alert(e.message); }
    }

    function openEditModal(id) {
      const m = currentMilestones.find(item => item.id === id);
      if (!m) return;
      document.getElementById('editMilestoneId').value = m.id;
      document.getElementById('editTitle').value = m.title;
      document.getElementById('editDesc').value = m.description || '';
      document.getElementById('editStatus').value = m.status;
      document.getElementById('editPriority').value = m.priority;
      document.getElementById('editTags').value = (m.tags || []).join(', ');
      document.getElementById('editModal').classList.remove('hidden');
    }
    function closeEditModal() { document.getElementById('editModal').classList.add('hidden'); }

    async function saveEditMilestone() {
      const id = document.getElementById('editMilestoneId').value;
      const title = document.getElementById('editTitle').value.trim();
      const description = document.getElementById('editDesc').value.trim();
      const status = document.getElementById('editStatus').value;
      const priority = document.getElementById('editPriority').value;
      const rawTags = document.getElementById('editTags').value;
      const tags = rawTags.split(',').map(s => s.trim()).filter(Boolean);

      try {
        const res = await fetch('/tasks/' + id, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authToken },
          body: JSON.stringify({ title, description, status, priority, tags })
        });
        if (!res.ok) throw new Error('Update failed');
        closeEditModal();
        fetchMilestones();
        fetchMetrics();
      } catch (e) { alert(e.message); }
    }

    async function advanceStatus(id, currentStatus) {
      const nextMap = { 'PENDING': 'IN_PROGRESS', 'IN_PROGRESS': 'COMPLETED', 'COMPLETED': 'PENDING' };
      const nextStatus = nextMap[currentStatus] || 'IN_PROGRESS';
      try {
        await fetch('/tasks/' + id, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authToken },
          body: JSON.stringify({ status: nextStatus })
        });
        fetchMilestones();
        fetchMetrics();
      } catch (e) {}
    }

    async function deleteMilestone(id) {
      if (!confirm('Are you sure you want to delete this milestone?')) return;
      try {
        await fetch('/tasks/' + id, { method: 'DELETE', headers: { 'Authorization': 'Bearer ' + authToken } });
        fetchMilestones();
        fetchMetrics();
      } catch (e) {}
    }

    // --- Full AI Synthesizer View ---
    function loadSampleFypNote() {
      document.getElementById('aiRawInputFull').value = "Supervisor meeting: Characterize phase transition and optical signal drift on photonic integrated circuit emulators. Compare Joules per MAC energy consumption against 4nm CMOS GPU baseline for Chapter 4 dissertation results. Target completion next month.";
    }

    async function synthesizeMilestoneFull() {
      const input = document.getElementById('aiRawInputFull').value.trim();
      if (!input) return alert('Please enter research notes or meeting feedback!');

      const btnText = document.getElementById('btnSynthesizeFullText');
      const spinner = document.getElementById('btnSynthesizeFullSpinner');
      btnText.textContent = 'Analyzing with Gemini...';
      spinner.classList.remove('hidden');

      try {
        const res = await fetch('/ai/synthesize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rawInput: input })
        });
        currentFullSynthesized = await res.json();

        document.getElementById('aiFullTitle').textContent = currentFullSynthesized.suggestedTitle;
        document.getElementById('aiFullSummary').textContent = currentFullSynthesized.aiSummary;

        const priorityBadge = document.getElementById('aiFullPriorityBadge');
        priorityBadge.textContent = currentFullSynthesized.suggestedPriority;
        priorityBadge.className = 'px-2.5 py-0.5 rounded text-xs font-bold ' + (
          currentFullSynthesized.suggestedPriority === 'CRITICAL' ? 'bg-red-950 text-red-300 border border-red-800' :
          currentFullSynthesized.suggestedPriority === 'HIGH' ? 'bg-orange-950 text-orange-300 border border-orange-800' :
          'bg-blue-950 text-blue-300 border border-blue-800'
        );

        document.getElementById('aiFullActions').innerHTML = (currentFullSynthesized.actionItems || []).map(a => '<li>' + a + '</li>').join('');
        document.getElementById('aiFullTags').innerHTML = (currentFullSynthesized.suggestedTags || []).map(tg =>
          '<span class="text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-mono">' + tg + '</span>'
        ).join('');

        document.getElementById('aiFullPreviewBox').classList.remove('hidden');
      } catch (e) {
        alert(e.message);
      } finally {
        btnText.textContent = 'Synthesize Milestone with Gemini';
        spinner.classList.add('hidden');
      }
    }

    async function saveFullAiMilestone() {
      if (!currentFullSynthesized || !authToken) return;
      try {
        const res = await fetch('/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authToken },
          body: JSON.stringify({
            title: currentFullSynthesized.suggestedTitle,
            description: currentFullSynthesized.structuredDescription,
            priority: currentFullSynthesized.suggestedPriority,
            status: 'IN_PROGRESS',
            tags: Array.from(new Set([...(currentFullSynthesized.suggestedTags || []), 'UniBench', 'FYP'])),
          })
        });
        if (!res.ok) throw new Error('Persistence failed');
        alert('Milestone saved to your private FYP database!');
        document.getElementById('aiFullPreviewBox').classList.add('hidden');
        document.getElementById('aiRawInputFull').value = '';
        switchView('tracker');
        fetchMilestones();
        fetchMetrics();
      } catch (e) { alert(e.message); }
    }

    // --- Project Customization Settings ---
    function saveProjectCustomization(e) {
      e.preventDefault();
      const title = document.getElementById('custProjectTitle').value.trim();
      const uni = document.getElementById('custUniversity').value.trim();
      const defense = document.getElementById('custDefenseDate').value.trim();
      const supervisor = document.getElementById('custSupervisor').value.trim();

      localStorage.setItem('unibench_custom_title', title);
      localStorage.setItem('unibench_custom_uni', uni);
      localStorage.setItem('unibench_custom_defense', defense);
      localStorage.setItem('unibench_custom_supervisor', supervisor);

      document.getElementById('sidebarProjectTitle').textContent = title || 'UniBench FYP';
      alert('Workspace customizations saved successfully!');
    }

    function loadCustomSettings() {
      const title = localStorage.getItem('unibench_custom_title');
      if (title) {
        document.getElementById('sidebarProjectTitle').textContent = title;
        const custTitleInput = document.getElementById('custProjectTitle');
        if (custTitleInput) custTitleInput.value = title;
      }
    }

    // Initial boot
    try {
      const stored = localStorage.getItem('unibench_user');
      if (stored) currentUser = JSON.parse(stored);
    } catch (e) {}

    loadCustomSettings();
    bootApp();
  </script>
</body>
</html>`;
    return res.send(html);
  }
}
