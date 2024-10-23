import { prisma } from 'prisma/seed/utils';

const products = [
  // WPS 系列
  {
    name: 'WPS零售行业财务管理系统',
    desc: '专为零售行业设计的财务管理工具，简化报表生成和审计。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'WPS制造业库存跟踪系统',
    desc: '帮助制造业企业实时追踪库存，提高效率。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'WPS教育行业在线学习管理平台',
    desc: '为教育机构提供便捷的在线学习管理解决方案。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'WPS房地产销售分析系统',
    desc: '提供房地产销售的深度分析，优化销售策略。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'WPS医疗行业患者数据管理系统',
    desc: '提升医疗机构的数据管理能力，确保数据安全。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'WPS物流行业订单管理系统',
    desc: '优化物流行业的订单处理和跟踪流程。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'WPS旅游行业客户反馈管理平台',
    desc: '便于旅游公司收集并分析客户反馈。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'WPS餐饮行业供应链管理系统',
    desc: '帮助餐饮企业高效管理供应链。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'WPS电子商务行业结算系统',
    desc: '简化电商平台的结算流程，确保交易安全。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'WPS能源行业设备维护管理系统',
    desc: '为能源企业提供设备维护和管理的全面解决方案。',
    link: 'https://excel520.taobao.com',
  },

  // Excel 系列
  {
    name: 'Excel零售行业销售追踪系统',
    desc: '用于零售行业的销售数据追踪和分析。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'Excel制造业生产计划管理系统',
    desc: '帮助制造企业优化生产计划流程。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'Excel教育行业考试成绩分析平台',
    desc: '自动分析和生成学生考试成绩报告。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'Excel房地产资产管理系统',
    desc: '提供房地产资产管理的可视化工具。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'Excel医疗行业患者记录系统',
    desc: '用于医疗行业的患者记录数据管理。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'Excel物流行业运输调度系统',
    desc: '协助物流行业优化运输调度。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'Excel旅游行业线路管理系统',
    desc: '帮助旅游公司管理旅游线路和安排。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'Excel餐饮行业营收分析系统',
    desc: '提供餐饮行业营收数据的深度分析。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'Excel电子商务库存管理平台',
    desc: '用于电商行业的库存管理。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'Excel能源行业设备运行监控系统',
    desc: '为能源行业提供设备运行状态监控。',
    link: 'https://excel520.taobao.com',
  },

  // 影刀 系列
  {
    name: '影刀零售行业库存自动化管理系统',
    desc: '自动化库存管理，减少人工操作。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: '影刀制造业流程自动化平台',
    desc: '优化制造流程的自动化平台。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: '影刀教育行业自动作业批改工具',
    desc: '为教育行业提供自动化作业批改功能。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: '影刀房地产合同自动生成系统',
    desc: '帮助房地产行业快速生成合同文件。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: '影刀医疗行业数据自动化录入系统',
    desc: '自动化录入医疗数据，提高工作效率。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: '影刀物流行业运输自动化调度系统',
    desc: '提供物流行业的运输自动化调度服务。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: '影刀旅游行业客户自动回复系统',
    desc: '通过自动回复提升旅游行业客户体验。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: '影刀餐饮行业订单自动化处理平台',
    desc: '简化餐饮行业的订单处理流程。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: '影刀电子商务自动订单管理系统',
    desc: '自动化管理电商订单，减少人为错误。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: '影刀能源行业设备自动化检测系统',
    desc: '自动检测能源设备运行状况，确保安全。',
    link: 'https://excel520.taobao.com',
  },

  // JavaScript 系列
  {
    name: 'JavaScript零售行业POS系统',
    desc: '基于JavaScript开发的POS系统，适用于零售行业。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'JavaScript制造业生产跟踪系统',
    desc: '实时跟踪制造业的生产过程。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'JavaScript教育行业学习管理系统',
    desc: '提供教育行业的学习内容管理服务。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'JavaScript房地产投资分析工具',
    desc: '分析房地产投资项目的可行性。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'JavaScript医疗行业预约系统',
    desc: '帮助医疗机构管理患者的预约流程。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'JavaScript物流行业仓库管理平台',
    desc: '提供物流仓库的高效管理方案。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'JavaScript旅游行业线路规划系统',
    desc: '协助旅游公司进行线路规划。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'JavaScript餐饮行业客户管理平台',
    desc: '提供餐饮行业的客户管理服务。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'JavaScript电子商务支付管理系统',
    desc: '处理电子商务平台的支付流程。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'JavaScript能源行业能源监控系统',
    desc: '实时监控能源消耗和设备状态。',
    link: 'https://excel520.taobao.com',
  },

  // AI 系列
  {
    name: 'AI零售行业智能推荐系统',
    desc: '基于AI的智能推荐系统，提高客户满意度。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'AI制造业故障预测系统',
    desc: '通过AI预测设备故障，避免停机。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'AI教育行业个性化学习平台',
    desc: '为学生提供个性化学习路径推荐。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'AI房地产价格预测系统',
    desc: '利用AI预测房地产市场价格趋势。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'AI医疗行业诊断辅助系统',
    desc: '基于AI技术的辅助诊断工具，提高诊断准确性。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'AI物流行业路线优化系统',
    desc: '通过AI技术优化物流路线，降低运输成本。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'AI旅游行业智能行程规划系统',
    desc: '为游客提供智能行程规划方案。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'AI餐饮行业智能点餐系统',
    desc: 'AI驱动的智能点餐系统，提升客户体验。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'AI电子商务智能推荐引擎',
    desc: '为电子商务平台提供个性化推荐服务。',
    link: 'https://excel520.taobao.com',
  },
  {
    name: 'AI能源行业智能调度系统',
    desc: '基于AI的能源调度系统，提高能源利用效率。',
    link: 'https://excel520.taobao.com',
  },
];

export async function createProducts() {
  console.log(`⏳ Seeding products`);

  let createdCounter = 0;
  const existingCount = await prisma.product.count();

  // 遍历 products 数组
  for (const product of products) {
    // 检查产品是否已存在
    const existingProduct = await prisma.product.findUnique({
      where: { name: product.name },
    });

    if (!existingProduct) {
      // 如果不存在，则创建新的 product
      await prisma.product.create({
        data: {
          name: product.name,
          link: product.link,
          description: product.desc,
        },
      });
      createdCounter += 1;
    }
  }

  console.log(
    `✅ ${existingCount} existing products 👉 ${createdCounter} products created`
  );
}
