const closest = {"display-lg": "heading-1", "display-sm": "Net New", "title-lg": "heading-2", "title-md": "heading-3", "title-sm": "heading-4", "subtitle-lg": "subheading-1", "subtitle-sm": "subheading-2", "body-lg-regular": "body-1", "body-lg-medium": "body-1-medium", "body-lg-bold": "body-1-bold", "body-sm-regular": "body-2", "body-sm-medium": "body-2-medium", "body-sm-bold": "body-2-bold", "caption-regular": "subtext", "caption-medium": "subtext-medium", "caption-bold": "subtext-bold"};

const tokens = [
  { name:'display-lg',      family:'FoundersGrotesk', size:32, lh:40, ls:-0.5, weight:400, wcag:'large',    priority:'none',
    notes:'V2 uses regular weight — original heading-1 was bold (700). Negative tracking may affect legibility for some users with dyslexia, but is not a compliance failure.' },
  { name:'display-sm',      family:'FoundersGrotesk', size:28, lh:36, ls:-0.5, weight:400, wcag:'large',    priority:'none', isNew:true,
    notes:'Net new token — sits between heading-1 (32) and heading-2 (24). Document intended contexts carefully to prevent misuse at small viewports.' },
  { name:'title-lg',        family:'FoundersGrotesk', size:24, lh:32, ls:0,    weight:400, wcag:'large',    priority:'none',
    notes:'V2 uses regular weight — original heading-2 was bold (700). Qualifies as large text at 24px/400 (≥18pt regular).' },
  { name:'title-md',        family:'FoundersGrotesk', size:20, lh:28, ls:0,    weight:400, wcag:'large',    priority:'none',
    notes:'V2 uses regular weight — original heading-3 was bold (700). Qualifies as large text at 20px/400 (≥18pt regular).' },
  { name:'title-sm',        family:'FoundersGrotesk', size:18, lh:24, ls:0,    weight:400, wcag:'large',    priority:'none',
    notes:'Updated from 16px to 18px — now qualifies as large text (≥18pt regular). Original heading-4 was 700 at 16px.' },
  { name:'subtitle-lg',     family:'ABCDiatype',      size:14, lh:22, ls:0.5,  weight:500, wcag:'standard', priority:'none',
    notes:'Line height updated to 22px (1.57×) — meets WCAG-recommended 1.5× minimum. Must meet 4.5:1 contrast at 14px/500.' },
  { name:'subtitle-sm',     family:'ABCDiatype',      size:12, lh:18, ls:0.5,  weight:500, wcag:'standard', priority:'advisory',
    notes:'12px is the practical legibility floor. Near-identical to caption-medium (12px/500) — evaluate consolidation. If retained: must only appear at confirmed 4.5:1 contrast. Never use for critical or actionable content.',
    lhNote:'Line height updated to 18px (1.5×) — meets WCAG minimum.' },
  { name:'body-lg-regular', family:'ABCDiatype',      size:16, lh:24, ls:0,    weight:400, wcag:'standard', priority:'none',
    notes:'Line height 1.5× — meets WCAG text spacing recommendation.' },
  { name:'body-lg-medium',  family:'ABCDiatype',      size:16, lh:24, ls:0,    weight:500, wcag:'standard', priority:'none',
    notes:'Line height 1.5× — meets WCAG text spacing recommendation.' },
  { name:'body-lg-bold',    family:'ABCDiatype',      size:16, lh:24, ls:0,    weight:700, wcag:'standard', priority:'none',
    notes:'16px/700 is close to the large text threshold (14pt bold ≈ 18.66px) but does not qualify. Must still meet 4.5:1.' },
  { name:'body-sm-regular', family:'ABCDiatype',      size:14, lh:20, ls:0,    weight:400, wcag:'standard', priority:'none',
    notes:'Highest-volume legacy token — maps to body-2 (43.7% of codebase). Line height 1.43× is slightly below 1.5× recommendation. No hard failures given usage volume.' },
  { name:'body-sm-medium',  family:'ABCDiatype',      size:14, lh:20, ls:0,    weight:500, wcag:'standard', priority:'advisory',
    notes:'14px/500 does NOT qualify as large text. Must meet 4.5:1. Large text exemption applies only to body-sm-bold.',
    lhNote:'Line height 1.43× — slightly below 1.5× recommendation.' },
  { name:'body-sm-bold',    family:'ABCDiatype',      size:14, lh:20, ls:0,    weight:700, wcag:'large',    priority:'none',
    notes:'14px/700 qualifies as large text (14pt bold threshold). 3:1 contrast applies. Only body-sm token with the large text exemption.' },
  { name:'caption-regular', family:'ABCDiatype',      size:12, lh:18, ls:0,    weight:400, wcag:'standard', priority:'advisory',
    notes:'12px/400 requires confirmed 4.5:1 contrast. Must never be used for critical or actionable content.',
    lhNote:'Line height updated to 18px (1.5×) — meets WCAG minimum.' },
  { name:'caption-medium',  family:'ABCDiatype',      size:12, lh:18, ls:0,    weight:500, wcag:'standard', priority:'advisory',
    notes:'Near-identical to subtitle-sm (12px/500) — evaluate consolidation. Must meet 4.5:1. Never use for critical or actionable content.',
    lhNote:'Line height updated to 18px (1.5×) — meets WCAG minimum.' },
  { name:'caption-bold',    family:'ABCDiatype',      size:12, lh:18, ls:0,    weight:700, wcag:'standard', priority:'advisory',
    notes:'12px/700 does NOT qualify as large text. Still requires 4.5:1.',
    lhNote:'Line height updated to 18px (1.5×) — meets WCAG minimum.' },
];

const usageData = (function() {
  const u = {};
  u['display-lg'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Full-bleed hero headings, large empty state headlines, prominent onboarding headers.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for any heading that appears alongside other content — it should command its own visual space.</li><li>Do not stack two display tokens consecutively.</li><li>Do not use for navigational elements, sidebar labels, or card headings.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> "Suggested leads" section heading on Home (display-sm); large empty state headlines.</div></div>`;
  u['display-sm'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Primary content area page titles and major section headings (e.g., "Suggested leads", "Saved people", "Email performance funnel").</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for navigational elements, sidebar labels, or card headings.</li><li>Do not stack two display tokens consecutively.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> "Suggested leads" and "Saved people" page titles in the main content area.</div></div>`;
  u['title-lg'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Subpage titles, modal headings, drawer-level titles where a heading is needed but display would be too heavy.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for table column headers, row content, or inline metadata.</li><li>Do not use as content area section headings — those belong to the display tier.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Modal and drawer-level headings.</div></div>`;
  u['title-md'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Personalized or contextual page greetings (e.g., "Welcome 👋").</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for table column headers, row content, or inline metadata.</li><li>Do not skip levels — move through the scale sequentially.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> "Welcome 👋" greeting on Home.</div></div>`;
  u['title-sm'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Sidebar navigation group labels (e.g., "Prospect & Enrich"), content tab bar labels and sub-navigation items.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use as content area section headings — those belong to the display tier.</li><li>Do not apply weight overrides; title tokens are always weight 400.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Sidebar nav group labels; content tab bar items.</div></div>`;
  u['subtitle-lg'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Higher-prominence metadata labels, filter group names, section subheadings where slightly more visual weight is needed.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use as primary section or page headings.</li><li>Do not use on low-contrast surfaces without contrast verification.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Filter group names, section subheadings within content surfaces.</div></div>`;
  u['subtitle-sm'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class=\"usage-advisory-banner\">⚠️ Advisory WCAG status — explicit contrast verification required before use. Never use on tinted, gray, or low-contrast surfaces.</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Data table column headers (e.g., "Name", "Recommendations", "Stage", "Last Activity Date").</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Must never be used for critical or interactive standalone text.</li><li>Do not use on low-contrast surfaces without contrast verification.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Saved people table column headers.</div></div>`;
  u['body-lg-regular'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Primary sidebar navigation item labels (e.g., "Home", "Projects", "Apollo default"), workspace/account selectors, paragraph and description content.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for table cell content, compact list rows, or filter chips — use body-sm instead.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Primary sidebar nav labels — "Home", "Projects", "Apollo default".</div></div>`;
  u['body-lg-medium'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Emphasized navigation labels, form field values, interactive item labels that need slightly more weight.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not mix weight variants within a single sentence unless one is a deliberate inline emphasis.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Emphasized nav labels and form field values.</div></div>`;
  u['body-lg-bold'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Inline emphasis within body copy, key data points within prose.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for table cell content or compact list rows.</li><li>Do not mix weight variants without deliberate intent.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Inline bold emphasis within descriptive prose.</div></div>`;
  u['body-sm-regular'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Filter chips and toolbar controls (e.g., "Owner", "Company", "Sequences", "Add filter"), table action bar labels, tag text.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for multi-paragraph reading — switch to body-lg-regular for sustained prose.</li><li>Do not use as a heading substitute in tight spaces.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Filter chips ("Owner", "Company", "Add filter"); table action bar labels.</div></div>`;
  u['body-sm-medium'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class=\"usage-advisory-banner\">⚠️ Advisory WCAG status — explicit contrast verification required before use. Never use on tinted, gray, or low-contrast surfaces.</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Person names and primary identifiers in lead and contact rows (e.g., "James Shamoun" in the Suggested leads table).</li><li>Requires contrast verification.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Must not be used on backgrounds below 4.5:1 contrast without explicit verification.</li><li>Do not use for multi-paragraph reading.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Person name in Suggested leads table rows.</div></div>`;
  u['body-sm-bold'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Status indicators, score labels, key metrics in compact containers.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for primary navigational elements or multi-paragraph reading.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Status indicators and score labels in compact list rows.</div></div>`;
  u['caption-regular'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class=\"usage-advisory-banner\">⚠️ Advisory WCAG status — explicit contrast verification required before use. Never use on tinted, gray, or low-contrast surfaces.</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Secondary row content beneath primary identifiers (e.g., job title beneath a name), record counts (e.g., "45.5k records"), chart date ranges (e.g., "Last 30 days"), pagination indicators, form field helper text.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for interactive controls or primary navigational elements.</li><li>Do not use as the sole text in a UI element if the content is functionally important.</li><li>Never use on gray or tinted surfaces without explicit contrast testing.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Job title beneath lead names; "45.5k records"; "Last 30 days"; pagination indicators.</div></div>`;
  u['caption-medium'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class=\"usage-advisory-banner\">⚠️ Advisory WCAG status — explicit contrast verification required before use. Never use on tinted, gray, or low-contrast surfaces.</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Secondary metadata labels, compact filter indicators.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for error messages, required field indicators, or any accessibility-critical text.</li><li>Never use on tinted surfaces without contrast verification.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Secondary metadata labels in compact data surfaces.</div></div>`;
  u['caption-bold'] = `<div class="usage-section"><div class="usage-header">Usage Guidelines</div><div class=\"usage-advisory-banner\">⚠️ Advisory WCAG status — explicit contrast verification required before use. Never use on tinted, gray, or low-contrast surfaces.</div><div class="usage-grid"><div class="usage-block"><div class="usage-block-label">✓ Use when</div><div class="usage-block-text"><ul class="usage-list"><li>Badge counts, pill emphasis in extremely tight containers.</li></ul></div></div><div class="usage-block usage-block-avoid"><div class="usage-block-label avoid-label">✕ Avoid</div><div class="usage-block-text"><ul class="usage-list"><li>Do not use for interactive controls or primary navigational elements.</li><li>Do not use as the sole communicator of critical information.</li></ul></div></div></div><div class="usage-seen"><span class="usage-seen-label">Seen in</span> Badge counts and pill emphasis in tight UI containers.</div></div>`;
  return u;
})();

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + (name || 'home')).classList.add('active');
  if (name === 'typography' && document.getElementById('tokensGrid').children.length === 0) buildCards();
  if (name === 'color' && document.getElementById('color-prim-grid') && document.getElementById('color-prim-grid').children.length === 0) buildColorTables();
}
function goHome() {
  history.pushState({ page: null }, '', './');
  showPage(null);
}
function goPage(name) {
  history.pushState({ page: name }, '', './' + name);
  showPage(name);
}

// Handle back/forward
window.addEventListener('popstate', e => {
  showPage(e.state?.page ?? null);
});

// On first load, check URL path or ?p= param (set by 404.html on refresh)
(function() {
  const valid = ['typography', 'spacing', 'color'];
  const params = new URLSearchParams(window.location.search);
  const fromParam = params.get('p');

  if (fromParam && valid.includes(fromParam)) {
    // Came via 404 redirect — clean up the URL and show the right page
    history.replaceState({ page: fromParam }, '', './' + fromParam);
    showPage(fromParam);
  } else {
    const path = window.location.pathname.replace(/\/$/, '').split('/').pop();
    if (valid.includes(path)) showPage(path);
  }
})();

let customBg = '#FFFFFF', customFg = '#1A1A1A';

function lum(hex) {
  hex = hex.replace('#','');
  if(hex.length===3) hex=hex.split('').map(c=>c+c).join('');
  const r=parseInt(hex.slice(0,2),16)/255, g=parseInt(hex.slice(2,4),16)/255, b=parseInt(hex.slice(4,6),16)/255;
  const f=c=>c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);
  return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b);
}
function cr(a,b){ const l1=lum(a),l2=lum(b); return (Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05); }

function setActiveSwatch(containerId, color) {
  document.querySelectorAll('#'+containerId+' .swatch').forEach(s=>s.classList.remove('active-swatch'));
  const t = document.querySelector('#'+containerId+' [data-color="'+color+'"]');
  if(t) t.classList.add('active-swatch');
}

function setBg(el) {
  customBg = el.dataset.color;
  setActiveSwatch('bgSwatches', customBg);
  // dark-surface toggle: any color c8 or darker
  refreshAll();
}
function setFg(el) {
  customFg = el.dataset.color;
  setActiveSwatch('fgSwatches', customFg);
  refreshAll();
}

const DARK_BG = new Set(['#504E41','#3E3E33','#1A1A1A']);

function buildCards() {
  const grid = document.getElementById('tokensGrid');
  grid.innerHTML = '';
  tokens.forEach((t,i) => {
    const card = document.createElement('div');
    card.className = 'token-card priority-'+t.priority;
    card.dataset.priority = t.priority;
    card.dataset.index = i;

    // Font family tags
    const isABC = t.family === 'ABCDiatype';
    const famTag = isABC
      ? '<span class="tag tag-b">ABC Diatype</span>'
      : '<span class="tag tag-a">Founders Grotesk</span>';

    // WCAG tags — same two visual variants as font family
    const wcagTag = t.wcag === 'large'
      ? '<span class="tag tag-a">Large text · 3:1</span>'
      : '<span class="tag tag-b">Standard · 4.5:1</span>';

    const pLabel = t.priority==='advisory' ? '🟡 Advisory' : '✓ Passing';
    const pCls   = t.priority==='advisory' ? 'pri-advisory' : 'pri-pass';

    const orig = closest[t.name]||'';
    const origChip = orig==='Net New'
      ? '<span class="original-chip is-new">Net New</span>'
      : `<span class="original-chip">${orig}</span>`;
    const fontFace = isABC ? 'ABCDiatype' : 'FoundersGrotesk';
    const usageHtml = usageData[t.name] || '';

    const vPad = 12;
    card.innerHTML = `
      <div class="card-row" onclick="toggle(${i})">
        <div class="card-cell card-cell-name" style="padding-top:${vPad}px;padding-bottom:${vPad}px;"><span class="token-name" style="font-family:'${fontFace}',sans-serif;font-size:${t.size}px;line-height:${t.lh}px;letter-spacing:${t.ls}px;font-weight:${t.weight};">${t.name}</span></div>
        <div class="card-cell">${origChip}</div>
        <div class="card-cell">${famTag}</div>
        <div class="card-cell"><span class="meta-val">${t.size}px</span></div>
        <div class="card-cell"><span class="meta-val">${t.lh}px</span></div>
        <div class="card-cell"><span class="meta-val">${t.ls>=0?'+':''}${t.ls}px</span></div>
        <div class="card-cell"><span class="meta-val">${t.weight}</span></div>
        <div class="card-cell">${wcagTag}</div>
        <div class="card-cell"><span class="pri-badge ${pCls}">${pLabel}</span></div>
        <div class="card-cell"><button class="expand-btn" onclick="event.stopPropagation();toggle(${i})" aria-label="Expand">▾</button></div>
      </div>
      <div class="card-panel">
        <div class="panel-top">
        <div class="panel-preview" id="prev-${i}">
          <div class="preview-label">Live Preview</div>
          <div class="preview-text" id="pt-${i}" style="font-family:'${fontFace}',sans-serif;font-size:${t.size}px;line-height:${t.lh}px;letter-spacing:${t.ls}px;font-weight:${t.weight};">The quick brown fox jumps</div>
          <div class="wcag-live" id="wl-${i}"><span>·</span><span id="wlt-${i}">Checking…</span></div>
        </div>
        <div class="panel-info">
          <div class="info-section">
            <h4>Token Properties</h4>
            <div class="props-grid">
              <div class="prop-item"><div class="prop-key">Font Family</div><div class="prop-val">${t.family}</div></div>
              <div class="prop-item"><div class="prop-key">Font Size</div><div class="prop-val">${t.size}px</div></div>
              <div class="prop-item"><div class="prop-key">Line Height</div><div class="prop-val">${t.lh}px</div></div>
              <div class="prop-item"><div class="prop-key">Letter Spacing</div><div class="prop-val">${t.ls>=0?'+':''}${t.ls}px</div></div>
              <div class="prop-item"><div class="prop-key">Font Weight</div><div class="prop-val">${t.weight}</div></div>
              <div class="prop-item"><div class="prop-key">LH Ratio</div><div class="prop-val">${(t.lh/t.size).toFixed(2)}×</div></div>
              <div class="prop-item"><div class="prop-key">Min. Contrast</div><div class="prop-val">${t.wcag==='large'?'3:1':'4.5:1'}</div></div>
              <div class="prop-item"><div class="prop-key">WCAG Class</div><div class="prop-val">${t.wcag==='large'?'Large text':'Standard'}</div></div>
            </div>
          </div>
          <div class="info-section">
            <h4>Notes & Constraints</h4>
            <div class="notes-box ${t.priority==='advisory'?'is-advisory':''}">
              ${t.notes}
              ${t.lhNote?`<span class="lh-note">📐 ${t.lhNote}</span>`:''}
            </div>
          </div>
        </div>
        ${usageHtml}
        </div><!-- end panel-top -->
      </div>`;
    grid.appendChild(card);
  });
  setActiveSwatch('bgSwatches','#FFFFFF');
  setActiveSwatch('fgSwatches','#1A1A1A');
  refreshAll();
}

function toggle(i) {
  document.querySelector(`[data-index="${i}"]`).classList.toggle('expanded');
  refresh(i);
}

function refresh(i) {
  const t = tokens[i];
  const prev = document.getElementById(`prev-${i}`);
  const pt   = document.getElementById(`pt-${i}`);
  const wl   = document.getElementById(`wl-${i}`);
  const wlt  = document.getElementById(`wlt-${i}`);
  if(!prev) return;
  prev.style.background = customBg;
  pt.style.color = customFg;
  pt.textContent = document.getElementById('sampleText').value || 'The quick brown fox jumps';
  const ratio = cr(customBg,customFg), req = t.wcag==='large'?3:4.5, pass = ratio>=req;
  wl.className = `wcag-live ${pass?'pass':'fail'}`;
  wl.firstElementChild.textContent = pass ? '✓' : '✗';
  wlt.textContent = `${ratio.toFixed(2)}:1 — ${pass?`Passes AA (min ${req}:1)`:`Fails AA (min ${req}:1)`}`;
  prev.classList.toggle('dark-surface', DARK_BG.has(customBg));
}

function refreshAll() { tokens.forEach((_,i) => refresh(i)); }

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sampleText').addEventListener('input', refreshAll);
  buildSpacingTables();
  buildRadiusTables();
});

// ── TAB SWITCHING ──
function switchSpTab(tab, btn) {
  document.querySelectorAll('.sp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sp-panel').forEach(p => { p.style.display = 'none'; });
  btn.classList.add('active');
  const panel = document.getElementById('sptab-' + tab);
  panel.style.display = 'block';
  // Re-trigger staggered fade-in on each section
  panel.querySelectorAll('.ed-section').forEach((s, i) => {
    s.style.animation = 'none';
    s.style.opacity = '0';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        s.style.animation = '';
        s.style.animationDelay = (0.08 + i * 0.08) + 's';
      });
    });
  });
}

function switchGP(mode) {
  document.getElementById('gpmode-gap').style.display = mode === 'gap' ? 'block' : 'none';
  document.getElementById('gpmode-pad').style.display = mode === 'pad' ? 'block' : 'none';
  document.getElementById('gpbtn-gap').classList.toggle('active', mode === 'gap');
  document.getElementById('gpbtn-pad').classList.toggle('active', mode === 'pad');
}

// ── SPACING TABLES ──
function buildSpacingTables() {
  const prims = [
    { token:'spacing/xxxl', base:32, mobile:40, sem:null },
    { token:'spacing/xxl',  base:24, mobile:32, sem:'gap/region · gap/section · padding/card-default' },
    { token:'spacing/xl',   base:20, mobile:24, sem:null },
    { token:'spacing/lg',   base:16, mobile:20, sem:'gap/zone · padding/card-compact' },
    { token:'spacing/md',   base:12, mobile:16, sem:null },
    { token:'spacing/sm',   base:8,  mobile:12, sem:'gap/component · padding/component' },
    { token:'spacing/xs',   base:4,  mobile:8,  sem:'gap/element · padding/element' },
    { token:'spacing/xxs',  base:2,  mobile:4,  sem:null },
    { token:'spacing/none', base:0,  mobile:0,  sem:null },
  ];

  const gaps = [
    { token:'gap/region',    ref:'spacing/xxl', base:'24px', desc:'Between the app sidebar and content area, and between nested regions (e.g., Settings sidebar and form area).' },
    { token:'gap/section',   ref:'spacing/xxl', base:'24px', desc:'Between top-level sections within a region, whether stacked vertically or arranged side by side.' },
    { token:'gap/zone',      ref:'spacing/lg',  base:'16px', desc:'Between functional zones within a section — tab bar, toolbar, data table.' },
    { token:'gap/component', ref:'spacing/sm',  base:'8px',  desc:'Between related elements within a component — name and subtitle, icon clusters, grouped tags.' },
    { token:'gap/element',   ref:'spacing/xs',  base:'4px',  desc:'Between sub-elements within a component — icon and label, tightly paired metadata.' },
  ];

  const pads = [
    { token:'padding/card-default', ref:'spacing/xxl', base:'24px', desc:'Interior padding for standalone page-level section cards.' },
    { token:'padding/card-compact', ref:'spacing/lg',  base:'16px', desc:'Interior padding for nested or secondary cards that coexist with adjacent content.' },
    { token:'padding/component',    ref:'spacing/sm',  base:'8px',  desc:'Interior padding for small dense components — chips, badges, filter tags.' },
    { token:'padding/element',      ref:'spacing/xs',  base:'4px',  desc:'Interior padding for the tightest components — icon buttons, inline labels.' },
  ];

  const maxBase = 32;

  // Primitives
  const primRows = document.getElementById('prim-rows');
  prims.forEach(p => {
    primRows.innerHTML += `
      <div class="sp-tr">
        <div class="sp-td"><span class="sp-token-name">${p.token}</span></div>
        <div class="sp-td"><span class="sp-val-tag">${p.base}px</span></div>
        <div class="sp-td"><span class="sp-mobile-tag">${p.mobile}px</span></div>
      </div>`;
  });

  // Gap rows
  const gapRows = document.getElementById('gap-rows');
  gaps.forEach(g => {
    gapRows.innerHTML += `
      <div class="sp-tr gap-tr">
        <div class="sp-td"><span class="sp-token-name">${g.token}</span></div>
        <div class="sp-td"><span class="sp-ref-tag">${g.ref}</span></div>
        <div class="sp-td"><span class="sp-val-tag">${g.base}</span></div>
        <div class="sp-td-desc">${g.desc}</div>
      </div>`;
  });

  // Padding rows
  const padRows = document.getElementById('pad-rows');
  pads.forEach(p => {
    padRows.innerHTML += `
      <div class="sp-tr gap-tr">
        <div class="sp-td"><span class="sp-token-name">${p.token}</span></div>
        <div class="sp-td"><span class="sp-ref-tag">${p.ref}</span></div>
        <div class="sp-td"><span class="sp-val-tag">${p.base}</span></div>
        <div class="sp-td-desc">${p.desc}</div>
      </div>`;
  });
}

// ── RADIUS TABLES ──
function buildRadiusTables() {
  const primData = [
    { token:'radius/none', val:'0px',    use:'Flush elements — table cells, inline inputs, elements that meet a container edge' },
    { token:'radius/sm',   val:'4px',    use:'Sub-components — inner elements nested inside a rounded container' },
    { token:'radius/md',   val:'8px',    use:'Standard components — buttons, chips, inputs, cards, popovers, dropdowns' },
    { token:'radius/lg',   val:'12px',   use:'Large floating surfaces — modals, dialogs, sheets' },
    { token:'radius/pill', val:'9999px', use:'Pill-shaped elements — toggle switches, avatar chips, status badges' },
  ];

  const semData = [
    { token:'radius/component', ref:'radius/md (8px)',    desc:'Default for all interactive and container components' },
    { token:'radius/surface',   ref:'radius/lg (12px)',   desc:'Large elevated surfaces that float above the UI' },
    { token:'radius/element',   ref:'radius/sm (4px)',    desc:'Sub-elements nested inside a rounded component' },
    { token:'radius/pill',      ref:'radius/pill (9999px)',desc:'Fully rounded elements — toggles, status badges, avatar chips' },
    { token:'radius/none',      ref:'radius/none (0px)',  desc:'Flush elements that meet a container or viewport edge' },
  ];

  const primContainer = document.getElementById('radius-prim-rows');
  primData.forEach(r => {
    const rx = r.val === '9999px' ? '9999px' : r.val;
    primContainer.innerHTML += `
      <div class="sp-tr radius-prim-tr">
        <div class="sp-td"><span class="sp-token-name">${r.token}</span></div>
        <div class="sp-td"><span class="sp-val-tag">${r.val}</span></div>
        <div class="sp-td-desc">${r.use}</div>
        <div class="sp-td" style="display:flex; align-items:center; justify-content:center; padding-top:10px;">
          <div class="radius-preview-box" style="border-radius:${rx};"></div>
        </div>
      </div>`;
  });

  const semContainer = document.getElementById('radius-sem-rows');
  semData.forEach(r => {
    const rx = r.ref.includes('9999') ? '9999px' : r.ref.includes('12') ? '12px' : r.ref.includes('8') ? '8px' : r.ref.includes('4') ? '4px' : '0px';
    semContainer.innerHTML += `
      <div class="sp-tr radius-sem-tr">
        <div class="sp-td"><span class="sp-token-name">${r.token}</span></div>
        <div class="sp-td"><span class="sp-ref-tag">${r.ref}</span></div>
        <div class="sp-td-desc">${r.desc}</div>
        <div class="sp-td" style="display:flex; align-items:center; justify-content:center; padding-top:10px;">
          <div class="radius-preview-box" style="border-radius:${rx};"></div>
        </div>
      </div>`;
  });
}

// ── HIERARCHY DIAGRAM ──
function initHierDiagram() {
  const tooltipMap = {
    'region':    'Region — highest-level layout division · gap/region 24px between regions',
    'section':   'Section — self-contained content block · gap/section 24px between sections',
    'zone':      'Zone — functional subdivision within a section · gap/zone 16px between zones',
    'component': 'Component — discrete UI element · gap/component 8px · gap/element 4px',
  };
  const tooltip = document.getElementById('hier-tooltip');

  document.querySelectorAll('[data-level]').forEach(el => {
    el.addEventListener('mouseenter', e => {
      const level = el.dataset.level;
      tooltip.textContent = tooltipMap[level] || '';
      tooltip.style.opacity = '1';
    });
    el.addEventListener('mousemove', e => {
      tooltip.style.left = (e.clientX + 14) + 'px';
      tooltip.style.top  = (e.clientY - 28) + 'px';
    });
    el.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
    });
  });

  document.querySelectorAll('.diag-legend-item').forEach(item => {
    item.addEventListener('click', () => {
      const level = item.dataset.level;
      item.classList.toggle('active');
      document.querySelectorAll(`[data-level="${level}"]`).forEach(el => {
        el.style.outline = item.classList.contains('active')
          ? '2px solid var(--c10)'
          : '';
      });
    });
  });
}

// ── DIAGRAM VIEWER TOGGLE ──
function switchDiag(groupId, idx, cardEl) {
  // Update images
  const frame = document.getElementById('diag-' + groupId + '-frame');
  if (frame) {
    frame.querySelectorAll('img').forEach((img, i) => {
      img.classList.toggle('diag-active', i === idx);
    });
  }
  // Update card active states — find siblings via parent
  const parent = cardEl.parentElement;
  parent.querySelectorAll('.diag-toggle-card').forEach(c => c.classList.remove('diag-card-active'));
  cardEl.classList.add('diag-card-active');
}
// ── COLOR DATA ──

const colorRamps = [
  { name:'Stone',  tag:'stone',  steps:[
    {s:0,  l:'#FFFFFF'}, {s:5,  l:'#F9F9F6'}, {s:10, l:'#EFEFEB'}, {s:20, l:'#E4E5D9'},
    {s:30, l:'#CCCDBF'}, {s:40, l:'#ABAD99'}, {s:50, l:'#767862'}, {s:60, l:'#5F6151'},
    {s:70, l:'#4D4D41'}, {s:80, l:'#3C3D33'}, {s:90, l:'#2F2F27'}, {s:95, l:'#252521'}, {s:100, l:'#12120F'},
  ]},
  { name:'Brown',  tag:'brown',  steps:[
    {s:5,  l:'#F7F5F3'}, {s:10, l:'#EFEDE6'}, {s:20, l:'#E8E2D8'}, {s:30, l:'#D9D0BF'},
    {s:40, l:'#BAA88B'}, {s:50, l:'#877250'}, {s:60, l:'#65563C'}, {s:70, l:'#4F432F'},
    {s:80, l:'#382F21'}, {s:90, l:'#292319'}, {s:95, l:'#15120C'},
  ]},
  { name:'Green',  tag:'green',  steps:[
    {s:5,  l:'#F1FDF3'}, {s:10, l:'#E5FBE9'}, {s:20, l:'#CEF8D5'}, {s:30, l:'#A6F2B2'},
    {s:40, l:'#5FE876'}, {s:50, l:'#1AB333'}, {s:60, l:'#138727'}, {s:70, l:'#0F691E'},
    {s:80, l:'#0B4A15'}, {s:90, l:'#083710'}, {s:95, l:'#041C08'},
  ]},
  { name:'Blue',   tag:'blue',   steps:[
    {s:5,  l:'#F1F6FE'}, {s:10, l:'#E3EDFD'}, {s:20, l:'#CBDEFB'}, {s:30, l:'#A1C3F7'},
    {s:40, l:'#69A0F3'}, {s:50, l:'#1368E7'}, {s:60, l:'#0E4BA7'}, {s:70, l:'#0A3576'},
    {s:80, l:'#072655'}, {s:90, l:'#051B3D'}, {s:95, l:'#030F22'},
  ]},
  { name:'Orange', tag:'orange', steps:[
    {s:5,  l:'#FFF6F0'}, {s:10, l:'#FFEDE0'}, {s:20, l:'#FFDFC7'}, {s:30, l:'#FFCBA3'},
    {s:40, l:'#FFA35C'}, {s:50, l:'#F06800'}, {s:60, l:'#B24D00'}, {s:70, l:'#8F3E00'},
    {s:80, l:'#662C00'}, {s:90, l:'#4D2100'}, {s:95, l:'#230F00'},
  ]},
  { name:'Red',    tag:'red',    steps:[
    {s:5,  l:'#FFF0F2'}, {s:10, l:'#FFE6EA'}, {s:20, l:'#FFD6DC'}, {s:30, l:'#FFBDC7'},
    {s:40, l:'#FF6B81'}, {s:50, l:'#FA0026'}, {s:60, l:'#C2001D'}, {s:70, l:'#940016'},
    {s:80, l:'#66000F'}, {s:90, l:'#4C000B'}, {s:95, l:'#240005'},
  ]},
  { name:'Purple', tag:'purple', steps:[
    {s:5,  l:'#F8F2FD'}, {s:10, l:'#F3E9FB'}, {s:20, l:'#EAD7F9'}, {s:30, l:'#DAB8F4'},
    {s:40, l:'#BE83EC'}, {s:50, l:'#9534DF'}, {s:60, l:'#701CB0'}, {s:70, l:'#541584'},
    {s:80, l:'#3E0F62'}, {s:90, l:'#2D0B47'}, {s:95, l:'#14051F'},
  ]},
  { name:'Pink',   tag:'pink',   steps:[
    {s:5,  l:'#FFF0FF'}, {s:10, l:'#FFE5FF'}, {s:20, l:'#FFD1FF'}, {s:30, l:'#FFB3FF'},
    {s:40, l:'#FF6EFF'}, {s:50, l:'#FF14FF'}, {s:60, l:'#CC00CC'}, {s:70, l:'#970097'},
    {s:80, l:'#660066'}, {s:90, l:'#480048'}, {s:95, l:'#240024'},
  ]},
  { name:'Lime',   tag:'lime',   steps:[
    {s:5,  l:'#F7FEF0'}, {s:10, l:'#EBFCD9'}, {s:20, l:'#E2FCC0'}, {s:30, l:'#D7F9B3'},
    {s:40, l:'#C4F68D'}, {s:50, l:'#8DED26'}, {s:60, l:'#69BD0F'}, {s:70, l:'#4F8E0B'},
    {s:80, l:'#345E08'}, {s:90, l:'#254205'}, {s:95, l:'#132103'},
  ]},
  { name:'Aqua',   tag:'aqua',   steps:[
    {s:5,  l:'#F1FCFE'}, {s:10, l:'#E3F9FC'}, {s:20, l:'#D5F6FB'}, {s:30, l:'#B8ECF5'},
    {s:40, l:'#98E3F1'}, {s:50, l:'#30C8E3'}, {s:60, l:'#189CB4'}, {s:70, l:'#127587'},
    {s:80, l:'#0C4E5A'}, {s:90, l:'#09373F'}, {s:95, l:'#041C20'},
  ]},
  { name:'Sun',    tag:'sun',    steps:[
    {s:10, l:'#FBF500'}, {s:20, l:'#F2EC00'}, {s:30, l:'#E1DC21'}, {s:40, l:'#CBC958'},
    {s:50, l:'#9E9C51'}, {s:60, l:'#79773D'}, {s:70, l:'#58562F'},
  ]},
];

const fgTokens = [
  { sub:'Neutral',     token:'fg/neutral/strong',              alias:'human-80',      hex:'#3E3E33', desc:'Primary headings and strong labels' },
  { sub:'Neutral',     token:'fg/neutral/base/default',        alias:'human-70',      hex:'#646459', desc:'Default body text and interactive labels' },
  { sub:'Neutral',     token:'fg/neutral/base/disabled',       alias:'human-40',      hex:'#D4D5CB', desc:'Disabled text — non-interactive state' },
  { sub:'Neutral',     token:'fg/neutral/subtle',              alias:'human-60',      hex:'#898A7F', desc:'Secondary labels, captions, metadata' },
  { sub:'Neutral',     token:'fg/neutral/muted',               alias:'human-50',      hex:'#AFAFA5', desc:'Tertiary text — placeholders, ghost labels' },
  { sub:'Info',        token:'fg/info/base',                   alias:'human-70',      hex:'#646459', desc:'Informational foreground text' },
  { sub:'Success',     token:'fg/success/base',                alias:'evergreen-70',  hex:'#274427', desc:'Success foreground — high contrast' },
  { sub:'Success',     token:'fg/success/subtle',              alias:'evergreen-60',  hex:'#396039', desc:'Success foreground — medium emphasis' },
  { sub:'Success',     token:'fg/success/muted',               alias:'evergreen-50',  hex:'#4B814F', desc:'Success foreground — low emphasis' },
  { sub:'Warning',     token:'fg/warning/base',                alias:'ember-70',      hex:'#602F0C', desc:'Warning foreground — high contrast' },
  { sub:'Warning',     token:'fg/warning/subtle',              alias:'ember-60',      hex:'#884411', desc:'Warning foreground — medium emphasis' },
  { sub:'Warning',     token:'fg/warning/muted',               alias:'ember-50',      hex:'#B16120', desc:'Warning foreground — low emphasis' },
  { sub:'Destructive', token:'fg/destructive/base',            alias:'rust-70',       hex:'#6A2419', desc:'Destructive foreground — high contrast' },
  { sub:'Destructive', token:'fg/destructive/subtle',          alias:'rust-60',       hex:'#9E3225', desc:'Destructive foreground — medium emphasis' },
  { sub:'Destructive', token:'fg/destructive/muted',           alias:'rust-50',       hex:'#D14532', desc:'Destructive foreground — low emphasis' },
  { sub:'Link',        token:'fg/link/base',                   alias:'ocean-70',      hex:'#1D3D58', desc:'Link text — high contrast' },
  { sub:'Link',        token:'fg/link/subtle',                 alias:'ocean-60',      hex:'#2B5782', desc:'Link text — medium emphasis' },
  { sub:'Link',        token:'fg/link/muted/default',          alias:'ocean-50',      hex:'#447AAF', desc:'Link text — muted, active state' },
  { sub:'Link',        token:'fg/link/muted/disabled',         alias:'ocean-20',      hex:'#DAE5FC', desc:'Link text — muted, disabled state' },
  { sub:'Inverse',     token:'fg/inverse/base/default',        alias:'human-0',       hex:'#FFFFFF', desc:'Text on dark surfaces — default' },
  { sub:'Inverse',     token:'fg/inverse/base/disabled',       alias:'human-60',      hex:'#898A7F', desc:'Text on dark surfaces — disabled' },
  { sub:'AI',          token:'fg/ai/sakura',                   alias:'sakura-40',     hex:'#DA67CF', desc:'AI accent text — Sakura pink' },
  { sub:'AI',          token:'fg/ai/ocean',                    alias:'ocean-40',      hex:'#6697C9', desc:'AI accent text — Ocean blue' },
  { sub:'Color',       token:'fg/color/pebble/base',           alias:'pebble-70',     hex:'#493B2C', desc:'Color label — Pebble, base' },
  { sub:'Color',       token:'fg/color/pebble/subtle',         alias:'pebble-60',     hex:'#66583D', desc:'Color label — Pebble, subtle' },
  { sub:'Color',       token:'fg/color/sakura/base',           alias:'sakura-70',     hex:'#5F235B', desc:'Color label — Sakura, base' },
  { sub:'Color',       token:'fg/color/sakura/muted',          alias:'sakura-50',     hex:'#BC44B1', desc:'Color label — Sakura, muted' },
  { sub:'Color',       token:'fg/color/iris/base',             alias:'iris-70',       hex:'#3F2B73', desc:'Color label — Iris, base' },
  { sub:'Color',       token:'fg/color/iris/muted',            alias:'iris-50',       hex:'#7F63C5', desc:'Color label — Iris, muted' },
  { sub:'Color',       token:'fg/color/tropic/base',           alias:'tropic-70',     hex:'#294343', desc:'Color label — Tropic, base' },
  { sub:'Color',       token:'fg/color/tropic/muted',          alias:'tropic-50',     hex:'#487E7F', desc:'Color label — Tropic, muted' },
  { sub:'Color',       token:'fg/color/moss/base',             alias:'moss-70',       hex:'#384224', desc:'Color label — Moss, base' },
  { sub:'Color',       token:'fg/color/moss/subtle',           alias:'moss-60',       hex:'#4E5C33', desc:'Color label — Moss, subtle' },
];

const bgTokens = [
  { sub:'Brand',       token:'bg/brand/base',                          alias:'ocean-50',      hex:'#447AAF', desc:'Brand background — ocean base' },
  { sub:'Brand',       token:'bg/brand/subtle',                        alias:'pebble-50',     hex:'#867250', desc:'Brand background — pebble subtle' },
  { sub:'Brand',       token:'bg/brand/strong/default',                alias:'helios-50',     hex:'#FBF500', desc:'Apollo Yellow — primary CTA surface' },
  { sub:'Brand',       token:'bg/brand/strong/disabled',               alias:'human-10',      hex:'#F9F9F6', desc:'Apollo Yellow — disabled state' },
  { sub:'Neutral',     token:'bg/neutral/base/default',                alias:'human-0',       hex:'#FFFFFF', desc:'Base white surface — cards, modals' },
  { sub:'Neutral',     token:'bg/neutral/base/active',                 alias:'pebble-10',     hex:'#F6F2EF', desc:'White surface — active/selected state' },
  { sub:'Neutral',     token:'bg/neutral/base/disabled',               alias:'human-0',       hex:'#FFFFFF', desc:'White surface — disabled state' },
  { sub:'Neutral',     token:'bg/neutral/subtle/default',              alias:'human-10',      hex:'#F9F9F6', desc:'Subtle elevated surface — sidebars, panels' },
  { sub:'Neutral',     token:'bg/neutral/subtle/active',               alias:'pebble-20',     hex:'#E8E2D8', desc:'Subtle surface — active/selected state' },
  { sub:'Neutral',     token:'bg/neutral/subtle/active-disabled',      alias:'pebble-10',     hex:'#F6F2EF', desc:'Subtle surface — active-disabled state' },
  { sub:'Neutral',     token:'bg/neutral/subtle/disabled',             alias:'human-10',      hex:'#F9F9F6', desc:'Subtle surface — disabled state' },
  { sub:'Neutral',     token:'bg/neutral/muted/default',               alias:'human-20',      hex:'#F3F3F0', desc:'Muted surface — page background' },
  { sub:'Neutral',     token:'bg/neutral/muted/disabled',              alias:'human-20',      hex:'#F3F3F0', desc:'Muted surface — disabled state' },
  { sub:'Neutral',     token:'bg/neutral/reversed/strong/default',     alias:'human-80',      hex:'#3E3E33', desc:'Dark surface — strong reversed' },
  { sub:'Neutral',     token:'bg/neutral/reversed/strong/disabled',    alias:'human-30',      hex:'#E7E7E1', desc:'Dark surface — strong, disabled' },
  { sub:'Neutral',     token:'bg/neutral/reversed/base/default',       alias:'human-70',      hex:'#646459', desc:'Dark surface — base reversed' },
  { sub:'Neutral',     token:'bg/neutral/reversed/base/disabled',      alias:'human-70',      hex:'#646459', desc:'Dark surface — base, disabled' },
  { sub:'Neutral',     token:'bg/neutral/reversed/muted/default',      alias:'human-30',      hex:'#E7E7E1', desc:'Dark surface — muted reversed' },
  { sub:'Neutral',     token:'bg/neutral/reversed/muted/disabled',     alias:'human-20',      hex:'#F3F3F0', desc:'Dark surface — muted, disabled' },
  { sub:'Selection',   token:'bg/selection/on/base/default',           alias:'human-80',      hex:'#3E3E33', desc:'Toggle/checkbox — on, active' },
  { sub:'Selection',   token:'bg/selection/on/base/disabled',          alias:'human-60',      hex:'#898A7F', desc:'Toggle — on, disabled' },
  { sub:'Selection',   token:'bg/selection/on/subtle/disabled',        alias:'human-40',      hex:'#D4D5CB', desc:'Toggle — on, subtle disabled' },
  { sub:'Selection',   token:'bg/selection/off/base/default',          alias:'human-40',      hex:'#D4D5CB', desc:'Toggle/checkbox — off, active' },
  { sub:'Selection',   token:'bg/selection/off/base/disabled',         alias:'human-30',      hex:'#E7E7E1', desc:'Toggle — off, disabled' },
  { sub:'Info',        token:'bg/info/base/default',                   alias:'human-50',      hex:'#AFAFA5', desc:'Info badge/icon background — active' },
  { sub:'Info',        token:'bg/info/base/disabled',                  alias:'human-10',      hex:'#F9F9F6', desc:'Info background — disabled' },
  { sub:'Info',        token:'bg/info/subtle/default',                 alias:'human-20',      hex:'#F3F3F0', desc:'Info subtle background — active' },
  { sub:'Info',        token:'bg/info/subtle/disabled',                alias:'human-10',      hex:'#F9F9F6', desc:'Info subtle — disabled' },
  { sub:'Info',        token:'bg/info/muted/default',                  alias:'human-10',      hex:'#F9F9F6', desc:'Info muted background — active' },
  { sub:'Info',        token:'bg/info/muted/disabled',                 alias:'human-0',       hex:'#FFFFFF', desc:'Info muted — disabled' },
  { sub:'Success',     token:'bg/success/base/default',                alias:'evergreen-50',  hex:'#4B814F', desc:'Success badge/icon background — active' },
  { sub:'Success',     token:'bg/success/base/disabled',               alias:'human-10',      hex:'#F9F9F6', desc:'Success background — disabled' },
  { sub:'Success',     token:'bg/success/subtle/default',              alias:'evergreen-20',  hex:'#D8E8DA', desc:'Success subtle background — active' },
  { sub:'Success',     token:'bg/success/subtle/disabled',             alias:'human-10',      hex:'#F9F9F6', desc:'Success subtle — disabled' },
  { sub:'Success',     token:'bg/success/muted/default',               alias:'evergreen-10',  hex:'#EBF4EB', desc:'Success muted background — active' },
  { sub:'Success',     token:'bg/success/muted/disabled',              alias:'human-0',       hex:'#FFFFFF', desc:'Success muted — disabled' },
  { sub:'Warning',     token:'bg/warning/base/default',                alias:'ember-50',      hex:'#B16120', desc:'Warning badge/icon background — active' },
  { sub:'Warning',     token:'bg/warning/base/disabled',               alias:'human-10',      hex:'#F9F9F6', desc:'Warning background — disabled' },
  { sub:'Warning',     token:'bg/warning/subtle/default',              alias:'ember-20',      hex:'#F3E2D3', desc:'Warning subtle background — active' },
  { sub:'Warning',     token:'bg/warning/subtle/disabled',             alias:'human-10',      hex:'#F9F9F6', desc:'Warning subtle — disabled' },
  { sub:'Warning',     token:'bg/warning/muted/default',               alias:'ember-10',      hex:'#F9F1ED', desc:'Warning muted background — active' },
  { sub:'Warning',     token:'bg/warning/muted/disabled',              alias:'human-0',       hex:'#FFFFFF', desc:'Warning muted — disabled' },
  { sub:'Destructive', token:'bg/destructive/base/default',            alias:'rust-50',       hex:'#D14532', desc:'Destructive badge/icon background — active' },
  { sub:'Destructive', token:'bg/destructive/base/disabled',           alias:'human-10',      hex:'#F9F9F6', desc:'Destructive background — disabled' },
  { sub:'Destructive', token:'bg/destructive/subtle/default',          alias:'rust-20',       hex:'#FEDBD7', desc:'Destructive subtle background — active' },
  { sub:'Destructive', token:'bg/destructive/subtle/disabled',         alias:'human-10',      hex:'#F9F9F6', desc:'Destructive subtle — disabled' },
  { sub:'Destructive', token:'bg/destructive/muted/default',           alias:'rust-10',       hex:'#FFF1EE', desc:'Destructive muted background — active' },
  { sub:'Destructive', token:'bg/destructive/muted/disabled',          alias:'human-0',       hex:'#FFFFFF', desc:'Destructive muted — disabled' },
  { sub:'Status',      token:'bg/status/in-progress/base/default',     alias:'ocean-60',      hex:'#2B5782', desc:'Status — In Progress badge' },
  { sub:'Status',      token:'bg/status/in-progress/subtle/default',   alias:'ocean-20',      hex:'#DAE5FC', desc:'Status — In Progress subtle' },
  { sub:'Status',      token:'bg/status/incomplete/base/default',      alias:'human-60',      hex:'#898A7F', desc:'Status — Incomplete badge' },
  { sub:'Status',      token:'bg/status/incomplete/subtle/default',    alias:'human-20',      hex:'#F3F3F0', desc:'Status — Incomplete subtle' },
  { sub:'Status',      token:'bg/status/error/base/default',           alias:'rust-60',       hex:'#9E3225', desc:'Status — Error badge' },
  { sub:'Status',      token:'bg/status/error/subtle/default',         alias:'rust-20',       hex:'#FEDBD7', desc:'Status — Error subtle' },
  { sub:'Status',      token:'bg/status/completed/base/default',       alias:'evergreen-40',  hex:'#62A265', desc:'Status — Completed badge' },
  { sub:'AI',          token:'bg/ai/sakura/base/default',              alias:'sakura-40',     hex:'#DA67CF', desc:'AI surface — Sakura pink, active' },
  { sub:'AI',          token:'bg/ai/sakura/base/disabled',             alias:'human-10',      hex:'#F9F9F6', desc:'AI surface — Sakura, disabled' },
  { sub:'AI',          token:'bg/ai/ocean/base/default',               alias:'ocean-40',      hex:'#6697C9', desc:'AI surface — Ocean blue, active' },
  { sub:'AI',          token:'bg/ai/ocean/base/disabled',              alias:'human-10',      hex:'#F9F9F6', desc:'AI surface — Ocean, disabled' },
  { sub:'Color',       token:'bg/color/human',                         alias:'human-80',      hex:'#3E3E33', desc:'Color tag — Human (warm neutral)' },
  { sub:'Color',       token:'bg/color/evergreen',                     alias:'evergreen-70',  hex:'#274427', desc:'Color tag — Evergreen' },
  { sub:'Color',       token:'bg/color/pebble',                        alias:'pebble-70',     hex:'#493B2C', desc:'Color tag — Pebble' },
  { sub:'Color',       token:'bg/color/pebble/subtle/default',         alias:'pebble-20',     hex:'#E8E2D8', desc:'Color tag — Pebble subtle' },
  { sub:'Color',       token:'bg/color/ocean',                         alias:'ocean-70',      hex:'#1D3D58', desc:'Color tag — Ocean' },
  { sub:'Color',       token:'bg/color/ocean/subtle/default',          alias:'ocean-20',      hex:'#DAE5FC', desc:'Color tag — Ocean subtle' },
  { sub:'Color',       token:'bg/color/tropic/subtle/default',         alias:'tropic-20',     hex:'#D3E7E9', desc:'Color tag — Tropic subtle' },
  { sub:'Color',       token:'bg/color/sakura',                        alias:'sakura-70',     hex:'#5F235B', desc:'Color tag — Sakura' },
  { sub:'Color',       token:'bg/color/sakura/subtle/default',         alias:'sakura-20',     hex:'#F6DAF5', desc:'Color tag — Sakura subtle' },
  { sub:'Color',       token:'bg/color/iris',                          alias:'iris-70',       hex:'#3F2B73', desc:'Color tag — Iris' },
  { sub:'Color',       token:'bg/color/iris/subtle/default',           alias:'iris-20',       hex:'#E4DCF9', desc:'Color tag — Iris subtle' },
  { sub:'Color',       token:'bg/color/iris/muted/default',            alias:'iris-10',       hex:'#F5F1FD', desc:'Color tag — Iris muted' },
  { sub:'Color',       token:'bg/color/moss/subtle/default',           alias:'moss-20',       hex:'#DEE5D1', desc:'Color tag — Moss subtle' },
];

const borderTokens = [
  { sub:'Neutral',     token:'border/neutral/muted',              alias:'human-10',      hex:'#F9F9F6', desc:'Muted divider — minimal separation' },
  { sub:'Neutral',     token:'border/neutral/subtle/default',     alias:'human-20',      hex:'#F3F3F0', desc:'Subtle border — section dividers' },
  { sub:'Neutral',     token:'border/neutral/base/default',       alias:'human-30',      hex:'#E7E7E1', desc:'Default border — component edges' },
  { sub:'Neutral',     token:'border/neutral/base/active',        alias:'pebble-30',     hex:'#CDBEA8', desc:'Default border — active/focused state' },
  { sub:'Neutral',     token:'border/neutral/base/disabled',      alias:'human-20',      hex:'#F3F3F0', desc:'Default border — disabled state' },
  { sub:'Neutral',     token:'border/neutral/strong/default',     alias:'human-80',      hex:'#3E3E33', desc:'Strong border — high-contrast edges' },
  { sub:'Neutral',     token:'border/neutral/strong/disabled',    alias:'human-60',      hex:'#898A7F', desc:'Strong border — disabled state' },
  { sub:'Semantic',    token:'border/destructive/base',           alias:'rust-50',       hex:'#D14532', desc:'Destructive border — error inputs, alerts' },
  { sub:'Semantic',    token:'border/destructive/subtle',         alias:'rust-40',       hex:'#E86F5F', desc:'Destructive border — subtle' },
  { sub:'Semantic',    token:'border/inverse/base',               alias:'human-0',       hex:'#FFFFFF', desc:'Border on dark surfaces' },
  { sub:'Semantic',    token:'border/focus/base',                 alias:'iris-50',       hex:'#7F63C5', desc:'Focus ring — keyboard navigation' },
  { sub:'Semantic',    token:'border/brand/strong',               alias:'helios-70',     hex:'#F5E902', desc:'Brand border — CTA emphasis' },
  { sub:'Semantic',    token:'border/brand/base',                 alias:'pebble-30',     hex:'#CDBEA8', desc:'Brand border — secondary' },
  { sub:'Semantic',    token:'border/link/base/default',          alias:'ocean-30',      hex:'#A8C3EB', desc:'Link underline/border — active' },
  { sub:'Semantic',    token:'border/link/base/disabled',         alias:'ocean-10',      hex:'#ECF3FE', desc:'Link border — disabled state' },
  { sub:'AI',          token:'border/ai/sakura/base',             alias:'sakura-30',     hex:'#EAA9E5', desc:'AI border — Sakura pink' },
  { sub:'AI',          token:'border/ai/sakura/subtle',           alias:'sakura-20',     hex:'#F6DAF5', desc:'AI border — Sakura subtle' },
  { sub:'AI',          token:'border/ai/ocean/base',              alias:'ocean-30',      hex:'#A8C3EB', desc:'AI border — Ocean blue' },
  { sub:'AI',          token:'border/ai/iris/subtle',             alias:'iris-20',       hex:'#E4DCF9', desc:'AI border — Iris subtle' },
];

const matrixTexts = [
  { label:'fg/neutral/strong',           hex:'#3E3E33' },
  { label:'fg/neutral/base/default',     hex:'#646459' },
  { label:'fg/neutral/subtle',           hex:'#898A7F' },
  { label:'fg/neutral/muted',            hex:'#AFAFA5' },
  { label:'fg/inverse/base/default',     hex:'#FFFFFF' },
];

const matrixBgs = [
  { label:'bg/neutral/base/default',            hex:'#FFFFFF' },
  { label:'bg/neutral/subtle/default',          hex:'#F9F9F6' },
  { label:'bg/neutral/muted/default',           hex:'#F3F3F0' },
  { label:'bg/neutral/reversed/strong/default', hex:'#3E3E33' },
  { label:'bg/brand/strong/default',            hex:'#FBF500' },
];

// ── COLOR TAB SWITCHING ──
function switchColTab(tab, btn) {
  btn.closest('.sp-tab-bar').querySelectorAll('.sp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.col-panel').forEach(p => { p.style.display = 'none'; });
  btn.classList.add('active');
  const panel = document.getElementById('coltab-' + tab);
  panel.style.display = 'block';
  panel.querySelectorAll('.ed-section').forEach((s, i) => {
    s.style.animation = 'none';
    s.style.opacity = '0';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        s.style.animation = '';
        s.style.animationDelay = (0.08 + i * 0.08) + 's';
      });
    });
  });
}

// ── COLOR TABLE BUILDERS ──
function buildColorTables() {
  buildColorPrims();
  buildColorSemantics();
  buildContrastMatrix();
}

function buildColorPrims() {
  const grid = document.getElementById('color-prim-grid');
  if (!grid) return;
  colorRamps.forEach(ramp => {
    const row = document.createElement('div');
    row.className = 'color-ramp-row';
    const swatchesHtml = ramp.steps.map(step => {
      const labelColor = lum(step.l) > 0.4 ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.75)';
      return `<div class="color-ramp-swatch" style="background:${step.l};" title="${ramp.tag}-${step.s} · ${step.l}"><span class="ramp-step" style="color:${labelColor};">${step.s}</span></div>`;
    }).join('');
    row.innerHTML = `
      <div class="color-ramp-meta">
        <div class="color-ramp-name">${ramp.name}</div>
        <span class="color-ramp-tag">${ramp.tag}</span>
      </div>
      <div class="color-ramp-swatches">${swatchesHtml}</div>`;
    grid.appendChild(row);
  });
}

function buildColorSemantics() {
  const container = document.getElementById('color-sem-table');
  if (!container) return;
  const sections = [
    { label:'Foreground', prefix:'fg',     data:fgTokens },
    { label:'Background', prefix:'bg',     data:bgTokens },
    { label:'Border',     prefix:'border', data:borderTokens },
  ];
  sections.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'col-sem-section';
    const headerDiv = document.createElement('div');
    headerDiv.className = 'col-sem-section-header';
    headerDiv.innerHTML = `<span class="col-sem-section-name">${section.label}</span><span class="col-sem-section-prefix">${section.prefix}</span>`;
    sectionDiv.appendChild(headerDiv);
    const subs = [...new Set(section.data.map(t => t.sub))];
    subs.forEach(sub => {
      const tokens = section.data.filter(t => t.sub === sub);
      const groupDiv = document.createElement('div');
      groupDiv.className = 'col-sem-group';
      let html = `
        <div class="col-sem-group-label">${sub}</div>
        <div class="col-sem-table-inner">
          <div class="col-sem-thead">
            <div class="col-sem-th">Token</div>
            <div class="col-sem-th">Alias</div>
            <div class="col-sem-th">Value</div>
            <div class="col-sem-th"></div>
            <div class="col-sem-th">Description</div>
          </div>`;
      tokens.forEach(t => {
        html += `
          <div class="col-sem-tr">
            <div class="col-sem-td"><span class="sp-token-name">${t.token}</span></div>
            <div class="col-sem-td"><span class="sp-ref-tag">${t.alias}</span></div>
            <div class="col-sem-td"><span class="col-sem-hex">${t.hex}</span></div>
            <div class="col-sem-td-swatch"><div class="col-sem-swatch" style="background:${t.hex};"></div></div>
            <div class="col-sem-td-desc">${t.desc}</div>
          </div>`;
      });
      html += '</div>';
      groupDiv.innerHTML = html;
      sectionDiv.appendChild(groupDiv);
    });
    container.appendChild(sectionDiv);
  });
}

function buildContrastMatrix() {
  const container = document.getElementById('contrast-matrix');
  if (!container) return;
  let html = '<div class="contrast-wrap"><table class="contrast-table"><thead><tr>';
  html += '<th class="contrast-corner"><div class="contrast-corner-label">Text ↓ / BG →</div></th>';
  matrixBgs.forEach(bg => {
    html += `<th class="contrast-th-bg">
      <span class="contrast-th-swatch" style="background:${bg.hex};"></span>
      <div class="contrast-th-token">${bg.label}</div>
      <div class="contrast-th-hex">${bg.hex}</div>
    </th>`;
  });
  html += '</tr></thead><tbody>';
  matrixTexts.forEach(text => {
    html += `<tr class="contrast-row"><th class="contrast-th-text">
      <div class="contrast-th-text-token"><span class="contrast-row-swatch" style="background:${text.hex};"></span>${text.label}</div>
      <div class="contrast-th-text-hex">${text.hex}</div>
    </th>`;
    matrixBgs.forEach(bg => {
      if (text.hex === bg.hex) {
        html += `<td class="contrast-cell cell-same"><span class="contrast-same-dash">—</span></td>`;
        return;
      }
      const ratio = cr(text.hex, bg.hex);
      const passStd = ratio >= 4.5;
      const passLg  = ratio >= 3;
      let cellClass = 'contrast-cell';
      let badge = '';
      if (passStd) {
        cellClass += ' cell-pass-std';
        badge = `<span class="contrast-badge pass-std">✓ AA</span>`;
      } else if (passLg) {
        cellClass += ' cell-pass-lg';
        badge = `<span class="contrast-badge pass-lg">✓ Large only</span>`;
      } else {
        cellClass += ' cell-fail';
        badge = `<span class="contrast-badge fail">✗ Fails</span>`;
      }
      html += `<td class="${cellClass}"><div class="contrast-ratio">${ratio.toFixed(2)}:1</div>${badge}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  container.innerHTML = html;
}
