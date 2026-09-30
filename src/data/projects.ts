export interface Project {
  slug: string
  title: string
  tagline: string
  category: string
  year: string
  role: string
  featured: boolean
  cover: string
  gallery: { src: string; caption: string }[]
  problem: string
  approach: string
  outcome: string
  insights: string[]
  stack: string[]
  links: { live?: string; github?: string; demo?: string }
  metrics: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    slug: 'upi-spending-analyzer',
    title: 'UPI Spending Pattern Analyzer',
    tagline: '63K+ transactions decoded — spending trends, payment performance, and user behavior',
    category: 'Analytics',
    year: '2025',
    role: 'Data Analyst',
    featured: true,
    cover: '/upi-dashboard.png',
    gallery: [
      { src: '/upi-dashboard.png', caption: 'Power BI Dashboard — Spending Trends' },
      { src: '/upi-fail-success.png', caption: 'Transaction Success vs Failure Analysis' },
      { src: '/upi-state-wise.png', caption: 'State-wise Transaction Distribution' },
    ],
    problem:
      'A dataset of 63,000+ UPI transactions with no clear view of spending patterns, peak usage windows, or payment performance across merchants and user segments.',
    approach:
      'Cleaned and transformed raw transaction data with Python and Pandas. Used SQL for monthly trends, transaction types, user segmentation, merchant analysis, and KPI calculation. Built Power BI visualizations for spending trends and payment performance.',
    outcome:
      'Delivered an interactive Power BI dashboard showing spending trends, top merchants, transaction type breakdown, and monthly KPI performance. Identified peak spending windows and underperforming merchant categories.',
    insights: [
      'Weekend spending is significantly higher than weekday averages',
      'Peer-to-peer transfers dominate transaction volume but merchant payments drive value',
      'Two merchant categories account for the majority of failed transactions',
    ],
    stack: ['Python', 'Pandas', 'SQL', 'Power BI'],
    links: { github: 'https://github.com/vijsan147s/UPI-Spending-Analysis-Python-SQL-PowerBI' },
    metrics: [
      { value: '63K+', label: 'Transactions' },
      { value: 'SQL', label: 'Query Engine' },
      { value: 'Power BI', label: 'Dashboard' },
    ],
  },
  {
    slug: 'hotel-booking-analysis',
    title: 'Hotel Booking Data Analysis',
    tagline: 'Booking trends and cancellation patterns — EDA on real-world hospitality data',
    category: 'Analytics',
    year: '2025',
    role: 'Data Analyst',
    featured: true,
    cover: '/hotel-booking.png',
    gallery: [
      { src: '/hotel-booking.png', caption: 'Hotel Booking EDA — Cancellation Patterns' },
    ],
    problem:
      'Hotel booking data with no clear understanding of cancellation patterns, seasonal trends, or which booking characteristics correlate with cancellations.',
    approach:
      'Performed exploratory data analysis (EDA) on hotel booking data. Used SQL filtering, grouping, and aggregation to segment bookings by type, season, and customer profile. Applied statistical analysis and interpretation to identify patterns.',
    outcome:
      'Identified key cancellation predictors, seasonal booking trends, and customer segments with the highest cancellation rates. Delivered actionable insights for revenue optimization.',
    insights: [
      'Lead time is the strongest predictor of cancellation',
      'City hotels have higher cancellation rates than resort properties',
      'Repeat guests cancel at half the rate of first-time bookers',
    ],
    stack: ['Python', 'SQL', 'EDA', 'Statistical Analysis'],
    links: { github: 'https://github.com/vijsan147s/Hotel-Booking-Cancellation-Using-Data-Analysis-Excel' },
    metrics: [
      { value: 'SQL', label: 'Aggregation' },
      { value: 'EDA', label: 'Analysis' },
      { value: 'Python', label: 'Processing' },
    ],
  },
  {
    slug: 'sales-dashboard',
    title: 'Sales Data Dashboard',
    tagline: 'Interactive Power BI sales dashboard with KPI tracking and BI visualizations',
    category: 'Visualization',
    year: '2024',
    role: 'Data Analyst',
    featured: true,
    cover: '/sales-dashboard-1.png',
    gallery: [
      { src: '/sales-dashboard-1.png', caption: 'Main Sales Dashboard — KPI Overview' },
      { src: '/sales-dashboard-2.png', caption: 'Sales Performance Analysis' },
      { src: '/sales-dashboard-3.png', caption: 'Payment Method Distribution' },
    ],
    problem:
      'Sales data scattered across Excel files with no centralized view of performance, regional comparison, or product category breakdown.',
    approach:
      'Developed an interactive Power BI sales dashboard. Used Excel and Power BI for analysis and visualization. Implemented KPI tracking and BI visualizations for sales performance, regional comparison, and product mix.',
    outcome:
      'Built a multi-page Power BI dashboard with drill-down capabilities, KPI cards, and regional performance comparison. Enabled self-service analytics for the sales team.',
    insights: [
      'Top 20% of products drive 80% of revenue',
      'Regional performance varies by 35% — driven by a few key accounts',
      'Q4 consistently outperforms other quarters by 25%+',
    ],
    stack: ['Power BI', 'Excel', 'DAX', 'Business Intelligence'],
    links: { live: 'https://github.com/vijsan147s/Sales-Performance-Dashboard' },
    metrics: [
      { value: 'Power BI', label: 'Platform' },
      { value: 'KPI', label: 'Tracking' },
      { value: 'Excel', label: 'Data Source' },
    ],
  },
  {
    slug: 'loan-analysis',
    title: 'Loan Analysis Using Power BI',
    tagline: 'Loan portfolio and credit risk dashboard — 500 loans, $1B portfolio, 0.18% default rate',
    category: 'Visualization',
    year: '2025',
    role: 'Data Analyst',
    featured: true,
    cover: '/placeholder.svg',
    gallery: [],
    problem:
      'A loan portfolio dataset of 500 loans worth $1 billion with no centralized view of credit risk, default patterns, or portfolio distribution across states and employment types.',
    approach:
      'Analyzed loan data in CSV format. Built a comprehensive Power BI dashboard with loan portfolio overview, credit risk metrics, and detailed data table. Implemented filters for state, employment type, payment status, loan term, age, credit score, and default status.',
    outcome:
      'Delivered a Power BI dashboard with 6 visualizations: loan amount by state, default vs non-default donut, payment status bubble chart, employment type pie, credit score distribution, and loan term distribution. Key metrics: 11.75% avg interest rate, 684.59 avg credit score, 0.18% default rate.',
    insights: [
      'Default rate of 0.18% indicates strong portfolio quality',
      'Average credit score of 684.59 suggests prime borrower profile',
      'Loan distribution varies significantly by state and employment type',
    ],
    stack: ['Power BI', 'Excel', 'CSV Analysis', 'Credit Risk'],
    links: { live: 'https://github.com/vijsan147s/Loan-Analysis-Using-Power-BI' },
    metrics: [
      { value: '500', label: 'Total Loans' },
      { value: '$1B', label: 'Portfolio Value' },
      { value: '0.18%', label: 'Default Rate' },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
