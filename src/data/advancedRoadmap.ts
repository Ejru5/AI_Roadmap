import type { RoadmapTrack } from '../types';

export const advancedRoadmap: RoadmapTrack = {
  id: 'advanced',
  title: 'Complete AI Learning Roadmap',
  subtitle: 'From fundamentals to advanced practice. A comprehensive master curriculum covering mathematics, programming, machine learning, deep learning, computer vision, natural language processing, and deployment.',
  estimatedTime: '8–12 Months',
  phases: [
    {
      id: 'a-phase-0',
      number: 0,
      title: 'Setup & Fundamentals',
      tagline: 'Establish study routines, development tools, version control, and cloud compute access.',
      estimatedTime: '1 Week',
      xpReward: 300,
      badgeId: 'badge-env-setup',
      sections: [
        {
          id: 'a-0-1',
          title: 'Developer Environment',
          subtopics: [
            {
              id: 'a-sub-habits',
              title: 'Learning Routines & Note Taking',
              details: ['Establishing daily study blocks and project goals', 'Maintaining technical notes in tools like Obsidian or Notion'],
              xp: 30
            },
            {
              id: 'a-sub-env',
              title: 'Environment Setup & Git',
              details: ['Configuring Linux, macOS, or Windows WSL2 environments', 'Setting up Python virtual environments with Conda or pyenv', 'Configuring VS Code, Jupyter, and Git version control workflows'],
              resources: [
                { title: 'The Missing Semester of CS Education (MIT)', url: 'https://missing.csail.mit.edu', type: 'course' },
                { title: 'Git & GitHub Fundamentals Video', url: 'https://youtu.be/RGOj5yH7evk', type: 'video' }
              ],
              xp: 40
            },
            {
              id: 'a-sub-cloud-gpu',
              title: 'Cloud Notebooks & GPU Compute',
              details: ['Utilizing Google Colab free and paid GPU instances', 'Exploring Kaggle Kernels and cloud platforms like Lambda Labs'],
              resources: [{ title: 'Google Colab Introduction Tutorial', url: 'https://colab.research.google.com/notebooks/intro.ipynb', type: 'doc' }],
              xp: 40
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-1',
      number: 1,
      title: 'Mathematics Foundations',
      tagline: 'Build a working knowledge of linear algebra, calculus, and probability theory.',
      estimatedTime: '4–6 Weeks',
      xpReward: 700,
      badgeId: 'badge-math-master',
      sections: [
        {
          id: 'a-1-1',
          title: 'Linear Algebra',
          subtopics: [
            {
              id: 'a-sub-linalg-core',
              title: 'Vectors, Matrices & Matrix Operations',
              details: ['Understanding vectors, matrices, tensors, and rank', 'Performing matrix multiplication, dot products, transposes, and inverses', 'Identifying identity, symmetric, and orthogonal matrices'],
              resources: [
                { title: '3Blue1Brown: Essence of Linear Algebra', url: 'https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', type: 'video' },
                { title: 'Gilbert Strang: Linear Algebra (MIT OCW)', url: 'https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011', type: 'course' }
              ],
              xp: 60
            },
            {
              id: 'a-sub-eig-svd',
              title: 'Eigendecomposition & PCA',
              details: ['Computing eigenvalues and eigenvectors for matrix transformation', 'Singular Value Decomposition (SVD) and its practical uses', 'Principal Component Analysis for dimensionality reduction', 'Applying vector norms in model regularization'],
              resources: [{ title: 'Interactive Linear Algebra Textbook', url: 'https://textbooks.math.gatech.edu/ila', type: 'book' }],
              xp: 70
            }
          ]
        },
        {
          id: 'a-1-2',
          title: 'Multivariate Calculus',
          subtopics: [
            {
              id: 'a-sub-calc-grad',
              title: 'Derivatives & Gradients',
              details: ['Limits, derivatives, and multivariable chain rules', 'Calculating gradients as vectors of partial derivatives', 'Understanding Jacobians and Hessians in optimization'],
              resources: [{ title: '3Blue1Brown: Essence of Calculus', url: 'https://youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr', type: 'video' }],
              xp: 60
            },
            {
              id: 'a-sub-optimization',
              title: 'Optimization Principles',
              details: ['Locating critical points including maxima, minima, and saddle points', 'Lagrange multipliers and convex optimization basics', 'Taylor series approximations for multi-variable functions'],
              xp: 60
            }
          ]
        },
        {
          id: 'a-1-3',
          title: 'Probability & Statistics',
          subtopics: [
            {
              id: 'a-sub-prob-dist',
              title: 'Random Variables & Distributions',
              details: ['Continuous and discrete probability density functions', 'Gaussian, Binomial, Poisson, and Dirichlet distributions', 'Understanding the Central Limit Theorem in data sampling'],
              resources: [{ title: 'StatQuest Probability & Statistics Channel', url: 'https://www.youtube.com/@statquest', type: 'video' }],
              xp: 60
            },
            {
              id: 'a-sub-inference',
              title: 'Statistical Inference & Information Theory',
              details: ['Maximum Likelihood Estimation and MAP estimation', 'Hypothesis testing, p-values, t-tests, and ANOVA', 'Entropy, Cross-Entropy, and KL Divergence metrics', 'Bayesian inference principles'],
              resources: [{ title: 'Seeing Theory: Visualizing Probability', url: 'https://seeing-theory.brown.edu', type: 'interactive' }],
              xp: 70
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-2',
      number: 2,
      title: 'Programming with Python',
      tagline: 'Develop clean Python code, object-oriented design, and efficient array processing.',
      estimatedTime: '3–4 Weeks',
      xpReward: 600,
      badgeId: 'badge-python-ninja',
      sections: [
        {
          id: 'a-2-1',
          title: 'Python Essentials',
          subtopics: [
            {
              id: 'a-sub-py-advanced',
              title: 'Object-Oriented & Advanced Python',
              details: ['Control flow, comprehensions, and generator functions', 'Decorators, custom exceptions, and variable argument unpacking', 'Object-oriented programming with classes, inheritance, and dunder methods', 'Managing files and resources with context managers'],
              resources: [
                { title: 'CS50 Introduction to Programming with Python (Harvard)', url: 'https://cs50.harvard.edu/python', type: 'course' },
                { title: 'Automate the Boring Stuff with Python', url: 'https://automatetheboringstuff.com', type: 'book' }
              ],
              xp: 60
            }
          ]
        },
        {
          id: 'a-2-2',
          title: 'Data Libraries',
          subtopics: [
            {
              id: 'a-sub-numpy-pandas',
              title: 'NumPy & Pandas Processing',
              details: ['Array operations, reshaping, slicing, and broadcasting with NumPy', 'Pandas DataFrames, indexing, grouping, and merging data', 'Cleaning datasets and managing missing values effectively'],
              resources: [
                { title: 'NumPy Quickstart Guide', url: 'https://numpy.org/doc/stable/user/quickstart.html', type: 'doc' },
                { title: 'Pandas 10-Minute Tutorial', url: 'https://pandas.pydata.org/docs/user_guide/10min.html', type: 'doc' }
              ],
              xp: 80
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-3',
      number: 3,
      title: 'Data Analysis & Visualization',
      tagline: 'Analyze datasets, engineer clean features, and build informative visualizations.',
      estimatedTime: '2 Weeks',
      xpReward: 500,
      badgeId: 'badge-data-analyst',
      sections: [
        {
          id: 'a-3-1',
          title: 'Analysis & SQL',
          subtopics: [
            {
              id: 'a-sub-eda',
              title: 'Exploratory Data Analysis',
              details: ['Summary statistics, distribution analysis, and outlier detection', 'Categorical encoding, feature scaling, and normalization', 'Preparing structured data splits for model training'],
              xp: 70
            },
            {
              id: 'a-sub-sql-viz',
              title: 'SQL & Data Visualization',
              details: ['Writing SQL queries with joins, grouping, and window functions', 'Building charts with Matplotlib, Seaborn, and interactive Plotly tools'],
              resources: [
                { title: 'Mode Analytics SQL Tutorial', url: 'https://mode.com/sql-tutorial', type: 'interactive' },
                { title: 'Plotly Python Documentation', url: 'https://plotly.com/python', type: 'doc' }
              ],
              xp: 70
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-4',
      number: 4,
      title: 'Machine Learning',
      tagline: 'Understand classical supervised, unsupervised, and ensemble algorithms.',
      estimatedTime: '6–8 Weeks',
      xpReward: 900,
      badgeId: 'badge-ml-master',
      sections: [
        {
          id: 'a-4-1',
          title: 'Supervised Learning',
          subtopics: [
            {
              id: 'a-sub-regression',
              title: 'Regression Models',
              details: ['Linear regression, residual evaluation, and multicollinearity checks', 'Polynomial regression and L1 and L2 regularization methods', 'Support Vector Regression techniques'],
              xp: 70
            },
            {
              id: 'a-sub-classification',
              title: 'Classification Algorithms',
              details: ['Logistic regression for binary and multi-class problems', 'K-Nearest Neighbors and distance metrics', 'Naive Bayes classifiers for textual data', 'Decision trees and Support Vector Machines'],
              resources: [{ title: 'StatQuest Machine Learning Playlists', url: 'https://www.youtube.com/@statquest', type: 'video' }],
              xp: 80
            }
          ]
        },
        {
          id: 'a-4-2',
          title: 'Ensembles & Clustering',
          subtopics: [
            {
              id: 'a-sub-ensembles',
              title: 'Ensemble Methods (Random Forest, XGBoost)',
              details: ['Bagging techniques and Random Forest classifiers', 'Gradient boosting frameworks including XGBoost, LightGBM, and CatBoost', 'Stacking multiple base models'],
              resources: [{ title: 'XGBoost Documentation', url: 'https://xgboost.readthedocs.io', type: 'doc' }],
              xp: 90
            },
            {
              id: 'a-sub-clustering-dim',
              title: 'Clustering & Manifold Learning',
              details: ['K-Means, hierarchical clustering, and DBSCAN algorithms', 'Dimensionality reduction using t-SNE and UMAP projections'],
              resources: [{ title: 'Hands-On Machine Learning with Scikit-Learn (Géron)', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning', type: 'book' }],
              xp: 90
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-5',
      number: 5,
      title: 'Deep Learning & Neural Networks',
      tagline: 'Construct neural networks, convolutional vision architectures, and sequence models.',
      estimatedTime: '6–8 Weeks',
      xpReward: 1000,
      badgeId: 'badge-dl-architect',
      sections: [
        {
          id: 'a-5-1',
          title: 'Deep Learning Foundations',
          subtopics: [
            {
              id: 'a-sub-mlp-opt',
              title: 'Multilayer Perceptrons & Optimization',
              details: ['Forward computation and gradient backpropagation algorithms', 'Modern activation functions including LeakyReLU, Swish, and GELU', 'Adaptive optimizers and learning rate schedules', 'Stabilizing training with Layer Normalization and Dropout'],
              resources: [{ title: 'Practical Deep Learning for Coders (fast.ai)', url: 'https://course.fast.ai', type: 'course' }],
              xp: 100
            }
          ]
        },
        {
          id: 'a-5-2',
          title: 'Vision & Sequence Architectures',
          subtopics: [
            {
              id: 'a-sub-cnns',
              title: 'Convolutional Neural Networks',
              details: ['Convolutions, strides, padding, and feature extraction', 'Architectures including ResNet and EfficientNet', 'Object detection and semantic segmentation frameworks'],
              xp: 100
            },
            {
              id: 'a-sub-rnns-lstms',
              title: 'Recurrent Architectures',
              details: ['Vanilla recurrent networks and sequence handling', 'LSTM memory gates and GRU simplified units', 'Bidirectional processing and encoder-decoder designs'],
              xp: 100
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-6',
      number: 6,
      title: 'Natural Language Processing',
      tagline: 'Process textual datasets, evaluate embeddings, and work with Transformer encoders.',
      estimatedTime: '4 Weeks',
      xpReward: 800,
      badgeId: 'badge-nlp-expert',
      sections: [
        {
          id: 'a-6-1',
          title: 'Language Processing',
          subtopics: [
            {
              id: 'a-sub-nlp-fundamentals',
              title: 'Text Processing to Transformer Encoders',
              details: ['Text tokenization, stemming, lemmatization, and n-grams', 'Word vector spaces including Word2Vec and FastText', 'Encoder architectures like BERT for classification tasks'],
              resources: [{ title: 'HuggingFace NLP Course', url: 'https://huggingface.co/learn/nlp-course', type: 'course' }],
              xp: 100
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-7',
      number: 7,
      title: 'Computer Vision',
      tagline: 'Explore image processing algorithms, vision transformers, and multimodal systems.',
      estimatedTime: '4 Weeks',
      xpReward: 800,
      badgeId: 'badge-vision-master',
      sections: [
        {
          id: 'a-7-1',
          title: 'Vision Systems',
          subtopics: [
            {
              id: 'a-sub-cv-advanced',
              title: 'OpenCV & Vision Transformers',
              details: ['Image manipulation and feature extraction using OpenCV', 'Vision Transformers (ViT) for visual classification', 'Multimodal vision models like CLIP'],
              xp: 100
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-8',
      number: 8,
      title: 'Reinforcement Learning',
      tagline: 'Understand Markov Decision Processes, Q-Learning, and policy optimization.',
      estimatedTime: '4 Weeks',
      xpReward: 850,
      badgeId: 'badge-rl-champion',
      sections: [
        {
          id: 'a-8-1',
          title: 'Reinforcement Learning Core',
          subtopics: [
            {
              id: 'a-sub-rl-core',
              title: 'MDPs & Policy Optimization',
              details: ['Formulating agents, environments, states, and reward systems', 'Deep Q-Networks (DQN) and experience replay mechanisms', 'Policy gradient methods like PPO and SAC', 'Training environments with Gymnasium'],
              resources: [{ title: 'Spinning Up in Deep RL (OpenAI)', url: 'https://spinningup.openai.com', type: 'doc' }],
              xp: 110
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-9',
      number: 9,
      title: 'Generative AI & Large Language Models',
      tagline: 'Master decoder architectures, LoRA fine-tuning, RAG systems, and agent workflows.',
      estimatedTime: '6–8 Weeks',
      xpReward: 1200,
      badgeId: 'badge-genai-titan',
      sections: [
        {
          id: 'a-9-1',
          title: 'Generative Models',
          subtopics: [
            {
              id: 'a-sub-llm-deep',
              title: 'Language Model Architecture & Alignment',
              details: ['Decoder-only architecture execution and KV caching mechanisms', 'Byte-Pair Encoding tokenization pipelines', 'Parameter-efficient fine-tuning with LoRA and QLoRA', 'Model alignment methods including RLHF and DPO'],
              resources: [
                { title: 'Andrej Karpathy: Neural Networks Zero to Hero', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ', type: 'video' },
                { title: 'HuggingFace Transformers Documentation', url: 'https://huggingface.co/docs/transformers', type: 'doc' }
              ],
              xp: 150
            },
            {
              id: 'a-sub-diffusion-agents',
              title: 'Diffusion Models & Agent Frameworks',
              details: ['Latent diffusion mechanisms in generative imaging models', 'RAG retrieval architectures with vector databases', 'Designing autonomous agent loops and tool integrations'],
              xp: 150
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-10',
      number: 10,
      title: 'MLOps & Deployment',
      tagline: 'Package models into web APIs, containerize applications, and monitor production serving.',
      estimatedTime: '4 Weeks',
      xpReward: 900,
      badgeId: 'badge-mlops-engineer',
      sections: [
        {
          id: 'a-10-1',
          title: 'Model Serving & Deployment',
          subtopics: [
            {
              id: 'a-sub-mlops-stack',
              title: 'Production Infrastructure',
              details: ['Creating performant inference endpoints using FastAPI', 'Containerizing applications with Docker', 'Tracking experiments with MLflow and Weights & Biases', 'Serving open models efficiently with vLLM'],
              resources: [{ title: 'Full Stack Deep Learning Course', url: 'https://fullstackdeeplearning.com', type: 'course' }],
              xp: 120
            }
          ]
        }
      ]
    },
    {
      id: 'a-phase-11',
      number: 11,
      title: 'Advanced AI Research',
      tagline: 'Explore interpretability techniques, safety evaluation, and paper implementation.',
      estimatedTime: 'Ongoing',
      xpReward: 1000,
      badgeId: 'badge-research-pioneer',
      sections: [
        {
          id: 'a-11-1',
          title: 'Research Frontiers',
          subtopics: [
            {
              id: 'a-sub-research-frontiers',
              title: 'Interpretability & AI Safety',
              details: ['Investigating internal neural representations and feature circuits', 'Evaluating model alignment and safety metrics', 'Reading and replicating arXiv research papers effectively'],
              resources: [
                { title: 'Distill.pub Visual Research Publication', url: 'https://distill.pub', type: 'interactive' },
                { title: 'Connected Papers Discovery Tool', url: 'https://www.connectedpapers.com', type: 'interactive' }
              ],
              xp: 150
            }
          ]
        }
      ]
    }
  ]
};
