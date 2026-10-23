// Deskwatch — idioma (ES/EN), visor de capturas y aparición al hacer scroll.

const EN = {
  'nav.features': 'Features',
  'nav.how': 'How it works',
  'nav.faq': 'FAQ',
  'hero.eyebrow': 'In development · Windows · coming soon',
  'hero.title': 'Your Claude&nbsp;Code agents, <em>working in plain&nbsp;sight.</em>',
  'hero.lead': 'Deskwatch turns every Claude Code session into a person sitting at their desk in a 3D office. You see what each one is doing, answer their permission requests and keep an eye on usage, all from one place and without keeping VS Code open.',
  'hero.cta': 'Follow the project on GitHub',
  'hero.cta2': 'How it works ↓',
  'hero.fine': "There's no public download yet. Hit «Watch» on GitHub and you'll hear about it when it ships.",
  'bubble.edit': 'Editing Carrito.tsx',
  'bubble.perm': 'Needs permission: Bash',
  'bubble.web': 'Searching: stripe webhooks',
  'bubble.idle': 'Idle',
  'feat.kicker': 'The office',
  'feat.title': 'Everything happening in your sessions, <em>in a single room.</em>',
  'f1.t': 'Every session, a person',
  'f1.d': 'They type while editing, read papers while reading, sit at the terminal, coordinate subagents that hover around the desk, and doze off when they are done.',
  'f2.t': 'Permissions without switching windows',
  'f2.d': 'When an agent needs permission, it turns its chair and raises a hand. Approve, deny or allow it for good from the panel, with a sound and a notification.',
  'f3.t': 'The Claude Code chat, right here',
  'f3.d': 'Live streaming text, Markdown, diffs for every edit, images and PDFs pasted or dropped in, "/" commands and the context you have left, always in view.',
  'f4.t': 'Conversations that are never lost',
  'f4.d': 'Your previous conversations wait asleep at their desks. Write to one and it picks up where it left off, with no VS Code or terminal needed.',
  'f5.t': 'Usage brakes',
  'f5.d': 'See your plan usage for the 5-hour and 7-day windows. Set a cap per window or a daily budget, and Deskwatch stops every agent when it is reached.',
  'f6.t': 'Your projects, already imported',
  'f6.d': 'It finds the folders where you already use Claude Code and gives each one its own area in the office, with its own color, model, permissions and instructions.',
  's1.k': 'Permissions',
  's1.t': 'A hand goes up. <em>You decide.</em>',
  's1.d': 'You see exactly what it wants to run and answer in one click. "Always in this session" and "always in this project" save you from repeating yourself, and "deny and stop" cuts it off on the spot.',
  's2.k': 'Conversation',
  's2.t': 'Paste a screenshot. <em>Ask away.</em>',
  's2.d': 'The chat works like Claude Code. Paste or drop images and PDFs, switch model and permissions on the fly, use your commands and skills with "/", and see the context and tokens for every session.',
  's3.k': 'Usage',
  's3.t': 'A brake <em>before you hit the limit.</em>',
  's3.d': 'For example: "at most 15% of the weekly limit per day" or "stop at 80% in every 5-hour window". When the cap is reached everything stops, and it can resume on its own in the next period if you want.',
  'how.kicker': 'How it works',
  'how.title': 'Three steps, <em>then get to work.</em>',
  'h1.t': 'Open Deskwatch',
  'h1.d': 'A Windows desktop app that ships with Claude Code inside and uses the Claude account you are already signed in to.',
  'h2.t': 'Your projects show up on their own',
  'h2.d': 'It imports the folders you work in and seats your latest conversations in the office. It can also follow your terminal and VS Code sessions.',
  'h3.t': 'Run things from the office',
  'h3.d': 'Launch agents, wake up conversations, answer permissions and watch usage without jumping between windows.',
  'faq.kicker': 'Questions',
  'faq.title': 'What you are <em>probably</em> wondering.',
  q1: 'When does it come out?',
  a1: 'It is in active development and there is no public download yet. Watch the GitHub repository ("Watch" → "Custom" → "Releases") to hear about the first release.',
  q2: 'What do I need to use it?',
  a2: 'Windows and a Claude account with access to Claude Code. Deskwatch ships with its own Claude Code, so you don\'t need VS Code or a terminal open.',
  q3: 'Does my data leave my computer?',
  a3: 'Deskwatch runs locally: it reads and controls the sessions on your own machine. The only thing that leaves it is what Claude Code already sends to Claude to do its work.',
  q4: 'Is this an Anthropic product?',
  a4: 'No. Deskwatch is an independent project that works with Claude Code. It is not affiliated with or endorsed by Anthropic.',
  q5: 'What about macOS or Linux?',
  a5: 'For now it is being built for Windows. Other platforms are on the list of ideas.',
  'close.title': 'The office opens <em>soon.</em>',
  'close.d': 'If you want to know when it ships, follow the project on GitHub.',
  'close.cta': 'Follow on GitHub',
  'foot.made': 'Made with care (and plenty of agents at work).',
  'foot.legal': 'Claude and Claude Code are trademarks of Anthropic. Deskwatch is an independent project and is not affiliated with or endorsed by Anthropic.',
  'alt.office': 'Overview of the Deskwatch 3D office with three projects and seven agents at work',
  'alt.perm': 'An agent raises its hand to ask for permission and the panel shows the command with buttons to answer',
  'alt.chat': 'A conversation where a shopping cart screenshot is pasted and Claude replies with a list of improvements',
  'alt.brake': 'Usage brake settings with caps for the 5-hour window, the 7-day window and a daily budget',
  title: 'Deskwatch — your Claude Code agents, working in plain sight',
};

// El español es el contenido original del HTML: se guarda al cargar para poder volver a él.
const ES = {};
const nodes = {
  text: [...document.querySelectorAll('[data-i18n]')],
  html: [...document.querySelectorAll('[data-i18n-html]')],
  alt: [...document.querySelectorAll('[data-i18n-alt]')],
};
nodes.text.forEach((el) => (ES[el.dataset.i18n] = el.textContent));
nodes.html.forEach((el) => (ES[el.dataset.i18nHtml] = el.innerHTML));
nodes.alt.forEach((el) => (ES[el.dataset.i18nAlt] = el.alt));
ES.title = document.title;

function setLang(lang) {
  const dict = lang === 'en' ? EN : ES;
  nodes.text.forEach((el) => dict[el.dataset.i18n] != null && (el.textContent = dict[el.dataset.i18n]));
  nodes.html.forEach((el) => dict[el.dataset.i18nHtml] != null && (el.innerHTML = dict[el.dataset.i18nHtml]));
  nodes.alt.forEach((el) => dict[el.dataset.i18nAlt] != null && (el.alt = dict[el.dataset.i18nAlt]));
  document.title = dict.title;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try {
    localStorage.setItem('deskwatch.lang', lang);
  } catch {}
}

let saved = null;
try {
  saved = localStorage.getItem('deskwatch.lang');
} catch {}
// lo elegido antes; si no, el idioma del navegador (español o, si no, inglés)
const initial = saved || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en');
if (initial !== 'es') setLang(initial);
document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

// Visor de capturas
const box = document.getElementById('lightbox');
document.querySelectorAll('.shot img, .monitor img').forEach((img) =>
  img.addEventListener('click', () => {
    box.querySelector('img').src = img.src;
    box.querySelector('img').alt = img.alt;
    box.hidden = false;
  }),
);
box.addEventListener('click', () => (box.hidden = true));
document.addEventListener('keydown', (e) => e.key === 'Escape' && (box.hidden = true));

// Aparición al hacer scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
