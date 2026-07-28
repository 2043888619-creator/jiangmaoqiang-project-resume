const projects = [
  { id: '01', folder: '项目1回油滤芯', title: '挖掘机回油滤芯堵塞预警与诊断技术开发 (三一重机 校企合作项目)', description: '针对挖掘机回油滤芯堵塞状态难以感知、维护周期不精准等问题，开展滤芯堵塞监测、分级预警及剩余寿命预测技术研究，实现液压系统预测性维护。', personalWork: '基于压力、油温、泵转速等多源运行数据，开展滤芯堵塞机理分析、特征参数提取及状态识别研究；参与技术路线设计，制定堵塞监测、预警及寿命预测关键技术方案。', images: ['f82ffb296da4f696901719df8d474dcb.jpg', 'ec09b60611053179d77384f5f1ca3667.jpg', '78e2676f9ed0bfcc304fc8d3bb8d6fbd.jpg'] },
  { id: '02', folder: '项目2 挖掘机液压系统结构优化关键技术研究', title: '挖掘机液压系统结构优化关键技术研究（国家重点研发计划）', description: '针对EHA挖掘机低速控制性能不足、高速流量受限等问题，开展液压系统结构优化研究，提升系统调速范围、负载适应能力及能量利用效率。', personalWork: '负责EHA系统结构优化设计及关键硬件选型；提出动臂/斗杆双泵流量耦合与旁通辅助调速方案，优化液压回路结构；基于AMESim开展系统仿真与性能分析，完成效率、动态特性及调速性能评估；参与试验方案设计。', images: ['9cb66f0048729a20d26de30ad2c077bb.jpg', '85e36b0752f09da8667ec5e89e0f82a4.jpg', '4a7e72fcb39174d74f246d6a74dca1a4.jpg'] },
  { id: '03', folder: '项目3 EHA挖掘机控制策略与协调控制关键技术研究', title: 'EHA挖掘机控制策略与协调控制关键技术研究（国家重点研发计划）', description: '针对挖掘机独立泵组架构高负载工况效率衰减问题，开展多泵协调控制与能效优化研究，提升系统效率。', personalWork: '负责四象限工况下泵阀复合控制策略设计；基于AMESim搭建液压-机械耦合模型，提出GOA-SQP闭环优化控制算法，实现双泵转速协调控制；完成典型工况仿真及模拟负载试验，开展系统动态性能分析。', images: ['d77534c1480544f15628ab768d5488a0.jpg', 'cb1976f56e155241291bd1516fd9b312.jpg', '3890187e2eec6a34a24d43bb2373beda.jpg'] },
  { id: '04', folder: '项目4扫地机', title: '基于物联网的人机语音交互式智能清洁机器人', description: '针对传统公共场所清洁设备智能化、清洁效果不佳等问题，设计集移动控制、智能拖地、多传感器融合及语音交互于一体的智能清洁机器人系统。完成拖地机构优化、全向移动底盘设计及控制系统搭建，实现自主移动、智能避障与高效清洁功能。', personalWork: '负责项目总体方案设计与技术路线制定，开展任务协调与系统集成；基于 SolidWorks、AutoCAD 完成整机结构设计及装配优化；利用 Abaqus CAE 对关键部件进行有限元分析，完成结构强度与可靠性验证；基于 Composer 构建系统原理可视化模型，完成硬件选型、样机搭建调试及整机性能验证。', images: ['图片2.jpg', '图片1.jpg', 'IMG_20210702_184225.jpg'] },
  { id: '05', folder: '项目5高楼垃圾', title: '一种基于机器视觉技术的新型垃圾回收分装系统', description: '针对高层建筑垃圾处理效率低、人工清运成本高等问题，设计一种集垃圾收集、中转运输、自动封装、分类分拣及杀菌消毒于一体的智能垃圾处理装置。融合多传感器检测及自动控制技术，实现垃圾处理过程自动化。', personalWork: '负责功能模块设计及系统集成，参与项目总体方案规划与技术路线制定；基于 SolidWorks、AutoCAD 完成结构设计与装配优化，开展关键硬件选型、样机搭建及调试验证，推动项目方案实现与成果落地。', images: ['轴侧图 (2).JPG', '图片3.jpg', '后视图.JPG'] },
  { id: '06', folder: '项目6 造楼机', title: '一种基于3D打印原理的可视化高楼建造系统', description: '针对超高层建筑传统施工效率低、安全风险高及智能化程度不足等问题，研发基于3D打印理念的智能建造系统。融合外挂爬升、分布式液压驱动、多缸同步控制及数字化监测技术，实现逐层建造、墙体浇筑、智能养护等功能一体化，提升建造效率、安全性及智能化水平。', personalWork: '负责技术路线制定及整体结构方案设计，完成系统架构与功能设计；基于 SolidWorks 完成系统三维建模及参数优化，开展结构设计与装配优化；运用 Composer 构建系统工作原理可视化模型，实现方案动态展示；负责项目文档、申报及答辩材料撰写。', images: ['图片9.jpg', '图片10.jpg', '图片1.jpg'] },
  { id: '07', folder: '项目7康复床', title: '多功能自动式全方位护理康复一体化床系统设计', description: '针对失能老人及长期卧床患者护理需求，设计一款集护理、康复及智能辅助功能于一体的智慧医疗床系统。融合液压驱动、多机构联动、水循环利用及智能移动等技术，实现床体姿态调节、洗浴护理、康复训练及轮椅辅助等多功能一体化，提升护理效率与患者舒适性。', images: ['图片8.jpg', '图片7.jpg', '图片6.jpg'] },
  { id: '08', folder: '项目8挖泥船', title: '新型自航绞吸式湖海多用挖泥船', description: '针对河道清淤、航道疏浚及水域治理等工程需求，设计新型自航绞吸式湖海多用挖泥船。融合绞刀挖掘、远距离泥浆输送、液压定位、自航驱动及智能控制等关键技术，实现挖泥、输泥、定位及航行一体化，提高复杂工况下施工效率、作业精度及工程质量。', images: ['整体视图.jpg', '图片5.jpg', '图片4.jpg'] }
];

const patentFiles = ['专利1.jpg', '专利2.jpg', '专利3.jpg', '专利4.jpg', '专利5.jpg', '专利6.jpg', '专利7.jpg'];
const awardFiles = ['三维大赛证书扫描.png', '区域赛证书.jpg', '数学建模.jpg', ...Array.from({ length: 37 }, (_, index) => `图片${index + 8}.jpg`)].map(file => file === '图片24.jpg' ? '图片24.png' : file);
const imagePath = (folder, filename) => `./${encodeURI(folder)}/${encodeURI(filename)}`;
const titleSuffixes = { '04': '（国家级 大创）', '05': '（国家级 大创）', '06': '（全国三维机械创新设计）', '07': '（全国三维机械创新设计）', '08': '（全国三维机械创新设计）' };

function projectMarkup(project) {
  const displayTitle = `${project.title}${titleSuffixes[project.id] || ''}`;
  return `<article class="project">
    <div class="project-meta"><span class="project-number">${project.id}</span><div class="project-content">
      <h3>${displayTitle}</h3>
      <p class="project-description"><strong>项目描述：</strong>${project.description}</p>
      ${project.personalWork ? `<p class="project-work"><strong>个人工作：</strong>${project.personalWork}</p>` : ''}
    </div></div>
    <div class="project-gallery">${project.images.map((filename, index) => `<a href="${imagePath(project.folder, filename)}" data-lightbox="${displayTitle} - 图片 ${index + 1}"><img loading="lazy" src="${imagePath(project.folder, filename)}" alt="${displayTitle}项目图片 ${index + 1}" /></a>`).join('')}</div>
  </article>`;
}

function renderProjects() {
  document.querySelector('#projects-top').innerHTML = projects.slice(0, 6).map(projectMarkup).join('');
  document.querySelector('#projects-bottom').innerHTML = projects.slice(6).map(projectMarkup).join('');
}

function renderCertificates(target, files, label) {
  document.querySelector(target).innerHTML = files.map((file, index) => `<a class="certificate" href="${imagePath('证书', file)}" data-lightbox="${label} ${index + 1}"><img loading="lazy" src="${imagePath('证书', file)}" alt="${label} ${index + 1}" /></a>`).join('');
}

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-lightbox]');
  if (!trigger) return;
  event.preventDefault();
  lightboxImage.src = trigger.href;
  lightboxImage.alt = trigger.dataset.lightbox;
  lightbox.showModal();
});
lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

const navigationLinks = Array.from(document.querySelectorAll('nav a'));
const navigationSections = navigationLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const navigationObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navigationLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2] });
navigationSections.forEach(section => navigationObserver.observe(section));

renderProjects();
renderCertificates('#patents-grid', patentFiles, '专利证书');
renderCertificates('#awards-grid', awardFiles, '竞赛及荣誉证书');
