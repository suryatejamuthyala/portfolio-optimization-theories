import React from 'react';
import { PortfolioTheory } from './portfolioTheories';
import { MathEquation } from './MathEquation';

interface TheoryDetailProps {
  theory: PortfolioTheory;
  onBack: () => void;
}

export const TheoryDetail: React.FC<TheoryDetailProps> = ({ theory, onBack }) => {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <button
        onClick={onBack}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          cursor: 'pointer',
          border: '1px solid #333',
          borderRadius: '5px',
          background: 'white',
          fontSize: '14px'
        }}
      >
        ← Back to Theories
      </button>

      <h1 style={{
        fontSize: '32px',
        marginBottom: '10px',
        color: '#1a1a1a'
      }}>
        {theory.name}
      </h1>

      <p style={{
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#555',
        marginBottom: '30px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        {theory.description}
      </p>

      <div>
        {theory.steps.map((step, index) => (
          <div
            key={index}
            style={{
              marginBottom: '40px',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              background: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{
              fontSize: '20px',
              marginBottom: '10px',
              color: '#2563eb'
            }}>
              {step.title}
            </h2>

            <p style={{
              fontSize: '15px',
              lineHeight: '1.6',
              marginBottom: step.equations ? '20px' : '0',
              color: '#333'
            }}>
              {step.description}
            </p>

            {step.equations && step.equations.length > 0 && (
              <div style={{
                background: '#fafafa',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #e5e5e5'
              }}>
                {step.equations.map((equation, eqIndex) => (
                  <div
                    key={eqIndex}
                    style={{
                      marginBottom: eqIndex < step.equations!.length - 1 ? '15px' : '0'
                    }}
                  >
                    <MathEquation equation={equation} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '40px',
        padding: '20px',
        background: '#f0f9ff',
        borderRadius: '8px',
        border: '1px solid #bae6fd'
      }}>
        <h3 style={{
          fontSize: '18px',
          marginBottom: '10px',
          color: '#0369a1'
        }}>
          Summary
        </h3>
        <p style={{
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#0c4a6e',
          margin: 0
        }}>
          This theory consists of {theory.steps.length} main steps. Follow each step carefully
          to implement the {theory.name} strategy in your portfolio optimization process.
        </p>
      </div>
    </div>
  );
};
