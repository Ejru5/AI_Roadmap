import type { RoadmapTrack } from '../types';

export const shortcutRoadmap: RoadmapTrack = {
  id: 'basic',
  title: 'AI Shortcut Roadmap',
  subtitle: 'Learn what actually matters today. The essential knowledge base to understand modern AI and large language models clearly and quickly.',
  estimatedTime: '3–5 Months',
  phases: [
    {
      id: 'b-phase-1',
      number: 1,
      title: 'Just Enough Math & Python',
      tagline: 'Skip complex academic theory. Focus on practical concepts needed to read papers and build tools.',
      estimatedTime: '2–3 Weeks',
      xpReward: 500,
      badgeId: 'badge-math-code',
      sections: [
        {
          id: 'b-1-1',
          title: 'Essential Mathematics',
          subtopics: [
            {
              id: 'b-sub-linalg',
              title: 'Linear Algebra Core',
              details: [
                'Vectors: definitions, dot products, and magnitude',
                'Matrices: multiplication, transpose, and inverses',
                'Tensors: multidimensional arrays as the primary data structure in modern AI',
                'Eigenvalues & Eigenvectors: applications in PCA and attention mechanisms',
                'Matrix decomposition: SVD techniques used in LoRA fine-tuning'
              ],
              resources: [
                { title: '3Blue1Brown: Essence of Linear Algebra', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', type: 'video' },
                { title: 'Mathematics for Machine Learning Textbook', url: 'https://mml-book.github.io/', type: 'book' }
              ],
              xp: 50
            },
            {
              id: 'b-sub-calculus',
              title: 'Calculus Fundamentals',
              details: [
                'Derivatives and rates of change',
                'Partial derivatives for multi-variable functions',
                'Chain rule as the backbone of backpropagation',
                'Gradients: understanding direction of steepest descent'
              ],
              resources: [
                { title: '3Blue1Brown: Essence of Calculus', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr', type: 'video' }
              ],
              xp: 50
            },
            {
              id: 'b-sub-prob',
              title: 'Probability & Statistics',
              details: [
                'Probability distributions: Gaussian, Bernoulli, and Softmax functions',
                'Bayes Theorem for conditional probability reasoning',
                'Entropy and Cross-Entropy loss in language models',
                'KL Divergence for measuring distribution shifts in RLHF',
                'Expected value, variance, and log probability spaces'
              ],
              resources: [
                { title: 'StatQuest: Statistics & ML Fundamentals', url: 'https://www.youtube.com/c/joshstarmer', type: 'video' }
              ],
              xp: 50
            }
          ]
        },
        {
          id: 'b-1-2',
          title: 'Python & Frameworks',
          subtopics: [
            {
              id: 'b-sub-py-core',
              title: 'Python Programming Essentials',
              details: ['Variables, control loops, custom functions, and classes', 'List comprehensions and lambda expressions', 'Handling files, JSON parsing, and dictionaries'],
              resources: [{ title: 'Python for Everybody (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=8DvywoWv6fI', type: 'video' }],
              xp: 40
            },
            {
              id: 'b-sub-numpy',
              title: 'NumPy for Fast Array Computing',
              details: ['Creating arrays with np.array, np.dot, and np.reshape', 'Broadcasting operations across different tensor shapes', 'Vectorized operations for rapid execution without explicit loops'],
              resources: [{ title: 'NumPy Full Tutorial (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=QUT1VHiLmmI', type: 'video' }],
              xp: 40
            },
            {
              id: 'b-sub-pytorch-basics',
              title: 'PyTorch Essentials',
              details: ['Manipulating torch.Tensor structures and data types', 'Tensor dimensions, shapes, and GPU device management', 'Matrix multiplication and activation functions in torch.nn', 'Autograd mechanisms using tensor.backward()', 'GPU memory transfers using tensor.to("cuda")'],
              resources: [
                { title: 'PyTorch for Deep Learning (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=V_xro1bcAuA', type: 'video' },
                { title: 'Official PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', type: 'doc' }
              ],
              xp: 60
            }
          ]
        }
      ]
    },
    {
      id: 'b-phase-2',
      number: 2,
      title: 'Core Machine Learning Concepts',
      tagline: 'Master the practical building blocks that language models build upon.',
      estimatedTime: '1 Week',
      xpReward: 400,
      badgeId: 'badge-ml-core',
      sections: [
        {
          id: 'b-2-1',
          title: 'Essential Machine Learning Concepts',
          subtopics: [
            {
              id: 'b-sub-ml-fundamentals',
              title: 'Supervised Learning & Loss Functions',
              details: ['Mapping inputs to outputs using labeled training data', 'Measuring errors with Mean Squared Error and Cross-Entropy loss', 'Managing bias and variance to prevent overfitting'],
              resources: [{ title: 'Andrew Ng: Machine Learning Specialization', url: 'https://www.coursera.org/specializations/machine-learning-introduction', type: 'course' }],
              xp: 50
            },
            {
              id: 'b-sub-grad-desc',
              title: 'Gradient Descent & Optimizers',
              details: ['Stochastic Gradient Descent and mini-batch processing', 'Adam Optimizer as the standard training algorithm for LLMs', 'Learning rate warmup schedules and decay strategies'],
              resources: [{ title: 'StatQuest: Gradient Descent Explained', url: 'https://www.youtube.com/watch?v=sDv4f4s2SB8', type: 'video' }],
              xp: 50
            },
            {
              id: 'b-sub-reg-norm',
              title: 'Regularization & Normalization',
              details: ['Applying Dropout and Weight Decay to stabilize models', 'Batch Normalization and Layer Normalization techniques', 'Creating vector embeddings from discrete tokens'],
              xp: 50
            }
          ]
        }
      ],
      skipNote: ['Complex decision trees, SVMs, or manual random forests', 'Unsupervised clustering methods like K-Means or DBSCAN', 'Deep mathematical proofs for PCA (conceptual understanding is sufficient)']
    },
    {
      id: 'b-phase-3',
      number: 3,
      title: 'Neural Networks Architecture',
      tagline: 'Understand feedforward networks, activations, and backpropagation deeply.',
      estimatedTime: '1–2 Weeks',
      xpReward: 600,
      badgeId: 'badge-neural-engine',
      sections: [
        {
          id: 'b-3-1',
          title: 'Feedforward Networks',
          subtopics: [
            {
              id: 'b-sub-nn-architecture',
              title: 'Layers, Weights & Activation Functions',
              details: ['Structuring network parameters across input, hidden, and output layers', 'Activation functions: ReLU, GELU, and Softmax probability distributions', 'Computing forward passes and backpropagating gradients with the chain rule', 'Updating model weights using calculated learning rates'],
              resources: [{ title: '3Blue1Brown: Neural Networks Series', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi', type: 'video' }],
              xp: 60
            },
            {
              id: 'b-sub-deep-concepts',
              title: 'Deep Learning Mechanics',
              details: ['Resolving vanishing and exploding gradient challenges', 'Residual skip connections to retain signal across deep architectures', 'Layer Normalization across feature dimensions', 'Weight initialization strategies including Xavier and He methods'],
              resources: [{ title: 'Andrej Karpathy: Neural Networks Zero to Hero', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ', type: 'video' }],
              xp: 70
            },
            {
              id: 'b-sub-embeddings',
              title: 'Vector Embeddings',
              details: ['Representing words as continuous dense vectors', 'Early embedding approaches such as Word2Vec and GloVe', 'Semantic relationships within vector embedding space'],
              resources: [{ title: 'Deep Learning Book by Goodfellow', url: 'https://www.deeplearningbook.org/', type: 'book' }],
              xp: 70
            }
          ]
        }
      ]
    },
    {
      id: 'b-phase-4',
      number: 4,
      title: 'The Transformer Architecture',
      tagline: 'Learn how self-attention and transformer blocks power modern generative models.',
      estimatedTime: '2–3 Weeks',
      xpReward: 800,
      badgeId: 'badge-transformer-master',
      sections: [
        {
          id: 'b-4-1',
          title: 'Transformer Mechanics',
          subtopics: [
            {
              id: 'b-sub-self-attention',
              title: 'Self-Attention & Query Key Value Mechanics',
              details: ['Query, Key, and Value projections in attention calculation', 'Scaled dot-product attention score formulas', 'Applying scaling factors to prevent mathematical saturation', 'Causal masking for sequential text generation'],
              resources: [
                { title: '3Blue1Brown: Attention in Transformers', url: 'https://www.youtube.com/watch?v=eMlx5fFNoYc', type: 'video' },
                { title: 'Jay Alammar: The Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/', type: 'interactive' }
              ],
              xp: 100
            },
            {
              id: 'b-sub-multihead',
              title: 'Multi-Head Attention & Positional Encoding',
              details: ['Executing multiple attention heads concurrently to capture distinct context relationships', 'Comparing sinusoidal, learned, RoPE, and ALiBi positional schemes'],
              resources: [{ title: 'Attention Is All You Need Research Paper', url: 'https://arxiv.org/abs/1706.03762', type: 'paper' }],
              xp: 100
            },
            {
              id: 'b-sub-ffn-block',
              title: 'Feed-Forward Networks & Modern Variants',
              details: ['Position-wise feed-forward networks acting as factual memory storage', 'Pre-normalization structures in state-of-the-art architectures', 'Memory efficient computational variants including Flash Attention and GQA'],
              resources: [{ title: 'Andrej Karpathy: Let us Build GPT from Scratch', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', type: 'video' }],
              xp: 100
            }
          ]
        }
      ]
    },
    {
      id: 'b-phase-5',
      number: 5,
      title: 'How LLMs Work',
      tagline: 'Deep dive into decoder-only models, context windows, and autoregressive generation.',
      estimatedTime: '2 Weeks',
      xpReward: 800,
      badgeId: 'badge-llm-architect',
      sections: [
        {
          id: 'b-5-1',
          title: 'Language Model Execution',
          subtopics: [
            {
              id: 'b-sub-next-token',
              title: 'Next-Token Prediction & Autoregression',
              details: ['Causal language modeling objective to predict probable next tokens', 'Sequential generation loops running until end-of-sequence markers', 'Transforming network outputs into actionable sampling distributions'],
              resources: [{ title: 'Andrej Karpathy: Intro to Large Language Models', url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g', type: 'video' }],
              xp: 80
            },
            {
              id: 'b-sub-kv-cache',
              title: 'KV Caching & Context Length',
              details: ['Caching key and value tensors to accelerate real-time token generation', 'Managing context window boundaries and memory consumption', 'In-context adaptation using zero-shot and few-shot prompts'],
              resources: [{ title: 'Jay Alammar: The Illustrated GPT-2', url: 'https://jalammar.github.io/illustrated-gpt2/', type: 'interactive' }],
              xp: 90
            },
            {
              id: 'b-sub-llm-families',
              title: 'Modern Model Families',
              details: ['Closed source models including GPT-4o, Claude Sonnet, and Gemini', 'Open weights ecosystem including LLaMA, Mistral, Qwen, and DeepSeek'],
              xp: 70
            }
          ]
        }
      ]
    },
    {
      id: 'b-phase-6',
      number: 6,
      title: 'Tokenization Techniques',
      tagline: 'Explore how raw text strings are converted into numerical token sequences.',
      estimatedTime: '1 Week',
      xpReward: 500,
      badgeId: 'badge-token-master',
      sections: [
        {
          id: 'b-6-1',
          title: 'Tokenization Algorithms',
          subtopics: [
            {
              id: 'b-sub-bpe',
              title: 'Byte-Pair Encoding (BPE)',
              details: ['Iteratively merging common character pairs into vocabulary tokens', 'Comparing vocabulary sizes across models like GPT-4 and LLaMA', 'Alternative algorithms including WordPiece and SentencePiece'],
              resources: [{ title: 'Andrej Karpathy: Building a GPT Tokenizer', url: 'https://www.youtube.com/watch?v=zduSFxRajkE', type: 'video' }],
              xp: 70
            },
            {
              id: 'b-sub-special-tokens',
              title: 'Special Tokens & Processing Quirks',
              details: ['Control tokens for sequence boundaries and instruction formatting', 'Why tokenization causes models to struggle with exact arithmetic', 'Whitespace variations and non-English text efficiency'],
              resources: [{ title: 'Tiktokenizer Interactive Visualizer', url: 'https://tiktokenizer.vercel.app/', type: 'interactive' }],
              xp: 70
            }
          ]
        }
      ]
    },
    {
      id: 'b-phase-7',
      number: 7,
      title: 'Generation Parameters & Quantization',
      tagline: 'Control runtime text generation and optimize memory usage with quantization.',
      estimatedTime: '1 Week',
      xpReward: 500,
      badgeId: 'badge-knob-tuner',
      sections: [
        {
          id: 'b-7-1',
          title: 'Generation Controls',
          subtopics: [
            {
              id: 'b-sub-gen-params',
              title: 'Sampling Parameters',
              details: ['Temperature adjustments to tune output randomness', 'Top-p nucleus and Top-k sampling limits', 'Frequency and presence penalties to discourage repetitive phrases', 'Setting stop sequences and evaluating beam search'],
              resources: [{ title: 'OpenAI API Generation Reference', url: 'https://platform.openai.com/docs/api-reference/chat', type: 'doc' }],
              xp: 80
            },
            {
              id: 'b-sub-quantization',
              title: 'Precision Formats & Quantization',
              details: ['Floating point representations: FP32, FP16, and BF16 formats', '8-bit and 4-bit quantization methods including GPTQ and AWQ', 'Calculating memory requirements for local execution'],
              xp: 80
            }
          ]
        }
      ]
    },
    {
      id: 'b-phase-8',
      number: 8,
      title: 'Training, Fine-Tuning & Alignment',
      tagline: 'Learn how base models are trained, aligned, and fine-tuned for practical applications.',
      estimatedTime: '2 Weeks',
      xpReward: 750,
      badgeId: 'badge-alignment-wizard',
      sections: [
        {
          id: 'b-8-1',
          title: 'Training & Fine-Tuning',
          subtopics: [
            {
              id: 'b-sub-pretrain-sft',
              title: 'Pre-Training & Instruction Tuning',
              details: ['Processing large web datasets for foundation models', 'Chinchilla scaling laws for compute efficiency', 'Supervised fine-tuning using instruction and response pairs'],
              resources: [{ title: 'Andrej Karpathy: State of GPT Overview', url: 'https://www.youtube.com/watch?v=bZQun8Y4L2A', type: 'video' }],
              xp: 90
            },
            {
              id: 'b-sub-rlhf-dpo',
              title: 'Model Alignment Techniques',
              details: ['Reinforcement Learning from Human Feedback (RLHF) workflows', 'Direct Preference Optimization (DPO) without separate reward models', 'Safety guidelines and output refusal training'],
              resources: [{ title: 'DPO Algorithm Explanation', url: 'https://www.youtube.com/watch?v=hvGa5Mba4c8', type: 'video' }],
              xp: 90
            },
            {
              id: 'b-sub-lora',
              title: 'Efficient Fine-Tuning with LoRA',
              details: ['Training trainable low-rank matrices while freezing base model weights', 'Configuring rank values and scaling hyperparameters', 'QLoRA techniques for fine-tuning large models on consumer hardware'],
              resources: [{ title: 'LoRA Research Paper', url: 'https://arxiv.org/abs/2106.09685', type: 'paper' }],
              xp: 100
            }
          ]
        }
      ]
    },
    {
      id: 'b-phase-9',
      number: 9,
      title: 'Practical AI & Building Applications',
      tagline: 'Construct retrieval systems, tool integrations, and custom autonomous workflows.',
      estimatedTime: '2 Weeks',
      xpReward: 900,
      badgeId: 'badge-ai-builder',
      sections: [
        {
          id: 'b-9-1',
          title: 'Application Development',
          subtopics: [
            {
              id: 'b-sub-prompt-eng',
              title: 'Advanced Prompting Techniques',
              details: ['Structuring zero-shot, few-shot, and Chain-of-Thought prompts', 'Self-consistency and tree-based reasoning strategies', 'Implementing ReAct reasoning loops in applications'],
              resources: [{ title: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai/', type: 'doc' }],
              xp: 80
            },
            {
              id: 'b-sub-rag',
              title: 'Retrieval-Augmented Generation (RAG)',
              details: ['Chunking strategies and text embedding models', 'Storing and querying vectors in databases like Chroma and Pinecone', 'Similarity search algorithms for context retrieval'],
              resources: [{ title: 'LangChain RAG Tutorial Series', url: 'https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x', type: 'video' }],
              xp: 100
            },
            {
              id: 'b-sub-agents-tools',
              title: 'AI Agents & Tool Integration',
              details: ['Function calling for structured API interactions', 'Model Context Protocol standards for connecting tools', 'Building with agent frameworks and local runtimes like Ollama'],
              resources: [{ title: 'Ollama Open WebUI Documentation', url: 'https://github.com/open-webui/open-webui', type: 'doc' }],
              xp: 100
            }
          ]
        }
      ]
    }
  ]
};
