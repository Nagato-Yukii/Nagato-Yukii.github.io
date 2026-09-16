export const site = {
  name: "Kaixuan Chen",
  handle: "nagato-yukii",
  description: "Robotics, reinforcement learning, and notes from the workbench.",
  role: "Robotics Engineering Student",
  location: "Shanghai, China",
  intro:
    "I am an undergraduate student interested in robotics, reinforcement learning, simulation, and the small details that make systems work in the real world.",
  note:
    "This site is a home for project notes, experiments, and ideas that are still taking shape.",
  interests: ["Robotics", "Reinforcement Learning", "Simulation"],
  avatar: "https://github.com/Nagato-Yukii.png?size=320",
  links: [
    {
      label: "github",
      display: "github.com/Nagato-Yukii",
      href: "https://github.com/Nagato-Yukii",
    },
    {
      label: "zhihu",
      display: "zhihu.com/people/68-26-21-58",
      href: "https://www.zhihu.com/people/68-26-21-58/posts",
    },
    {
      label: "email",
      display: "add your address",
      href: null,
    },
    {
      label: "bilibili",
      display: "add your bilibili profile",
      href: null,
    },
  ],
  projects: [
    {
      title: "Unity-RL-Playground-X2Ultra",
      description:
        "A full reinforcement-learning training and deployment pipeline for the X2Ultra robot.",
      href: "https://github.com/Nagato-Yukii/Unity-RL-Playground-X2Ultra",
      tags: ["Robot Learning", "Unity", "Deployment"],
    },
    {
      title: "X2ULTRA RL · Isaac Lab",
      description:
        "Training workflows for X2Ultra in Isaac Lab, adapted from the unitree reinforcement-learning ecosystem.",
      href: "https://github.com/Nagato-Yukii/X2ULTRA_RL_ISAACLAB",
      tags: ["Isaac Lab", "Reinforcement Learning"],
    },
    {
      title: "Agibot X2 · Hiking in the Wild",
      description:
        "An InstinctLab adaptation for Agibot X2 hiking, parkour, and whole-body control tasks.",
      href: "https://github.com/Nagato-Yukii/agibot_x2_hiking_in_the_wild",
      tags: ["Humanoid", "Simulation", "Parkour"],
    },
  ],
} as const;
