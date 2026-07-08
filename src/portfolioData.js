export const profile = {
  name: 'Aabha Tomar',
  role: 'Aspiring Data Scientist',
  tagline: 'Machine Learning · Data Analytics · Open Source',
  email: 'aabha.tomar@example.com',
  github: 'https://github.com/aabhatomar',
  linkedin: 'https://linkedin.com/in/aabhatomar',
  resumeUrl: '#',
  location: 'India',
}

export const about = {
  summary:
    "I like data the way most people like a good mystery — messy at first glance, with a signal hiding somewhere in the noise. That's what pulled me from spreadsheets into scikit-learn, and from Kaggle notebooks into a research desk writing policy papers on crypto regulation.",
  focusAreas: ['Data Science', 'Machine Learning', 'Analytics', 'Research', 'Open Source', 'Python'],
  narrative: [
    {
      k: 'Where it started',
      v: "A fraud-detection model that kept flagging good transactions as risky — chasing down why turned into UniPay FraudX, and turned me into someone who reads a confusion matrix before breakfast.",
    },
    {
      k: 'Where it grew',
      v: 'Writing a research paper on cryptocurrency regulation taught me that a good model means nothing without a good question behind it — so I started treating every dataset like a policy brief first, a notebook second.',
    },
    {
      k: 'Where it lives now',
      v: "Open source. Reviewing pull requests, shipping features for Nexus Spring of Code, and maintaining FraudX in production taught me more about real engineering than any tutorial did.",
    },
  ],
}

export const stats = [
  { label: 'program', value: 'Project Kernel', sub: "NSoC '26", dtype: 'str' },
  { label: 'role', value: 'Research Intern', sub: 'IISDGPP', dtype: 'str' },
  { label: 'pearson_score', value: '929', sub: '/ 1000', dtype: 'int64' },
  { label: 'certifications', value: '5+', sub: 'verified', dtype: 'int64' },
  { label: 'ml_projects', value: '4', sub: 'shipped', dtype: 'int64' },
]

export const experience = [
  {
    year: '2026',
    title: 'Research Intern',
    org: 'International Institute of SDGs & Public Policy',
    desc: 'Researched and co-authored a paper on cryptocurrency regulation frameworks, studying policy gaps across jurisdictions and their downstream effects on financial inclusion.',
    tags: ['Policy Research', 'Literature Review', 'Public Policy'],
  },
  {
    year: '2026',
    title: 'Open Source Contributor',
    org: 'Nexus Spring of Code · Project Kernel',
    desc: 'Maintain UniPay FraudX, a production fraud-detection app — shipping features, fixing model drift, and reviewing contributions from other participants.',
    tags: ['Python', 'Streamlit', 'Maintainership'],
  },
  {
    year: '2025',
    title: 'Open Source Contributor',
    org: 'GirlScript Summer of Code',
    desc: 'Contributed to community projects, resolving issues and building data-facing features while learning to collaborate inside a real codebase and review cycle.',
    tags: ['Git', 'Collaboration', 'Issue Resolution'],
  },
]

export const projects = [
  {
    id: '01',
    name: 'UniPay FraudX',
    type: 'Machine Learning · Fraud Detection',
    desc: 'A fraud-detection web app that scores transactions in real time, built and maintained as an active open-source project under Nexus Spring of Code.',
    stack: ['Python', 'Streamlit', 'Random Forest', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    features: ['Fraud Prediction', 'Live Dashboard', 'Visual Analytics', 'Risk Scoring', 'Real-time Inference'],
    metric: { label: 'model_type', value: 'RandomForest' },
    github: '#',
    demo: '#',
  },
  {
    id: '02',
    name: 'Mental Health Assessment',
    type: 'Applied ML · Wellbeing',
    desc: 'A questionnaire-driven web app that scores mental wellbeing indicators and returns real-time, human-readable feedback.',
    stack: ['Python', 'Streamlit'],
    features: ['Questionnaire Engine', 'Real-time Feedback', 'Score Interpretation'],
    metric: { label: 'input_type', value: 'Questionnaire' },
    github: '#',
    demo: '#',
  },
  {
    id: '03',
    name: 'Superstore Sales Dashboard',
    type: 'Business Intelligence',
    desc: 'An interactive Tableau dashboard breaking down sales and profit performance across regions, categories, and time.',
    stack: ['Tableau', 'BI', 'Sales Analytics'],
    features: ['Regional Breakdown', 'Profit Analysis', 'Trend Lines'],
    metric: { label: 'tool', value: 'Tableau' },
    github: '#',
    demo: '#',
  },
  {
    id: '04',
    name: 'Healthcare Data Analysis',
    type: 'Exploratory Data Analysis',
    desc: 'End-to-end EDA and predictive modeling on a healthcare dataset — from cleaning to a working risk-prediction model.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    features: ['EDA', 'Feature Engineering', 'Prediction Model'],
    metric: { label: 'stage', value: 'EDA → Model' },
    github: '#',
    demo: '#',
  },
]

export const skills = {
  Programming: ['Python', 'SQL', 'R'],
  Libraries: ['Pandas', 'NumPy', 'Scikit-learn'],
  Visualization: ['Tableau', 'Matplotlib', 'Excel'],
  Tools: ['Git', 'GitHub', 'Streamlit', 'Jupyter Notebook', 'VS Code'],
}

export const research = {
  title: 'Cryptocurrency Regulation & Public Policy',
  desc: "At the International Institute of SDGs & Public Policy, I researched how regulatory frameworks for cryptocurrency shape financial inclusion and systemic risk — pairing policy literature with data-driven grounding.",
  tags: ['Cryptocurrency Regulation', 'Policy Research', 'Literature Review', 'Research Writing', 'Public Policy', 'SDGs', 'Academic Collaboration'],
}

export const openSource = [
  { name: 'GirlScript Summer of Code', desc: 'First open-source program — learned Git workflows and collaborative review.' },
  { name: 'Nexus Spring of Code', desc: 'Joined Project Kernel, contributing to a live production codebase.' },
  { name: 'UniPay FraudX', desc: 'Now maintaining the project — reviewing PRs and shipping releases.' },
]

export const certifications = [
  { name: 'IT Specialist: Data Analytics', issuer: 'Pearson', detail: 'Score 929 / 1000' },
  { name: 'Data Analysis Using Python', issuer: 'IBM', detail: 'Verified' },
  { name: 'R for Data Science', issuer: 'IBM', detail: 'Verified' },
  { name: 'English C1 Proficiency', issuer: 'EF SET', detail: 'Verified' },
]

export const achievements = [
  { label: '929 / 1000', desc: 'Pearson IT Specialist — Data Analytics' },
  { label: 'Project Kernel', desc: "Selected contributor, NSoC '26" },
  { label: 'Research Internship', desc: 'International Institute of SDGs & Public Policy' },
  { label: 'AI Solution Expo', desc: 'Participant, showcased applied ML work' },
]
