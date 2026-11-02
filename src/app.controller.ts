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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UniBench FYP | Research & Milestone Operating System</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            pastel: {
              lavender: '#ede9fe',
              lavenderDark: '#7c3aed',
              mint: '#dcfce7',
              mintDark: '#059669',
              peach: '#ffedd5',
              peachDark: '#d97706',
              rose: '#ffe4e6',
              roseDark: '#e11d48',
              sky: '#e0f2fe',
              skyDark: '#0284c7',
            }
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #f8fafc; color: #1e293b; }
    .pastel-sidebar { background: #ffffff; border-right: 1px solid #e2e8f0; }
    .pastel-nav { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(12px); border-bottom: 1px solid #e2e8f0; }
    .pastel-card { background: #ffffff; border: 1px solid #e2e8f0; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
    .pastel-card:hover { transform: translateY(-2px); border-color: #cbd5e1; box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.08), 0 8px 10px -6px rgba(99, 102, 241, 0.04); }
    .custom-scroll::-webkit-scrollbar { width: 5px; }
    .custom-scroll::-webkit-scrollbar-track { background: #f1f5f9; }
    .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    @keyframes toastSlideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .animate-toast { animation: toastSlideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  </style>
</head>
<body class="min-h-screen flex selection:bg-indigo-100 selection:text-indigo-900 antialiased overflow-x-hidden bg-[#f8fafc]">

  <!-- FLOATING TOAST NOTIFICATION CONTAINER -->
  <div id="toastContainer" class="fixed top-5 right-5 z-50 flex flex-col space-y-2 pointer-events-none"></div>

  <!-- AUTHENTICATED LEFT SIDEBAR (Hidden by default on Login/Public view) -->
  <aside id="sidebar" class="hidden w-64 pastel-sidebar fixed inset-y-0 left-0 z-40 flex flex-col transition-all duration-300 shadow-sm">
    
    <!-- Sidebar Header -->
    <div class="h-20 flex items-center px-6 border-b border-slate-200/80 gap-3 bg-white">
      <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 p-[1.5px] shadow-sm flex-shrink-0">
        <div class="w-full h-full bg-white rounded-2xl flex items-center justify-center">
          <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
        </div>
      </div>
      <div class="overflow-hidden">
        <h1 class="font-extrabold text-sm tracking-tight text-slate-800 truncate" id="sidebarProjectTitle">UniBench FYP</h1>
        <p class="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">Research Suite</p>
      </div>
    </div>

    <!-- Navigation Menu Items -->
    <nav class="flex-1 px-4 py-5 space-y-1 overflow-y-auto custom-scroll bg-white">
      <button onclick="switchView('tracker')" id="nav-tracker" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 transition">
        <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
        <span>Milestone Tracker</span>
      </button>

      <button onclick="switchView('ai')" id="nav-ai" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition">
        <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        <span>AI Milestone Synthesizer</span>
      </button>

      <button onclick="switchView('analytics')" id="nav-analytics" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition">
        <svg class="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        <span>Research Analytics</span>
      </button>

      <button onclick="switchView('settings')" id="nav-settings" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition">
        <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>
        <span>Project Customization</span>
      </button>

      <button onclick="switchView('security')" id="nav-security" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition">
        <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        <span>Privacy & Zero-Trust</span>
      </button>
    </nav>

    <!-- Sidebar Bottom User Profile -->
    <div class="p-4 border-t border-slate-200 bg-slate-50/70" id="sidebarUserProfile">
      <!-- Populated dynamically when logged in -->
    </div>
  </aside>

  <!-- MAIN VIEWPORT (Starts full-width; ml-64 added only after authentication) -->
  <div id="mainViewport" class="flex-1 w-full min-h-screen flex flex-col bg-[#f8fafc] transition-all duration-300">

    <!-- Top Navigation Header -->
    <header class="h-20 pastel-nav sticky top-0 z-30 flex items-center justify-between px-6 lg:px-10">
      
      <!-- Left: Header Identity -->
      <div class="flex items-center space-x-3">
        <!-- Logo (Visible on landing page or workspace) -->
        <div id="headerBrandLogo" class="w-9 h-9 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 p-[1.5px] shadow-sm flex items-center justify-center">
          <div class="w-full h-full bg-white rounded-2xl flex items-center justify-center">
            <svg class="w-4.5 h-4.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
        </div>

        <div>
          <div class="flex items-center space-x-2">
            <h2 id="viewHeaderTitle" class="text-sm font-extrabold text-slate-900 tracking-tight">UniBench</h2>
            <span id="viewHeaderBadge" class="text-[9px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">Research OS</span>
          </div>
          <p id="viewHeaderSubtitle" class="text-[11px] text-slate-500">Autonomous research deliverables & substrate benchmarking</p>
        </div>
      </div>

      <!-- Right: Live Clock & Action Button -->
      <div class="flex items-center space-x-3">
        
        <!-- Live Clock & Date Widget -->
        <div class="flex items-center space-x-2.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <div class="text-right">
            <div id="liveClock" class="font-mono text-xs font-bold text-slate-800 tracking-wider">--:--:-- --</div>
            <div id="liveDate" class="text-[9px] text-indigo-600 font-semibold">Loading...</div>
          </div>
        </div>

        <!-- Add Milestone Button (Only visible when logged in) -->
        <button id="btnHeaderNewMilestone" onclick="openCreateModal()" class="hidden px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center space-x-1.5">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          <span>New Deliverable</span>
        </button>

        <!-- Sign In Shortcut Button (When logged out) -->
        <button id="btnHeaderSignIn" onclick="focusAuthModal()" class="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition">
          Sign In
        </button>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-1 p-6 lg:p-8">
      
      <!-- ============================================== -->
      <!-- PUBLIC LANDING & AUTHENTICATION PORTAL (NO SIDEBAR) -->
      <!-- ============================================== -->
      <div id="unauthGateContainer" class="max-w-4xl mx-auto my-6 space-y-10">
        
        <!-- Hero Header -->
        <div class="text-center space-y-3 pt-4">
          <span class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
            <span>✨</span>
            <span>Intelligent Research & Milestone Platform</span>
          </span>
          <h1 class="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic Research, Formalized & Tracked.
          </h1>
          <p class="text-xs lg:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Manage your Final Year Project deliverables, hardware substrate benchmarks, and supervisor meeting notes with AI-powered synthesis and zero-trust isolation.
          </p>
        </div>

        <!-- Centered Authentication Card -->
        <div class="max-w-md mx-auto pastel-card rounded-3xl p-8 shadow-sm border border-slate-200 bg-white">
          
          <div class="text-center mb-6">
            <h2 class="text-lg font-extrabold text-slate-900 tracking-tight">Researcher Portal</h2>
            <p class="text-xs text-slate-500 mt-1">Sign in to your private workspace or create a new isolated account.</p>
          </div>

          <!-- Auth Tabs: Sign In vs Create Account -->
          <div class="flex rounded-xl bg-slate-100 p-1 mb-5 border border-slate-200/80">
            <button id="tabBtnLogin" onclick="switchAuthTab('login')" class="flex-1 py-1.5 text-xs font-bold rounded-lg bg-white text-slate-900 shadow-xs transition">Sign In</button>
            <button id="tabBtnRegister" onclick="switchAuthTab('register')" class="flex-1 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition">Create Account</button>
          </div>

          <!-- Sign In Form -->
          <form id="loginForm" onsubmit="handleLogin(event)" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
              <input type="email" id="loginEmail" required class="w-full bg-slate-50 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition" placeholder="name@domain.com">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Password</label>
              <input type="password" id="loginPassword" required class="w-full bg-slate-50 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition" placeholder="••••••••">
            </div>
            <button type="submit" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition shadow-xs">
              Sign In to Workspace
            </button>
          </form>

          <!-- Register Form -->
          <form id="registerForm" onsubmit="handleRegister(event)" class="space-y-4 hidden">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <input type="text" id="regFullName" required class="w-full bg-slate-50 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition" placeholder="e.g. Alex Morgan">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
              <input type="email" id="regEmail" required class="w-full bg-slate-50 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition" placeholder="name@domain.com">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Password</label>
              <input type="password" id="regPassword" required minlength="6" class="w-full bg-slate-50 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition" placeholder="Min. 6 characters">
            </div>
            <button type="submit" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition shadow-xs">
              Create Isolated Workspace
            </button>
          </form>

          <div class="mt-6 pt-4 border-t border-slate-100 text-center">
            <p class="text-[11px] text-slate-400">Zero-Trust Architecture: Your records are strictly partitioned by cryptographic JWT session.</p>
          </div>
        </div>

        <!-- 3-Column Feature Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          <div class="pastel-card rounded-2xl p-5 space-y-2">
            <div class="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">📋</div>
            <h3 class="text-xs font-bold text-slate-900">Kanban Sprint Boards</h3>
            <p class="text-[11px] text-slate-500 leading-relaxed">Advance deliverables seamlessly across Pending, In Progress, and Completed states.</p>
          </div>

          <div class="pastel-card rounded-2xl p-5 space-y-2">
            <div class="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">✨</div>
            <h3 class="text-xs font-bold text-slate-900">Gemini 2.5 AI Synthesis</h3>
            <p class="text-[11px] text-slate-500 leading-relaxed">Convert meeting takeaways and experimental notes into structured action items.</p>
          </div>

          <div class="pastel-card rounded-2xl p-5 space-y-2">
            <div class="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">🔒</div>
            <h3 class="text-xs font-bold text-slate-900">Zero-Trust PostgreSQL</h3>
            <p class="text-[11px] text-slate-500 leading-relaxed">Strict row-level isolation guarantees external accounts cannot see your research.</p>
          </div>
        </div>

      </div>

      <!-- ============================================== -->
      <!-- AUTHENTICATED WORKSPACE CONTAINER (WITH SIDEBAR) -->
      <!-- ============================================== -->
      <div id="authAppContainer" class="hidden space-y-6">

        <!-- 1. TRACKER VIEW (Kanban & List) -->
        <div id="view-tracker-content" class="space-y-6">
          
          <!-- Top Telemetry & Metric Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div class="pastel-card rounded-2xl p-5 shadow-xs">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Total Deliverables</span>
              <div class="flex items-baseline justify-between">
                <span id="metricTotal" class="text-3xl font-extrabold text-slate-900 font-mono">0</span>
                <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">Active Phases</span>
              </div>
              <p class="text-[11px] text-slate-400 mt-2">Active phases in your curriculum</p>
            </div>

            <div class="pastel-card rounded-2xl p-5 shadow-xs">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Completion Rate</span>
              <div class="flex items-baseline justify-between">
                <span id="metricRate" class="text-3xl font-extrabold text-emerald-600 font-mono">0%</span>
                <span id="metricCompleted" class="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">0 done</span>
              </div>
              <div class="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                <div id="metricProgressBar" class="bg-emerald-500 h-full rounded-full transition-all duration-700" style="width: 0%"></div>
              </div>
            </div>

            <div class="pastel-card rounded-2xl p-5 shadow-xs">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">High Focus / Critical</span>
              <div class="flex items-baseline justify-between">
                <span id="metricCritical" class="text-3xl font-extrabold text-amber-600 font-mono">0</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">Urgent</span>
              </div>
              <p class="text-[11px] text-slate-400 mt-2">Requires experimental runs</p>
            </div>

            <div class="pastel-card rounded-2xl p-5 shadow-xs">
              <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Database Latency</span>
              <div class="flex items-baseline justify-between">
                <span id="metricLatency" class="text-3xl font-extrabold text-sky-600 font-mono">-- ms</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200">PostgreSQL</span>
              </div>
              <p class="text-[11px] text-slate-400 mt-2" id="metricHost">Supabase (AWS ap-southeast-1)</p>
            </div>

          </div>

          <!-- Controls Bar -->
          <div class="pastel-card rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-xs">
            
            <div class="flex items-center space-x-3 flex-1 min-w-[240px]">
              <div class="relative w-full max-w-xs">
                <input type="text" id="searchInput" oninput="debounceFetch()" placeholder="Search milestones or tags..." class="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-500 transition">
                <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>

              <select id="filterStatus" onchange="fetchMilestones()" class="bg-slate-50 border border-slate-200 text-xs text-slate-700 rounded-xl px-3 py-2 outline-none focus:bg-white focus:border-indigo-500">
                <option value="">All Statuses</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="PENDING">PENDING</option>
              </select>

              <select id="filterPriority" onchange="fetchMilestones()" class="bg-slate-50 border border-slate-200 text-xs text-slate-700 rounded-xl px-3 py-2 outline-none focus:bg-white focus:border-indigo-500">
                <option value="">All Priorities</option>
                <option value="CRITICAL">CRITICAL</option>
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
              </select>
            </div>

            <!-- View Toggles: Kanban vs List -->
            <div class="flex items-center space-x-2">
              <button onclick="setViewMode('kanban')" id="btnViewKanban" class="px-3 py-1.5 text-xs font-bold rounded-xl bg-indigo-600 text-white transition flex items-center space-x-1.5 shadow-xs">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"/></svg>
                <span>Kanban Board</span>
              </button>
              <button onclick="setViewMode('list')" id="btnViewList" class="px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 transition flex items-center space-x-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                <span>List View</span>
              </button>
            </div>

          </div>

          <!-- Milestones View Container (Kanban or List) -->
          <div id="milestonesViewContainer">
            <!-- Rendered dynamically by JS -->
          </div>

        </div>

        <!-- 2. AI SYNTHESIZER VIEW -->
        <div id="view-ai-content" class="hidden space-y-6">
          <div class="pastel-card rounded-3xl p-8 max-w-4xl mx-auto space-y-6 shadow-sm">
            <div class="flex items-center justify-between border-b border-slate-200 pb-5">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg border border-purple-100">✨</div>
                <div>
                  <h3 class="text-base font-bold text-slate-900">AI Research Milestone Synthesizer</h3>
                  <p class="text-xs text-slate-500">Transform unformatted notes, supervisor remarks, or benchmarks into structured deliverables</p>
                </div>
              </div>
              <button onclick="loadSampleFypNote()" class="text-xs text-indigo-600 hover:text-indigo-800 font-bold px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 transition">
                Load Research Example
              </button>
            </div>

            <textarea id="aiRawInputFull" rows="6" class="w-full bg-slate-50 text-xs rounded-2xl p-4 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-800 placeholder-slate-400 outline-none transition font-sans resize-none leading-relaxed" placeholder="Paste unorganized thoughts, research notes, meeting action items, or simulation specs..."></textarea>

            <div class="flex items-center justify-between pt-2">
              <span class="text-xs text-emerald-600 font-medium flex items-center space-x-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Powered by Google Gemini 2.5 Flash</span>
              </span>

              <button id="btnSynthesizeFull" onclick="synthesizeMilestoneFull()" class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center space-x-2">
                <span id="btnSynthesizeFullText">Synthesize with Gemini</span>
                <svg id="btnSynthesizeFullSpinner" class="hidden w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
              </button>
            </div>

            <!-- Preview Result Box -->
            <div id="aiFullPreviewBox" class="hidden mt-6 p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Formalized Deliverable</span>
                <span id="aiFullPriorityBadge" class="px-2.5 py-0.5 rounded text-xs font-bold"></span>
              </div>

              <h4 id="aiFullTitle" class="text-base font-bold text-slate-900"></h4>
              <p id="aiFullSummary" class="text-xs text-indigo-900 bg-white p-3.5 rounded-xl border border-indigo-100 leading-relaxed"></p>

              <div>
                <span class="text-xs text-slate-600 font-semibold block mb-1.5">Actionable Research Breakdown:</span>
                <ul id="aiFullActions" class="space-y-1.5 text-xs text-slate-700 list-disc list-inside"></ul>
              </div>

              <div class="flex flex-wrap gap-1.5" id="aiFullTags"></div>

              <button onclick="saveFullAiMilestone()" class="w-full mt-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Save Directly to My Workspace</span>
              </button>
            </div>
          </div>
        </div>

        <!-- 3. PROJECT CUSTOMIZATION VIEW -->
        <div id="view-settings-content" class="hidden space-y-6">
          <div class="pastel-card rounded-3xl p-8 max-w-3xl mx-auto space-y-6 shadow-sm">
            <div class="border-b border-slate-200 pb-4">
              <h3 class="text-base font-bold text-slate-900">Project Customization</h3>
              <p class="text-xs text-slate-500">Configure your project metadata, institution, target defense dates, and custom tags.</p>
            </div>

            <form onsubmit="saveProjectCustomization(event)" class="space-y-5">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Project Title</label>
                <input type="text" id="custProjectTitle" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500" value="UniBench FYP">
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1.5">Degree & Institution</label>
                  <input type="text" id="custUniversity" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500" value="BSc (Hons) Computer Science, IIT / Westminster">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1.5">Target Defense Date</label>
                  <input type="text" id="custDefenseDate" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500" value="May 2027">
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Supervisor & Research Group</label>
                <input type="text" id="custSupervisor" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500" value="Physical Neural Computing Lab">
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Target Research Domains</label>
                <input type="text" id="custSubstrates" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl px-4 py-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500" value="Memristor, Photonics, Neuromorphic, Joules/MAC">
              </div>

              <button type="submit" class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition">
                Save Workspace Preferences
              </button>
            </form>
          </div>
        </div>

        <!-- 4. RESEARCH ANALYTICS VIEW -->
        <div id="view-analytics-content" class="hidden space-y-6">
          <div class="pastel-card rounded-3xl p-8 max-w-4xl mx-auto space-y-6 shadow-sm">
            <h3 class="text-base font-bold text-slate-900 border-b border-slate-200 pb-4">Research & Deliverables Analytics</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-center">
                <span class="text-3xl font-extrabold text-indigo-700 font-mono" id="anaTotal">0</span>
                <span class="block text-xs text-indigo-900 mt-1 font-semibold">Total Milestones</span>
              </div>
              <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-center">
                <span class="text-3xl font-extrabold text-emerald-700 font-mono" id="anaCompleted">0</span>
                <span class="block text-xs text-emerald-900 mt-1 font-semibold">Completed Phases</span>
              </div>
              <div class="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 text-center">
                <span class="text-3xl font-extrabold text-amber-700 font-mono" id="anaRemaining">0</span>
                <span class="block text-xs text-amber-900 mt-1 font-semibold">Remaining & Active</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 class="text-xs font-bold text-slate-600 uppercase tracking-wider">Research Domain Coverage</h4>
              <div class="flex flex-wrap gap-2 pt-1" id="anaTagsDistribution">
                <!-- tags distribution -->
              </div>
            </div>
          </div>
        </div>

        <!-- 5. SECURITY & PRIVACY VIEW -->
        <div id="view-security-content" class="hidden space-y-6">
          <div class="pastel-card rounded-3xl p-8 max-w-3xl mx-auto space-y-6 shadow-sm">
            <div class="border-b border-slate-200 pb-4 flex items-center space-x-3">
              <div class="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold border border-emerald-100">🔒</div>
              <div>
                <h3 class="text-base font-bold text-slate-900">Zero-Trust Isolation Architecture</h3>
                <p class="text-xs text-slate-500">Every user account has an isolated partition in Supabase PostgreSQL</p>
              </div>
            </div>

            <div class="space-y-4 text-xs text-slate-600 leading-relaxed">
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-emerald-700 block mb-1">Multi-Tenant Database Isolation</span>
                Every SQL operation strictly applies <code class="text-indigo-600 font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">WHERE user_id = :userId</code>. External accounts or visitors cannot read, query, or edit your milestones.
              </div>

              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-indigo-700 block mb-1">Encrypted Serverless Keys</span>
                AI API keys are encrypted at rest in Vercel Cloud environment variables and never leaked to git or browsers.
              </div>

              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-sky-700 block mb-1">Cryptographic JWT Sessions</span>
                Authentication tokens are signed with HMAC SHA-256 and verified on every protected API call.
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  </div>

  <!-- 1. EDIT / CUSTOMIZE MILESTONE MODAL -->
  <div id="editModal" class="hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-slate-200 shadow-xl transition-all">
      <div class="flex items-center justify-between border-b border-slate-100 pb-3">
        <div class="flex items-center space-x-2">
          <div class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          </div>
          <h3 class="font-bold text-slate-900 text-sm">Customize Deliverable</h3>
        </div>
        <button onclick="closeEditModal()" class="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center text-lg leading-none transition">&times;</button>
      </div>

      <input type="hidden" id="editMilestoneId">

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Milestone Title</label>
        <input type="text" id="editTitle" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition">
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Description</label>
        <textarea id="editDesc" rows="3" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"></textarea>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Status</label>
          <select id="editStatus" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2 text-slate-800 outline-none focus:bg-white focus:border-indigo-500 transition">
            <option value="PENDING">PENDING</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Priority</label>
          <select id="editPriority" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2 text-slate-800 outline-none focus:bg-white focus:border-indigo-500 transition">
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
            <option value="CRITICAL">CRITICAL</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Tags (comma-separated)</label>
        <input type="text" id="editTags" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition" placeholder="Research, Simulation, Paper">
      </div>

      <div class="flex items-center justify-end space-x-2 pt-2">
        <button onclick="closeEditModal()" class="px-4 py-2 bg-slate-100 text-slate-600 hover:text-slate-900 rounded-xl text-xs font-semibold transition">Cancel</button>
        <button onclick="saveEditMilestone()" class="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition">Save Changes</button>
      </div>
    </div>
  </div>

  <!-- 2. CREATE MILESTONE MODAL -->
  <div id="createModal" class="hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-slate-200 shadow-xl transition-all">
      <div class="flex items-center justify-between border-b border-slate-100 pb-3">
        <div class="flex items-center space-x-2">
          <div class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </div>
          <h3 class="font-bold text-slate-900 text-sm">Create New Deliverable</h3>
        </div>
        <button onclick="closeCreateModal()" class="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center text-lg leading-none transition">&times;</button>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Milestone Title</label>
        <input type="text" id="newTitle" placeholder="e.g. Milestone 7: Final Defense Presentation" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition">
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Description</label>
        <textarea id="newDesc" rows="3" placeholder="Outline specific deliverables and methodologies..." class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"></textarea>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Status</label>
          <select id="newStatus" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2 text-slate-800 outline-none focus:bg-white focus:border-indigo-500 transition">
            <option value="PENDING">PENDING</option>
            <option value="IN_PROGRESS" selected>IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Priority</label>
          <select id="newPriority" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2 text-slate-800 outline-none focus:bg-white focus:border-indigo-500 transition">
            <option value="CRITICAL">CRITICAL</option>
            <option value="HIGH" selected>HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Tags (comma-separated)</label>
        <input type="text" id="newTags" value="Research, Deliverable" class="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 text-slate-800 outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition">
      </div>

      <div class="flex items-center justify-end space-x-2 pt-2">
        <button onclick="closeCreateModal()" class="px-4 py-2 bg-slate-100 text-slate-600 hover:text-slate-900 rounded-xl text-xs font-semibold transition">Cancel</button>
        <button onclick="submitCreateMilestone()" class="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition">Create Milestone</button>
      </div>
    </div>
  </div>

  <!-- 3. CUSTOM CONFIRMATION POPUP MODAL -->
  <div id="confirmModal" class="hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-sm w-full p-6 space-y-4 border border-slate-200 shadow-2xl text-center">
      <div id="confirmIconContainer" class="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 mx-auto flex items-center justify-center">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
      </div>
      <div>
        <h3 id="confirmTitle" class="text-sm font-extrabold text-slate-900">Confirm Action</h3>
        <p id="confirmMessage" class="text-xs text-slate-500 mt-1 leading-relaxed">Are you sure you want to proceed?</p>
      </div>
      <div class="flex items-center justify-center space-x-2.5 pt-2">
        <button id="btnConfirmCancel" onclick="closeConfirmModal(false)" class="flex-1 py-2 px-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition">Cancel</button>
        <button id="btnConfirmAccept" onclick="closeConfirmModal(true)" class="flex-1 py-2 px-3.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs transition">Confirm</button>
      </div>
    </div>
  </div>

  <!-- 4. QUICK INSPECT / DETAIL MODAL -->
  <div id="inspectModal" class="hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 border border-slate-200 shadow-xl">
      <div class="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
        <div>
          <span id="inspectPriorityBadge" class="text-[9px] font-extrabold px-2 py-0.5 rounded border inline-block mb-1.5"></span>
          <h3 id="inspectTitle" class="text-sm font-extrabold text-slate-900 leading-snug"></h3>
        </div>
        <button onclick="closeInspectModal()" class="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center text-lg leading-none transition">&times;</button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <span class="text-[11px] font-semibold text-slate-500 block mb-1">Deliverable Scope & Methodology:</span>
          <p id="inspectDescription" class="text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 leading-relaxed max-h-48 overflow-y-auto custom-scroll"></p>
        </div>

        <div id="inspectAiBox" class="hidden">
          <span class="text-[11px] font-semibold text-indigo-700 block mb-1">AI Research Synthesis:</span>
          <p id="inspectAiSummary" class="text-indigo-900 bg-indigo-50/70 p-3 rounded-xl border border-indigo-100 font-mono leading-relaxed"></p>
        </div>

        <div>
          <span class="text-[11px] font-semibold text-slate-500 block mb-1">Domain Classifications:</span>
          <div id="inspectTags" class="flex flex-wrap gap-1.5 pt-0.5"></div>
        </div>

        <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span id="inspectStatusBadge" class="font-bold"></span>
          <span id="inspectTimestamp" class="font-mono text-[10px]"></span>
        </div>
      </div>

      <div class="flex items-center justify-end space-x-2 pt-2 border-t border-slate-100">
        <button onclick="closeInspectModal()" class="px-4 py-2 bg-slate-100 text-slate-600 hover:text-slate-900 rounded-xl text-xs font-semibold transition">Close</button>
        <button id="btnInspectEdit" class="px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-xl text-xs font-bold transition">Edit</button>
        <button id="btnInspectAdvance" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition">Advance &rarr;</button>
      </div>
    </div>
  </div>

  <script>
    let authToken = localStorage.getItem('unibench_token') || '';
    let currentUser = null;
    let currentView = 'tracker';
    let viewMode = 'kanban';
    let currentMilestones = [];
    let debounceTimer = null;
    let currentFullSynthesized = null;
    let confirmResolver = null;

    // --- POPUP: Toast Notification System ---
    function showToast(message, type = 'success') {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      
      const config = {
        success: {
          bg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
          icon: '<svg class="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
        },
        error: {
          bg: 'bg-rose-50 text-rose-900 border-rose-200',
          icon: '<svg class="w-4 h-4 text-rose-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
        },
        info: {
          bg: 'bg-sky-50 text-sky-900 border-sky-200',
          icon: '<svg class="w-4 h-4 text-sky-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
        }
      }[type] || config.info;

      toast.className = 'animate-toast pointer-events-auto flex items-center space-x-2.5 px-4 py-3 rounded-2xl border shadow-lg ' + config.bg + ' max-w-sm text-xs font-semibold transition-all duration-300';
      toast.innerHTML = config.icon + '<span class="flex-1">' + message + '</span>';

      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }

    // --- POPUP: Custom Confirmation Modal ---
    function askConfirm({ title, message, confirmText = 'Confirm' }) {
      return new Promise((resolve) => {
        confirmResolver = resolve;
        document.getElementById('confirmTitle').textContent = title || 'Confirm Action';
        document.getElementById('confirmMessage').textContent = message || 'Are you sure you want to proceed?';
        document.getElementById('btnConfirmAccept').textContent = confirmText;
        document.getElementById('confirmModal').classList.remove('hidden');
      });
    }

    function closeConfirmModal(result) {
      document.getElementById('confirmModal').classList.add('hidden');
      if (confirmResolver) {
        confirmResolver(result);
        confirmResolver = null;
      }
    }

    // --- POPUP: Quick Inspect Details Modal ---
    function openInspectModal(id) {
      const m = currentMilestones.find(item => item.id === id);
      if (!m) return;

      const priorityColors = {
        CRITICAL: 'bg-rose-50 text-rose-700 border-rose-200',
        HIGH: 'bg-amber-50 text-amber-700 border-amber-200',
        MEDIUM: 'bg-sky-50 text-sky-700 border-sky-200',
        LOW: 'bg-slate-100 text-slate-600 border-slate-200',
      }[m.priority] || 'bg-slate-100 text-slate-600';

      const statusLabels = {
        PENDING: 'Planned / Pending Phase',
        IN_PROGRESS: 'In Progress (Active Research)',
        COMPLETED: 'Completed & Validated Deliverable'
      }[m.status] || m.status;

      document.getElementById('inspectTitle').textContent = m.title;
      document.getElementById('inspectDescription').textContent = m.description || 'No detailed scope breakdown provided.';
      
      const pBadge = document.getElementById('inspectPriorityBadge');
      pBadge.textContent = m.priority;
      pBadge.className = 'text-[9px] font-extrabold px-2 py-0.5 rounded border inline-block mb-1.5 ' + priorityColors;

      const aiBox = document.getElementById('inspectAiBox');
      if (m.ai_summary) {
        aiBox.classList.remove('hidden');
        document.getElementById('inspectAiSummary').textContent = m.ai_summary;
      } else {
        aiBox.classList.add('hidden');
      }

      document.getElementById('inspectTags').innerHTML = (m.tags || []).map(tg =>
        '<span class="text-[10px] px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100 font-mono font-medium">' + tg + '</span>'
      ).join('');

      document.getElementById('inspectStatusBadge').textContent = statusLabels;
      document.getElementById('inspectTimestamp').textContent = 'ID: ' + m.id.substring(0, 8) + '...';

      document.getElementById('btnInspectEdit').onclick = () => { closeInspectModal(); openEditModal(m.id); };
      document.getElementById('btnInspectAdvance').onclick = () => { closeInspectModal(); advanceStatus(m.id, m.status); };

      document.getElementById('inspectModal').classList.remove('hidden');
    }

    function closeInspectModal() {
      document.getElementById('inspectModal').classList.add('hidden');
    }

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
          nav.className = 'w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition';
        }
      });

      const targetContent = document.getElementById('view-' + view + '-content');
      if (targetContent) targetContent.classList.remove('hidden');

      const activeNav = document.getElementById('nav-' + view);
      if (activeNav) {
        activeNav.className = 'w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 transition';
      }

      const titles = {
        tracker: ['Milestone Tracker', 'Track, customize, and advance your project deliverables'],
        ai: ['AI Milestone Synthesizer', 'Powered by Google Gemini 2.5 Flash neural models'],
        settings: ['Project Customization', 'Configure workspace metadata, institution, and timelines'],
        analytics: ['Research Analytics', 'Deliverables progress, phase distributions, and telemetry metrics'],
        security: ['Privacy & Zero-Trust', 'Multi-tenant row-level partitioning with encrypted serverless keys'],
      }[view];

      if (titles) {
        document.getElementById('viewHeaderTitle').textContent = titles[0];
        document.getElementById('viewHeaderSubtitle').textContent = titles[1];
      }
    }

    function setViewMode(mode) {
      viewMode = mode;
      document.getElementById('btnViewKanban').className = mode === 'kanban' 
        ? 'px-3 py-1.5 text-xs font-bold rounded-xl bg-indigo-600 text-white transition flex items-center space-x-1.5 shadow-xs'
        : 'px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 transition flex items-center space-x-1.5';
      document.getElementById('btnViewList').className = mode === 'list'
        ? 'px-3 py-1.5 text-xs font-bold rounded-xl bg-indigo-600 text-white transition flex items-center space-x-1.5 shadow-xs'
        : 'px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 transition flex items-center space-x-1.5';
      renderMilestones();
    }

    // --- Authentication Functions ---
    function switchAuthTab(tab) {
      document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
      document.getElementById('registerForm').classList.toggle('hidden', tab === 'login');
      document.getElementById('tabBtnLogin').className = tab === 'login' ? 'flex-1 py-1.5 text-xs font-bold rounded-lg bg-white text-slate-900 shadow-xs' : 'flex-1 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800';
      document.getElementById('tabBtnRegister').className = tab === 'register' ? 'flex-1 py-1.5 text-xs font-bold rounded-lg bg-white text-slate-900 shadow-xs' : 'flex-1 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800';
    }

    function focusAuthModal() {
      const unauthGate = document.getElementById('unauthGateContainer');
      if (unauthGate) {
        unauthGate.scrollIntoView({ behavior: 'smooth' });
        const emailInput = document.getElementById('loginEmail');
        if (emailInput) emailInput.focus();
      }
    }

    async function handleLogin(e) {
      if (e) e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;

      try {
        const res = await fetch('/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Invalid credentials');

        authToken = data.accessToken;
        currentUser = data.user;
        localStorage.setItem('unibench_token', authToken);
        localStorage.setItem('unibench_user', JSON.stringify(currentUser));
        showToast('Welcome back, ' + (currentUser.fullName || 'User') + '!', 'success');
        bootApp();
      } catch (err) {
        showToast(err.message, 'error');
      }
    }

    async function handleRegister(e) {
      e.preventDefault();
      const fullName = document.getElementById('regFullName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value;

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
        showToast('Workspace created successfully!', 'success');
        bootApp();
      } catch (err) {
        showToast(err.message, 'error');
      }
    }

    function handleLogout() {
      authToken = '';
      currentUser = null;
      localStorage.removeItem('unibench_token');
      localStorage.removeItem('unibench_user');
      showToast('Signed out of workspace', 'info');
      bootApp();
    }

    function bootApp() {
      const authContainer = document.getElementById('authAppContainer');
      const unauthGate = document.getElementById('unauthGateContainer');
      const sidebar = document.getElementById('sidebar');
      const mainViewport = document.getElementById('mainViewport');
      const sidebarProfile = document.getElementById('sidebarUserProfile');
      const btnHeaderNewMilestone = document.getElementById('btnHeaderNewMilestone');
      const btnHeaderSignIn = document.getElementById('btnHeaderSignIn');
      const viewHeaderTitle = document.getElementById('viewHeaderTitle');
      const viewHeaderSubtitle = document.getElementById('viewHeaderSubtitle');

      if (authToken && currentUser) {
        // Authenticated State: Show Sidebar, shift viewport with ml-64, show workspace
        sidebar.classList.remove('hidden');
        mainViewport.classList.add('ml-64');
        authContainer.classList.remove('hidden');
        unauthGate.classList.add('hidden');
        btnHeaderNewMilestone.classList.remove('hidden');
        btnHeaderSignIn.classList.add('hidden');

        viewHeaderTitle.textContent = 'Milestone Tracker';
        viewHeaderSubtitle.textContent = 'Track and customize your research deliverables';

        const initials = (currentUser?.fullName || 'User').split(' ').map(n=>n[0]).join('').substring(0, 2).toUpperCase();

        sidebarProfile.innerHTML = 
          '<div class="flex items-center justify-between">' +
            '<div class="flex items-center space-x-2.5 overflow-hidden">' +
              '<div class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-xs flex items-center justify-center flex-shrink-0 border border-indigo-200">' +
                initials +
              '</div>' +
              '<div class="overflow-hidden">' +
                '<span class="text-xs font-bold text-slate-800 block truncate">' + (currentUser?.fullName || 'Researcher') + '</span>' +
                '<span class="text-[10px] text-slate-500 font-medium block truncate">' + (currentUser?.email || '') + '</span>' +
              '</div>' +
            '</div>' +
            '<button onclick="handleLogout()" class="p-1.5 text-slate-400 hover:text-rose-600 transition" title="Sign Out">' +
              '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>' +
            '</button>' +
          '</div>';

        fetchMilestones();
        fetchMetrics();
        fetchTelemetry();
      } else {
        // Unauthenticated State: Hide Sidebar completely, full-width viewport (ml-0), show landing
        sidebar.classList.add('hidden');
        mainViewport.classList.remove('ml-64');
        authContainer.classList.add('hidden');
        unauthGate.classList.remove('hidden');
        btnHeaderNewMilestone.classList.add('hidden');
        btnHeaderSignIn.classList.remove('hidden');

        viewHeaderTitle.textContent = 'UniBench';
        viewHeaderSubtitle.textContent = 'Autonomous research deliverables & substrate benchmarking';
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
        { id: 'PENDING', label: 'Planned / Pending', bg: 'bg-slate-50/70', border: 'border-slate-200', badge: 'bg-slate-100 text-slate-700' },
        { id: 'IN_PROGRESS', label: 'In Progress (Active)', bg: 'bg-amber-50/40', border: 'border-amber-200/70', badge: 'bg-amber-100 text-amber-800' },
        { id: 'COMPLETED', label: 'Completed & Validated', bg: 'bg-emerald-50/40', border: 'border-emerald-200/70', badge: 'bg-emerald-100 text-emerald-800' }
      ];

      container.innerHTML = 
        '<div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">' +
          statuses.map(col => {
            const items = currentMilestones.filter(m => m.status === col.id);
            return '<div class="rounded-2xl p-4.5 space-y-3.5 border ' + col.border + ' ' + col.bg + ' shadow-xs">' +
              '<div class="flex items-center justify-between pb-2.5 border-b border-slate-200/70">' +
                '<span class="font-extrabold text-xs text-slate-800 uppercase tracking-wider">' + col.label + '</span>' +
                '<span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full ' + col.badge + '">' + items.length + '</span>' +
              '</div>' +
              '<div class="space-y-3 min-h-[140px]">' +
                (items.length === 0 ? '<div class="text-center py-8 text-slate-400 text-xs">No deliverables here</div>' : items.map(t => renderCardHtml(t)).join('')) +
              '</div>' +
            '</div>';
          }).join('') +
        '</div>';
    }

    function renderList(container) {
      if (currentMilestones.length === 0) {
        container.innerHTML = '<div class="pastel-card rounded-2xl p-12 text-center text-xs text-slate-400">No deliverables match your search criteria.</div>';
        return;
      }
      container.innerHTML = '<div class="space-y-3">' + currentMilestones.map(t => renderCardHtml(t)).join('') + '</div>';
    }

    function renderCardHtml(t) {
      const priorityColors = {
        CRITICAL: 'bg-rose-50 text-rose-700 border-rose-200',
        HIGH: 'bg-amber-50 text-amber-700 border-amber-200',
        MEDIUM: 'bg-sky-50 text-sky-700 border-sky-200',
        LOW: 'bg-slate-100 text-slate-600 border-slate-200',
      }[t.priority] || 'bg-slate-100 text-slate-600 border-slate-200';

      const tagsHtml = (t.tags || []).map(tag =>
        '<span class="text-[10px] px-2 py-0.5 rounded-md bg-indigo-50/80 text-indigo-700 border border-indigo-100 font-mono font-medium">' + tag + '</span>'
      ).join('');

      return '<div class="pastel-card rounded-xl p-4 space-y-2.5 text-left shadow-xs cursor-pointer" onclick="openInspectModal(\\'' + t.id + '\\')">' +
        '<div class="flex items-start justify-between gap-2">' +
          '<h4 class="font-bold text-xs text-slate-800 leading-snug flex-1 hover:text-indigo-600 transition">' + t.title + '</h4>' +
          '<span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded border ' + priorityColors + '">' + t.priority + '</span>' +
        '</div>' +
        (t.description ? '<p class="text-[11px] text-slate-500 leading-relaxed line-clamp-3">' + t.description + '</p>' : '') +
        (t.ai_summary ? '<div class="text-[10px] text-indigo-900 bg-indigo-50/60 p-2.5 rounded-lg border border-indigo-100 leading-relaxed"><span class="font-bold text-indigo-700">Synthesis:</span> ' + t.ai_summary + '</div>' : '') +
        '<div class="flex items-center justify-between pt-2 border-t border-slate-100" onclick="event.stopPropagation()">' +
          '<div class="flex flex-wrap gap-1">' + tagsHtml + '</div>' +
          '<div class="flex items-center space-x-1.5 text-[11px]">' +
            '<button onclick="advanceStatus(\\'' + t.id + '\\', \\'' + t.status + '\\')" class="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 hover:bg-indigo-600 text-slate-600 hover:text-white transition font-medium" title="Advance Phase">&rarr;</button>' +
            '<button onclick="openEditModal(\\'' + t.id + '\\')" class="text-indigo-600 hover:text-indigo-800 font-semibold px-1">Edit</button>' +
            '<button onclick="deleteMilestone(\\'' + t.id + '\\')" class="text-rose-500 hover:text-rose-700 font-semibold px-1">Del</button>' +
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
        '<span class="px-3 py-1 rounded-xl bg-white border border-slate-200 text-indigo-700 font-mono text-xs font-semibold shadow-2xs">' + tag + ' (' + cnt + ')</span>'
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

      if (!title) return showToast('Please enter a milestone title', 'error');

      try {
        const res = await fetch('/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authToken },
          body: JSON.stringify({ title, description, status, priority, tags })
        });
        if (!res.ok) throw new Error('Failed to create milestone');
        closeCreateModal();
        document.getElementById('newTitle').value = '';
        document.getElementById('newDesc').value = '';
        showToast('Milestone created successfully!', 'success');
        fetchMilestones();
        fetchMetrics();
      } catch (e) { showToast(e.message, 'error'); }
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
        showToast('Deliverable updated successfully!', 'success');
        fetchMilestones();
        fetchMetrics();
      } catch (e) { showToast(e.message, 'error'); }
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
        showToast('Phase advanced to ' + nextStatus, 'info');
        fetchMilestones();
        fetchMetrics();
      } catch (e) {}
    }

    async function deleteMilestone(id) {
      const confirmed = await askConfirm({
        title: 'Delete Deliverable?',
        message: 'Are you sure you want to delete this milestone? This action cannot be undone.',
        confirmText: 'Delete'
      });
      if (!confirmed) return;

      try {
        const res = await fetch('/tasks/' + id, { method: 'DELETE', headers: { 'Authorization': 'Bearer ' + authToken } });
        if (!res.ok) throw new Error('Delete failed');
        showToast('Deliverable deleted', 'info');
        fetchMilestones();
        fetchMetrics();
      } catch (e) { showToast(e.message, 'error'); }
    }

    // --- Full AI Synthesizer View ---
    function loadSampleFypNote() {
      document.getElementById('aiRawInputFull').value = "Supervisor meeting: Characterize phase transition and optical signal drift on photonic integrated circuit emulators. Compare Joules per MAC energy consumption against 4nm CMOS GPU baseline for Chapter 4 dissertation results. Target completion next month.";
      showToast('Sample research note loaded', 'info');
    }

    async function synthesizeMilestoneFull() {
      const input = document.getElementById('aiRawInputFull').value.trim();
      if (!input) return showToast('Please enter research notes or deliverable specifications!', 'error');

      const btnText = document.getElementById('btnSynthesizeFullText');
      const spinner = document.getElementById('btnSynthesizeFullSpinner');
      btnText.textContent = 'Synthesizing with Gemini...';
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
          currentFullSynthesized.suggestedPriority === 'CRITICAL' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
          currentFullSynthesized.suggestedPriority === 'HIGH' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
          'bg-sky-50 text-sky-700 border border-sky-200'
        );

        document.getElementById('aiFullActions').innerHTML = (currentFullSynthesized.actionItems || []).map(a => '<li>' + a + '</li>').join('');
        document.getElementById('aiFullTags').innerHTML = (currentFullSynthesized.suggestedTags || []).map(tg =>
          '<span class="text-[10px] px-2 py-0.5 rounded bg-white text-indigo-700 border border-indigo-100 font-mono font-medium">' + tg + '</span>'
        ).join('');

        document.getElementById('aiFullPreviewBox').classList.remove('hidden');
        showToast('AI synthesis completed with Gemini 2.5 Flash', 'success');
      } catch (e) {
        showToast(e.message, 'error');
      } finally {
        btnText.textContent = 'Synthesize with Gemini';
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
        showToast('Deliverable saved to your workspace!', 'success');
        document.getElementById('aiFullPreviewBox').classList.add('hidden');
        document.getElementById('aiRawInputFull').value = '';
        switchView('tracker');
        fetchMilestones();
        fetchMetrics();
      } catch (e) { showToast(e.message, 'error'); }
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
      showToast('Workspace preferences saved!', 'success');
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
