export const site = {
  name: "Kaixuan Chen",
  handle: "nagato-yukii",
  description: "Robotics, reinforcement learning, and notes from the workbench.",
  tagline: "Undergraduate · Robot Engineering, Shanghai University",
  note:
    "This site is a home for project notes, experiments, and ideas that are still taking shape.",
  avatar: "https://github.com/Nagato-Yukii.png?size=320",
  links: [
    {
      label: "GitHub",
      icon: "github",
      display: "github.com/Nagato-Yukii",
      href: "https://github.com/Nagato-Yukii",
    },
    {
      label: "Zhihu",
      icon: "zhihu",
      display: "zhihu.com/people/68-26-21-58",
      href: "https://www.zhihu.com/people/68-26-21-58/posts",
    },
    {
      label: "Email",
      icon: "google",
      display: "onjifang@gmail.com",
      href: "mailto:onjifang@gmail.com",
    },
    {
      label: "Bilibili",
      icon: "bilibili",
      display: "space.bilibili.com/512933916",
      href: "https://space.bilibili.com/512933916",
    },
  ],
  projects: [
    {
      title: "Unity-RL-Playground-X2Ultra",
      description:
        "A full reinforcement-learning training and deployment pipeline for the X2Ultra robot.",
      href: "https://github.com/Nagato-Yukii/Unity-RL-Playground-X2Ultra",
      image: "/project-unity-x2.png",
      tags: ["Robot Learning", "Unity", "Deployment"],
    },
    {
      title: "X2ULTRA RL · Isaac Lab",
      description:
        "Training workflows for X2Ultra in Isaac Lab, adapted from the unitree reinforcement-learning ecosystem.",
      href: "https://github.com/Nagato-Yukii/X2ULTRA_RL_ISAACLAB",
      image: "/project-isaac-x2.png",
      tags: ["Isaac Lab", "Reinforcement Learning"],
    },
    {
      title: "Agibot X2 · Hiking in the Wild",
      description:
        "An InstinctLab adaptation for Agibot X2 hiking, parkour, and whole-body control tasks.",
      href: "https://github.com/Nagato-Yukii/agibot_x2_hiking_in_the_wild",
      image: "/project-hiking-x2.png",
      tags: ["Humanoid", "Simulation", "Parkour"],
    },
  ],
  publications: [
    {
      title:
        "Learning Whole-body Motion Control through Instruction Learning and Human Motion Data",
      authors: "Zhipeng Xu, Kaixuan Chen, Linqi Ye, Boyang Xing",
      venue: "ICIRA 2025",
      pdf: "https://linqi-ye.github.io/docs/WBC_Instrucition.pdf",
      code: null,
      image: "/publication-wbc.png",
      imageAlt: "Humanoid whole-body motions demonstrated in simulation",
    },
    {
      title:
        "Web-Gewu: A Browser-Based Interactive Playground for Robot Reinforcement Learning",
      authors: "Kaixuan Chen, Linqi Ye",
      venue: "SMC 2026",
      pdf: "https://linqi-ye.github.io/docs/web-gewu.pdf",
      code: "https://github.com/Nagato-Yukii/WebGewu",
      image: "/publication-web-gewu.png",
      imageAlt: "Web-Gewu browser-based robot reinforcement learning playground",
    },
  ],
  games: [
    {
      title: "我们的回忆",
      image: "/game-our-memories.png",
      finished: "2016",
    },
    {
      title: "素晴らしき日々 〜不連続存在〜（Wonderful Everyday）",
      image: "/game-subahibi-poster.png",
      finished: "2026.2",
    },
    {
      title: "Saya no Uta: The Song of Saya",
      image: "/game-saya-no-uta.png",
      finished: "2026.3",
    },
    {
      title: "架向星空之桥",
      image: "/game-hoshizora-no-hashi.png",
      finished: "2020.6",
    },
  ],
} as const;
