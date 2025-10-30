import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface MathEquationProps {
  equation: string;
  block?: boolean;
}

export const MathEquation: React.FC<MathEquationProps> = ({ equation, block = true }) => {
  return (
    <div className="math-equation">
      {block ? (
        <BlockMath math={equation} />
      ) : (
        <InlineMath math={equation} />
      )}
    </div>
  );
};
