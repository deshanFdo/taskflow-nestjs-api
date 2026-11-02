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
  <title>UniBench FYP Tracker | NestJS & Supabase Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
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
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0f19; color: #f3f4f6; }
    .glass { background: rgba(17, 24, 39, 0.75); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); }
    .glass-card { background: rgba(31, 41, 55, 0.55); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.06); }
  </style>
</head>
<body class="min-h-screen flex flex-col selection:bg-purple-500 selection:text-white">

  <!-- Navigation Bar -->
  <header class="sticky top-0 z-50 glass border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
        </div>
        <div>
          <span class="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-purple-400">UniBench FYP Tracker</span>
          <span class="ml-2 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-purple-950 text-purple-300 border border-purple-800/60">Final Year Project</span>
        </div>
      </div>

      <div class="flex items-center space-x-3">
        <a href="/docs" target="_blank" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 flex items-center space-x-1.5 transition">
          <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          <span>OpenAPI Docs</span>
        </a>
        <a href="https://github.com/deshanFdo/taskflow-nestjs-api" target="_blank" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/30 flex items-center space-x-1.5 transition">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>GitHub Repo</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Telemetry Bar -->
  <section class="border-b border-gray-800/80 bg-gray-950/60 py-2.5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-xs text-gray-400 gap-3">
      <div class="flex items-center space-x-4">
        <span class="flex items-center space-x-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="font-medium text-gray-200" id="telemetryStatus">Connecting...</span>
        </span>
        <span class="text-gray-600">|</span>
        <span id="telemetryDb">Supabase DB: checking...</span>
        <span class="text-gray-600">|</span>
        <span id="telemetryMemory">Memory: -- MB</span>
      </div>
      <div class="font-mono text-[11px] text-gray-400">
        UniBench: Unconventional Neural Benchmark &bull; IIT / University of Westminster
      </div>
    </div>
  </section>

  <!-- Main Grid -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
    
    <!-- Left Column: AI Research & Supervisor Feedback Synthesizer -->
    <section class="lg:col-span-5 space-y-6">
      <div class="glass rounded-2xl p-6 shadow-xl">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2">
            <span class="text-lg">🧬</span>
            <h2 class="text-base font-bold text-white tracking-wide">AI Research Synthesizer</h2>
          </div>
          <button onclick="loadSamplePrompt()" class="text-xs text-purple-400 hover:text-purple-300 font-medium transition">
            Load FYP Note
          </button>
        </div>
        <p class="text-xs text-gray-400 mb-4">
          Paste supervisor notes, research paper summaries, or experiment requirements. The AI engine formalizes technical milestones, infers priority, and extracts deliverables.
        </p>

        <textarea id="aiRawInput" rows="5" class="w-full bg-gray-900/90 text-sm rounded-xl p-3.5 border border-gray-700/80 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-gray-100 placeholder-gray-500 outline-none transition font-sans resize-none" placeholder="e.g. Supervisor requested evaluation of memristive crossbar latency against NVIDIA H100 GPU baselines on temporal spike train benchmarks. Need high priority empirical validation for dissertation Chapter 4..."></textarea>

        <div class="mt-4 flex items-center justify-between">
          <select id="aiModelSelect" class="bg-gray-900 border border-gray-700 text-xs text-gray-300 rounded-lg px-2.5 py-1.5 outline-none">
            <option value="gpt-4o-mini">OpenAI GPT-4o-mini</option>
            <option value="gpt-4o">OpenAI GPT-4o</option>
            <option value="neural-engine">Academic Neural Engine</option>
          </select>

          <button id="btnSynthesize" onclick="synthesizeTask()" class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-purple-600/20 transition flex items-center space-x-2">
            <span id="btnSynthesizeText">Synthesize Milestone</span>
            <svg id="btnSynthesizeSpinner" class="hidden w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
          </button>
        </div>

        <!-- AI Output Preview Card -->
        <div id="aiPreviewCard" class="hidden mt-6 pt-5 border-t border-gray-800 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Formalized FYP Milestone</span>
            <span id="aiPriorityBadge" class="px-2 py-0.5 rounded text-[11px] font-bold"></span>
          </div>

          <h3 id="aiOutputTitle" class="text-sm font-bold text-white"></h3>
          <p id="aiOutputSummary" class="text-xs text-purple-300 bg-purple-950/40 p-2.5 rounded-lg border border-purple-900/50"></p>

          <div>
            <span class="text-[11px] text-gray-400 font-semibold block mb-1">Key Research Deliverables:</span>
            <ul id="aiOutputActions" class="space-y-1 text-xs text-gray-300 list-disc list-inside"></ul>
          </div>

          <div class="flex flex-wrap gap-1.5 pt-1" id="aiOutputTags"></div>

          <button onclick="saveAiTaskToSupabase()" class="w-full mt-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow transition flex items-center justify-center space-x-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>Add Milestone to Supabase DB</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Right Column: Live FYP Milestones -->
    <section class="lg:col-span-7 space-y-6">
      <div class="glass rounded-2xl p-6 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h2 class="text-base font-bold text-white tracking-wide">Final Year Project Milestones</h2>
            <p class="text-xs text-gray-400">Live PostgreSQL tracking &bull; UniBench Architecture & Research Timeline</p>
          </div>

          <div class="flex items-center space-x-2">
            <select id="filterStatus" onchange="fetchTasks()" class="bg-gray-900 border border-gray-700 text-xs text-gray-300 rounded-lg px-2.5 py-1.5 outline-none">
              <option value="">All Phases</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="IN_PROGRESS">IN_PROGRESS</option>
              <option value="PENDING">PENDING</option>
            </select>
            <button onclick="fetchTasks()" class="p-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 transition" title="Refresh">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
          </div>
        </div>

        <!-- Task List Container -->
        <div id="tasksContainer" class="space-y-3.5">
          <div class="text-center py-12 text-gray-500 text-xs">
            <svg class="w-8 h-8 mx-auto mb-2 animate-spin text-purple-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
            Loading FYP milestones from Supabase...
          </div>
        </div>
      </div>
    </section>

  </main>

  <footer class="glass border-t border-gray-800 py-4 mt-auto">
    <div class="max-w-7xl mx-auto px-4 text-center text-xs text-gray-400">
      <span class="font-semibold text-gray-200">UniBench FYP Research Platform</span> &bull; Developed by <a href="https://github.com/deshanFdo" target="_blank" class="text-purple-400 font-semibold hover:underline">Deshan Fernando</a> &bull; BSc (Hons) Computer Science, IIT / University of Westminster &bull; Powered by NestJS &bull; Supabase PostgreSQL &bull; Vercel
    </div>
  </footer>

  <script>
    let currentSynthesizedData = null;

    async function loadTelemetry() {
      try {
        const res = await fetch('/health');
        const data = await res.json();
        document.getElementById('telemetryStatus').textContent = 'System Online (' + data.environment + ')';
        document.getElementById('telemetryDb').textContent = 'Supabase DB: ' + data.database.latencyMs + 'ms';
        document.getElementById('telemetryMemory').textContent = 'Memory: ' + data.system.heapUsedMb + ' MB';
      } catch (err) {
        document.getElementById('telemetryStatus').textContent = 'API Initializing...';
      }
    }

    async function fetchTasks() {
      const container = document.getElementById('tasksContainer');
      const statusFilter = document.getElementById('filterStatus').value;
      const url = statusFilter ? '/tasks?status=' + statusFilter : '/tasks';

      try {
        const res = await fetch(url);
        const json = await res.json();
        const tasks = json.data || [];

        if (tasks.length === 0) {
          container.innerHTML = '<div class="text-center py-8 text-gray-500 text-xs">No milestones found. Try synthesizing one on the left!</div>';
          return;
        }

        container.innerHTML = tasks.map(t => {
          const priorityColors = {
            CRITICAL: 'bg-red-950 text-red-300 border-red-800',
            HIGH: 'bg-orange-950 text-orange-300 border-orange-800',
            MEDIUM: 'bg-blue-950 text-blue-300 border-blue-800',
            LOW: 'bg-gray-800 text-gray-300 border-gray-700',
          }[t.priority] || 'bg-gray-800 text-gray-300';

          const statusColors = {
            COMPLETED: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60',
            IN_PROGRESS: 'text-amber-400 bg-amber-950/60 border-amber-800/60',
            PENDING: 'text-gray-400 bg-gray-900 border-gray-800',
          }[t.status] || 'text-gray-400';

          const tagsHtml = (t.tags || []).map(tag => 
            '<span class="text-[10px] px-2 py-0.5 rounded-md bg-gray-800/90 text-gray-300 border border-gray-700 font-mono">' + tag + '</span>'
          ).join('');

          return '<div class="glass-card rounded-xl p-4 transition hover:border-purple-500/40">' +
            '<div class="flex items-start justify-between gap-2 mb-2">' +
              '<h3 class="font-bold text-sm text-gray-100 flex-1">' + t.title + '</h3>' +
              '<div class="flex items-center space-x-1.5">' +
                '<span class="text-[10px] font-bold px-2 py-0.5 rounded border ' + priorityColors + '">' + t.priority + '</span>' +
                '<span class="text-[10px] font-semibold px-2 py-0.5 rounded border ' + statusColors + '">' + t.status + '</span>' +
              '</div>' +
            '</div>' +
            (t.description ? '<p class="text-xs text-gray-400 mb-2.5 leading-relaxed">' + t.description + '</p>' : '') +
            (t.ai_summary ? '<div class="text-xs text-purple-300 bg-purple-950/30 p-2.5 rounded-lg border border-purple-900/40 mb-2.5 text-[11px]"><span class="font-bold text-purple-200">Research Synthesis:</span> ' + t.ai_summary + '</div>' : '') +
            '<div class="flex items-center justify-between pt-2 border-t border-gray-800/80">' +
              '<div class="flex flex-wrap gap-1">' + tagsHtml + '</div>' +
              '<div class="flex items-center space-x-2">' +
                '<button onclick="enrichExistingTask(\\'' + t.id + '\\')" class="text-[11px] font-semibold text-purple-400 hover:text-purple-300 transition">✨ AI Synthesis</button>' +
                '<span class="text-gray-700">&bull;</span>' +
                '<button onclick="deleteTask(\\'' + t.id + '\\')" class="text-[11px] font-semibold text-red-400 hover:text-red-300 transition">Delete</button>' +
              '</div>' +
            '</div>' +
          '</div>';
        }).join('');
      } catch (err) {
        container.innerHTML = '<div class="text-center py-8 text-red-400 text-xs">Failed to load milestones from Supabase.</div>';
      }
    }

    function loadSamplePrompt() {
      document.getElementById('aiRawInput').value = "Supervisor meeting feedback: Implement standardized benchmark datasets for physical substrates (temporal XOR and electrophysiological ECG signals). Quantify Joules per MAC comparison against NVIDIA H100 GPU baselines. Priority urgent for Chapter 4 dissertation results.";
    }

    async function synthesizeTask() {
      const input = document.getElementById('aiRawInput').value.trim();
      if (!input) return alert('Please enter research notes or supervisor feedback!');

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

    async function saveAiTaskToSupabase() {
      if (!currentSynthesizedData) return;

      try {
        const res = await fetch('/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: currentSynthesizedData.suggestedTitle,
            description: currentSynthesizedData.structuredDescription,
            priority: currentSynthesizedData.suggestedPriority,
            status: 'IN_PROGRESS',
            tags: Array.from(new Set([...(currentSynthesizedData.suggestedTags || []), 'FYP', 'UniBench'])),
          })
        });

        if (!res.ok) throw new Error('Database insertion failed');

        alert('Milestone saved to Supabase PostgreSQL database!');
        document.getElementById('aiPreviewCard').classList.add('hidden');
        document.getElementById('aiRawInput').value = '';
        fetchTasks();
        loadTelemetry();
      } catch (err) {
        alert(err.message);
      }
    }

    async function enrichExistingTask(id) {
      try {
        const res = await fetch('/ai/enrich/' + id, { method: 'POST' });
        if (!res.ok) throw new Error('Enrichment failed');
        fetchTasks();
      } catch (err) {
        alert(err.message);
      }
    }

    async function deleteTask(id) {
      if (!confirm('Are you sure you want to remove this milestone from Supabase?')) return;
      try {
        const res = await fetch('/tasks/' + id, { method: 'DELETE' });
        if (!res.ok) throw new Error('Deletion failed');
        fetchTasks();
        loadTelemetry();
      } catch (err) {
        alert(err.message);
      }
    }

    // Initial boot
    loadTelemetry();
    fetchTasks();
    setInterval(loadTelemetry, 15000);
  </script>
</body>
</html>`;
    return res.send(html);
  }
}
