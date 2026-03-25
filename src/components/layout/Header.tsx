import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  getNavTypewriterCommand,
  navItems,
  SITE_BRAND_SECOND_LINE,
  site,
} from "@/lib/site";

const CMD_COLOR_BY_INDEX: string[] = [
  "text-[var(--color-vintage-cyan)]",
  "text-[var(--color-vintage-green)]",
  "text-[var(--color-vintage-amber)]",
  "text-[var(--color-vintage-magenta)]",
  "text-[var(--color-vintage-coral)]",
  "text-[var(--color-vintage-cyan)]",
];

const TYPE_MS = 36;

const brandSuffix = ` ${SITE_BRAND_SECOND_LINE}`;
const brandFirst = site.name.endsWith(brandSuffix)
  ? site.name.slice(0, -brandSuffix.length)
  : site.name;
const brandSecond = site.name.endsWith(brandSuffix) ? SITE_BRAND_SECOND_LINE : "";

function NavLinkRow({
  item,
  index,
  onNavigate,
}: {
  item: (typeof navItems)[number];
  index: number;
  onNavigate?: () => void;
}) {
  const hoverText: Record<number, string> = {
    0: "group-hover:text-[var(--color-vintage-cyan)]",
    1: "group-hover:text-[var(--color-vintage-green)]",
    2: "group-hover:text-[var(--color-vintage-amber)]",
    3: "group-hover:text-[var(--color-vintage-magenta)]",
    4: "group-hover:text-[var(--color-vintage-coral)]",
    5: "group-hover:text-[var(--color-vintage-cyan)]",
  };
  const hoverClass =
    hoverText[index % 6] ?? "group-hover:text-[var(--color-vintage-cyan)]";

  const cmd = getNavTypewriterCommand(item.href);
  const cmdColor =
    CMD_COLOR_BY_INDEX[index % 6] ?? "text-[var(--color-vintage-cyan)]";

  const [hover, setHover] = useState(false);
  const [typedLen, setTypedLen] = useState(0);
  /** En el navegador es `number`; `NodeJS.Timeout` entra en conflicto con `@types/node`. */
  const tickRef = useRef<number | null>(null);

  const stopTimer = useCallback(() => {
    if (tickRef.current !== null) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
  }, []);

  useEffect(() => () => stopTimer(), [stopTimer]);

  const startTyping = useCallback(() => {
    stopTimer();
    setTypedLen(0);
    let n = 0;
    tickRef.current = window.setInterval(() => {
      n += 1;
      if (n >= cmd.length) {
        setTypedLen(cmd.length);
        stopTimer();
      } else {
        setTypedLen(n);
      }
    }, TYPE_MS);
  }, [cmd, stopTimer]);

  const typed = cmd.slice(0, typedLen);

  return (
    <a
      href={item.href}
      onClick={onNavigate}
      aria-label={item.label}
      onMouseEnter={() => {
        setHover(true);
        startTyping();
      }}
      onMouseLeave={() => {
        setHover(false);
        stopTimer();
        setTypedLen(0);
      }}
      onFocus={() => {
        setHover(true);
        startTyping();
      }}
      onBlur={() => {
        setHover(false);
        stopTimer();
        setTypedLen(0);
      }}
      className={`group flex min-h-11 items-start gap-2 rounded-lg px-3 py-2 font-console text-xs font-medium transition hover:bg-white/[0.04] ${hoverClass}`}
    >
      <span
        className="mt-0.5 shrink-0 font-console text-[var(--color-vintage-green)] leading-none"
        aria-hidden
      >
        <span className="nav-prompt-gt inline-block font-semibold">{">"}</span>
      </span>

      <span className="min-w-0 flex-1 break-all leading-snug">
        {hover ? (
          <span className={`block font-console text-[11px] ${cmdColor}`}>
            {typed}
          </span>
        ) : (
          <span className="text-[var(--color-muted)]">{item.label}</span>
        )}
      </span>
    </a>
  );
}

const asidePanelClass =
  "flex w-[min(18rem,88vw)] flex-col bg-gradient-to-r from-[rgb(12_18_16/0.97)] via-[rgb(8_14_12/0.78)] to-transparent py-8 pl-5 pr-10 backdrop-blur-xl md:w-60";

const versionLabel = "V3.24.26";

function BrandBlock({
  onNavigate,
  className = "mb-10",
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <a
      href="#hero"
      onClick={onNavigate}
      className={`group block rounded-lg outline-none ring-[var(--color-vintage-cyan)]/40 focus-visible:ring-2 ${className}`}
    >
      <span className="font-console text-[10px] uppercase tracking-[0.15em] text-[var(--color-vintage-green)]">
        ./whoami
      </span>
      <span className="mt-2 block font-console text-sm font-semibold leading-snug tracking-tight text-[var(--color-muted)] transition group-hover:text-white">
        {brandFirst}
      </span>
      {brandSecond ? (
        <span className="mt-0.5 block font-console text-sm font-semibold leading-snug tracking-tight text-[var(--color-muted)] transition group-hover:text-white">
          {brandSecond}
        </span>
      ) : null}
    </a>
  );
}

type HeaderProps = {
  sidebarOpen: boolean;
  onSidebarOpenChange: (open: boolean) => void;
};

export function Header({ sidebarOpen, onSidebarOpenChange }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <button
        type="button"
        className="fixed top-4 left-4 z-[60] flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/95 px-3 py-2 font-console text-xs font-medium text-[var(--color-vintage-cyan)] shadow-[0_0_24px_rgb(60_252_236/0.12)] backdrop-blur-md md:hidden"
        aria-expanded={drawerOpen}
        aria-controls="side-nav"
        onClick={() => setDrawerOpen((v) => !v)}
      >
        <span className="text-[var(--color-vintage-green)]">
          <span className="nav-prompt-gt inline-block font-semibold">{">"}</span>
        </span>
        menú
      </button>

      <button
        type="button"
        aria-label="Abrir menú lateral"
        onClick={() => onSidebarOpenChange(true)}
        className={`fixed top-24 left-3 z-[55] hidden h-10 items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/90 px-3 py-2 font-console text-xs font-medium text-[var(--color-vintage-cyan)] shadow-md backdrop-blur-md transition hover:bg-white/5 md:flex ${
          sidebarOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-[var(--color-vintage-green)]">
          <span className="nav-prompt-gt inline-block font-semibold">{">"}</span>
        </span>
        menú
      </button>

      <AnimatePresence>
        {sidebarOpen ? (
          <motion.button
            key="sidebar-backdrop"
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Cerrar menú lateral"
            onClick={() => onSidebarOpenChange(false)}
            className="fixed inset-0 z-[45] hidden cursor-pointer bg-black/60 backdrop-blur-sm md:block"
          />
        ) : null}
      </AnimatePresence>

      <motion.aside
        id="side-nav"
        aria-label="Navegación"
        aria-hidden={!sidebarOpen}
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : "-100%",
        }}
        transition={{ type: "spring", damping: 32, stiffness: 320 }}
        className={`fixed top-0 bottom-0 left-0 z-50 ${asidePanelClass} hidden md:flex ${
          sidebarOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Ocultar menú lateral"
          onClick={() => onSidebarOpenChange(false)}
          className="absolute top-7 right-3 flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)]/60 bg-black/20 font-console text-xs text-[var(--color-muted)] transition hover:border-[var(--color-border)] hover:text-white"
        >
          «
        </button>

        <div className="flex min-h-0 flex-1 flex-col pr-2 pt-2">
          <BrandBlock />

          <nav className="flex flex-col gap-1" aria-label="Principal">
            {navItems.map((item, i) => (
              <NavLinkRow key={item.href} item={item} index={i} />
            ))}
          </nav>

          <div className="mt-auto pt-8 font-console text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
            {versionLabel}
          </div>
        </div>
      </motion.aside>

      <AnimatePresence>
        {drawerOpen ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-black/65 backdrop-blur-sm md:hidden"
              aria-label="Cerrar menú"
              onClick={closeDrawer}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className={`fixed top-0 bottom-0 left-0 z-[60] min-h-[100dvh] flex-col ${asidePanelClass} md:hidden flex`}
            >
              <BrandBlock onNavigate={closeDrawer} className="mb-8" />
              <nav className="flex flex-col gap-1" aria-label="Principal">
                {navItems.map((item, i) => (
                  <NavLinkRow
                    key={item.href}
                    item={item}
                    index={i}
                    onNavigate={closeDrawer}
                  />
                ))}
              </nav>
              <div className="mt-auto pt-8 font-console text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                {versionLabel}
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
