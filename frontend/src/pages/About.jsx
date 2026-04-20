import { Shield, Globe, Users, Target, Award, CheckCircle, Heart, Sparkles, ArrowRight, History, Leaf, Factory, Scale } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../components/Reveal';
import FloatingOrb from '../components/FloatingOrb';
import StatCounter from '../components/StatCounter';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../components/CTABanner';
import AnimatedText from '../components/AnimatedText';

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroSyp } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(heroSyp, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroSyp, [0, 0.8], [1, 0]);

  const values = [
    {
      icon: Shield,
      title: 'Global Compliance',
      desc: 'Tested against the harshest metrics. EU, GCC, and ASEAN food safety standard certified.',
      color: 'var(--sapphire)'
    },
    {
      icon: Users,
      title: 'Farmers First',
      desc: 'Zero middlemen. We empower Tamil Nadu’s agricultural backbone with direct-to-farm sourcing.',
      color: 'var(--emerald)'
    },
    {
      icon: Target,
      title: 'Logistics Precision',
      desc: 'Temperature-controlled supply chains maximizing the harvest-to-shipping window.',
      color: 'var(--gold)'
    },
    {
      icon: Scale,
      title: 'Ethical Sourcing',
      desc: 'Transparent, eco-conscious operations prioritizing heritage preservation of native crops.',
      color: 'var(--rose)'
    }
  ];

  const philosophy = [
    { icon: Leaf, title: 'Seed-to-Shelf Integrity', desc: 'Total supply chain command. What we harvest is exactly what enters your warehouse.' },
    { icon: Factory, title: 'Heritage Processing', desc: 'Merging traditional sun-drying methods with avant-garde hygiene facilities.' },
    { icon: History, title: 'Generational Knowledge', desc: 'Over five years of deep-rooted expertise in crop cycles and global compliance.' },
    { icon: Award, title: 'Uncompromising Standards', desc: 'Quality isn’t a phase—it’s our DNA. Every gram exported bears the Payumpuli seal of purity.' },
  ];

  return (
    <div className="page-wrapper" data-page="about" style={{ paddingTop: '2rem' }}>

      {/* ════════════════════════════════════
          HERO — Dramatic Editorial
          ════════════════════════════════════ */}
      <section ref={heroRef} style={{ 
        minHeight: '85vh', position: 'relative', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', marginBottom: 'clamp(5rem, 10vw, 8rem)',
        borderBottom: '1px solid var(--border)'
      }}>
        <FloatingOrb size="500px" color="rgba(37,99,235,0.08)" top="-20%" right="-10%" />
        <FloatingOrb size="400px" color="rgba(212,160,23,0.05)" bottom="0%" left="-10%" delay={3} />

        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '20vw', pointerEvents: 'none', opacity: 0.3
        }} />

        <motion.div style={{ scale: heroScale, opacity: heroOpacity, zIndex: 1 }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <span className="badge" style={{
                background: 'var(--sapphire-surface)', borderColor: 'rgba(37,99,235,0.3)',
                color: 'var(--sapphire)', fontSize: '0.75rem', padding: '0.5rem 1rem'
              }}>
                <Sparkles size={12} /> Heritage Built • 2020 to 2026
              </span>
            </div>
          </Reveal>
          
          <h1 style={{
            fontSize: 'clamp(3.5rem, 9vw, 6.5rem)',
            marginBottom: '2.5rem',
            lineHeight: '0.9',
            letterSpacing: '-0.05em',
            fontWeight: 900,
            textTransform: 'uppercase'
          }}>
            <Reveal delay={0.1}>Architects of</Reveal>
            <Reveal delay={0.2}><span className="font-serif" style={{ color: 'var(--sapphire)', textTransform: 'none' }}>Global Trade.</span></Reveal>
          </h1>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem', maxWidth: '1000px'
          }}>
            <Reveal delay={0.3}>
              <AnimatedText 
                text="Founded in 2020 in the heritage-rich soils of Tamil Nadu, PAYUMPULI EXPORTS & IMPORTS bridges the gap between traditional Indian agriculture and the precision metrics of the global market."
                style={{
                  fontSize: '1.2rem', color: 'var(--text-tertiary)',
                  borderLeft: '4px solid var(--sapphire)', paddingLeft: '1.5rem',
                  lineHeight: '1.8'
                }}
                delay={0.4}
              />
            </Reveal>
            <Reveal delay={0.4}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: '500', lineHeight: '1.8' }}>
                Since starting our business in 2020, our mission has rested entirely on the pillars of absolute transparency, ethical direct-to-farm sourcing, and uncompromising logistical excellence worldwide.
              </p>
            </Reveal>
          </div>
        </motion.div>
      </section>


      {/* ════════════════════════════════════
          STATS — Monolithic Design
          ════════════════════════════════════ */}
      <section style={{ marginBottom: 'clamp(6rem, 12vw, 10rem)' }}>
        <Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1px', background: 'var(--border)',
            borderRadius: 'var(--radius-3xl)', overflow: 'hidden'
          }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '4rem 2rem' }}>
              <StatCounter number="5" suffix="+" label="Years of Trust" value="5" />
            </div>
            <div style={{ background: 'var(--bg-secondary)', padding: '4rem 2rem' }}>
              <StatCounter number="15" suffix="+" label="Countries Served" value="15" />
            </div>
            <div style={{ background: 'var(--bg-secondary)', padding: '4rem 2rem' }}>
              <StatCounter number="61" suffix="+" label="Premium Products" value="61" />
            </div>
            <div style={{ background: 'var(--bg-secondary)', padding: '4rem 2rem' }}>
              <StatCounter number="100" suffix="%" label="Organic Certified" value="100" />
            </div>
          </div>
        </Reveal>
      </section>


      {/* ════════════════════════════════════
          NARRATIVE — Dark Contrast
          ════════════════════════════════════ */}
      <section style={{ marginBottom: 'clamp(6rem, 12vw, 10rem)' }}>
        <Reveal>
          <div style={{
            background: 'var(--bg-dark)', color: 'white',
            borderRadius: 'var(--radius-3xl)', padding: 'clamp(3rem, 6vw, 6rem)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center', position: 'relative', overflow: 'hidden'
          }}>
            <FloatingOrb size="500px" color="rgba(37,99,235,0.15)" top="-20%" left="-10%" />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Direct Sourcing.<br />
                <span className="font-serif" style={{ color: 'var(--sapphire)' }}>Zero Compromise.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                Our relationship with the earth and its cultivators is the soul of our enterprise. We bypass standard commodity chains to deliver unparalleled export quality.
              </p>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {values.map((item, idx) => (
                  <motion.div key={idx} whileHover={{ x: 10 }} transition={{ type: 'spring' }} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{
                      width: '48px', height: '48px', background: 'rgba(255,255,255,0.05)', color: item.color,
                      borderRadius: 'var(--radius-xl)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', fontWeight: '700', letterSpacing: '-0.01em', color: 'white' }}>{item.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: '1.7' }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
               <motion.div 
                 animate={{ rotate: 360 }} 
                 transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                 style={{ width: '100%', maxWidth: '400px', aspectRatio: '1/1', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
               >
                 <Globe size={150} color="var(--sapphire)" style={{ opacity: 0.2 }} />
               </motion.div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════
          PHILOSOPHY — Massive Typography
          ════════════════════════════════════ */}
      <section style={{ marginBottom: 'clamp(6rem, 12vw, 10rem)' }}>
        <SectionHeader 
          align="center"
          badge="The Blueprint"
          title="Operational"
          titleAccent="Philosophy"
          accentColor="var(--sapphire)"
          subtitle="How we maintain standard-setting qualities across over sixty product variations globally."
        />
        
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem', marginTop: '4rem'
        }}>
          {philosophy.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <motion.div 
                whileHover={{ y: -10, boxShadow: 'var(--shadow-xl)' }}
                className="card glass" 
                style={{ padding: '3rem 2.5rem', height: '100%', borderRadius: 'var(--radius-3xl)' }}
              >
                <item.icon size={36} color="var(--sapphire)" style={{ marginBottom: '2rem', filter: 'drop-shadow(0 4px 6px rgba(37,99,235,0.2))' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 800 }}>{item.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-tertiary)', lineHeight: '1.7' }}>{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          CERTIFICATIONS — Dark Section
          ════════════════════════════════════ */}
      <CTABanner 
         title="Certified to Serve the"
         titleAccent="World."
         description="Our quality management systems are recognized by international accreditation bodies, ensuring your global trade remains completely secure and seamless."
         primaryLabel="Request Certification Vault"
         primaryLink="/contact"
      />
    </div>
  );
}
