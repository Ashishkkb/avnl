/**
 * DBIM iconography — Material Symbols Outlined.
 *
 * Verified from the DBIM ToolKit production bundle: the toolkit loads
 * `Material Symbols Outlined` (Google) and its Visual Components Library
 * "Iconography" set is a curated subset of it. We use the same font so our
 * icons are pixel-identical to the DBIM system instead of bespoke SVGs.
 *
 * Render with ligatures: <span class="material-symbols-outlined">search</span>.
 * The <Icon> wrapper maps our semantic names to the canonical Material symbol
 * names and applies consistent sizing/weight.
 */

export type IconName =
  | "search"
  | "chevron-down"
  | "chevron-right"
  | "arrow-right"
  | "menu"
  | "close"
  | "user"
  | "login"
  | "accessibility"
  | "language"
  | "sun"
  | "moon"
  | "contrast"
  | "plus"
  | "minus"
  | "dot"
  | "location"
  | "users"
  | "factory"
  | "chart"
  | "document"
  | "shield"
  | "grievance"
  | "vendor"
  | "briefcase"
  | "phone"
  | "mail"
  | "external"
  | "download"
  | "calendar"
  | "rss"
  | "twitter"
  | "facebook"
  | "youtube"
  | "instagram"
  | "linkedin"
  | "spark"
  | "handshake"
  | "cap"
  | "diamond"
  | "invert"
  | "saturation"
  | "link"
  | "hide-image"
  | "cursor"
  | "reset"
  | "text-increase"
  | "text-decrease"
  | "grip"
  | "sort"
  | "category"
  | "list"
  | "view"
  | "archive";

// Semantic name -> Material Symbols Outlined ligature.
const SYMBOL: Record<IconName, string> = {
  search: "search",
  "chevron-down": "keyboard_arrow_down",
  "chevron-right": "chevron_right",
  "arrow-right": "arrow_forward",
  menu: "menu",
  close: "close",
  user: "account_circle",
  login: "login",
  accessibility: "accessibility_new",
  language: "translate",
  sun: "light_mode",
  moon: "dark_mode",
  contrast: "contrast",
  plus: "add",
  minus: "remove",
  dot: "fiber_manual_record",
  location: "location_on",
  users: "groups",
  factory: "factory",
  chart: "bar_chart",
  document: "description",
  shield: "verified_user",
  grievance: "support_agent",
  vendor: "assignment_turned_in",
  briefcase: "work",
  phone: "call",
  mail: "mail",
  external: "open_in_new",
  download: "download",
  calendar: "calendar_month",
  rss: "rss_feed",
  twitter: "alternate_email",
  facebook: "facebook",
  youtube: "smart_display",
  instagram: "photo_camera",
  linkedin: "work_history",
  spark: "auto_awesome",
  handshake: "handshake",
  cap: "school",
  diamond: "diamond",
  invert: "invert_colors",
  saturation: "water_drop",
  link: "link",
  "hide-image": "hide_image",
  cursor: "ads_click",
  reset: "restart_alt",
  "text-increase": "text_increase",
  "text-decrease": "text_decrease",
  grip: "drag_indicator",
  sort: "sort",
  category: "category",
  list: "view_list",
  view: "visibility",
  archive: "inventory_2",
};

type Props = {
  name: IconName;
  /** font-size in px (controls glyph size). Default 20. */
  size?: number;
  /** optical weight 100..700. Default 400. */
  weight?: number;
  /** filled vs outlined (0..1). Default 0 (outlined, per DBIM). */
  fill?: 0 | 1;
  className?: string;
  /** decorative by default; pass a label to expose to assistive tech. */
  title?: string;
};

export function Icon({ name, size = 20, weight = 400, fill = 0, className = "", title }: Props) {
  return (
    <span
      className={`material-symbols-outlined select-none leading-none ${className}`}
      style={{
        fontSize: size,
        width: size,
        height: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      }}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {SYMBOL[name]}
    </span>
  );
}
