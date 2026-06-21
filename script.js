const pages = [...document.querySelectorAll(".page")];
const pageButtons = [...document.querySelectorAll("[data-page-target]")];
const navButtons = [...document.querySelectorAll(".nav-link")];
const mapNodes = [...document.querySelectorAll(".map-node")];
const internCards = [...document.querySelectorAll(".intern-card")];
const timelineItems = [...document.querySelectorAll("[data-timeline]")];
const detailTriggers = [...document.querySelectorAll("[data-detail]")];
const profileBadge = document.querySelector(".profile-badge");
const detailModal = document.querySelector("#detail-modal");
const detailPanel = detailModal?.querySelector(".detail-panel");
const detailMedia = detailModal?.querySelector("[data-detail-media]");
const detailImage = detailMedia?.querySelector("img");
const detailVideo = detailMedia?.querySelector("video");
const detailPlay = detailModal?.querySelector(".detail-play");
const detailKicker = detailModal?.querySelector("[data-detail-kicker]");
const detailTitle = detailModal?.querySelector("#detail-title");
const detailSubtitle = detailModal?.querySelector("[data-detail-subtitle]");
const detailFacts = detailModal?.querySelector("[data-detail-facts]");
const detailSections = detailModal?.querySelector("[data-detail-sections]");
const detailTags = detailModal?.querySelector("[data-detail-tags]");

const DETAILS = {
  "intern-hinovel": {
    layout: "text",
    kicker: "实习地图 / 04",
    title: "安悦科技｜AI 长篇小说生成 Agent",
    subtitle: "面向 Hinovel 海外网文平台，搭建多 Agent 长篇小说生成流程，让 AI 内容从“能生成”走向“可评审、可迭代、可付费”。",
    media: "assets/img/intern-hinovel.webp",
    facts: ["时间：2026.04 — 至今", "类型：AI Agent / RAG / Prompt 工程", "角色：端到端产品负责"],
    sections: [
      ["项目概述", "这个项目不是简单让大模型写小说，而是把“长篇小说生产”拆成一个可控的 AI 产品系统，解决长篇生成中的上下文丢失、人物不一致、世界观漂移和质量不可评估等问题。"],
      ["核心流程 / 核心功能", ["Planner：生成结构化写作计划", "Writer：结合章节任务、人设与世界观生成正文", "Reviewer：检查人设偏移、剧情断裂与上下文矛盾", "Memory Manager：记录人物关系、关键事件与伏笔信息"]],
      ["我的职责", ["拆解长篇小说生成任务，明确输入、输出与边界", "设计 Planner / Writer / Reviewer / Memory Manager 协作链路", "搭建故事圣经—章节生成—自动评审—记忆更新闭环"]],
      ["项目成果 / 收获", ["完成多部 10 万词级长篇小说全流程产出", "单本约 16 万词 / 100 章，覆盖多类海外网文题材", "作品上架后获得首批付费读者，达成转化指标", "沉淀可复用 Prompt 规则、评审标准与生成流程"]]
    ],
    tags: ["AI Agent", "RAG", "Prompt Engineering", "多 Agent 工作流", "Hinovel", "长篇小说生成"]
  },
  "intern-bluefocus": {
    layout: "text",
    kicker: "实习地图 / 03",
    title: "蓝标集团｜AIGC 爆款 Hook Prompt 模板库",
    subtitle: "围绕电商广告前 3—5 秒 Hook，搭建可复用的 Prompt 模板库，为“一键生成广告”产品提供标签体系与生成逻辑。",
    media: "assets/img/intern-bluefocus.webp",
    facts: ["时间：2025.11 — 2026.03", "岗位：AIGC 产品实习生", "类型：AIGC / 广告生成 / Prompt 模板库", "角色：Hook 标签体系与页面结构设计"],
    sections: [
      ["项目概述", "把电商短视频广告里的爆款经验拆成 AI 可以理解和调用的结构，形成可规模化复用的 Hook Prompt 模板库。"],
      ["我负责什么", ["分析 TikTok Ads 高表现广告案例", "整理爆款 Hook 标签体系", "调研 Creatify Inspiration 模块", "梳理 Vidu、Keling、Veo、Sora 等模型的差异化 Prompt 规则"]],
      ["核心流程 / 功能", ["爆款案例拆解", "Hook 标签体系搭建", "竞品交互分析", "模型差异化适配", "模板库沉淀"]],
      ["项目成果 / 收获", ["交付 50+ 条爆款 Hook Prompt 模板", "缩短创意构思到视频产出周期", "为后续一键生成广告产品提供方向参考"]]
    ],
    tags: ["AIGC", "Prompt 模板库", "TikTok Ads", "Creatify", "广告生成"]
  },
  "intern-autohome": {
    layout: "text",
    kicker: "实习地图 / 02",
    title: "汽车之家｜直播弹幕问答 Query 体系设计",
    subtitle: "面向汽车直播间弹幕问答场景，搭建 Query 分类标签体系与标注规范，提升 AI 问答命中率和用户停留时长。",
    media: "assets/img/intern-autohome.webp",
    facts: ["时间：2025.08 — 2025.09", "岗位：AI 产品实习生", "类型：智能问答 / Query 分类 / 数据标注", "角色：标签体系、标注规范与回答策略"],
    sections: [
      ["项目概述", "先搭建 Query 分类体系，让 AI 判断用户到底在问什么，再匹配有效回答策略。"],
      ["我负责什么", ["清洗 3000—5000 条直播弹幕", "搭建 Query 分类标签体系", "制定标注规范", "梳理不同标签组合下的回答要点"]],
      ["核心流程 / 功能", ["数据清洗", "购车决策、车型咨询、多车对比等分类", "配置、价格、续航、充电等二级标签", "复杂问题拆解与回答策略设计"]],
      ["项目成果 / 收获", ["AI 问答命中率提升 12.6%", "用户停留时长提升 18.2%", "理解智能问答产品从意图识别开始"]]
    ],
    tags: ["Query 分类", "数据标注", "Prompt 策略", "智能问答", "用户意图识别"]
  },
  "intern-ctrip": {
    layout: "text",
    kicker: "实习地图 / 01",
    title: "携程集团｜小红书 UGC 线路数据结构化",
    subtitle: "将小红书旅行笔记中的非结构化内容转化为可召回、可推荐、可展示的结构化线路资产。",
    media: "assets/img/intern-ctrip.webp",
    facts: ["时间：2025.05 — 2025.08", "岗位：AI 产品运营实习生", "类型：内容结构化 / UGC 数据治理", "角色：字段抽取、Bad Case 分析与规则优化"],
    sections: [
      ["项目概述", "把小红书旅行笔记转化成结构化线路资产，提取出发地、目的地、路线顺序、打卡标签、交通住宿等字段。"],
      ["我负责什么", ["使用 Coze 对 8000+ 篇笔记进行筛选", "设计 Prompt 判断文章是否包含真实线路信息", "对 2000+ 篇文章做结构化字段提取", "抽样 Bad Case 定位模型错误并优化规则"]],
      ["核心流程 / 功能", ["内容筛选", "线路字段抽取", "Bad Case 分析", "Prompt 规则优化", "数据产品化"]],
      ["项目成果 / 收获", ["筛选出 2000+ 篇具有线路价值的内容", "字段抽取准确率提升至 85%", "召回覆盖率提升 200%", "攻略页 CTR 提升 27.3%"]]
    ],
    tags: ["UGC 结构化", "Prompt 筛选", "Coze", "旅行线路", "数据治理"]
  },
  "project-ad": {
    kicker: "项目经历 / 01",
    title: "一键生成广告 Agent",
    subtitle: "面向抖音竖版广告的 AI Agent 自动生成系统，从爆款分析、脚本生成、素材编排到视频导出，打通广告短视频生产的端到端流程。",
    media: "assets/img/detail-project-ad.webp",
    video: "assets/video/project-ad-demo.mp4",
    poster: "assets/img/project-ad-video-poster.jpg",
    playable: true,
    facts: ["时间：2026.03 — 2026.04", "类型：AI Agent / AIGC / 视频生成 / Web Demo", "角色：产品设计与流程搭建"],
    sections: [
      ["项目背景", "短视频广告生产依赖人工选题、脚本撰写、素材剪辑和反复修改，流程长、成本高、复用率低。"],
      ["核心功能", ["爆款分析 Agent：分析标题模式、镜头节奏、卖点结构和风险提醒", "脚本生成 Agent：输出 15s / 30s / 45s 多版本脚本", "自动剪辑 Agent：按脚本时间线拼装素材、字幕、转场和导出参数"]],
      ["我的职责", ["拆解广告生产模块", "定义各 Agent 输入、输出和协作方式", "负责 PRD、页面流程、Prompt 结构、Demo 验证与效果优化"]],
      ["项目结果 / 收获", ["跑通关键词输入到竖版广告视频生成链路", "支持素材上传、字幕生成、镜头拼接和 1080×1920 导出", "完整经历 AI Agent 产品从 0 到 1"]]
    ],
    tags: ["AI Agent", "AIGC", "视频生成", "FastAPI", "FFmpeg", "Prompt Engineering"]
  },
  "project-music": {
    kicker: "项目经历 / 02",
    title: "音乐教师教案生成 Agent",
    subtitle: "面向音乐教师备课场景的 AI 教案生成工具，帮助教师快速生成结构完整、可直接修改使用的课堂教案。",
    media: "assets/img/detail-project-music.webp",
    video: "assets/video/project-music-demo.mp4",
    poster: "assets/img/project-music-video-poster.jpg",
    playable: true,
    facts: ["类型：AI Agent / 教育科技 / Prompt 工作流", "角色：需求分析、Prompt 结构设计、内容生成流程设计"],
    sections: [
      ["项目背景", "音乐教师备课需要反复处理教学目标、课堂互动、教学流程和教学反思等固定模块。"],
      ["核心功能", ["教学场景需求分析", "教案内容生成", "Prompt 流程设计", "根据反馈持续优化结构"]],
      ["我的职责", ["梳理音乐教师备课高频痛点", "设计教案生成 Prompt 结构", "优化内容逻辑，让输出更适合二次编辑"]],
      ["项目亮点 / 收获", ["把教案拆成标准化模块", "贴近教师真实工作流", "理解垂直场景 AI 产品的价值来自工作流自动化"]]
    ],
    tags: ["AI Agent", "教育科技", "Prompt 设计", "内容生成", "工作流优化"]
  },
  "project-cashflow": {
    kicker: "项目经历 / 03",
    title: "企业现金流与商业模式分析 Agent",
    subtitle: "面向企业财务分析与投资研究场景的 AI 分析 Agent，帮助用户结构化理解企业现金流、商业模式和经营风险。",
    media: "assets/img/detail-project-cashflow.webp",
    video: "assets/video/project-cashflow-demo.mp4",
    poster: "assets/img/project-cashflow-video-poster.jpg",
    playable: true,
    facts: ["类型：AI Agent / 财务分析 / 投研辅助", "角色：工作流设计、分析逻辑拆解、结构化输出设计"],
    sections: [
      ["项目背景", "企业研究需要同时理解现金流、商业模式、风险指标和经营趋势，传统分析依赖大量人工阅读和整理。"],
      ["核心功能", ["现金流分析", "商业模式分析", "风险指标判断", "趋势判断输出"]],
      ["我的职责", ["设计企业分析 Workflow", "拆解现金流、商业模式、风险判断和趋势总结模块", "设计结构化输出格式"]],
      ["项目结果 / 收获", ["帮助用户更快完成信息整理和逻辑拆解", "提升对经营数据、现金流结构和商业模式的理解"]]
    ],
    tags: ["AI Agent", "财务分析", "商业模式", "投研辅助", "结构化分析"]
  },
  "venture-sams": {
    layout: "text",
    kicker: "轻创业经历 / 01",
    title: "大学场景下的零售闭环尝试｜山姆分装线下零售项目",
    subtitle: "围绕学生“小份量、高性价比、宿舍即时消费”的需求，将山姆大包装商品拆解为适合校园场景的小份零售产品。",
    media: "assets/img/detail-venture-sams.webp",
    facts: ["时间：2024.05 — 2024.06", "角色：项目负责人", "类型：轻创业 / 校园零售 / 线下运营"],
    sections: [
      ["项目概述", "山姆大包装商品单价划算，但对学生来说量太大、吃不完、一次性支出高、不方便储存。"],
      ["我负责什么", ["确定适合分装销售的商品类型", "设计可视化分装销售方式", "负责采购、分装、定价、订单统计、宿舍配送和售后", "建立用户评价反馈和复购清单"]],
      ["核心动作", ["需求洞察", "商品分装", "宿舍外卖配送", "反馈复盘"]],
      ["项目成果 / 收获", ["单周收入 500+，累计收入 5000+", "验证校园分装零售模式可行性", "建立小规模供需管理和服务体验闭环意识"]]
    ],
    tags: ["校园零售", "需求洞察", "线下运营", "商品分装", "用户反馈"]
  },
  "venture-balloon": {
    layout: "text",
    kicker: "轻创业经历 / 02",
    title: "节点营销与氛围感打造｜跨年气球零售项目",
    subtitle: "围绕跨年夜仪式感和拍照分享需求，设计“气球 + 拍照 + 社交种草”的线下快闪零售项目。",
    media: "assets/img/detail-venture-balloon.webp",
    facts: ["时间：2024.12 — 2025.01", "角色：项目负责人", "类型：轻创业 / 节点营销 / 快闪零售"],
    sections: [
      ["项目概述", "跨年夜具有强烈仪式感、拍照需求和社交传播属性，气球可以被包装成情绪消费品。"],
      ["我负责什么", ["判断跨年节点消费需求", "策划 CCD 相机 + 定制气球 + 社交种草套装玩法", "负责现场销售、用户互动、氛围布置和活动执行"]],
      ["核心动作", ["节点洞察", "产品包装", "现场转化", "内容传播"]],
      ["项目成果 / 收获", ["活动当晚销售额 1500+ 元", "验证节日场景 + 情绪消费 + 内容传播打法", "形成活动策划、现场执行、素材沉淀到线下分发的链路认知"]]
    ],
    tags: ["节点营销", "快闪零售", "活动策划", "情绪价值", "内容种草"]
  }
};

const playHomeBadgeDrop = () => {
  if (!profileBadge) return;
  profileBadge.classList.remove("is-dropping");
  void profileBadge.offsetWidth;
  profileBadge.classList.add("is-dropping");
};

profileBadge?.addEventListener("animationend", (event) => {
  if (event.animationName === "badge-drop") {
    profileBadge.classList.remove("is-dropping");
  }
});


const setActivePage = (pageId) => {
  pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === pageId);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.pageTarget === pageId);
  });

  document.body.dataset.page = pageId;

  if (pageId === "home") playHomeBadgeDrop();
};

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActivePage(button.dataset.pageTarget);
  });
});

const showInternCard = (id) => {
  internCards.forEach((card) => {
    card.classList.toggle("visible", card.dataset.card === id);
  });

  timelineItems.forEach((item) => {
    item.classList.toggle("is-current", item.dataset.timeline === id);
  });
};

const hideInternCards = () => {
  internCards.forEach((card) => card.classList.remove("visible"));
  timelineItems.forEach((item) => item.classList.remove("is-current"));
};

mapNodes.forEach((node) => {
  node.addEventListener("mouseenter", () => showInternCard(node.dataset.intern));
  node.addEventListener("focus", () => showInternCard(node.dataset.intern));
  node.addEventListener("mouseleave", hideInternCards);
  node.addEventListener("blur", hideInternCards);
});

const clearElement = (element) => {
  while (element?.firstChild) element.removeChild(element.firstChild);
};

const addPill = (parent, text) => {
  const span = document.createElement("span");
  span.textContent = text;
  parent.appendChild(span);
};

const renderSectionBody = (section, body) => {
  if (Array.isArray(body)) {
    const list = document.createElement("ul");
    body.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    section.appendChild(list);
    return;
  }

  const paragraph = document.createElement("p");
  paragraph.textContent = body;
  section.appendChild(paragraph);
};

const openDetail = (id) => {
  const detail = DETAILS[id];
  if (!detail || !detailModal) return;

  detailKicker.textContent = detail.kicker;
  detailTitle.textContent = detail.title;
  detailSubtitle.textContent = detail.subtitle;
  const shouldLoadDetailImage = !detail.video && detail.layout !== "text";
  if (shouldLoadDetailImage) {
    detailImage.src = detail.media;
    detailImage.alt = detail.title;
  } else {
    detailImage.removeAttribute("src");
    detailImage.alt = "";
  }
  detailImage.hidden = !shouldLoadDetailImage;
  detailMedia.style.removeProperty("--video-ratio");
  if (detailVideo) {
    detailVideo.pause();
    detailVideo.controls = false;
    detailVideo.hidden = !detail.video;
    if (detail.video) {
      detailVideo.dataset.src = detail.video;
      detailVideo.removeAttribute("src");
      if (detail.poster) {
        detailVideo.poster = detail.poster;
      } else {
        detailVideo.removeAttribute("poster");
      }
      detailVideo.load();
    } else {
      delete detailVideo.dataset.src;
      detailVideo.removeAttribute("src");
      detailVideo.removeAttribute("poster");
      detailVideo.load();
    }
  }
  detailMedia.classList.toggle("is-compact", Boolean(detail.compactMedia));
  detailMedia.classList.toggle("has-video", Boolean(detail.video));
  detailMedia.classList.remove("is-playing");
  detailPanel.classList.toggle("is-text-only", detail.layout === "text");
  detailPanel.classList.toggle("is-reference-only", detail.layout === "reference");
  detailPanel.classList.toggle("is-video-detail", Boolean(detail.video));
  detailPlay.textContent = "▶";
  detailPlay.hidden = (!detail.video && !detail.playable) || detail.layout === "text" || detail.layout === "reference";

  clearElement(detailFacts);
  detail.facts.forEach((fact) => addPill(detailFacts, fact));

  clearElement(detailSections);
  detail.sections.forEach(([heading, body]) => {
    const section = document.createElement("section");
    section.className = "detail-section";
    const h3 = document.createElement("h3");
    h3.textContent = heading;
    section.appendChild(h3);
    renderSectionBody(section, body);
    detailSections.appendChild(section);
  });

  clearElement(detailTags);
  detail.tags.forEach((tag) => addPill(detailTags, tag));

  detailModal.hidden = false;
  document.body.classList.add("detail-open");
  detailPanel.scrollTop = 0;
};

const closeDetail = () => {
  if (!detailModal) return;
  detailModal.hidden = true;
  document.body.classList.remove("detail-open");
  if (detailVideo) {
    detailVideo.pause();
    detailVideo.controls = false;
    detailVideo.removeAttribute("src");
    delete detailVideo.dataset.src;
    detailVideo.load();
  }
  detailImage?.removeAttribute("src");
  detailMedia?.classList.remove("is-playing");
};

detailTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openDetail(trigger.dataset.detail));
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetail(trigger.dataset.detail);
    }
  });
});

detailModal?.querySelectorAll("[data-detail-close]").forEach((button) => {
  button.addEventListener("click", closeDetail);
});

detailPlay?.addEventListener("click", () => {
  if (detailVideo && !detailVideo.hidden) {
    const source = detailVideo.dataset.src;
    if (source && detailVideo.getAttribute("src") !== source) {
      detailVideo.src = source;
      detailVideo.load();
    }
    detailVideo.controls = true;
    const playPromise = detailVideo.play();
    detailMedia.classList.add("is-playing");
    detailPlay.hidden = true;

    if (playPromise) {
      playPromise.catch(() => {
        detailMedia.classList.remove("is-playing");
        detailPlay.hidden = false;
        detailVideo.controls = false;
      });
    }
    return;
  }

  detailMedia.classList.toggle("is-playing");
  detailPlay.textContent = detailMedia.classList.contains("is-playing") ? "播放中" : "▶";
});

detailVideo?.addEventListener("loadedmetadata", () => {
  if (detailVideo.videoWidth && detailVideo.videoHeight) {
    detailMedia.style.setProperty("--video-ratio", `${detailVideo.videoWidth} / ${detailVideo.videoHeight}`);
  }
});

detailVideo?.addEventListener("ended", () => {
  detailMedia.classList.remove("is-playing");
  detailPlay.hidden = false;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !detailModal?.hidden) closeDetail();
});

const initialPage = new URLSearchParams(location.search).get("page");
const initialDetail = new URLSearchParams(location.search).get("detail");
const initialIntern = new URLSearchParams(location.search).get("intern");

if (initialPage && pages.some((page) => page.dataset.page === initialPage)) {
  setActivePage(initialPage);
}

if (initialDetail) {
  openDetail(initialDetail);
}

if (initialIntern) {
  showInternCard(initialIntern);
}
