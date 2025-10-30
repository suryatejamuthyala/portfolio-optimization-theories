export interface TheoryStep {
  title: string;
  description: string;
  equations?: string[];
}

export interface PortfolioTheory {
  id: string;
  name: string;
  description: string;
  steps: TheoryStep[];
}

export const portfolioTheories: PortfolioTheory[] = [
  {
    id: 'markowitz',
    name: 'Markowitz Mean-Variance Optimization',
    description: 'Modern Portfolio Theory developed by Harry Markowitz focuses on maximizing expected return for a given level of risk or minimizing risk for a given level of expected return.',
    steps: [
      {
        title: 'Step 1: Define Expected Returns',
        description: 'Calculate the expected return for each asset in the portfolio.',
        equations: ['E(R_i) = \\sum_{j=1}^{n} p_j R_{ij}']
      },
      {
        title: 'Step 2: Calculate Portfolio Expected Return',
        description: 'The expected return of a portfolio is the weighted average of the expected returns of individual assets.',
        equations: ['E(R_p) = \\sum_{i=1}^{n} w_i E(R_i)']
      },
      {
        title: 'Step 3: Calculate Covariance Matrix',
        description: 'Compute the covariance between each pair of assets to understand how they move together.',
        equations: ['\\sigma_{ij} = \\text{Cov}(R_i, R_j) = E[(R_i - E(R_i))(R_j - E(R_j))]']
      },
      {
        title: 'Step 4: Calculate Portfolio Variance',
        description: 'The variance of the portfolio depends on the weights, variances, and covariances of the assets.',
        equations: ['\\sigma_p^2 = \\sum_{i=1}^{n}\\sum_{j=1}^{n} w_i w_j \\sigma_{ij}']
      },
      {
        title: 'Step 5: Optimize Portfolio Weights',
        description: 'Minimize portfolio variance subject to a target expected return, or maximize return for a given risk level.',
        equations: [
          '\\min_{w} \\quad \\sigma_p^2 = w^T \\Sigma w',
          '\\text{subject to:} \\quad w^T \\mu = R_t',
          'w^T \\mathbf{1} = 1'
        ]
      }
    ]
  },
  {
    id: 'capm',
    name: 'Capital Asset Pricing Model (CAPM)',
    description: 'CAPM describes the relationship between systematic risk and expected return for assets, particularly stocks.',
    steps: [
      {
        title: 'Step 1: Define the Security Market Line',
        description: 'The expected return of an asset is determined by its beta (systematic risk) relative to the market.',
        equations: ['E(R_i) = R_f + \\beta_i [E(R_m) - R_f]']
      },
      {
        title: 'Step 2: Calculate Beta',
        description: 'Beta measures the sensitivity of an asset\'s returns to market returns.',
        equations: ['\\beta_i = \\frac{\\text{Cov}(R_i, R_m)}{\\text{Var}(R_m)}']
      },
      {
        title: 'Step 3: Identify Risk-Free Rate',
        description: 'Use the yield on government bonds as the risk-free rate (Rf).',
        equations: ['R_f = \\text{Yield on T-Bills or Government Bonds}']
      },
      {
        title: 'Step 4: Estimate Market Return',
        description: 'Calculate the expected return of the market portfolio (typically a broad market index).',
        equations: ['E(R_m) = \\text{Expected Return of Market Index}']
      },
      {
        title: 'Step 5: Calculate Expected Return',
        description: 'Apply the CAPM formula to determine the expected return for the asset.',
        equations: ['E(R_i) = R_f + \\beta_i [E(R_m) - R_f]']
      }
    ]
  },
  {
    id: 'black-litterman',
    name: 'Black-Litterman Model',
    description: 'The Black-Litterman model combines market equilibrium with investor views to generate expected returns.',
    steps: [
      {
        title: 'Step 1: Start with Market Equilibrium',
        description: 'Use the market capitalization weights as the equilibrium portfolio.',
        equations: ['w_{eq} = \\text{Market cap weights}']
      },
      {
        title: 'Step 2: Derive Implied Returns',
        description: 'Calculate the returns implied by the equilibrium portfolio using reverse optimization.',
        equations: ['\\Pi = \\lambda \\Sigma w_{eq}']
      },
      {
        title: 'Step 3: Specify Investor Views',
        description: 'Express views on expected returns of certain assets in the form of a matrix P and vector Q.',
        equations: ['P \\cdot E(R) = Q + \\epsilon']
      },
      {
        title: 'Step 4: Combine Views with Market Equilibrium',
        description: 'Blend the market implied returns with investor views using Bayesian updating.',
        equations: ['E(R)_{BL} = [(\\tau\\Sigma)^{-1} + P^T\\Omega^{-1}P]^{-1}[(\\tau\\Sigma)^{-1}\\Pi + P^T\\Omega^{-1}Q]']
      },
      {
        title: 'Step 5: Calculate Optimal Portfolio',
        description: 'Use the Black-Litterman expected returns in mean-variance optimization.',
        equations: ['w_{BL} = (\\lambda\\Sigma)^{-1}E(R)_{BL}']
      }
    ]
  },
  {
    id: 'apt',
    name: 'Arbitrage Pricing Theory (APT)',
    description: 'APT is a multi-factor model that explains asset returns through various macroeconomic factors.',
    steps: [
      {
        title: 'Step 1: Identify Risk Factors',
        description: 'Select macroeconomic factors (e.g., GDP growth, inflation, interest rates) that influence asset returns.',
        equations: ['F_1, F_2, \\ldots, F_k']
      },
      {
        title: 'Step 2: Estimate Factor Sensitivities',
        description: 'Calculate the sensitivity (beta) of each asset to each risk factor using regression.',
        equations: ['R_i = \\alpha_i + \\beta_{i1}F_1 + \\beta_{i2}F_2 + \\cdots + \\beta_{ik}F_k + \\epsilon_i']
      },
      {
        title: 'Step 3: Determine Factor Risk Premiums',
        description: 'Estimate the expected return associated with each risk factor.',
        equations: ['\\lambda_j = E(F_j)']
      },
      {
        title: 'Step 4: Calculate Expected Return',
        description: 'The expected return is the sum of the risk-free rate and the factor risk premiums weighted by sensitivities.',
        equations: ['E(R_i) = R_f + \\beta_{i1}\\lambda_1 + \\beta_{i2}\\lambda_2 + \\cdots + \\beta_{ik}\\lambda_k']
      },
      {
        title: 'Step 5: Build the Portfolio',
        description: 'Use APT expected returns in portfolio optimization or arbitrage strategies.',
        equations: ['w^* = \\arg\\max_w \\quad E(R_p) - \\frac{\\lambda}{2}\\sigma_p^2']
      }
    ]
  },
  {
    id: 'risk-parity',
    name: 'Risk Parity',
    description: 'Risk Parity allocates capital so that each asset contributes equally to the total portfolio risk.',
    steps: [
      {
        title: 'Step 1: Calculate Asset Volatilities',
        description: 'Determine the standard deviation (volatility) of each asset.',
        equations: ['\\sigma_i = \\sqrt{\\text{Var}(R_i)}']
      },
      {
        title: 'Step 2: Compute the Covariance Matrix',
        description: 'Build the covariance matrix for all assets in the portfolio.',
        equations: ['\\Sigma = [\\sigma_{ij}]']
      },
      {
        title: 'Step 3: Define Risk Contribution',
        description: 'The risk contribution of asset i is the product of its weight and marginal risk.',
        equations: ['RC_i = w_i \\cdot \\frac{\\partial \\sigma_p}{\\partial w_i} = w_i \\cdot \\frac{(\\Sigma w)_i}{\\sigma_p}']
      },
      {
        title: 'Step 4: Set Equal Risk Contributions',
        description: 'Optimize weights so that each asset contributes the same amount to total portfolio risk.',
        equations: ['RC_1 = RC_2 = \\cdots = RC_n']
      },
      {
        title: 'Step 5: Solve for Optimal Weights',
        description: 'Use numerical optimization to find weights that satisfy the equal risk contribution constraint.',
        equations: ['w^* = \\arg\\min_w \\sum_{i=1}^{n}(RC_i - \\bar{RC})^2']
      }
    ]
  },
  {
    id: 'min-variance',
    name: 'Minimum Variance Portfolio',
    description: 'The Minimum Variance Portfolio aims to achieve the lowest possible portfolio volatility.',
    steps: [
      {
        title: 'Step 1: Calculate the Covariance Matrix',
        description: 'Compute the covariance matrix of asset returns.',
        equations: ['\\Sigma = [\\sigma_{ij}]']
      },
      {
        title: 'Step 2: Define Portfolio Variance',
        description: 'Express portfolio variance as a function of weights and the covariance matrix.',
        equations: ['\\sigma_p^2 = w^T \\Sigma w']
      },
      {
        title: 'Step 3: Set Up the Optimization Problem',
        description: 'Minimize portfolio variance subject to the constraint that weights sum to 1.',
        equations: [
          '\\min_{w} \\quad w^T \\Sigma w',
          '\\text{subject to:} \\quad w^T \\mathbf{1} = 1'
        ]
      },
      {
        title: 'Step 4: Solve Using Lagrange Multipliers',
        description: 'Use the method of Lagrange multipliers to find the optimal weights.',
        equations: ['w^* = \\frac{\\Sigma^{-1}\\mathbf{1}}{\\mathbf{1}^T\\Sigma^{-1}\\mathbf{1}}']
      },
      {
        title: 'Step 5: Verify the Solution',
        description: 'Ensure that the weights sum to 1 and result in minimum variance.',
        equations: ['\\sum_{i=1}^{n} w_i^* = 1']
      }
    ]
  },
  {
    id: 'max-sharpe',
    name: 'Maximum Sharpe Ratio Portfolio',
    description: 'This strategy maximizes the Sharpe ratio, which measures risk-adjusted return.',
    steps: [
      {
        title: 'Step 1: Define the Sharpe Ratio',
        description: 'The Sharpe ratio is the ratio of excess return to portfolio volatility.',
        equations: ['SR = \\frac{E(R_p) - R_f}{\\sigma_p}']
      },
      {
        title: 'Step 2: Express in Optimization Form',
        description: 'Maximize the Sharpe ratio by optimizing the portfolio weights.',
        equations: ['\\max_{w} \\quad \\frac{w^T\\mu - R_f}{\\sqrt{w^T\\Sigma w}}']
      },
      {
        title: 'Step 3: Transform to Minimize Variance',
        description: 'Convert the problem to minimizing variance for a given excess return.',
        equations: [
          '\\min_{w} \\quad w^T\\Sigma w',
          '\\text{subject to:} \\quad w^T(\\mu - R_f\\mathbf{1}) = 1'
        ]
      },
      {
        title: 'Step 4: Solve Using Quadratic Programming',
        description: 'Use quadratic programming techniques to find the optimal weights.',
        equations: ['w^* = \\frac{\\Sigma^{-1}(\\mu - R_f\\mathbf{1})}{\\mathbf{1}^T\\Sigma^{-1}(\\mu - R_f\\mathbf{1})}']
      },
      {
        title: 'Step 5: Normalize Weights',
        description: 'Ensure weights sum to 1 and calculate the maximum Sharpe ratio.',
        equations: ['SR_{max} = \\sqrt{(\\mu - R_f\\mathbf{1})^T\\Sigma^{-1}(\\mu - R_f\\mathbf{1})}']
      }
    ]
  },
  {
    id: 'mean-cvar',
    name: 'Mean-CVaR Optimization',
    description: 'Mean-CVaR optimization minimizes the Conditional Value at Risk (expected loss beyond VaR) while targeting a desired return.',
    steps: [
      {
        title: 'Step 1: Define Value at Risk (VaR)',
        description: 'VaR is the maximum loss at a given confidence level (e.g., 95%).',
        equations: ['VaR_\\alpha = \\inf\\{x : P(L \\leq x) \\geq \\alpha\\}']
      },
      {
        title: 'Step 2: Define Conditional Value at Risk (CVaR)',
        description: 'CVaR is the expected loss given that the loss exceeds VaR.',
        equations: ['CVaR_\\alpha = E[L | L \\geq VaR_\\alpha]']
      },
      {
        title: 'Step 3: Formulate the Optimization Problem',
        description: 'Minimize CVaR subject to achieving a target expected return.',
        equations: [
          '\\min_{w} \\quad CVaR_\\alpha(w)',
          '\\text{subject to:} \\quad w^T\\mu \\geq R_t, \\quad w^T\\mathbf{1} = 1'
        ]
      },
      {
        title: 'Step 4: Use Linear Programming Approximation',
        description: 'CVaR can be approximated using linear programming with historical scenarios.',
        equations: ['CVaR_\\alpha \\approx VaR_\\alpha + \\frac{1}{(1-\\alpha)T}\\sum_{t=1}^{T}[L_t - VaR_\\alpha]^+']
      },
      {
        title: 'Step 5: Solve and Interpret',
        description: 'Solve the optimization problem to find weights that minimize tail risk.',
        equations: ['w^* = \\arg\\min CVaR_\\alpha(w)']
      }
    ]
  }
];
