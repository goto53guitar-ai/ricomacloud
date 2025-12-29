
import { Translation } from './types';

export const translations: Record<'zh' | 'en' | 'es', any> = {
  zh: {
    nav: {
      home: '首页',
      products: '产品中心',
      solutions: '解决方案',
      pms: '生产管理系统',
      customization: '线下个性定制',
      creative: '在线创意空间',
      login: '登录',
      register: '注册'
    },
    hero: {
      title1: '开启您的刺绣智能化时代',
      sub1: 'Ricoma Cloud 是一套面向刺绣企业、门店与创作者的云端管理平台。',
      desc1: '实现设备互联、生产可视化、智能接单、在线设计与 O2O 门店管理。',
      title2: 'Ricoma Cloud — 刺绣生产数字化平台',
      sub2: '连接设备、订单、设计与工厂，实现生产透明化、业务在线化、流程自动化。',
      title3: 'SaaS解决方案，无需服务器、无需维护',
      sub3: '提供稳定可靠的数字化基础设施，让刺绣经营更高效、更智能。'
    },
    products: {
      pms: {
        name: '生产管理系统',
        tagline: '刺绣生产全流程数字化管理',
        bannerTitle: '打通线上线下业务链路，助力企业数字化经营！',
        bannerSub: '从设备到生产，从订单到数据，Ricoma Cloud 帮您完成刺绣工厂的全面数字化。',
        features: ['机器实时监控', '生产数据可视化', '花版集中线上管理', '订单可视化追踪', '自动同步电商订单', '工厂成员与权限管理'],
        details: [
          {
            title: '机器状态实时监控',
            desc: '实时掌握机器运行状态，监控当前刺绣花版生产进度、当天针数、加工件数以及设备使用效率，确保生产过程透明高效。',
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: '精准故障诊断与维护',
            desc: '统计机器每个针杆的断线数据，收集故障信息，为设备保养与预测性维护提供精准数据支持，大幅降低停机风险。',
            img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: '多维度生产数据统计',
            desc: '涵盖刺绣针数、加工件数、工作时长等多维度统计分析，通过直观的图表呈现，助您全面洞察工厂生产力。',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
          },
          {
            title: '花版集中云端管理',
            desc: '支持花版集中存储、在线预览、色序配置与多机一键下发，打破设计与生产之间的信息孤岛，实现无缝衔接。',
            img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop'
          },
          {
            title: '订单全生命周期跟踪',
            desc: '快速创建生产订单，并实时跟踪订单从接收、排产、生产到交付的每一个环节，客户与工厂同步获知进度。',
            img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: '全渠道会员精准营销',
            desc: '集中管理全渠道订单与客户档案，结合数据分析实现会员分层运营、精准营销与邮件自动化营销，提升客户粘性。',
            img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
          }
        ]
      },
      custom: {
        name: '个性定制 system',
        tagline: '打造门店自助定制体验',
        bannerTitle: '打造极致的门店个性定制体验',
        bannerSub: '自助终端 + 云平台 + Ricoma 刺绣/打印设备的完整 O2O 个性化解决方案。',
        features: ['27寸自助终端在线设计', '商品、SKU、价格同步', '订单自动下发设备', '门店、设备集中管理', '业绩销售报表分析', '多店铺管理与订单路由'],
        details: [
          {
            title: '智能自助定制终端',
            desc: '消费者可自主选择商品与刺绣、DTG打印、DTF热转印等工艺。内置海量素材库，支持文字图案组合设计、AI模拟预览及扫码上传照片，提供图层管理等专业工具。',
            img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: '商品与 SKU 深度管理',
            desc: '灵活管理商品上架与描述编辑，精准配置 SKU 价格、定制工艺及刺绣区域。所有更新实时同步至全线自助终端与连锁门店，确保价格与标准统一。',
            img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: '素材与广告云端下发',
            desc: '后台统一管理自助终端的刺绣/打印素材库，支持首页广告位与轮播海报的远程一键更新，助力门店活动快速落地。',
            img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: '门店多维度数据分析',
            desc: '实时掌握每日订单量、销售额、访客数及客单价。提供直观的销售趋势图与热销排名，支持按门店、商品维度深度下钻，驱动经营决策。',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
          },
          {
            title: '一体化后台管理系统',
            desc: '集中管理门店网络、自助终端与硬件设备。支持多层级的成员权限控制与角色管理，确保大型零售体系的安全高效运营。',
            img: 'https://images.unsplash.com/photo-1504868584819-f8e90526354a?q=80&w=2070&auto=format&fit=crop'
          }
        ]
      },
      creative: {
        name: '创意空间',
        tagline: '简单易用的刺绣在线设计工具',
        bannerTitle: '零基础在线设计，让创意触手可及',
        bannerSub: '集极简设计引擎、海量素材库与 3D 仿真预览于一体的刺绣创作平台。',
        features: ['模块化快速设计', '丰富素材库+字母绣', '保存 .rcm 格式文件', '即时3D刺绣预览'],
        details: [
          {
            title: '零基础极简设计引擎',
            desc: '拖拽式操作，零门槛上手。提供对齐、旋转、缩放、镜像等专业级变换工具；内置标准刺绣框及高精度刻度尺，确保每一个图案都能实现厘米级的精准定位。',
            img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop'
          },
          {
            title: '灵感素材库与艺术字体',
            desc: '涵盖表情包、动植物、体育等多元主题素材，支持用户上传私有素材库。内置24种精选刺绣字体，支持对字体密度、间距、弧度进行深度艺术调节。',
            img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop'
          },
          {
            title: '3D 仿真模拟与智能配色',
            desc: '提供高保真 3D 刺绣纹理效果预览，支持全路径仿真走针模拟。可根据全球主流绣线品牌进行智能配色，让成品效果在设计阶段即能完美呈现。',
            img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop'
          }
        ]
      }
    },
    auth: {
      registerTitle: '创建您的账户',
      registerSub: '开启全球领先的刺绣数字化生态。',
      loginTitle: '欢迎回来',
      loginSub: '登录您的 Ricoma Cloud 账户，管理您的刺绣业务。',
      emailLabel: '邮箱地址',
      passwordLabel: '登录密码',
      confirmPasswordLabel: '确认密码',
      companyLabel: '公司名称 (可选)',
      submitBtn: '立即注册',
      loginBtn: '立即登录',
      hasAccount: '已有账户？',
      noAccount: '还没有账户？',
      loginLink: '点此登录',
      registerLink: '立即注册',
      rememberMe: '记住我',
      forgotPassword: '忘记密码？',
      agreement: '注册即代表您同意我们的《服务协议》与《隐私政策》'
    },
    personas: {
      title: '我们能为你带来什么？',
      factory: {
        name: '生产工厂',
        points: ['生产透明化：实时监控设备运行，掌握产能。', '效率最大化：智能排产，减少停机。', '数据驱动：自动统计针数、耗线与效率。'],
        solves: '解决：生产混乱、人工排单低效、成本不可控。'
      },
      brand: {
        name: '品牌商/电商',
        points: ['多渠道订单统一：同步 Shopify、Etsy 订单。', '资源集中管理：统一商品、素材库。', '快速响应需求：缩短定制与生产周期。'],
        solves: '解决：订单分散、库存混乱、沟通成本高。'
      },
      designer: {
        name: '设计师/创作者',
        points: ['在线设计工具：版带设计与走针仿真。', '直达生产：设计一键下发机器。', '设计协作：承接用户定制，提升变现。'],
        solves: '解决：设计脱节、创意落地成本高。'
      },
      retailer: {
        name: '门店/零售商',
        points: ['自助下单体验：客户即时设计与下单。', '工厂协同：大单推送工厂生产。', '多店统一管理：设备、数据一体化。'],
        solves: '解决：定制流程繁琐、与工厂衔接慢。'
      }
    },
    common: {
      learnMore: '了解更多',
      getStarted: '立即体验',
      solveProblems: '解决问题'
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      solutions: 'Solutions',
      pms: 'PMS',
      customization: 'Customization',
      creative: 'Creative Space',
      login: 'Login',
      register: 'Register'
    },
    hero: {
      title1: 'Enter the Era of Intelligent Embroidery',
      sub1: 'Ricoma Cloud is a cloud management platform for embroidery enterprises, stores, and creators.',
      desc1: 'Enable connectivity, visualization, smart ordering, online design, and O2O store management.',
      title2: 'Ricoma Cloud — Digital Production Platform',
      sub2: 'Connect devices, orders, designs, and factories for transparency and automation.',
      title3: 'SaaS Solution, No Maintenance Required',
      sub3: 'Stable digital infrastructure for efficient and intelligent embroidery management.'
    },
    products: {
      pms: {
        name: 'Production Management System',
        tagline: 'Digital Management of the Entire Embroidery Workflow',
        bannerTitle: 'Bridge Online and Offline Business for Digital Growth!',
        bannerSub: 'From equipment to production, Ricoma Cloud helps you digitize every aspect of your factory.',
        features: ['Real-time Monitoring', 'Data Visualization', 'Cloud Design Management', 'Order Tracking', 'E-commerce Sync', 'Member & Permission Control'],
        details: [
          {
            title: 'Real-time Machine Monitoring',
            desc: 'Monitor machine status instantly. Track embroidery design progress, daily stitch counts, pieces produced, and equipment efficiency to ensure transparency.',
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Precise Diagnostics & Maintenance',
            desc: 'Track thread breakage statistics for every needle bar and collect fault data. Provide technical support for preventative maintenance to reduce downtime.',
            img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Multi-dimensional Production Stats',
            desc: 'Analyze production via stitches, processed pieces, and working hours. Visualize performance through intuitive dashboards for complete factory insight.',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
          },
          {
            title: 'Centralized Design Management',
            desc: 'Store, preview, and configure designs in the cloud. Sync color sequences and dispatch files to multiple machines instantly for seamless production.',
            img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop'
          },
          {
            title: 'End-to-End Order Tracking',
            desc: 'Create and track orders in real-time. Keep factories and customers updated on progress from the initial order to the final shipment.',
            img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'CRM & Precise Marketing',
            desc: 'Manage all channels and customers in one place. Use data-driven insights for membership management, targeted marketing, and automated email campaigns.',
            img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
          }
        ]
      },
      custom: {
        name: 'Customization System',
        tagline: 'Self-service Experience for Stores',
        bannerTitle: 'Ultimate Personalized Store Experience',
        bannerSub: 'The complete O2O solution: Self-service Kiosks + Cloud Platform + Ricoma Equipment.',
        features: ['27" Kiosk Online Design', 'SKU & Price Sync', 'Direct Dispatch to Machines', 'Centralized Store Management', 'Sales Reports & Analytics', 'Multi-store Order Routing'],
        details: [
          {
            title: 'Smart Self-Service Kiosks',
            desc: 'Empower consumers with product selection and customization via Embroidery, DTG, or DTF. Features built-in design tools, AI-powered previews, and QR photo uploads.',
            img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Product & SKU Intelligence',
            desc: 'Easily manage catalogs, descriptions, and pricing. Configure process constraints and embroidery zones with real-time sync across all global terminals.',
            img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Asset & Campaign Control',
            desc: 'Centralized library for embroidery and print assets. Update kiosk homepages and promotional banners remotely to align with brand campaigns.',
            img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Store Performance Analytics',
            desc: 'Track daily orders, revenue, visitors, and average order value. Detailed sales trends and product rankings per store to drive intelligent decision-making.',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
          },
          {
            title: 'Advanced Backend Management',
            desc: 'Global control over store networks, kiosks, and hardware devices. Robust role-based access control for secure organizational management.',
            img: 'https://images.unsplash.com/photo-1504868584819-f8e90526354a?q=80&w=2070&auto=format&fit=crop'
          }
        ]
      },
      creative: {
        name: 'Creative Space',
        tagline: 'Easy-to-use Online Embroidery Design Tool',
        bannerTitle: 'Intuitive Online Design for Limitless Creativity',
        bannerSub: 'A unified platform featuring a simplified design engine, vast asset libraries, and 3D simulation.',
        features: ['Modular Rapid Design', 'Rich Asset Library', '.rcm File Format Export', 'Instant 3D Preview'],
        details: [
          {
            title: 'Intuitive Design Engine',
            desc: 'Drag-and-drop simplicity with zero learning curve. Access pro transformation tools including alignment, rotation, and mirroring, plus built-in embroidery hoops and rulers for millimetric accuracy.',
            img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop'
          },
          {
            title: 'Asset Library & Typography',
            desc: 'Explore thousands of curated assets—from nature to icons—or upload your own. Includes 24 pro embroidery fonts with precise control over stitch density, spacing, and curvature.',
            img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop'
          },
          {
            title: '3D Preview & Simulation',
            desc: 'Visualize designs with high-fidelity 3D textures and path animations. Match colors using global thread brands to ensure what you see is exactly what you produce.',
            img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop'
          }
        ]
      }
    },
    auth: {
      registerTitle: 'Create your Account',
      registerSub: 'Join the global leading digital embroidery ecosystem.',
      loginTitle: 'Welcome Back',
      loginSub: 'Log in to your Ricoma Cloud account to manage your business.',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm Password',
      companyLabel: 'Company Name (Optional)',
      submitBtn: 'Register Now',
      loginBtn: 'Login Now',
      hasAccount: 'Already have an account?',
      noAccount: "Don't have an account?",
      loginLink: 'Login here',
      registerLink: 'Register here',
      rememberMe: 'Remember Me',
      forgotPassword: 'Forgot Password?',
      agreement: 'By registering, you agree to our Terms of Service and Privacy Policy.'
    },
    personas: {
      title: 'What Can We Do for You?',
      factory: {
        name: 'Factories',
        points: ['Transparency: Real-time monitoring of machine capacity.', 'Efficiency: Smart scheduling to reduce downtime.', 'Data-Driven: Automatic stitch and thread consumption stats.'],
        solves: 'Solves: Disorganized production, inefficient manual scheduling.'
      },
      brand: {
        name: 'Brands/E-commerce',
        points: ['Channel Management: Sync Shopify/Etsy orders.', 'Asset Management: Unified products and designs.', 'Speed: Faster response to custom demands.'],
        solves: 'Solves: Scattered orders, messy inventory, high communication costs.'
      },
      designer: {
        name: 'Designers/Creators',
        points: ['Online Tools: Pattern design & simulation.', 'Production Link: Send designs directly to machines.', 'Collaboration: Monetize designs with user orders.'],
        solves: 'Solves: Disconnected design/production, high implementation costs.'
      },
      retailer: {
        name: 'Retailers/Stores',
        points: ['Self-service: Customer-led design and ordering.', 'Factory Sync: Push large orders to factories.', 'Multi-store: Integrated device and data management.'],
        solves: 'Solves: Tedious custom processes, slow factory coordination.'
      }
    },
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      solveProblems: 'Challenges We Solve'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      solutions: 'Soluciones',
      pms: 'PMS',
      customization: 'Personalización',
      creative: 'Espacio Creativo',
      login: 'Iniciar Sesión',
      register: 'Registrarse'
    },
    hero: {
      title1: 'Entre en la Era del Bordado Inteligente',
      sub1: 'Ricoma Cloud es una plataforma de gestión en la nube para empresas, tiendas y creadores de bordado.',
      desc1: 'Habilite la conectividad, visualización, pedidos inteligentes, diseño en línea y gestión de tiendas O2O.',
      title2: 'Ricoma Cloud — Plataforma de Producción Digital',
      sub2: 'Conecte dispositivos, pedidos, diseños y fábricas para una total transparencia y automatización.',
      title3: 'Solución SaaS, Sin Necesidad de Mantenimiento',
      sub3: 'Infraestructura digital estable para una gestión de bordado eficiente e inteligente.'
    },
    products: {
      pms: {
        name: 'Sistema de Gestión de Producción',
        tagline: 'Gestión Digital de Todo el Flujo de Trabajo de Bordado',
        bannerTitle: '¡Conecte su Negocio Online y Offline para el Crecimiento Digital!',
        bannerSub: 'Desde el equipo hasta la producción, Ricoma Cloud le ayuda a digitalizar cada aspecto de su fábrica.',
        features: ['Monitoreo en Tiempo Real', 'Visualización de Datos', 'Gestión de Diseños en la Nube', 'Seguimiento de Pedidos', 'Sincronización E-commerce', 'Control de Miembros y Permisos'],
        details: [
          {
            title: 'Monitoreo de Máquinas en Tiempo Real',
            desc: 'Supervise el estado de sus máquinas al instante. Rastree el progreso del diseño, conteo de puntadas diario, piezas producidas y eficiencia.',
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Diagnóstico y Mantenimiento Preciso',
            desc: 'Rastree estadísticas de rotura de hilo para cada aguja y recopile datos de fallas para un mantenimiento preventivo eficaz.',
            img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Estadísticas de Producción Multidimensionales',
            desc: 'Analice la producción mediante puntadas, piezas procesadas y horas de trabajo a través de paneles de control intuitivos.',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
          },
          {
            title: 'Gestión Centralizada de Diseños',
            desc: 'Almacene y configure diseños en la nube. Sincronice secuencias de color y envíe archivos a múltiples máquinas al instante.',
            img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop'
          },
          {
            title: 'Seguimiento de Pedidos de Extremo a Extremo',
            desc: 'Cree y rastree pedidos en tiempo real. Mantenga a fábricas y clientes informados sobre el progreso del pedido.',
            img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'CRM y Marketing de Precisión',
            desc: 'Gestione todos sus canales y clientes en un solo lugar. Utilice datos para marketing dirigido y campañas automatizadas.',
            img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
          }
        ]
      },
      custom: {
        name: 'Sistema de Personalización',
        tagline: 'Experiencia de Autoservicio para Tiendas',
        bannerTitle: 'La Experiencia Definitiva de Personalización en Tienda',
        bannerSub: 'La solución O2O completa: Quioscos de Autoservicio + Plataforma en la Nube + Equipos Ricoma.',
        features: ['Diseño Online en Quiosco de 27"', 'Sincronización de SKU y Precios', 'Envío Directo a Máquinas', 'Gestión Centralizada de Tiendas', 'Informes de Ventas y Análisis', 'Enrutamiento de Pedidos Multitienda'],
        details: [
          {
            title: 'Quioscos Inteligentes de Autoservicio',
            desc: 'Permita que los consumidores elijan productos y personalicen mediante bordado, DTG o DTF con herramientas de diseño integradas.',
            img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Inteligencia de Productos y SKU',
            desc: 'Gestione catálogos, descripciones y precios con facilidad. Configure restricciones de proceso y zonas de bordado en tiempo real.',
            img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Control de Activos y Campañas',
            desc: 'Biblioteca centralizada para activos de bordado e impresión. Actualice las pantallas de inicio de los quioscos de forma remota.',
            img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Análisis de Rendimiento de Tienda',
            desc: 'Rastree pedidos diarios, ingresos y visitantes. Tendencias de ventas detalladas por tienda para la toma de decisiones.',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
          },
          {
            title: 'Gestión Avanzada de Backend',
            desc: 'Control global sobre redes de tiendas y hardware. Sólido control de acceso basado en roles para una gestión segura.',
            img: 'https://images.unsplash.com/photo-1504868584819-f8e90526354a?q=80&w=2070&auto=format&fit=crop'
          }
        ]
      },
      creative: {
        name: 'Espacio Creativo',
        tagline: 'Herramienta de Diseño de Bordado en Línea Fácil de Usar',
        bannerTitle: 'Diseño Intuitivo en Línea para una Creatividad Ilimitada',
        bannerSub: 'Una plataforma unificada con un motor de diseño simplificado y simulación 3D.',
        features: ['Diseño Rápido Modular', 'Biblioteca de Activos Rica', 'Exportación de Archivos .rcm', 'Vista Previa 3D Instantánea'],
        details: [
          {
            title: 'Motor de Diseño Intuitivo',
            desc: 'Simplicidad de arrastrar y soltar. Acceda a herramientas de transformación profesional con aros de bordado y reglas integradas.',
            img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop'
          },
          {
            title: 'Biblioteca de Activos y Tipografía',
            desc: 'Explore miles de activos curados o suba los suyos propios. Incluye 24 fuentes de bordado profesionales.',
            img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop'
          },
          {
            title: 'Vista Previa 3D y Simulación',
            desc: 'Visualice diseños con texturas 3D de alta fidelidad. Combine colores usando marcas globales de hilo.',
            img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop'
          }
        ]
      }
    },
    auth: {
      registerTitle: 'Cree su Cuenta',
      registerSub: 'Únase al ecosistema digital líder mundial en bordado.',
      loginTitle: 'Bienvenido de Nuevo',
      loginSub: 'Inicie sesión en su cuenta de Ricoma Cloud para gestionar su negocio.',
      emailLabel: 'Correo Electrónico',
      passwordLabel: 'Contraseña',
      confirmPasswordLabel: 'Confirmar Contraseña',
      companyLabel: 'Nombre de la Empresa (Opcional)',
      submitBtn: 'Registrarse Ahora',
      loginBtn: 'Iniciar Sesión Ahora',
      hasAccount: '¿Ya tiene una cuenta?',
      noAccount: "¿No tiene una cuenta?",
      loginLink: 'Inicie sesión aquí',
      registerLink: 'Regístrese aquí',
      rememberMe: 'Recordarme',
      forgotPassword: '¿Olvidó su contraseña?',
      agreement: 'Al registrarse, acepta nuestros Términos de Servicio y Política de Privacidad.'
    },
    personas: {
      title: '¿Qué Podemos Hacer por Usted?',
      factory: {
        name: 'Fábricas',
        points: ['Transparencia: Monitoreo en tiempo real de la capacidad.', 'Eficiencia: Programación inteligente para reducir tiempos de inactividad.', 'Basado en Datos: Estadísticas automáticas de puntadas e hilo.'],
        solves: 'Resuelve: Producción desorganizada, programación manual ineficiente.'
      },
      brand: {
        name: 'Marcas / E-commerce',
        points: ['Gestión de Canales: Sincronización con Shopify/Etsy.', 'Gestión de Activos: Productos y diseños unificados.', 'Velocidad: Respuesta más rápida a demandas personalizadas.'],
        solves: 'Resuelve: Pedidos dispersos, inventario desordenado, altos costos de comunicación.'
      },
      designer: {
        name: 'Diseñadores / Creadores',
        points: ['Herramientas Online: Diseño de patrones y simulación.', 'Vínculo de Producción: Envío directo a las máquinas.', 'Colaboración: Monetice sus diseños con pedidos de usuarios.'],
        solves: 'Resuelve: Desconexión diseño/producción, altos costos de implementación.'
      },
      retailer: {
        name: 'Minoristas / Tiendas',
        points: ['Autoservicio: Diseño y pedidos liderados por el cliente.', 'Sincronización con Fábrica: Envío de grandes pedidos a fábricas.', 'Multitienda: Gestión integrada de dispositivos y datos.'],
        solves: 'Resuelve: Procesos de personalización tediosos, coordinación lenta con fábrica.'
      }
    },
    common: {
      learnMore: 'Más Información',
      getStarted: 'Comenzar',
      solveProblems: 'Desafíos que Resolvemos'
    }
  }
};
