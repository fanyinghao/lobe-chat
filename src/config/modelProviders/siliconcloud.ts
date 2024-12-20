import { ModelProviderCard } from '@/types/llm';

// ref :https://siliconflow.cn/zh-cn/pricing
const SiliconCloud: ModelProviderCard = {
  chatModels: [
    {
      description:
        'Hunyuan-Large 是业界最大的开源 Transformer 架构 MoE 模型，拥有 3890 亿总参数量和 520 亿激活参数量。',
      displayName: 'Hunyuan Large',
      enabled: true,
      id: 'Tencent/Hunyuan-A52B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 21,
        output: 21,
      },
      tokens: 32_768,
    },
    {
      description: 'DeepSeek V2.5 集合了先前版本的优秀特征，增强了通用和编码能力。',
      displayName: 'DeepSeek V2.5',
      enabled: true,
      functionCall: true,
      id: 'deepseek-ai/DeepSeek-V2.5',
      pricing: {
        currency: 'CNY',
        input: 1.33,
        output: 1.33,
      },
      tokens: 32_768,
    },
    {
      description: 'Qwen2.5 是全新的大型语言模型系列，旨在优化指令式任务的处理。',
      displayName: 'Qwen2.5 7B',
      enabled: true,
      functionCall: true,
      id: 'Qwen/Qwen2.5-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
      tokens: 32_768,
    },
    {
      description: 'Qwen2.5 是全新的大型语言模型系列，旨在优化指令式任务的处理。',
      displayName: 'Qwen2.5 14B',
      functionCall: true,
      id: 'Qwen/Qwen2.5-14B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0.7,
        output: 0.7,
      },
      tokens: 32_768,
    },
    {
      description: 'Qwen2.5 是全新的大型语言模型系列，旨在优化指令式任务的处理。',
      displayName: 'Qwen2.5 32B',
      functionCall: true,
      id: 'Qwen/Qwen2.5-32B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 1.26,
        output: 1.26,
      },
      tokens: 32_768,
    },
    {
      description: 'Qwen2.5 是全新的大型语言模型系列，具有更强的理解和生成能力。',
      displayName: 'Qwen2.5 72B',
      enabled: true,
      functionCall: true,
      id: 'Qwen/Qwen2.5-72B-Instruct-128K',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
      tokens: 131_072,
    },
    {
      description:
        'Qwen2-VL 是 Qwen-VL 模型的最新迭代版本，在视觉理解基准测试中达到了最先进的性能。',
      displayName: 'Qwen2 VL 7B',
      enabled: true,
      id: 'Pro/Qwen/Qwen2-VL-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0.35,
        output: 0.35,
      },
      tokens: 32_768,
      vision: true,
    },
    {
      description:
        'Qwen2-VL 是 Qwen-VL 模型的最新迭代版本，在视觉理解基准测试中达到了最先进的性能。',
      displayName: 'Qwen2 VL 72B',
      enabled: true,
      id: 'Qwen/Qwen2-VL-72B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
      tokens: 32_768,
      vision: true,
    },
    {
      description: 'Qwen2.5-Math 专注于数学领域的问题求解，为高难度题提供专业解答。',
      displayName: 'Qwen2.5 Math 72B',
      id: 'Qwen/Qwen2.5-Math-72B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
      tokens: 4096,
    },
    {
      description: 'Qwen2.5-Coder 专注于代码编写。',
      displayName: 'Qwen2.5 Coder 32B',
      id: 'Qwen/Qwen2.5-Coder-32B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 1.26,
        output: 1.26,
      },
      tokens: 32_768,
    },
    {
      description: 'InternLM2.5 提供多场景下的智能对话解决方案。',
      displayName: 'Internlm 2.5 7B',
      functionCall: true,
      id: 'internlm/internlm2_5-7b-chat',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
      tokens: 32_768,
    },
    {
      description: '创新的开源模型InternLM2.5，通过大规模的参数提高了对话智能。',
      displayName: 'Internlm 2.5 20B',
      functionCall: true,
      id: 'internlm/internlm2_5-20b-chat',
      pricing: {
        currency: 'CNY',
        input: 1,
        output: 1,
      },
      tokens: 32_768,
    },
    {
      description:
        'InternVL2在各种视觉语言任务上展现出了卓越的性能，包括文档和图表理解、场景文本理解、OCR、科学和数学问题解决等。',
      displayName: 'InternVL2 8B',
      id: 'Pro/OpenGVLab/InternVL2-8B',
      pricing: {
        currency: 'CNY',
        input: 0.35,
        output: 0.35,
      },
      tokens: 32_768,
      vision: true,
    },
    {
      description:
        'InternVL2在各种视觉语言任务上展现出了卓越的性能，包括文档和图表理解、场景文本理解、OCR、科学和数学问题解决等。',
      displayName: 'InternVL2 26B',
      id: 'OpenGVLab/InternVL2-26B',
      pricing: {
        currency: 'CNY',
        input: 1,
        output: 1,
      },
      tokens: 32_768,
      vision: true,
    },
    {
      description:
        'InternVL2在各种视觉语言任务上展现出了卓越的性能，包括文档和图表理解、场景文本理解、OCR、科学和数学问题解决等。',
      displayName: 'InternVL2 Llama3 76B',
      id: 'OpenGVLab/InternVL2-Llama3-76B',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
      tokens: 8192,
      vision: true,
    },
    {
      description: 'GLM-4 9B 开放源码版本，为会话应用提供优化后的对话体验。',
      displayName: 'GLM-4 9B',
      functionCall: true,
      id: 'THUDM/glm-4-9b-chat',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
      tokens: 32_768,
    },
    {
      description: 'Yi-1.5 9B 支持16K Tokens, 提供高效、流畅的语言生成能力。',
      displayName: 'Yi-1.5 9B',
      id: '01-ai/Yi-1.5-9B-Chat-16K',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
      tokens: 16_384,
    },
    {
      description: 'Yi-1.5 34B, 以丰富的训练样本在行业应用中提供优越表现。',
      displayName: 'Yi-1.5 34B',
      id: '01-ai/Yi-1.5-34B-Chat-16K',
      pricing: {
        currency: 'CNY',
        input: 1.26,
        output: 1.26,
      },
      tokens: 16_384,
    },
    {
      description: 'Gemma 2 是Google轻量化的开源文本模型系列。',
      displayName: 'Gemma 2 9B',
      enabled: true,
      id: 'google/gemma-2-9b-it',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
      tokens: 8192,
    },
    {
      description: 'Gemma 2 延续了轻量化与高效的设计理念。',
      displayName: 'Gemma 2 27B',
      enabled: true,
      id: 'google/gemma-2-27b-it',
      pricing: {
        currency: 'CNY',
        input: 1.26,
        output: 1.26,
      },
      tokens: 8192,
    },
    {
      description: 'LLaMA 3.1 提供多语言支持，是业界领先的生成模型之一。',
      displayName: 'Llama 3.1 8B',
      enabled: true,
      id: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
      tokens: 32_768,
    },
    {
      description: 'LLaMA 3.1 70B 提供多语言的高效对话支持。',
      displayName: 'Llama 3.1 70B',
      enabled: true,
      id: 'meta-llama/Meta-Llama-3.1-70B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
      tokens: 32_768,
    },
    {
      description: 'LLaMA 3.1 405B 指令微调模型针对多语言对话场景进行了优化。',
      displayName: 'Llama 3.1 405B',
      enabled: true,
      id: 'meta-llama/Meta-Llama-3.1-405B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 21,
        output: 21,
      },
      tokens: 32_768,
    },
    {
      description:
        'Llama 3.1 Nemotron 70B 是由 NVIDIA 定制的大型语言模型，旨在提高 LLM 生成的响应对用户查询的帮助程度。',
      displayName: 'Llama 3.1 Nemotron 70B',
      enabled: true,
      id: 'nvidia/Llama-3.1-Nemotron-70B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
      tokens: 32_768,
    },
  ],
  checkModel: 'Qwen/Qwen2.5-7B-Instruct',
  description: 'SiliconCloud，基于优秀开源基础模型的高性价比 GenAI 云服务',
  id: 'siliconcloud',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://siliconflow.cn/zh-cn/models',
  name: 'SiliconCloud',
  proxyUrl: {
    placeholder: 'https://api.siliconflow.cn/v1',
  },
  url: 'https://siliconflow.cn/zh-cn/siliconcloud',
};

export default SiliconCloud;
