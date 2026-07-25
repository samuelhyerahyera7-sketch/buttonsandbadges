import type { CSSProperties, ReactElement } from 'react';
import type { Category } from '../data/products';

const cfg: Record<Category, { accent: string; label: string }> = {
  'name-badges':     { accent: '#2E7EA0', label: 'Name Badge' },
  'reusable-badges': { accent: '#1A7A4E', label: 'Reusable Badge' },
  'button-badges':   { accent: '#6A3DB8', label: 'Button Badge' },
  'lapels':          { accent: '#A07820', label: 'Lapel' },
  'tags':            { accent: '#2060A0', label: 'Conference Tag' },
  'corporate-gifts': { accent: '#8C6A00', label: 'Corporate Gift' },
  'stickers':        { accent: '#9B2880', label: 'Sticker' },
  'signs':           { accent: '#6A5020', label: 'Sign' },
};

function NameBadgeIcon({ c }: { c: string }) {
  return (
    <svg width="88" height="56" viewBox="0 0 88 56" fill="none">
      <rect x="2" y="2" width="84" height="52" rx="5" stroke={c} strokeWidth="2" />
      <rect x="12" y="16" width="64" height="4" rx="2" fill={c} opacity="0.85" />
      <rect x="12" y="26" width="44" height="3" rx="1.5" fill={c} opacity="0.45" />
      <rect x="12" y="35" width="30" height="2.5" rx="1.25" fill={c} opacity="0.25" />
    </svg>
  );
}

function ReusableBadgeIcon({ c }: { c: string }) {
  return (
    <svg width="88" height="56" viewBox="0 0 88 56" fill="none">
      <rect x="2" y="2" width="84" height="52" rx="5" stroke={c} strokeWidth="2" />
      <rect x="12" y="16" width="64" height="4" rx="2" fill={c} opacity="0.85" />
      <rect x="12" y="27" width="44" height="3" rx="1.5" fill={c} opacity="0.3" />
      {/* refresh arrows */}
      <path d="M66 34 A8 8 0 1 1 74 42" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
      <polygon points="74,38 74,46 78,42" fill={c} opacity="0.7" />
    </svg>
  );
}

function ButtonBadgeIcon({ c }: { c: string }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="32" stroke={c} strokeWidth="2" />
      <circle cx="36" cy="36" r="22" fill={c} opacity="0.08" />
      <circle cx="36" cy="12" r="4" fill={c} opacity="0.6" />
      <line x1="36" y1="16" x2="36" y2="26" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function LapelIcon({ c }: { c: string }) {
  return (
    <svg width="60" height="72" viewBox="0 0 60 72" fill="none">
      <circle cx="30" cy="42" r="22" stroke={c} strokeWidth="2" />
      <circle cx="30" cy="42" r="14" fill={c} opacity="0.1" />
      <circle cx="30" cy="16" r="3.5" fill={c} opacity="0.7" />
      <line x1="30" y1="19.5" x2="30" y2="32" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="30" y1="32" x2="26" y2="22" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

function TagIcon({ c }: { c: string }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M14 8 H46 Q52 8 52 14 L64 36 L52 58 Q52 64 46 64 H14 Q8 64 8 58 V14 Q8 8 14 8 Z"
        stroke={c} strokeWidth="2" fill="none" />
      <circle cx="24" cy="36" r="5" fill={c} opacity="0.5" />
      {/* lanyard line */}
      <line x1="36" y1="2" x2="36" y2="8" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function KeyringIcon({ c }: { c: string }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="38" r="22" stroke={c} strokeWidth="2" />
      <circle cx="36" cy="38" r="14" fill={c} opacity="0.1" />
      {/* key chain */}
      <path d="M36 16 Q50 6 64 16" stroke={c} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <circle cx="36" cy="10" r="5" stroke={c} strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
  );
}

function StickerIcon({ c }: { c: string }) {
  return (
    <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
      <path d="M34 6 L40 24 L60 24 L44 36 L50 55 L34 43 L18 55 L24 36 L8 24 L28 24 Z"
        stroke={c} strokeWidth="2" fill={c} fillOpacity="0.08" />
    </svg>
  );
}

function SignIcon({ c }: { c: string }) {
  return (
    <svg width="80" height="64" viewBox="0 0 80 64" fill="none">
      <rect x="4" y="4" width="72" height="46" rx="5" stroke={c} strokeWidth="2" />
      <rect x="36" y="50" width="8" height="10" fill={c} opacity="0.4" />
      <rect x="26" y="60" width="28" height="2.5" rx="1.25" fill={c} opacity="0.3" />
      {/* text lines on sign */}
      <rect x="14" y="16" width="52" height="4" rx="2" fill={c} opacity="0.7" />
      <rect x="14" y="26" width="34" height="3" rx="1.5" fill={c} opacity="0.35" />
    </svg>
  );
}

const icons: Record<Category, (c: string) => ReactElement> = {
  'name-badges':     (c) => <NameBadgeIcon c={c} />,
  'reusable-badges': (c) => <ReusableBadgeIcon c={c} />,
  'button-badges':   (c) => <ButtonBadgeIcon c={c} />,
  'lapels':          (c) => <LapelIcon c={c} />,
  'tags':            (c) => <TagIcon c={c} />,
  'corporate-gifts': (c) => <KeyringIcon c={c} />,
  'stickers':        (c) => <StickerIcon c={c} />,
  'signs':           (c) => <SignIcon c={c} />,
};

interface Props {
  category: Category;
  size?: string;
  style?: CSSProperties;
  className?: string;
  large?: boolean;
}

export default function ProductImage({ category, size, style, className, large }: Props) {
  const { accent, label } = cfg[category] ?? cfg['name-badges'];

  const containerStyle: CSSProperties = {
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: large ? 20 : 14,
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    borderBottom: '1px solid #EAEAEA',
    ...style,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={{ position: 'relative' }}>
        {icons[category]?.(accent)}
      </div>
      <div style={{ textAlign: 'center', position: 'relative', padding: '0 12px' }}>
        <div style={{
          color: '#555',
          fontSize: large ? '0.9rem' : '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
        }}>
          {label}
        </div>
        {size && (
          <div style={{
            color: accent,
            fontSize: large ? '0.82rem' : '0.67rem',
            marginTop: 4,
            fontWeight: 500,
          }}>
            {size}
          </div>
        )}
      </div>
    </div>
  );
}
