import { useRef } from 'react';
import { products } from '../data.js';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Zap, Star, Trophy, Leaf, TrendingUp, ChevronRight, Sparkles, ArrowUpRight, Package, Truck, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import FloatingOrb from '../components/FloatingOrb';
import StatCounter from '../components/StatCounter';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../components/CTABanner';
import AnimatedText from '../components/AnimatedText';

export default function Home() {
  const featured = products.slice(0, 6);
  const heroRef = useRef(null);
  const processRef = useRef(null);
  
  const { scrollYProgress: heroSyp } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroSyp, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroSyp, [0, 0.6], [1, 0]);
  const heroScale = useTransform(heroSyp, [0, 0.6], [1, 0.92]);

  const { scrollYProgress: processSyp } = useScroll({ target: processRef, offset: ['start end', 'end start'] });
  const processX = useTransform(processSyp, [0, 1], ['20%', '-20%']);

  const stats = [
    { value: '61', suffix: '+', label: 'Export Products', icon: Leaf, color: 'var(--emerald)' },
    { value: '15', suffix: '+', label: 'Countries Served', icon: Globe, color: 'var(--sapphire)' },
    { value: '100', suffix: '%', label: 'Organic Certified', icon: ShieldCheck, color: 'var(--gold)' },
    { value: '5', suffix: 'Y+', label: 'Years of Trust', icon: Trophy, color: 'var(--violet)' },
  ];

  const categories = [
    { name: 'Palm Jaggery', desc: 'Pure, unrefined natural sweetener from palmyra palms', count: 6, color: '#92400e', image: '/products/WhatsApp Image 2026-04-15 at 15.47.03 (1).jpeg' },
    { name: 'Turmeric', desc: 'High-curcumin varieties from heritage Tamil Nadu farms', count: 5, color: '#ca8a04', image: '/products/WhatsApp Image 2026-04-15 at 15.47.06 (1).jpeg' },
    { name: 'Senna Auriculata', desc: 'Medicinal-grade Avaram flower & leaf products', count: 7, color: '#15803d', image: '/products/WhatsApp Image 2026-04-15 at 15.47.05 (2).jpeg' },
    { name: 'Black Gram', desc: 'Protein-rich organic Urad Dal, whole & powdered', count: 5, color: '#1e40af', image: '/products/WhatsApp Image 2026-04-15 at 15.47.05 (1).jpeg' },
    { name: 'Neem Products', desc: 'Traditional oral care & wellness neem sticks', count: 5, color: '#0f766e', image: '/products/WhatsApp Image 2026-04-15 at 15.47.08 (1).jpeg' },
    { name: 'Palmyra Root', desc: 'Organic tuber varieties for speciality cuisines', count: 5, color: '#7c3aed', image: '/products/WhatsApp Image 2026-04-15 at 15.47.14.jpeg' },
  ];

  const trustBadges = ['FSSAI Certified', 'ISO 9001:2015', 'Export Grade A', '100% Organic'];

  const processSteps = [
    { icon: HeartHandshake, title: 'Direct Farm Sourcing', desc: 'Cutting out intermediaries. We work ground-level with Tamil Nadu farmers, ensuring ethical pricing and unmatched freshness.', color: 'var(--emerald)' },
    { icon: ShieldCheck, title: 'Rigorous Quality Lab', desc: 'Multi-stage QC. Moisture analysis, purity checks, and strict phytosanitary compliance for every global export.', color: 'var(--sapphire)' },
    { icon: Package, title: 'Export-Grade Packing', desc: 'Vacuum-sealed in food-grade materials. Full batch tracking, transparent labeling, and customs-ready documentation.', color: 'var(--gold)' },
    { icon: Truck, title: 'Global Logistics', desc: 'From our heritage silos to your global warehouses. Temperature-controlled freight tracked in real-time across 15+ nations.', color: 'var(--violet)' },
  ];

  return (
    <div className="page-wrapper" data-page="home">

      {/* ════════════════════════════════════
          HERO SECTION — Cutting Edge
          ════════════════════════════════════ */}
      <section ref={heroRef} style={{
        minHeight: '94vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        position: 'relative', paddingTop: '4rem', paddingBottom: '6rem',
        overflow: 'hidden'
      }}>
        <FloatingOrb size="400px" color="rgba(212,160,23,0.15)" top="-10%" left="15%" />
        <FloatingOrb size="300px" color="rgba(5,150,105,0.1)" top="30%" left="75%" delay={2} />
        <FloatingOrb size="250px" color="rgba(37,99,235,0.08)" top="70%" left="10%" delay={4} />

        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px', pointerEvents: 'none', opacity: 0.8,
        }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale, position: 'relative', zIndex: 1 }}>
          <Reveal>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="badge badge-glow" 
              style={{ padding: '0.5rem 1.25rem', marginBottom: '2rem', fontSize: '0.75rem', backdropFilter: 'blur(10px)' }}
            >
              <Sparkles size={14} style={{ color: 'var(--gold)' }} />
              Pioneering Global Trade • 2020 to 2026
            </motion.div>
          </Reveal>

          <h1 style={{
            fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
            lineHeight: '0.9',
            letterSpacing: '-0.05em',
            marginBottom: '1.5rem',
            maxWidth: '1000px',
            fontWeight: 900,
            textTransform: 'uppercase'
          }}>
            <Reveal delay={0.1}>Mastery in</Reveal>
            <Reveal delay={0.2}>
              <span className="text-gradient">Indian</span>
            </Reveal>
            <Reveal delay={0.3}>Exports.</Reveal>
          </h1>

          <Reveal delay={0.4}>
            <AnimatedText 
              text="Delivering certified organic agricultural excellence from the heritage soils of Tamil Nadu to the world stage. Precision logistics, zero compromise."
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: 'var(--text-secondary)',
                maxWidth: '650px',
                margin: '0 auto 3rem',
                lineHeight: '1.6',
                fontWeight: '500',
              }}
              delay={0.5}
            />
          </Reveal>

          <Reveal delay={0.6}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link to="/products" className="btn btn-primary btn-xl" style={{ boxShadow: 'var(--shadow-xl)' }}>
                  View Catalog <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn btn-outline btn-xl glass">
                  Talk to Sales
                </Link>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.8}>
            <div style={{
              display: 'flex', gap: '1rem', justifyContent: 'center',
              flexWrap: 'wrap', marginTop: '4rem', opacity: 0.8
            }}>
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="chip glass" style={{ padding: '0.4rem 1rem', fontSize: '0.75rem' }}>
                  <ShieldCheck size={12} style={{ color: 'var(--emerald)' }} /> {badge}
                </div>
              ))}
            </div>
          </Reveal>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          STATS — Floating Cards
          ════════════════════════════════════ */}
      <section style={{ marginBottom: 'clamp(6rem, 12vw, 10rem)', position: 'relative', zIndex: 5 }}>
        <Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            padding: '0 clamp(1rem, 5vw, 5rem)'
          }}>
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="card glass"
                style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  textAlign: 'center',
                  position: 'relative', overflow: 'hidden',
                  borderRadius: 'var(--radius-3xl)',
                  border: '1px solid rgba(255,255,255,0.5)'
                }}
              >
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '120px', height: '120px',
                  background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} icon={stat.icon} color={stat.color} />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════
          CATEGORIES — Premium Grid
          ════════════════════════════════════ */}
      <section style={{ marginBottom: 'clamp(6rem, 12vw, 10rem)' }}>
        <SectionHeader
          badge="Product Lines"
          title="Curated Export"
          titleAccent="Categories"
          rightAction={
            <motion.div whileHover={{ x: 5 }}>
              <Link to="/products" className="btn btn-outline" style={{ borderRadius: 'var(--radius-full)' }}>
                Explore All <ChevronRight size={16} />
              </Link>
            </motion.div>
          }
        />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {categories.map((cat, idx) => (
            <Reveal key={idx} delay={idx * 0.05} direction="up">
              <Link to="/products">
                <motion.div
                  whileHover={{ y: -8, boxShadow: 'var(--shadow-2xl)', borderColor: `${cat.color}40` }}
                  className="card"
                  style={{
                    padding: '2rem', cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', gap: '1.5rem',
                    position: 'relative', overflow: 'hidden',
                    height: '100%', borderRadius: 'var(--radius-3xl)'
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    width: '120px', height: '120px',
                    background: `radial-gradient(circle at top right, ${cat.color}20 0%, transparent 70%)`,
                    transition: 'opacity 0.4s', opacity: 0.6,
                  }} />
                  <div style={{ 
                    width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', 
                    border: `2px solid ${cat.color}30`, flexShrink: 0,
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '800', fontSize: '1.25rem', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                      {cat.name}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem', color: 'var(--text-tertiary)',
                      lineHeight: '1.6', marginBottom: '1rem',
                    }}>
                      {cat.desc}
                    </p>
                    <div className="badge badge-dark" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: 'none' }}>
                      {cat.count} Variants
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          HOW WE WORK — Parallax Horizontal Scroll
          ════════════════════════════════════ */}
      <section ref={processRef} style={{ marginBottom: 'clamp(6rem, 12vw, 10rem)', overflow: 'hidden' }}>
        <SectionHeader
          badge="Operations"
          badgeVariant="badge-emerald"
          badgeIcon={<Zap size={14} style={{ marginRight: '4px' }} />}
          title="The Standard of"
          titleAccent="Execution."
          subtitle="A transparent, frictionless four-step methodology ensuring harvest-to-warehouse perfection."
        />

        <div 
          style={{ 
            position: 'relative', 
            overflow: 'hidden',
            padding: '2rem 0'
          }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            style={{ 
              display: 'flex', 
              gap: '2rem', 
              width: 'max-content',
              paddingLeft: '2rem'
            }}
          >
            {[...processSteps, ...processSteps].map((step, idx) => {
              const originalIdx = idx % processSteps.length;
              return (
                <div key={idx} style={{ flexShrink: 0 }}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="card glass"
                    style={{
                      width: '380px', padding: '3rem 2rem',
                      position: 'relative', overflow: 'hidden',
                      borderRadius: 'var(--radius-3xl)',
                      height: '100%'
                    }}
                  >
                    <div style={{
                      position: 'absolute', top: '10px', right: '15px',
                      fontFamily: 'var(--font-display)', fontSize: '8rem',
                      fontWeight: '900', color: 'var(--text-primary)', opacity: 0.03,
                      lineHeight: 1, pointerEvents: 'none', letterSpacing: '-0.05em'
                    }}>
                      0{originalIdx + 1}
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: '60px', height: '60px', borderRadius: 'var(--radius-2xl)',
                        background: `${step.color}15`, display: 'flex',
                        alignItems: 'center', justifyContent: 'center', marginBottom: '2rem',
                      }}>
                        <step.icon size={28} style={{ color: step.color }} />
                      </div>
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '1rem', color: 'var(--text-tertiary)', lineHeight: '1.7' }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FEATURED — Large Impact
          ════════════════════════════════════ */}
      <section style={{ marginBottom: 'clamp(5rem, 10vw, 7rem)' }}>
        <SectionHeader
          badge="Signature"
          badgeVariant="badge-gold"
          badgeIcon={<Star size={12} fill="currentColor" style={{ marginRight: '4px' }} />}
          title="Premium"
          titleAccent="Selections"
          rightAction={
            <motion.div whileHover={{ x: 4 }}>
              <Link to="/products" className="btn btn-primary" style={{ borderRadius: 'var(--radius-full)' }}>
                View Master Catalog <ArrowRight size={16} />
              </Link>
            </motion.div>
          }
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '2rem',
        }}>
          {featured.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 0.08} direction="up">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 'var(--radius-3xl)', overflow: 'hidden' }}
              >
                <Link to={`/product/${product.id}`} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  height: '280px', background: 'var(--bg-secondary)',
                  padding: '2rem', position: 'relative',
                  backgroundImage: 'radial-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}>
                  <motion.img
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }}
                  />
                  <div style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                    width: '40px', height: '40px', borderRadius: 'var(--radius-full)',
                    background: 'var(--text-primary)', color: 'white', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', zIndex: 2, boxShadow: 'var(--shadow-lg)'
                  }}>
                    <ArrowUpRight size={18} />
                  </div>
                </Link>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                    marginBottom: '1rem',
                  }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', paddingRight: '1rem' }}>{product.name}</h3>
                    <span className="badge badge-glow" style={{ flexShrink: 0, fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                      ₹{product.pricePerGram}/g
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.95rem', color: 'var(--text-tertiary)',
                    lineHeight: '1.65', flexGrow: 1, marginBottom: '2rem',
                  }}>
                    {product.description.substring(0, 100)}...
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          CTA BANNER
          ════════════════════════════════════ */}
      <CTABanner
        title="Elevate Your"
        titleAccent="Supply Chain."
        description="Integrate our premium, ethically sourced agricultural products into your global operations. Contact our trade desk today."
        primaryLink="/contact"
        primaryLabel="Initialize Trade"
        secondaryLink="/products"
        secondaryLabel="Explore Inventory"
      />
    </div>
  );
}
