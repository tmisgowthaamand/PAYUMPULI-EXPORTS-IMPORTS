import Reveal from './Reveal';

/**
 * Reusable section header with badge, title, subtitle and optional right action.
 */
export default function SectionHeader({ 
  badge, 
  badgeVariant = '', 
  badgeIcon,
  title, 
  titleAccent, 
  accentColor = 'var(--gold)', 
  subtitle, 
  rightAction,
  align = 'left',
  delay = 0 
}) {
  return (
    <Reveal delay={delay}>
      <div style={{
        display: 'flex',
        justifyContent: rightAction ? 'space-between' : (align === 'center' ? 'center' : 'flex-start'),
        alignItems: rightAction ? 'flex-end' : (align === 'center' ? 'center' : 'flex-start'),
        flexDirection: rightAction ? 'row' : (align === 'center' ? 'column' : 'column'),
        marginBottom: '2.5rem',
        flexWrap: 'wrap',
        gap: '1rem',
        textAlign: align,
      }}>
        <div>
          {badge && (
            <span className={`badge ${badgeVariant}`} style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              {badgeIcon}{badge}
            </span>
          )}
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {title}{' '}
            {titleAccent && (
              <span className="font-serif" style={{ color: accentColor }}>{titleAccent}</span>
            )}
          </h2>
          {subtitle && (
            <p style={{ color: 'var(--text-tertiary)', marginTop: '0.5rem', fontSize: '0.95rem', maxWidth: '600px' }}>
              {subtitle}
            </p>
          )}
        </div>
        {rightAction && rightAction}
      </div>
    </Reveal>
  );
}
