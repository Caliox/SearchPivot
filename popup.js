// --- CONFIGURATION ---

const PRESET_ENGINES = [
  // 搜索引擎
  { id: 'bing', name: 'Bing', type: 'engine', icon: 'bing', urlTemplate: 'https://cn.bing.com/search?q=%s' },
  { id: 'google', name: 'Google', type: 'engine', icon: 'google', urlTemplate: 'https://www.google.com/search?q=%s' },
  { id: 'baidu', name: '百度', type: 'engine', icon: 'baidu', urlTemplate: 'https://www.baidu.com/s?wd=%s' },
  { id: 'duckduckgo', name: 'DuckDuckGo', type: 'engine', icon: 'duckduckgo', urlTemplate: 'https://duckduckgo.com/?q=%s' },
  { id: 'quark', name: '夸克', type: 'engine', icon: 'quark', urlTemplate: 'https://quark.sm.cn/s?q=%s' },

  // 搜索站点
  { id: 'github', name: 'GitHub', type: 'site', icon: 'github', urlTemplate: 'https://github.com/search?q=%s' },
  { id: 'bilibili', name: 'Bilibili', type: 'site', icon: 'bilibili', urlTemplate: 'https://search.bilibili.com/all?keyword=%s' },
  { id: 'youtube', name: 'YouTube', type: 'site', icon: 'youtube', urlTemplate: 'https://www.youtube.com/results?search_query=%s' },
];

const URL_SEARCH_PARAMS = ['q', 'wd', 'query', 'keyword', 'search_query', 'text', 'p'];

// SVG Strings
const SVGS = {
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',

  // Brand Icons
  google: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.788 5.108A9 9 0 1 0 21 12h-8"></path></svg>',
  bing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l4 1.5v12l6 2.5-2-10 6-2.5-14-3z"></path></svg>',
  duckduckgo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
  baidu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 0 1 8 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a9 9 0 0 1 8-6z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>',
  quark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8l4 8H8z"></path></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
  bilibili: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="13" rx="2"></rect><path d="M9 3l1.5 3"></path><path d="M15 3l-1.5 3"></path><path d="M9 11h.01"></path><path d="M15 11h.01"></path></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"></rect><polygon points="10 9 15 12 10 15 10 9"></polygon></svg>'
};

// --- STATE MANAGEMENT ---

let state = {
  selectedEngineId: 'bing',
  openBehavior: 'NEW_TAB',
  engines: [],
  currentDomain: null
};

// --- DOM ELEMENTS ---

const els = {
  searchInput: document.getElementById('search-input'),
  enterHint: document.getElementById('enter-hint'),
  enginesGrid: document.getElementById('engines-grid'),
  sitesGrid: document.getElementById('sites-grid'),
  behaviorSegments: document.querySelectorAll('.segment'),

  // Views
  viewHome: document.getElementById('view-home'),
  viewSettings: document.getElementById('view-settings'),
  btnSettings: document.getElementById('btn-settings'),
  btnBack: document.getElementById('btn-back'),

  // Settings
  customEngineList: document.getElementById('custom-engine-list'),
  inputName: document.getElementById('new-engine-name'),
  inputUrl: document.getElementById('new-engine-url'),
  inputIcon: document.getElementById('new-engine-icon'),
  inputType: document.getElementById('new-engine-type'),
  editModeId: document.getElementById('edit-mode-id'),

  btnUploadTrigger: document.getElementById('btn-upload-trigger'),
  fileUpload: document.getElementById('file-upload'),

  btnAddEngine: document.getElementById('btn-add-engine'),
  btnAddText: document.getElementById('btn-add-text'),
  btnCancelEdit: document.getElementById('btn-cancel-edit'),
  addError: document.getElementById('add-error'),
};

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', async () => {
  await loadSettings();
  await detectCurrentTab();

  renderAll();
  setupEventListeners();
});

// --- LOGIC ---

async function loadSettings() {
  return new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.get(['settings'], (result) => {
        if (result.settings) {
          state = { ...state, ...result.settings };
          if (!state.engines || state.engines.length === 0) {
            state.engines = [...PRESET_ENGINES];
          }
        } else {
          state.engines = [...PRESET_ENGINES];
        }
        resolve();
      });
    } else {
      // Dev Fallback
      const stored = localStorage.getItem('sp_settings');
      if (stored) {
        state = { ...state, ...JSON.parse(stored) };
      } else {
        state.engines = [...PRESET_ENGINES];
      }
      resolve();
    }
  });
}

function saveSettings() {
  const toSave = {
    selectedEngineId: state.selectedEngineId,
    openBehavior: state.openBehavior,
    engines: state.engines
  };

  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ settings: toSave });
  } else {
    localStorage.setItem('sp_settings', JSON.stringify(toSave));
  }
}

async function detectCurrentTab() {
  if (typeof chrome === 'undefined' || !chrome.tabs) {
    return;
  }

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.url) return;

  try {
    const urlObj = new URL(tab.url);
    state.currentDomain = urlObj.hostname;

    // Extract Search Terms
    const params = urlObj.searchParams;
    for (const key of URL_SEARCH_PARAMS) {
      const val = params.get(key);
      if (val) {
        els.searchInput.value = val;
        break;
      }
    }
  } catch (e) {
    console.error("Error parsing URL", e);
  }
}

function selectEngine(engineId) {
  state.selectedEngineId = engineId;
  saveSettings();
  renderAll();
  els.searchInput.focus();
}

function executeSearch() {
  const engine = state.engines.find(e => e.id === state.selectedEngineId);
  if (!engine) return;

  let query = els.searchInput.value.trim();
  if (!query) return;

  const searchUrl = engine.urlTemplate.replace('%s', encodeURIComponent(query));
  openUrl(searchUrl);
}

function openUrl(url) {
  if (typeof chrome === 'undefined' || !chrome.tabs) {
    window.open(url, '_blank');
    return;
  }

  const behavior = state.openBehavior;

  if (behavior === 'CURRENT_TAB') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) chrome.tabs.update(tabs[0].id, { url });
    });
  } else if (behavior === 'NEW_TAB') {
    chrome.tabs.create({ url, active: true });
  } else if (behavior === 'NEW_WINDOW') {
    chrome.windows.create({ url });
  } else if (behavior === 'INCOGNITO') {
    chrome.windows.create({ url, incognito: true });
  }
}

function resetForm() {
  els.inputName.value = '';
  els.inputUrl.value = '';
  els.inputIcon.value = '';
  els.fileUpload.value = '';
  els.addError.classList.add('hidden');
  els.editModeId.value = '';
  els.btnAddText.textContent = '添加引擎';
  els.btnCancelEdit.classList.add('hidden');
}

// --- HELPERS ---

function getIconContent(engine) {
  if (engine.iconUrl) {
    return `<img src="${engine.iconUrl}" alt="icon">`;
  }
  if (SVGS[engine.icon]) {
    return SVGS[engine.icon];
  }
  return SVGS['globe'];
}

// --- RENDERING ---

function renderAll() {
  renderGrid(els.enginesGrid, 'engine');
  renderGrid(els.sitesGrid, 'site');
  renderBehavior();
  renderSettingsList();
  updateHint();
}

function renderGrid(container, type) {
  container.innerHTML = '';
  const filtered = state.engines.filter(e => (e.type || 'engine') === type);

  filtered.forEach(engine => {
    const card = document.createElement('div');
    card.className = `engine-card ${state.selectedEngineId === engine.id ? 'active' : ''}`;
    card.onclick = () => selectEngine(engine.id);

    const iconContent = getIconContent(engine);

    card.innerHTML = `
            <div class="icon-box">${iconContent}</div>
            <div class="name">${engine.name}</div>
        `;
    container.appendChild(card);
  });
}

function renderBehavior() {
  els.behaviorSegments.forEach(btn => {
    if (btn.dataset.value === state.openBehavior) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderSettingsList() {
  els.customEngineList.innerHTML = '';

  state.engines.forEach(eng => {
    const item = document.createElement('div');
    item.className = 'list-item';

    const iconContent = getIconContent(eng);

    item.innerHTML = `
            <div class="meta">
                <div class="icon">${iconContent}</div>
                <div class="details">
                    <div class="title">${eng.name}</div>
                    <div class="url">${eng.urlTemplate}</div>
                </div>
            </div>
            <div class="list-actions">
                <button type="button" class="btn-list-action edit" title="编辑">${SVGS.edit}</button>
                <button type="button" class="btn-list-action delete" title="删除">${SVGS.trash}</button>
            </div>
        `;

    // Edit Action
    item.querySelector('.btn-list-action.edit').onclick = () => {
      els.inputName.value = eng.name;
      els.inputUrl.value = eng.urlTemplate;
      els.inputIcon.value = eng.iconUrl || '';
      els.inputType.value = eng.type || 'engine';
      els.editModeId.value = eng.id;

      els.btnAddText.textContent = '保存修改';
      els.btnCancelEdit.classList.remove('hidden');

      // Scroll to form top
      document.querySelector('.settings-content').scrollTop = 0;
      els.inputName.focus();
    };

    // Delete Action
    item.querySelector('.btn-list-action.delete').onclick = () => {
      if (state.engines.length <= 1) {
        alert("至少保留一个搜索引擎");
        return;
      }
      if (confirm(`确定删除 ${eng.name} 吗？`)) {
        state.engines = state.engines.filter(e => e.id !== eng.id);
        // Reset to default if deleted engine was selected
        if (state.selectedEngineId === eng.id) {
          state.selectedEngineId = state.engines[0].id;
        }

        // If editing the one we deleted, reset form
        if (els.editModeId.value === eng.id) {
          resetForm();
        }

        saveSettings();
        renderAll();
      }
    };

    els.customEngineList.appendChild(item);
  });
}

function updateHint() {
  const engine = state.engines.find(e => e.id === state.selectedEngineId);
  if (engine) {
    els.enterHint.textContent = `回车使用 ${engine.name} 搜索`;
    els.enterHint.classList.remove('hidden');
  } else {
    els.enterHint.classList.add('hidden');
  }
}

function toggleView(view) {
  if (view === 'settings') {
    els.viewHome.classList.add('hidden');
    els.viewSettings.classList.remove('hidden');
    resetForm(); // Reset form when entering settings to start fresh
  } else {
    els.viewHome.classList.remove('hidden');
    els.viewSettings.classList.add('hidden');
  }
}

// --- EVENT LISTENERS ---

function setupEventListeners() {
  // Input
  els.searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
  });

  // Behavior Segments
  els.behaviorSegments.forEach(btn => {
    btn.addEventListener('click', () => {
      state.openBehavior = btn.dataset.value;
      saveSettings();
      renderBehavior();
    });
  });

  // Navigation
  els.btnSettings.addEventListener('click', () => toggleView('settings'));
  els.btnBack.addEventListener('click', () => toggleView('home'));

  // File Upload Handlers
  els.btnUploadTrigger.addEventListener('click', () => {
    els.fileUpload.click();
  });

  els.fileUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 20 * 1024) {
      showError("图标文件过大 (请 < 20KB)");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      els.inputIcon.value = ev.target.result;
      els.addError.classList.add('hidden');
    };
    reader.onerror = () => showError("读取文件失败");
    reader.readAsDataURL(file);
  });

  // Cancel Edit
  els.btnCancelEdit.addEventListener('click', () => {
    resetForm();
  });

  // Add / Update Engine
  els.btnAddEngine.addEventListener('click', () => {
    const name = els.inputName.value.trim();
    const url = els.inputUrl.value.trim();
    const iconUrl = els.inputIcon.value.trim();
    const type = els.inputType.value;
    const editId = els.editModeId.value;

    if (!name || !url) {
      showError('请填写名称和 URL');
      return;
    }
    if (!url.includes('%s')) {
      showError('URL 必须包含 "%s"');
      return;
    }

    if (editId) {
      // Update Existing
      const index = state.engines.findIndex(e => e.id === editId);
      if (index !== -1) {
        state.engines[index] = {
          ...state.engines[index],
          name,
          urlTemplate: url,
          iconUrl: iconUrl || state.engines[index].iconUrl,
          type
        };
        if (iconUrl) state.engines[index].iconUrl = iconUrl;
      }
    } else {
      // Add New
      const newEngine = {
        id: `custom-${Date.now()}`,
        name,
        icon: 'globe',
        iconUrl: iconUrl || null,
        urlTemplate: url,
        type: type
      };
      state.engines.push(newEngine);
    }

    saveSettings();
    resetForm();
    renderAll();
  });
}

function showError(msg) {
  els.addError.textContent = msg;
  els.addError.classList.remove('hidden');
}