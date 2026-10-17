// Friskshorts site. One module, no libraries. See DESIGN.md sections 8, 10 and 11.
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/* ---------------- Reduced motion ---------------- */
const rmQuery = matchMedia("(prefers-reduced-motion: reduce)");
let RM = rmQuery.matches;
const onRM = [];
root.classList.toggle("rm", RM);
rmQuery.addEventListener("change", (e) => {
  RM = e.matches;
  root.classList.toggle("rm", RM);
  onRM.forEach((f) => f());
});
const isTouch = matchMedia("(hover: none)").matches;
const smallQ = matchMedia("(max-width: 1023px)");

/* ---------------- Release + platform (section 11) ---------------- */
const REL = JSON.parse($("#release")?.textContent || "{}");
const GLYPH = { mac: "#g-apple", win: "#g-win" };

async function detectPlatform() {
  const ua = navigator.userAgent;
  const uad = navigator.userAgentData;
  const isMobile = uad?.mobile || /iPhone|iPad|Android/i.test(ua) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua));
  let os = uad?.platform || (/Windows/.test(ua) ? "Windows" : /Mac/.test(ua) ? "macOS" : /CrOS|Linux/.test(ua) ? "Linux" : "");
  let arch = "";
  try {
    if (uad?.getHighEntropyValues) arch = (await uad.getHighEntropyValues(["architecture"])).architecture || "";
  } catch {}
  if (isMobile) return "mobile";
  if (/Windows/i.test(os)) return "win";
  if (/mac/i.test(os)) return arch === "x86" ? "mac-intel" : "mac";
  if (/Linux|Chrome OS|ChromeOS|CrOS/i.test(os)) return "linux";
  return "mac";
}

function bothLinks() {
  return `<a href="${REL.mac}">Download for Mac</a> (${REL.macSize}) or <a href="${REL.win}">Download for Windows</a> (${REL.winSize})`;
}

function setPrimary(block, kind) {
  const a = $("[data-dl-primary]", block);
  if (!a) return;
  const label = $("[data-dl-label]", a);
  const use = $("[data-glyph] use", a);
  if (kind === "win") {
    a.href = REL.win; label.textContent = "Download for Windows"; use?.setAttribute("href", GLYPH.win);
  } else if (kind === "mac") {
    a.href = REL.mac; label.textContent = "Download for Mac"; use?.setAttribute("href", GLYPH.mac);
  }
}

function makeShareButton(a) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = a.className;
  b.innerHTML = "<span data-dl-label>Send yourself the link</span>";
  b.addEventListener("click", async () => {
    const url = location.href.split("#")[0];
    try {
      if (navigator.share) { await navigator.share({ title: "Friskshorts", url }); return; }
      await navigator.clipboard.writeText(url);
      b.firstChild.textContent = "Link copied";
    } catch {}
  });
  a.replaceWith(b);
}

async function initDownloads(p) {
  root.dataset.platform = p;
  const hero = $(".dl-hero");
  const get = $(".get-grid");
  if (!hero || !get) return p;
  const navLabel = $("[data-os-label]");
  if (p === "win") {
    navLabel.textContent = "Download for Windows";
    setPrimary(hero, "win"); setPrimary(get, "win");
    $("[data-dl-note]", hero).textContent = `Free. For Windows 10 and 11, 64-bit. ${REL.winSize}.`;
    $("[data-dl-alt]", hero).textContent = "Also for Mac";
    $("[data-dl-line]", get).textContent = `Version ${REL.version} for Windows 10 and 11, 64-bit. ${REL.winSize}.`;
    $("[data-other-text]", get).textContent = "Macs with Apple Silicon (M1 or newer).";
    const ol = $("[data-other-link]", get); ol.href = REL.mac; ol.textContent = "Download for Mac";
    $("[data-other-size]", get).textContent = `${REL.macSize}.`;
  } else if (p === "mac-intel") {
    const intel = "This Mac looks like it has an Intel chip. Friskshorts needs Apple Silicon (M1 or newer) for now.";
    $$("[data-dl-primary]").forEach((a) => a.classList.add("is-secondary"));
    $("[data-dl-note]", hero).textContent = intel;
    const alt = $("[data-dl-alt]", hero); alt.textContent = "Download for Windows"; alt.href = REL.win;
    $("[data-dl-line]", get).textContent = intel;
  } else if (p === "linux" || p === "mobile") {
    navLabel.textContent = "Download";
    const note = p === "linux" ? "Friskshorts runs on macOS and Windows. There's no Linux version yet." : "Friskshorts is a desktop app for Mac and Windows.";
    for (const block of [hero, get]) {
      const a = $("[data-dl-primary]", block);
      if (p === "linux") a.hidden = true; else makeShareButton(a);
    }
    $("[data-dl-note]", hero).textContent = note;
    $("[data-dl-alt]", hero).parentElement.innerHTML = bothLinks();
    $("[data-dl-line]", get).textContent = note;
    $("[data-dl-other]", get).innerHTML = `<p>${bothLinks()}</p>`;
  }
  // After a click on a download link: "Downloading…" for 4 s and a next-step line. No modal.
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href$='.dmg'], a[href$='.exe']");
    if (!a) return;
    const block = a.closest("[data-dl]");
    const after = block && $("[data-dl-after]", block);
    const label = $("[data-dl-label]", a);
    if (label && !label.dataset.orig) {
      label.dataset.orig = label.textContent;
      label.textContent = "Downloading…";
      setTimeout(() => { label.textContent = label.dataset.orig; delete label.dataset.orig; }, 4000);
    }
    if (after) after.hidden = false;
  });
}

/* ---------------- Captions: burn (sweep + in) ---------------- */
const CADENCE = 300;
function pop(el) {
  if (RM) return;
  el.animate([{ transform: "scale(1.06)" }, { transform: "scale(1)" }], { duration: 140, easing: "cubic-bezier(.2, 1.5, .4, 1)" });
}
async function sweep(h) {
  const words = $$(".w", h);
  for (const w of words) {
    if (RM) break;
    words.forEach((x) => x.classList.remove("is-now"));
    w.classList.add("is-now");
    pop(w);
    await wait(CADENCE);
  }
  words.forEach((x) => x.classList.remove("is-now"));
}
async function burnIn(h) {
  const words = $$(".w", h);
  for (const w of words) {
    if (RM) break;
    words.forEach((x) => x.classList.remove("is-now"));
    w.style.visibility = "";
    w.classList.add("is-now");
    pop(w);
    await wait(CADENCE);
  }
  words.forEach((x) => { x.classList.remove("is-now"); x.style.visibility = ""; });
}
function initCaptions() {
  const hero = $("[data-burn='sweep']");
  if (hero && !RM) {
    const ready = Promise.race([document.fonts?.ready || Promise.resolve(), wait(600)]);
    ready.then(() => wait(350)).then(() => sweep(hero));
  }
  const heads = $$("[data-burn='in']");
  if (RM) return;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      burnIn(e.target);
    }
  }, { threshold: 0.6 });
  for (const h of heads) {
    if (h.getBoundingClientRect().top < innerHeight * 0.9) continue; // already on screen: leave it
    $$(".w", h).forEach((w) => (w.style.visibility = "hidden"));
    io.observe(h);
  }
  onRM.push(() => { if (RM) $$("[data-burn] .w").forEach((w) => (w.style.visibility = "")); });
}

/* ---------------- Video helpers ---------------- */
const probe = document.createElement("video");
const canWebm = !!probe.canPlayType('video/webm; codecs="vp9"');
const canAv1 = !!probe.canPlayType('video/webm; codecs="av01.0.05M.08"');
function srcFor(v, preferSmall) {
  const d = v.dataset;
  if (preferSmall && d.mp4Small) return d.mp4Small;
  if (d.av1 && canAv1) return d.av1;
  if (d.webm && canWebm) return d.webm;
  return d.mp4 || d.mp4Small;
}
const playing = new Set();
function tryPlay(v, onFail) {
  if (document.hidden || v.dataset.userPaused === "1") return;
  if (!v.src) { v.src = srcFor(v, matchMedia("(max-width: 639px)").matches); }
  v.muted = true;
  const p = v.play();
  if (p) p.then(() => {
    playing.add(v);
    if (isTouch && playing.size > 2) {
      const oldest = [...playing].find((x) => x !== v);
      oldest?.pause(); playing.delete(oldest);
    }
  }).catch(() => onFail?.());
}
function stopVideo(v) { v.pause(); playing.delete(v); }

function bindControl(btn, v, extra) {
  const set = (paused) => {
    btn.setAttribute("aria-pressed", String(paused));
    const label = paused ? btn.dataset.labelPlay : btn.dataset.labelPause;
    $(".sr", btn).textContent = label;
  };
  btn.addEventListener("click", () => {
    const paused = btn.getAttribute("aria-pressed") !== "true";
    v.dataset.userPaused = paused ? "1" : "";
    set(paused);
    if (paused) stopVideo(v); else extra?.resume ? extra.resume() : tryPlay(v);
    extra?.onToggle?.(paused);
  });
  return set;
}

/* Reel + app window videos: load and play when >= 50 % visible, pause below 10 %. */
function initLazyVideos() {
  const vids = $$("video.v-lazy");
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const v = e.target;
      v._want = e.intersectionRatio >= (smallQ.matches && v.closest(".clips") ? 0.6 : 0.5);
      if (v._want && !RM) tryPlay(v, () => v._setCtl?.(true));
      else if (e.intersectionRatio < 0.1 || (smallQ.matches && v.closest(".clips") && !v._want)) stopVideo(v);
    }
  }, { threshold: [0, 0.1, 0.5, 0.6, 1] });
  for (const v of vids) {
    v.addEventListener("playing", () => v.classList.add("is-ready"), { once: true });
    const btn = v.parentElement.querySelector(".vctl");
    if (btn) v._setCtl = bindControl(btn, v);
    if (RM) v._setCtl?.(true);
    io.observe(v);
  }
  onRM.push(() => vids.forEach((v) => { if (RM) { stopVideo(v); v._setCtl?.(true); } }));
  // Mobile reel counter
  const clips = $("#clips"), n = $("#clip-n");
  if (clips && n) {
    const cio = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) n.textContent = String($$(".clip", clips).indexOf(e.target) + 1);
    }, { root: clips, threshold: 0.6 });
    $$(".clip", clips).forEach((c) => cio.observe(c));
  }
}

/* ---------------- The stage ---------------- */
function initStage() {
  const stage = $(".stage");
  if (!stage) return;
  const steps = $$(".step", stage);
  const labels = $$(".ruler-labels li", stage);
  const rulerNow = $(".ruler-now", stage);
  const ruler = $(".ruler", stage);
  const band = $("#band");
  const frameWrap = $(".frame-wrap", stage);
  const finalLayer = $(".layer-final", stage);
  const vFinal = $("#v-final");
  const pauseBtn = $("#stage-pause");
  const NAMES = ["Topic", "Script", "Voice", "Scene", "Captions", "MP4"];
  const scene = $(".layer-scene", stage);
  let state = "hero";
  let paused = false;
  let frameVisible = true;

  /* Data for the frame: captions, peaks (loaded when the Run is near) */
  let caps = null, peaks = null, loopDur = 8.777;
  let dataLoaded = false;
  const loadData = async () => {
    if (dataLoaded) return; dataLoaded = true;
    $$("[data-srcset]", stage).forEach((el) => { el.srcset = el.dataset.srcset; });
    $$("img[data-src]", stage).forEach((el) => { el.src = el.dataset.src; });
    try {
      const [c, p] = await Promise.all([
        fetch("media/shorts/octopus-loop-captions.json").then((r) => r.json()),
        fetch("media/data/voice-peaks.json").then((r) => r.json()),
      ]);
      caps = c; peaks = p; loopDur = c.loop_duration || loopDur;
      buildWave();
      if (state === "s3") enter("s3");
    } catch {}
  };

  /* Pause control for everything that loops in the frame */
  const setPause = bindControl(pauseBtn, vFinal, {
    onToggle: (p) => { paused = p; if (p) { stopClock(); voiceStop(); } else { syncMedia(); startClock(); } },
    resume: () => {},
  });

  /* Hero / final video */
  const syncMedia = () => {
    const ok = frameVisible && !paused && !RM;
    const wantFinal = (state === "hero" || state === "s6") && ok;
    if (wantFinal && vFinal.src) tryPlay(vFinal, () => { paused = true; setPause(true); });
    else if (!wantFinal) stopVideo(vFinal);
    // Scene backgrounds (steps 4 and 5): only the picked one plays.
    const wantScene = (state === "s4" || state === "s5") && ok && dataLoaded;
    for (const item of $$(".bg-item", stage)) {
      const v = $("video", item);
      if (wantScene && item.dataset.bg === scene.dataset.sel) tryPlay(v, () => { paused = true; setPause(true); });
      else if (!v.paused) stopVideo(v);
    }
  };
  vFinal.addEventListener("playing", () => vFinal.classList.add("is-ready"), { once: true });
  const loadHero = () => {
    vFinal.src = srcFor(vFinal, matchMedia("(max-width: 639px)").matches);
    vFinal.preload = "auto";
    syncMedia();
  };
  if (RM) { paused = true; setPause(true); }
  const afterLoad = () => (window.requestIdleCallback ? requestIdleCallback(loadHero, { timeout: 1500 }) : setTimeout(loadHero, 200));
  if (document.readyState === "complete") afterLoad(); else addEventListener("load", afterLoad, { once: true });
  new IntersectionObserver(([e]) => { frameVisible = e.isIntersecting; syncMedia(); if (frameVisible) startClock(); else stopClock(); }).observe(frameWrap);
  new IntersectionObserver(([e]) => { if (e.isIntersecting) loadData(); }, { rootMargin: "0px 0px -10% 0px" }).observe($(".run"));

  /* ---- Step 1: Type ---- */
  const typed = $(".topic-text", stage);
  const fullTopic = typed.dataset.type;
  const ideas = $(".ideas", stage);
  let typeRun = 0;
  async function enterTopic() {
    const run = ++typeRun;
    if (RM) { typed.textContent = fullTopic; ideas.style.opacity = 1; return; }
    typed.textContent = ""; ideas.style.opacity = 0;
    await wait(160);
    for (let i = 1; i <= fullTopic.length; i++) {
      if (run !== typeRun) return;
      typed.textContent = fullTopic.slice(0, i);
      await wait(34);
    }
    await wait(200);
    if (run !== typeRun) return;
    ideas.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 160, fill: "forwards" }).finished.then(() => { ideas.style.opacity = 1; });
  }

  /* ---- Step 2: Stream ---- */
  const lines = $$(".script-lines li", stage);
  function enterScript() {
    if (RM) return;
    lines.forEach((li, i) => li.animate(
      [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0 0 0)" }],
      { duration: 240, delay: 120 + i * 120, easing: "cubic-bezier(.16, 1, .3, 1)", fill: "backwards" }));
  }

  /* ---- Step 3: Wave ---- */
  const wave = $("#wave");
  const svg = $(".wave-svg", wave);
  let bars = [];
  function buildWave() {
    if (!peaks || bars.length) return;
    const n = peaks.length, W = n * 5 - 2, NS = "http://www.w3.org/2000/svg";
    svg.setAttribute("viewBox", `0 0 ${W} 100`);
    const mk = (cls) => {
      const g = document.createElementNS(NS, "g"); g.setAttribute("class", cls);
      peaks.forEach((v, i) => {
        const h = Math.max(2, v * 100);
        const r = document.createElementNS(NS, "rect");
        r.setAttribute("x", i * 5); r.setAttribute("y", (100 - h) / 2);
        r.setAttribute("width", 3); r.setAttribute("height", h); r.setAttribute("rx", 1.5);
        g.appendChild(r);
      });
      svg.appendChild(g); return g;
    };
    bars = [...mk("bars-base").children];
    mk("bars-played");
  }
  function enterVoice() {
    if (RM || !bars.length) return;
    bars.forEach((b, i) => b.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }],
      { duration: 320, delay: i * 4, easing: "cubic-bezier(.16, 1, .3, 1)", fill: "backwards" }));
    bars.forEach((b) => { b.style.transformBox = "fill-box"; b.style.transformOrigin = "center"; });
  }

  /* ---- Step 4: Drop ---- */
  const bg = $("#bg");
  const pic = $(".pic", stage);
  function enterScene(prev) {
    if (RM || prev === "s5") return;
    bg.animate([{ transform: "translateY(100%)" }, { transform: "translateY(0)" }], { duration: 560, easing: "cubic-bezier(.16, 1, .3, 1)" });
    pic.animate([{ transform: "translateY(-12px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 320, delay: 300 + 560 * 0.5, easing: "cubic-bezier(.16, 1, .3, 1)", fill: "backwards" });
  }
  $$("#bg-pick input").forEach((r) => r.addEventListener("change", () => { scene.dataset.sel = r.value; syncMedia(); }));

  /* ---- Step 5: captions in the frame ---- */
  const capLayer = $(".layer-captions", stage);
  const fcap = $("#fcap");
  let curGroup = -1;
  $$("#sw-text input").forEach((r) => r.addEventListener("change", () => capLayer.style.setProperty("--fc-text", r.value)));
  $$("#sw-now input").forEach((r) => r.addEventListener("change", () => capLayer.style.setProperty("--fc-now", r.value)));
  function renderCaption(t) {
    if (!caps) return;
    const gs = caps.groups;
    let gi = gs.findIndex((g) => t >= g.start && t < g.end);
    if (gi < 0) gi = t < gs[0].start ? 0 : gs.length - 1;
    if (gi !== curGroup) {
      curGroup = gi;
      fcap.innerHTML = gs[gi].words.map((w) => `<span class="w">${w.text.replace(/[<&>]/g, "")}</span>`).join(" ");
    }
    const ws = fcap.children;
    gs[gi].words.forEach((w, i) => {
      const now = t >= w.start && t < w.end;
      if (now && !ws[i].classList.contains("is-now")) { ws[i].classList.add("is-now"); pop(ws[i]); }
      else if (!now) ws[i].classList.remove("is-now");
    });
  }
  function sentenceAt(t) {
    if (!caps) return 0;
    let k = 0;
    for (const g of caps.groups) for (const w of g.words) { if (w.start > t) return k; if (/\.$/.test(w.text)) k++; }
    return k;
  }

  /* ---- Voice audio (user-triggered, works with reduced motion too) ---- */
  const vbtn = $("#voice-btn");
  let audio = null;
  function voiceStop() {
    if (!audio) return;
    audio.pause(); audio.currentTime = 0;
    vbtn.setAttribute("aria-pressed", "false"); $("span", vbtn).textContent = "Hear the voice";
  }
  vbtn.addEventListener("click", () => {
    if (!audio) {
      audio = new Audio(vbtn.dataset.src);
      audio.addEventListener("ended", voiceStop);
    }
    if (!audio.paused) { voiceStop(); return; }
    audio.currentTime = 0;
    audio.play().then(() => {
      vbtn.setAttribute("aria-pressed", "true"); $("span", vbtn).textContent = "Stop";
      startClock(true);
    }).catch(() => {});
  });

  /* ---- Clock for the frame (wave sweep, sentence, captions) ---- */
  let raf = 0, t0 = performance.now();
  function tick(now) {
    raf = 0;
    const live = audio && !audio.paused;
    if (!live && (paused || RM || document.hidden)) return;
    const t = live ? audio.currentTime : ((now - t0) / 1000) % loopDur;
    if (state === "s3") {
      wave.style.setProperty("--wp", clamp(t / loopDur).toFixed(4));
      const k = sentenceAt(t);
      lines.forEach((li, i) => li.classList.toggle("is-now", i === k));
    } else if (state === "s5") renderCaption(t);
    if (state === "s3" || state === "s5" || live) raf = requestAnimationFrame(tick);
  }
  function startClock(force) { if (!raf && (force || frameVisible)) raf = requestAnimationFrame(tick); }
  function stopClock() { if (raf) cancelAnimationFrame(raf); raf = 0; }
  function staticFrame() {
    // Reduced motion or paused: each step shows a still, final state.
    if (state === "s3") { lines.forEach((li, i) => li.classList.toggle("is-now", i === 0)); }
    if (state === "s5" && caps && curGroup < 0) renderCaption(caps.groups[0].words[0].start + 0.01);
  }

  /* ---- State changes ---- */
  function enter(s, prev) {
    if (s === "s1") enterTopic();
    if (s === "s2") enterScript();
    if (s === "s3") { enterVoice(); t0 = performance.now(); }
    if (s === "s4") enterScene(prev);
    if (s === "s5") { curGroup = -1; t0 = performance.now(); }
    staticFrame();
    startClock();
    syncMedia();
  }
  function applyFrame(s, prev) {
    stage.dataset.state = s;
    enter(s, prev);
  }
  function setState(next) {
    if (next === state) return;
    const prev = state;
    state = next;
    const idx = next === "hero" ? 5 : +next.slice(1) - 1;
    steps.forEach((st, i) => st.classList.toggle("is-active", next !== "hero" && i === idx));
    labels.forEach((li, i) => { li.classList.toggle("is-now", i === idx); li.classList.toggle("is-lit", i <= idx); });
    rulerNow.textContent = NAMES[idx];
    if (!RM && (prev === "hero" || next === "hero")) {
      stage.classList.add("rewinding");
      clearTimeout(setState.t); setState.t = setTimeout(() => stage.classList.remove("rewinding"), 440);
    }
    if (!RM && prev === "hero" && next !== "hero") {
      // Rewind: the finished Short fades in 120 ms, then a hard cut to the empty canvas.
      finalLayer.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 120 }).finished.then(() => { if (state === next) applyFrame(next, prev); });
    } else applyFrame(next, prev);
  }

  /* ---- Scroll: active step + scroll-linked playhead ---- */
  let ticking = false;
  function measure() {
    ticking = false;
    const vh = innerHeight;
    const small = smallQ.matches;
    const bandH = small ? band.getBoundingClientRect().height : 0;
    const line = small ? bandH + (vh - bandH) * 0.32 : vh * 0.58;
    const anchors = steps.map((s) => {
      const r = s.getBoundingClientRect();
      return small ? r.top + 40 : r.top + r.height / 2;
    });
    let i = -1;
    anchors.forEach((a, k) => { if (a <= line) i = k; });
    if (i < 0) { setState("hero"); ruler.style.setProperty("--p", 1); return; }
    setState("s" + (i + 1));
    let f;
    if (RM) f = 0.5;
    else {
      const next = i < anchors.length - 1 ? anchors[i + 1] : anchors[i] + steps[i].getBoundingClientRect().height * (small ? 1 : 0.5);
      f = clamp((line - anchors[i]) / Math.max(1, next - anchors[i]));
    }
    ruler.style.setProperty("--p", ((i + f) / 6).toFixed(4));
  }
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(measure); } };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });
  measure();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { stopClock(); playing.forEach((v) => v.pause()); if (audio) voiceStop(); }
    else { syncMedia(); startClock(); $$("video.v-lazy").forEach((v) => v._want && !RM && tryPlay(v)); }
  });
  onRM.push(() => {
    if (RM) { paused = true; setPause(true); stopVideo(vFinal); stopClock(); staticFrame(); }
    measure();
  });
}

/* ---------------- Privacy diagram arrow: draws once, green while drawing ---------------- */
function initDiagram() {
  if (RM) return;
  for (const svg of $$(".diagram svg")) {
    const [arrow, tip] = $$(".dg-arrow", svg);
    if (!arrow || svg.getBoundingClientRect().top < innerHeight) continue;
    arrow.style.strokeDasharray = "1"; arrow.style.strokeDashoffset = "1"; tip.style.opacity = "0";
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      arrow.classList.add("is-drawing"); tip.classList.add("is-drawing");
      arrow.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 600, easing: "cubic-bezier(.2, 0, 0, 1)", fill: "forwards" })
        .finished.then(() => {
          arrow.style.strokeDashoffset = "0"; tip.style.opacity = "";
          setTimeout(() => { arrow.classList.remove("is-drawing"); tip.classList.remove("is-drawing"); }, 120);
        });
    }, { threshold: 0.6 });
    io.observe(svg);
  }
  onRM.push(() => { if (RM) $$(".dg-arrow").forEach((a) => { a.getAnimations().forEach((x) => x.finish()); a.style.strokeDashoffset = "0"; a.style.opacity = ""; }); });
}

/* ---------------- Install page tabs (both panels readable without JS) ---------------- */
function initTabs(p) {
  const list = $(".tabs");
  if (!list) return;
  const tabs = $$("[role='tab']", list);
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      $("#" + t.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  };
  list.hidden = false;
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t));
    t.addEventListener("keydown", (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
  const want = location.hash === "#win" || p === "win" ? tabs[1] : tabs[0];
  select(want);
}

const platform = detectPlatform();
platform.then(initDownloads);
platform.then(initTabs);
initCaptions();
initStage();
initLazyVideos();
initDiagram();
