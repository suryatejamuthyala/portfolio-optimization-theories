import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { portfolioTheories, PortfolioTheory } from './portfolioTheories';
import { TheoryDetail } from './TheoryDetail';

const App: React.FC = () => {
  const [selectedTheory, setSelectedTheory] = useState<PortfolioTheory | null>(null);

  if (selectedTheory) {
    return (
      <TheoryDetail
        theory={selectedTheory}
        onBack={() => setSelectedTheory(null)}
      />
    );
  }

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '40px',
        padding: '30px 0',
        borderBottom: '2px solid #e5e7eb'
      }}>
        <h1 style={{
          fontSize: '42px',
          marginBottom: '10px',
          color: '#1a1a1a',
          fontWeight: 'bold'
        }}>
          Portfolio Optimization Theories
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Explore comprehensive guides to portfolio optimization theories with step-by-step
          mathematical formulations and explanations.
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {portfolioTheories.map((theory) => (
          <div
            key={theory.id}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '24px',
              background: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
            onClick={() => setSelectedTheory(theory)}
          >
            <h2 style={{
              fontSize: '20px',
              marginBottom: '12px',
              color: '#1a1a1a',
              fontWeight: '600'
            }}>
              {theory.name}
            </h2>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: '#666',
              marginBottom: '16px'
            }}>
              {theory.description}
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '13px',
              color: '#3b82f6'
            }}>
              <span>{theory.steps.length} steps</span>
              <span style={{ fontSize: '18px' }}>’</span>
            </div>
          </div>
        ))}
      </div>

      <footer style={{
        textAlign: 'center',
        padding: '30px 0',
        borderTop: '1px solid #e5e7eb',
        color: '#666',
        fontSize: '14px'
      }}>
        <p>
          Based on academic research in portfolio optimization and modern portfolio theory.
        </p>
        <p style={{ marginTop: '10px' }}>
          <a
            href="https://ncpl.law.nyu.edu/wp-content/uploads/pdfs/2003/Conf2003_Gruber_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#3b82f6',
              textDecoration: 'none'
            }}
          >
            Reference: NYU Law Portfolio Theory Research
          </a>
        </p>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
