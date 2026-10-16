import { event_types } from '../../../../script.js';

const MODULE = 'hellaverse_infernal_os';
const ROOT_ID = 'hvos-root';
const BUTTON_ID = 'hvos-launcher';
const INJECT_MARK = 'hvos_ephemeral_injection';

const RINGS = {
  Pride: { label: 'Orgulho', colors: ['#8e142b', '#e52f4c', '#ff6c45', '#f6c86b'], text: '#fff4e8', icon: '♛', motif: 'vermelho, vinho, coral e dourado', city: 'Pentagram City' },
  Greed: { label: 'Ganância', colors: ['#063c2b', '#087f45', '#b8ff38', '#d6a84b'], text: '#efffe4', icon: '＄', motif: 'verde-petróleo, esmeralda, néon-lima e ouro velho', city: 'regiões industriais e distritos comerciais' },
  Wrath: { label: 'Ira', colors: ['#4b1719', '#a73724', '#f06a32', '#ffc15c'], text: '#fff1df', icon: '⚒', motif: 'ferrugem, vermelho queimado, cobre e âmbar', city: 'planícies rurais e cidades de estilo western' },
  Lust: { label: 'Luxúria', colors: ['#111b4b', '#4c2a91', '#8b5cff', '#28e2ee'], text: '#e9faff', icon: '♡', motif: 'azul-noite, índigo, violeta e ciano elétrico', city: 'distritos noturnos, clubes e entretenimento' },
  Gluttony: { label: 'Gula', colors: ['#9a481b', '#f6a928', '#ffe77b', '#74db9a'], text: '#fff6da', icon: '✹', motif: 'coral, mel, amarelo-sol e verde-cítrico', city: 'áreas festivas e paisagens exuberantes' },
  Sloth: { label: 'Preguiça', colors: ['#39235f', '#7445a8', '#d34fc2', '#ff9dcc'], text: '#fff0ff', icon: '☾', motif: 'violeta, ameixa, magenta, rosa-claro e lilás', city: 'distrito médico, hospitais e torres pastel' },
  Envy: { label: 'Inveja', colors: ['#102d52', '#244fc2', '#8b42ca', '#58ddd0'], text: '#e9fbff', icon: '◈', motif: 'azul-profundo, cobalto, púrpura e turquesa', city: 'regiões aquáticas ainda pouco documentadas' },
};

const LOCATIONS = [
  { name: 'Distrito Médico da Preguiça', ring: 'Sloth', keys: ['distrito médico da preguiça', 'anel da preguiça', 'sloth ring', 'hospital da preguiça', 'hospital st. an', "st. an's hospital", 'teleporta pro anel da preguiça', 'indo para anel da preguiça'], lore: 'Ambiente médico de torres altas e arquitetura pastel; violeta, magenta, rosa e lilás.' },
  { name: 'Hazbin Hotel', ring: 'Pride', keys: ['hazbin hotel', 'hotel hazbin', 'hotel da charlie', 'hotel da redenção'], lore: 'Hotel de Charlie Morningstar em Pentagram City; projeto de reabilitação de pecadores.' },
  { name: 'Pentagram City', ring: 'Pride', keys: ['pentagram city', 'pentagrama city', 'pentagram', 'pentagram city'], lore: 'Metrópole central do Anel do Orgulho, urbana, violenta, comercial e midiática.' },
  { name: 'Cannibal Town', ring: 'Pride', keys: ['cannibal town', 'cidade dos canibais', 'rosie'], lore: 'Bairro de estética vintage, comunidade canibal e influência de Rosie.' },
  { name: 'V Tower / VoxTek', ring: 'Pride', keys: ['voxtek', 'v tower', 'torre dos v', 'vox tower'], lore: 'Complexo empresarial e midiático associado a Vox e aos Vees.' },
  { name: "Ozzie's", ring: 'Lust', keys: ["ozzie's", 'ozzies', 'club ozzie', 'clube do asmodeus', 'mammon'], lore: 'Clube sofisticado do Anel da Luxúria, ligado a Asmodeus e ao entretenimento.' },
  { name: 'Lust Ring — distrito noturno', ring: 'Lust', keys: ['distrito noturno da luxúria', 'lust district'], lore: 'Distrito noturno genérico do Anel da Luxúria; a cena específica pode ser escolhida manualmente.' },
  { name: 'Loo Loo Land', ring: 'Greed', keys: ['loo loo land', 'lulu land'], lore: 'Parque temático decadente do Anel da Ganância, com estética de entretenimento corporativo.' },
  { name: 'Imp City', ring: 'Pride', keys: ['imp city', 'cidade dos imps', 'escritório da i.m.p.', 'escritorio da imp', 'i.m.p.', 'immediate murder professionals'], lore: 'Zona urbana de Pride e base de operações da I.M.P.' },
  { name: 'Harvest Moon Festival', ring: 'Wrath', keys: ['harvest moon', 'festival da lua da colheita', 'fazenda dos buckzo'], lore: 'Evento rural do Anel da Ira com competição, tradição e tensões locais.' },
  { name: 'Casa de Stolas', ring: 'Pride', keys: ['mansão de stolas', 'casa de stolas', 'stolas palace', 'palácio de stolas'], lore: 'Residência aristocrática da família Goetia; o contexto pode ser adaptado à cronologia.' },
  { name: 'Greed Industrial District', ring: 'Greed', keys: ['anel da ganância', 'greed ring', 'indústria da ganância', 'teleporta pro anel da ganância', 'indo para o anel da ganância'], lore: 'Distrito industrial poluído, comércio predatório, entretenimento e exploração econômica.' },
  { name: 'Wrath — zona rural', ring: 'Wrath', keys: ['anel da ira', 'wrath ring', 'teleporta pro anel da ira', 'indo para o anel da ira'], lore: 'Planícies, fazendas e comunidades Hellborn com valores rurais e competição.' },
  { name: 'Gluttony — área festiva', ring: 'Gluttony', keys: ['anel da gula', 'gluttony ring', 'bee-lzebub', 'beelzebub', 'teleporta pro anel da gula', 'indo para o anel da gula'], lore: 'Território de festas, excessos, luz quente, fauna exuberante e sociabilidade intensa.' },
  { name: 'Sloth — complexo hospitalar', ring: 'Sloth', keys: ['sloth ring', 'st. an', 'hospital', 'clínica', 'clinica', 'teleporta pro anel da preguiça'], lore: 'Infraestrutura médica extensa, profissionais demoníacos e estética pastel surreal.' },
  { name: 'Envy — destino não especificado', ring: 'Envy', keys: ['anel da inveja', 'envy ring', 'teleporta pro anel da inveja', 'indo para o anel da inveja'], lore: 'Tratar detalhes não confirmados como espaço de improvisação coerente, sem fixar geografia não mostrada.' },
  { name: 'Earth — missão humana', ring: null, keys: ['terra', 'earth', 'mundo humano', 'mundo dos vivos', 'los angeles', 'la, california', 'missão na terra', 'missao na terra'], lore: 'Plano humano acessado por meios de viagem infernal; manter disfarces e consequências.' },
  { name: 'Heaven', ring: null, keys: ['heaven', 'céu', 'ceú', 'paraíso', 'paraíso celestial', 'embaixada do céu'], lore: 'Reino celestial hierárquico; estética luminosa e instituições com regras próprias.' },
];

const RING_DEFAULTS = { Pride: 'Pentagram City', Greed: 'Greed Industrial District', Wrath: 'Wrath — zona rural', Lust: 'Lust Ring — distrito noturno', Gluttony: 'Gluttony — área festiva', Sloth: 'Distrito Médico da Preguiça', Envy: 'Envy — destino não especificado' };

const CHARACTER_ALIASES = {
  'Charlie Morningstar': ['charlie', 'charlotte morningstar'], 'Vaggie': ['vaggie'], 'Lucifer Morningstar': ['lucifer', 'king of hell', 'rei do inferno'], 'Lilith': ['lilith'], 'Alastor': ['alastor', 'radio demon', 'demônio do rádio'],
  'Angel Dust': ['angel dust', 'anthony'], 'Husk': ['husk', 'husker'], 'Niffty': ['niffty', 'nifty'], 'Sir Pentious': ['sir pentious', 'pentious'], 'Cherri Bomb': ['cherri bomb', 'cherri'], 'Baxter': ['baxter'], 'Rosie': ['rosie'], 'Carmilla Carmine': ['carmilla', 'carmine'], 'Zestial': ['zestial'], 'Vox': ['vox'], 'Valentino': ['valentino', 'val'], 'Velvette': ['velvette'], 'Katie Killjoy': ['katie killjoy'], 'Tom Trench': ['tom trench'], 'Mimzy': ['mimzy'],
  'Adam': ['adam', 'first man'], 'Lute': ['lute'], 'Sera': ['sera'], 'Emily': ['emily'], 'Abel': ['abel'], 'Saint Peter': ['saint peter', 'st peter', 'são pedro'], 'Zeezi': ['zeezi'], 'Wally Wackford': ['wally wackford', 'wally'],
  'Blitzø': ['blitzø', 'blitzo', 'blitz'], 'Moxxie': ['moxxie'], 'Millie': ['millie'], 'Loona': ['loona'], 'Stolas': ['stolas'], 'Octavia': ['octavia'], 'Stella': ['stella'], 'Paimon': ['paimon'], 'Andrealphus': ['andrealphus'], 'Striker': ['striker'], 'Fizzarolli': ['fizzarolli', 'fizz'], 'Asmodeus': ['asmodeus', 'oꜱɪe', 'ozzy'], 'Mammon': ['mammon'], 'Beelzebub': ['beelzebub', 'bee'], 'Vortex': ['vortex', 'tex'], 'Verosika Mayday': ['verosika', 'verosika mayday'], 'Crimson': ['crimson'], 'Sallie May': ['sallie may'], 'Barbie Wire': ['barbie wire', 'barbie'], 'Cash Buckzo': ['cash buckzo', 'cash'], 'Tilla': ['tilla'], 'Chazwick Thurman': ['chaz', 'chazwick'], 'Collin': ['collin'], 'Cletus': ['cletus'], 'Keenie': ['keenie'], 'Deerie': ['deerie'], 'Belphegor': ['belphegor'], 'Leviathan': ['leviathan']
};

const DEFAULT_SETTINGS = {
  enabled: true, globalTheme: true, automaticRing: true, automaticLocation: true,
  dynamicPrompt: true, showArtwork: true, showCountdown: true, showCharts: true,
  selectedRing: 'Sloth', selectedLocation: 'Distrito Médico da Preguiça', era: 'custom',
  exterminationDate: '', daysOverride: '', manualCast: '', mood: 'cinematic',
};

function ctx() { return globalThis.SillyTavern?.getContext?.() ?? null; }
function settings() {
  const c = ctx();
  if (!c) return structuredClone(DEFAULT_SETTINGS);
  c.extensionSettings ??= {};
  c.extensionSettings[MODULE] ??= {};
  for (const [k, v] of Object.entries(DEFAULT_SETTINGS)) if (!(k in c.extensionSettings[MODULE])) c.extensionSettings[MODULE][k] = v;
  return c.extensionSettings[MODULE];
}
function persist() { try { ctx()?.saveSettingsDebounced?.(); } catch (e) { console.warn('[Infernal OS] Save settings failed', e); } }
function norm(s) { return String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
function esc(s) { return String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
function activeRing() { const s = settings(); return RINGS[s.selectedRing] ? s.selectedRing : 'Sloth'; }
function activeLocation() { const s = settings(); return LOCATIONS.find(x => x.name === s.selectedLocation) ?? LOCATIONS[0]; }
function setRing(name, autoLocation = true) {
  if (!RINGS[name]) return;
  const s = settings(); s.selectedRing = name;
  if (autoLocation) {
    const fallback = LOCATIONS.find(x => x.ring === name);
    if (fallback) s.selectedLocation = fallback.name;
  }
  applyPalette(); persist(); render();
}
function setLocation(loc) {
  const s = settings(); const found = LOCATIONS.find(x => x.name === loc);
  if (!found) return;
  s.selectedLocation = found.name;
  if (found.ring && RINGS[found.ring]) s.selectedRing = found.ring;
  applyPalette(); persist(); render();
}
function applyPalette() {
  const ring = RINGS[activeRing()]; const root = document.documentElement;
  root.style.setProperty('--hvos-c1', ring.colors[0]); root.style.setProperty('--hvos-c2', ring.colors[1]); root.style.setProperty('--hvos-c3', ring.colors[2]); root.style.setProperty('--hvos-c4', ring.colors[3]); root.style.setProperty('--hvos-text', ring.text);
  root.dataset.hvosRing = activeRing().toLowerCase();
  document.body?.classList.toggle('hvos-theme-active', Boolean(settings().globalTheme && settings().enabled));
}
function inferFromText(raw) {
  const text = norm(raw); const s = settings();
  if (!s.enabled) return false;
  let changed = false;
  // Most specific location phrases win over broad ring names.
  const locMatches = LOCATIONS.map(loc => {
    const matchedKeys = loc.keys.filter(k => text.includes(norm(k)));
    return { loc, score: matchedKeys.reduce((best, key) => Math.max(best, norm(key).length), 0) };
  }).filter(x => x.score > 0);
  if (locMatches.length) {
    const chosen = locMatches.sort((a, b) => b.score - a.score)[0].loc;
    if (s.automaticLocation && chosen.name !== s.selectedLocation) { s.selectedLocation = chosen.name; changed = true; }
    if (s.automaticRing && chosen.ring && chosen.ring !== s.selectedRing) { s.selectedRing = chosen.ring; changed = true; }
  }
  const ringTerms = [
    ['Sloth', ['anel da preguiça','sloth ring','teleporta pro anel da preguiça','indo para anel da preguiça','indo para o anel da preguiça']],
    ['Pride', ['anel do orgulho','anel de orgulho','pride ring','pentagram city','pentagrama city']],
    ['Greed', ['anel da ganância','anel da ganancia','greed ring','teleporta pro anel da ganância','teleporta pro anel da ganancia','indo para o anel da ganância']],
    ['Wrath', ['anel da ira','wrath ring','teleporta pro anel da ira','indo para o anel da ira']],
    ['Lust', ['anel da luxúria','anel da luxuria','lust ring','teleporta pro anel da luxúria','indo para o anel da luxúria']],
    ['Gluttony', ['anel da gula','gluttony ring','teleporta pro anel da gula','indo para o anel da gula']],
    ['Envy', ['anel da inveja','envy ring','teleporta pro anel da inveja','indo para o anel da inveja']],
  ];
  for (const [ring, phrases] of ringTerms) {
    if (phrases.some(p => text.includes(norm(p)))) {
      if (s.automaticRing && s.selectedRing !== ring) { s.selectedRing = ring; changed = true; }
      if (s.automaticLocation && !locMatches.length) {
        const fallback = LOCATIONS.find(l => l.name === RING_DEFAULTS[ring]);
        if (fallback && s.selectedLocation !== fallback.name) { s.selectedLocation = fallback.name; changed = true; }
      }
      break;
    }
  }
  if (changed) { applyPalette(); persist(); render(); }
  return changed;
}
function latestSceneText() {
  const c = ctx(); const chat = c?.chat ?? [];
  return chat.slice(-12).map(m => `${m?.name ?? ''} ${m?.mes ?? m?.message ?? ''}`).join('\n');
}
function activeCast() {
  const text = norm(latestSceneText());
  const found = [];
  for (const [name, aliases] of Object.entries(CHARACTER_ALIASES)) {
    if (aliases.some(a => text.includes(norm(a)))) found.push(name);
  }
  const manual = String(settings().manualCast || '').split(/[,;\n]/).map(x => x.trim()).filter(Boolean);
  for (const name of manual) if (!found.some(x => norm(x) === norm(name))) found.push(name);
  return found.slice(0, 24);
}
function countDown() {
  const s = settings();
  if (!s.showCountdown) return { label: 'DESATIVADO', days: null };
  if (String(s.daysOverride ?? '').trim() !== '') {
    const n = Number(s.daysOverride);
    if (Number.isFinite(n) && n >= 0) return { label: n === 0 ? 'HOJE' : `${Math.floor(n)} dia(s)`, days: Math.floor(n) };
  }
  if (!s.exterminationDate) return { label: 'RELÓGIO NÃO SINCRONIZADO', days: null };
  const target = new Date(`${s.exterminationDate}T00:00:00`);
  if (!Number.isFinite(target.getTime())) return { label: 'DATA INVÁLIDA', days: null };
  const now = new Date(); now.setHours(0,0,0,0);
  const n = Math.ceil((target.getTime() - now.getTime()) / 86400000);
  return { label: n < 0 ? `${Math.abs(n)} dia(s) após a data` : n === 0 ? 'HOJE' : `${n} dia(s)`, days: n };
}
function sentimentBars() {
  const text = norm(latestSceneText());
  const categories = [
    ['Tensão', ['ameaça','sangue','arma','medo','perigo','morrer','persegue','extermínio','exterminio','luta','ataque']],
    ['Humor ácido', ['merda','droga','puta','idiota','inferno','piada','sarcasmo','porra','foda','fodido','irônico','ironico']],
    ['Afeto', ['amor','beijo','abraço','abraco','saudade','cuidar','carinho','querida','querido']],
    ['Caos', ['explod','quebrou','incêndio','incendio','pânico','panico','gritou','confusão','confusao','correria']],
  ];
  return categories.map(([name, words]) => ({ name, value: Math.min(100, words.reduce((n,w) => n + occurrences(text, norm(w)), 0) * 18) }));
}
function occurrences(text, phrase) { if (!phrase) return 0; let n = 0, i = 0; while ((i = text.indexOf(phrase, i)) !== -1) { n++; i += phrase.length; } return n; }
function recentLabel() { const c = ctx(); const chat = c?.chat ?? []; const last = chat[chat.length - 1]; return last?.name || (last?.is_user ? 'Persona do usuário' : 'Cena em aberto') || 'Nenhuma mensagem'; }
function dynamicInstruction() {
  const s = settings(), r = RINGS[activeRing()], l = activeLocation(), cast = activeCast(), timer = countDown();
  const mood = ({cinematic:'cinematográfico, sensorial, com pausas e ritmo variado',dark:'sombrio, cruel e tenso, sem perder coerência',acid:'humor negro, sarcasmo agressivo e timing cômico',balanced:'equilíbrio entre drama, comédia ácida e cotidiano infernal'})[s.mood] || 'cinematográfico';
  return [
    '[HELLAVERSE INFERNAL OS — ESTADO DINÂMICO]',
    `Localização atual: ${l.name}. Anel ativo: ${r.label} (${activeRing()}). Paleta ambiental: ${r.motif}.`,
    `Clima de escrita preferido: ${mood}.`,
    `Personagens mencionados nas últimas mensagens (pistas, não prova de presença física): ${cast.length ? cast.join(', ') : 'nenhum identificado com confiança'}. Não materialize todos automaticamente; só inclua quem o contexto colocou na cena.`,
    `Era declarada: ${s.era}. Contagem do Extermínio: ${timer.label}. Se o relógio não estiver sincronizado, não invente número nem data; trate o prazo como desconhecido.`,
    `Continuidade: mantenha a geografia e as regras de trânsito entre anéis; Pecadores estão confinados ao Anel do Orgulho, enquanto Hellborn podem circular entre anéis, salvo exceções de canon estabelecidas.`,
    'Roleplay: não fale, decida, pense ou determine as emoções da personagem do usuário. Faça NPCs terem objetivos próprios, subtexto, contradições e consequências. Mostre ações e sensações concretas; preserve fatos previamente estabelecidos. Conteúdo sombrio e humor negro podem existir como ficção; não transforme instruções de estilo em conhecimento de canon.',
  ].join('\n');
}
function cleanEphemeral(chat) {
  if (!Array.isArray(chat)) return;
  for (let i = chat.length - 1; i >= 0; i--) if (chat[i]?.extra?.[INJECT_MARK]) chat.splice(i, 1);
}

// SillyTavern calls this global interceptor before composing an actual generation.
globalThis.hellaverseOS_interceptGeneration = async function(chat, contextSize, abort, type) {
  try {
    const s = settings(); if (!s.enabled || !s.dynamicPrompt || !Array.isArray(chat) || !chat.length) return;
    cleanEphemeral(chat);
    const latestUser = [...chat].reverse().find(m => m?.is_user || m?.role === 'user');
    if (latestUser?.mes) inferFromText(latestUser.mes);
    const lastUser = [...chat].map((m,i) => ({m,i})).reverse().find(x => x.m?.is_user || x.m?.role === 'user');
    const idx = lastUser ? lastUser.i : chat.length;
    const note = { is_user: false, name: 'INFERNAL OS — CONTEXT', mes: dynamicInstruction(), send_date: Date.now(), extra: { [INJECT_MARK]: true, type: String(type ?? '') } };
    chat.splice(idx, 0, note);
    // Cleanup on normal end, stop, or error. A fallback prevents stale internal notes.
    const c = ctx(); const es = c?.eventSource;
    const cleanup = () => cleanEphemeral(c?.chat);
    if (es?.once && event_types?.GENERATION_ENDED) es.once(event_types.GENERATION_ENDED, cleanup);
    if (es?.once && event_types?.GENERATION_STOPPED) es.once(event_types.GENERATION_STOPPED, cleanup);
    setTimeout(cleanup, 120000);
  } catch (e) { console.error('[Infernal OS] Prompt interceptor error:', e); }
};

function injectDashboard() {
  if (document.getElementById(ROOT_ID)) return;
  const launch = document.createElement('button'); launch.id = BUTTON_ID; launch.type = 'button'; launch.title = 'Abrir HELLAVERSE — Infernal OS'; launch.innerHTML = '<span>✦</span><b>INFERNAL OS</b>';
  launch.addEventListener('click', () => document.getElementById(ROOT_ID)?.classList.toggle('is-open'));
  document.body.appendChild(launch);
  const root = document.createElement('section'); root.id = ROOT_ID; root.setAttribute('aria-label', 'HELLAVERSE Infernal OS');
  root.innerHTML = `
    <div class="hvos-frame">
      <header class="hvos-header"><div class="hvos-brand"><div class="hvos-sigil">✦</div><div><div class="hvos-kicker">HELLAVERSE // CONTROL SYSTEM</div><h2>INFERNAL <em>OS</em></h2><div class="hvos-subtitle">um pequeno desastre administrativo no inferno</div></div></div><button class="hvos-close" data-action="close" aria-label="Fechar painel">×</button></header>
      <nav class="hvos-tabs" aria-label="Abas do painel"><button data-tab="dashboard" class="active">PAINEL</button><button data-tab="rings">ANÉIS</button><button data-tab="cast">ELENCO</button><button data-tab="clock">RELÓGIO</button><button data-tab="system">SISTEMA</button></nav>
      <div class="hvos-view" data-view="dashboard">
        <div class="hvos-hero"><div class="hvos-hero-copy"><span class="hvos-tag">LOCALIDADE DETECTADA</span><h3 id="hvos-location-title">Distrito Médico da Preguiça</h3><p id="hvos-location-lore">Infraestrutura médica extensa, tons pastel e paz suspeita.</p><div class="hvos-meta"><span id="hvos-ring-chip">☾ PREGUIÇA</span><span id="hvos-era-chip">ERA: PERSONALIZADA</span></div></div><div class="hvos-art" role="img" aria-label="Arte de referência do Anel da Preguiça"></div></div>
        <div class="hvos-metrics"><article><span>ANEL ATIVO</span><strong id="hvos-ring-value">PREGUIÇA</strong><small id="hvos-palette-value">violeta · magenta · rosa</small></article><article><span>PERSONAGENS CITADOS</span><strong id="hvos-cast-count">0</strong><small>pistas nas últimas 12 mensagens</small></article><article><span>EXTERMÍNIO</span><strong id="hvos-clock-value">NÃO SINCRONIZADO</strong><small id="hvos-clock-caption">defina uma data ou um contador manual</small></article></div>
        <section class="hvos-section"><div class="hvos-section-head"><h3>TELEMETRIA DA CENA</h3><span class="hvos-muted">heurística local · não é leitura psicológica</span></div><div id="hvos-chart" class="hvos-chart"></div></section>
        <section class="hvos-section"><div class="hvos-section-head"><h3>ELENCO DETECTADO</h3><button class="hvos-mini" data-tab="cast">GERENCIAR ↗</button></div><div id="hvos-cast-preview" class="hvos-pills"><span class="hvos-muted">Nenhuma menção recente identificada.</span></div></section>
        <div class="hvos-footnote">O detector reconhece nomes nas mensagens recentes. Menção não significa presença física confirmada.</div>
      </div>
      <div class="hvos-view" data-view="rings" hidden><div class="hvos-section"><div class="hvos-section-head"><h3>MAPA DOS SETE ANÉIS</h3><span class="hvos-muted">selecione uma jurisdição</span></div><div id="hvos-ring-grid" class="hvos-ring-grid"></div></div><label class="hvos-field"><span>LOCALIZAÇÃO MANUAL</span><select id="hvos-location-select"></select></label><div class="hvos-note">A troca de anel altera paleta e estado ambiental. O modo automático detecta frases explícitas de deslocamento no texto recente.</div></div>
      <div class="hvos-view" data-view="cast" hidden><div class="hvos-section"><div class="hvos-section-head"><h3>PRESENÇA / MENÇÕES</h3><button class="hvos-mini" data-action="refresh">ATUALIZAR ↻</button></div><div id="hvos-cast-full" class="hvos-pills"></div><p class="hvos-muted">O elenco é inferido por nomes/aliases encontrados nas últimas 12 mensagens, não pela posição visual do personagem.</p></div><label class="hvos-field"><span>FIXAR NPCs NA CENA (separe por vírgula)</span><textarea id="hvos-manual-cast" rows="3" placeholder="Ex.: Rosie, Carmilla Carmine"></textarea></label><button class="hvos-button" data-action="save-cast">SALVAR ELENCO MANUAL</button></div>
      <div class="hvos-view" data-view="clock" hidden><div class="hvos-section"><div class="hvos-section-head"><h3>CRONÔMETRO DO EXTERMÍNIO</h3><span class="hvos-muted">configuração da sua linha do tempo</span></div><div class="hvos-clock-big"><span>PRÓXIMO EVENTO</span><strong id="hvos-clock-large">RELÓGIO NÃO SINCRONIZADO</strong><small>Não há data universal aplicada automaticamente a todos os roleplays.</small></div></div><label class="hvos-field"><span>ERA DO ROLEPLAY</span><select id="hvos-era"><option value="canon-pre-extermination">Pré-Extermínio anual</option><option value="canon-transition">Transição / frequência alterada</option><option value="post-extermination">Pós-Extermínio</option><option value="post-s2">Pós-eventos recentes / cronologia avançada</option><option value="custom">Personalizada / AU</option></select></label><label class="hvos-field"><span>DATA DA PRÓXIMA EXTERMINAÇÃO (opcional)</span><input id="hvos-date" type="date"></label><label class="hvos-field"><span>OU CONTADOR MANUAL DE DIAS (substitui a data)</span><input id="hvos-days" type="number" min="0" step="1" placeholder="vazio = desconhecido"></label><button class="hvos-button" data-action="save-clock">SINCRONIZAR RELÓGIO</button><div class="hvos-note">Se a data não foi definida pelo usuário, o painel não inventa uma contagem canônica. Eventos e datas variam conforme a cronologia escolhida.</div></div>
      <div class="hvos-view" data-view="system" hidden><div class="hvos-section"><h3>CONFIGURAÇÕES DE IMERSÃO</h3><label class="hvos-toggle"><input type="checkbox" data-setting="globalTheme"><span>Aplicar tema Hellaverse à interface principal</span></label><label class="hvos-toggle"><input type="checkbox" data-setting="automaticRing"><span>Detectar mudanças de anel em mensagens</span></label><label class="hvos-toggle"><input type="checkbox" data-setting="automaticLocation"><span>Detectar localização mencionada</span></label><label class="hvos-toggle"><input type="checkbox" data-setting="dynamicPrompt"><span>Injetar estado dinâmico no prompt da geração</span></label><label class="hvos-toggle"><input type="checkbox" data-setting="showArtwork"><span>Carregar arte externa da localização</span></label><label class="hvos-toggle"><input type="checkbox" data-setting="showCountdown"><span>Mostrar contagem do Extermínio</span></label><label class="hvos-toggle"><input type="checkbox" data-setting="showCharts"><span>Mostrar gráficos heurísticos de cena</span></label><label class="hvos-field"><span>ESTILO NARRATIVO DINÂMICO</span><select id="hvos-mood"><option value="cinematic">Cinematográfico / sensorial</option><option value="dark">Sombrio / tensão</option><option value="acid">Humor negro / sarcasmo</option><option value="balanced">Drama + comédia ácida</option></select></label><button class="hvos-button" data-action="reset">RESTAURAR PADRÕES</button></div><div class="hvos-note">As opções são armazenadas nas configurações de extensão do SillyTavern. A troca de tema não altera os dados das conversas.</div><div class="hvos-footnote">HELLAVERSE — INFERNAL OS v1.0.0 · fan project não oficial</div></div>
      <footer class="hvos-statusbar"><span>● CORE ONLINE</span><span id="hvos-status-location">SLOTH // MEDICAL DISTRICT</span><span id="hvos-status-last">AGUARDANDO CENA</span></footer>
    </div>`;
  root.addEventListener('click', handleClick); root.addEventListener('change', handleChange); root.addEventListener('input', handleInput);
  document.body.appendChild(root); populateControls(); applyPalette(); render();
}
function populateControls() {
  const select = document.getElementById('hvos-location-select');
  if (select) select.innerHTML = LOCATIONS.map(l => `<option value="${esc(l.name)}">${esc(l.name)}${l.ring ? ` — ${RINGS[l.ring].label}` : ''}</option>`).join('');
}
function handleClick(e) {
  const btn = e.target.closest('button'); if (!btn) return;
  const tab = btn.dataset.tab;
  if (tab) { document.querySelectorAll('#hvos-root .hvos-tabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === tab)); document.querySelectorAll('#hvos-root .hvos-view').forEach(v => v.hidden = v.dataset.view !== tab); return; }
  switch (btn.dataset.action) {
    case 'close': document.getElementById(ROOT_ID)?.classList.remove('is-open'); break;
    case 'refresh': render(); break;
    case 'save-cast': settings().manualCast = document.getElementById('hvos-manual-cast')?.value ?? ''; persist(); render(); break;
    case 'save-clock': {
      const s = settings(); s.era = document.getElementById('hvos-era')?.value ?? 'custom'; s.exterminationDate = document.getElementById('hvos-date')?.value ?? ''; s.daysOverride = document.getElementById('hvos-days')?.value ?? ''; persist(); render(); break;
    }
    case 'reset': {
      const c = ctx(); if (c?.extensionSettings) c.extensionSettings[MODULE] = structuredClone(DEFAULT_SETTINGS);
      persist(); applyPalette(); render(); break;
    }
    default: if (btn.dataset.ring) setRing(btn.dataset.ring); break;
  }
}
function handleChange(e) {
  const t = e.target;
  if (t.id === 'hvos-location-select') { setLocation(t.value); return; }
  if (t.id === 'hvos-era') { settings().era = t.value; persist(); render(); return; }
  if (t.id === 'hvos-mood') { settings().mood = t.value; persist(); return; }
  if (t.dataset?.setting) { settings()[t.dataset.setting] = Boolean(t.checked); persist(); applyPalette(); render(); }
}
function handleInput(e) {
  if (e.target.id === 'hvos-manual-cast') settings().manualCast = e.target.value;
  if (e.target.id === 'hvos-date') settings().exterminationDate = e.target.value;
  if (e.target.id === 'hvos-days') settings().daysOverride = e.target.value;
}
function render() {
  const root = document.getElementById(ROOT_ID); if (!root) return;
  const s = settings(), r = RINGS[activeRing()], l = activeLocation(), cast = activeCast(), timer = countDown();
  const put = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  put('hvos-location-title', l.name); put('hvos-location-lore', l.lore); put('hvos-ring-chip', `${r.icon} ${r.label.toUpperCase()}`); put('hvos-era-chip', `ERA: ${String(s.era).replaceAll('-', ' ').toUpperCase()}`);
  put('hvos-ring-value', r.label.toUpperCase()); put('hvos-palette-value', r.motif); put('hvos-cast-count', String(cast.length)); put('hvos-clock-value', timer.label.toUpperCase()); put('hvos-clock-large', timer.label.toUpperCase());
  put('hvos-clock-caption', timer.days === null ? 'defina uma data ou contador manual' : 'calculado a partir da configuração'); put('hvos-status-location', `${activeRing().toUpperCase()} // ${l.name.toUpperCase()}`); put('hvos-status-last', `ÚLTIMA MENSAGEM: ${recentLabel().toUpperCase()}`);
  const preview = document.getElementById('hvos-cast-preview'), full = document.getElementById('hvos-cast-full');
  const pills = cast.length ? cast.map(n => `<span class="hvos-pill">${esc(n)}</span>`).join('') : '<span class="hvos-muted">Nenhuma menção recente identificada.</span>';
  if (preview) preview.innerHTML = pills; if (full) full.innerHTML = pills;
  const grid = document.getElementById('hvos-ring-grid'); if (grid) grid.innerHTML = Object.entries(RINGS).map(([key, val]) => `<button class="hvos-ring-card ${key === activeRing() ? 'selected' : ''}" data-ring="${key}" style="--ring1:${val.colors[0]};--ring2:${val.colors[1]};--ring3:${val.colors[2]};--ring4:${val.colors[3]}"><span class="hvos-ring-orb">${val.icon}</span><strong>${val.label}</strong><small>${val.motif}</small></button>`).join('');
  const locSel = document.getElementById('hvos-location-select'); if (locSel) locSel.value = s.selectedLocation;
  const era = document.getElementById('hvos-era'); if (era) era.value = s.era;
  const date = document.getElementById('hvos-date'); if (date) date.value = s.exterminationDate;
  const days = document.getElementById('hvos-days'); if (days && document.activeElement !== days) days.value = s.daysOverride;
  const mood = document.getElementById('hvos-mood'); if (mood) mood.value = s.mood;
  const manual = document.getElementById('hvos-manual-cast'); if (manual && document.activeElement !== manual) manual.value = s.manualCast;
  root.querySelectorAll('[data-setting]').forEach(el => el.checked = Boolean(s[el.dataset.setting]));
  const chart = document.getElementById('hvos-chart'); if (chart) chart.innerHTML = s.showCharts ? sentimentBars().map(x => `<div class="hvos-bar-row"><label>${x.name}</label><div class="hvos-bar-track"><div class="hvos-bar-fill" style="width:${x.value}%"></div></div><b>${x.value}</b></div>`).join('') : '<span class="hvos-muted">Telemetria desativada.</span>';
  const art = root.querySelector('.hvos-art'); if (art) {
    const artUrls = {
      Sloth: 'https://static.wikia.nocookie.net/hazbinhotel/images/3/3f/Sloth_Ring.png/revision/latest/scale-to-width-down/1200?cb=20230520195811',
      Gluttony: 'https://static.wikia.nocookie.net/hazbinhotel/images/c/cb/Gluttony_Ring.jpeg/revision/latest/scale-to-width-down/1200?cb=20230624213334'
    };
    const artUrl = artUrls[activeRing()];
    art.hidden = !s.showArtwork || !artUrl;
    art.style.backgroundImage = s.showArtwork && artUrl ? `linear-gradient(90deg, rgba(20,12,37,.06),rgba(20,12,37,.25)), url("${artUrl}")` : 'none';
  }
  applyPalette();
}
function onMessage() {
  if (!settings().enabled) return;
  try {
    const chat = ctx()?.chat ?? [];
    const latest = chat[chat.length - 1];
    if (latest?.mes || latest?.message) inferFromText(latest.mes ?? latest.message);
    render();
  } catch (e) { console.warn('[Infernal OS] Scene scan failed', e); }
}
function removeTheme() { document.body?.classList.remove('hvos-theme-active'); delete document.documentElement.dataset.hvosRing; }
function registerEvents() {
  const c = ctx(); const es = c?.eventSource;
  if (!es?.on || globalThis.__hvosEventsBound) return;
  globalThis.__hvosEventsBound = true;
  const after = () => setTimeout(onMessage, 80);
  [event_types.MESSAGE_SENT, event_types.MESSAGE_RECEIVED, event_types.MESSAGE_EDITED, event_types.MESSAGE_SWIPED, event_types.CHAT_CHANGED].filter(Boolean).forEach(name => es.on(name, after));
  [event_types.GENERATION_ENDED, event_types.GENERATION_STOPPED].filter(Boolean).forEach(name => es.on(name, () => setTimeout(() => { cleanEphemeral(ctx()?.chat); render(); }, 0)));
}
export async function hellaverseOS_onActivate() { setTimeout(() => { try { injectDashboard(); registerEvents(); } catch (e) { console.error('[Infernal OS] Activation failed', e); } }, 200); }
export function hellaverseOS_onEnable() { settings().enabled = true; applyPalette(); injectDashboard(); render(); }
export function hellaverseOS_onDisable() { settings().enabled = false; removeTheme(); document.getElementById(ROOT_ID)?.classList.remove('is-open'); }

// Fallback in case the extension manager does not call lifecycle hooks on a local install.
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hellaverseOS_onActivate, { once: true });
else hellaverseOS_onActivate();
