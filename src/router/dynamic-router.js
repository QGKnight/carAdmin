
const Order = () => import('../views/order-manage')
const OrderList = () => import('../views/order-manage/order-list')
const ProductManage = () => import('../views/order-manage/product-manage')
const ReturnGoods = () => import('../views/order-manage/return-goods')
const Goods = () => import('../views/goods-manage')
const GoodsList = () => import('../views/goods-manage/goods-list')
const GoodsClassify = () => import('../views/goods-manage/goods-classify')

/* 需要权限判断的路由 */
const dynamicRoutes = [
    {
        path: '/order',
        component: Order,
        name: 'order-manage',
        meta: {
            name: '经营业户',
            icon: 'icon-email'
        },
        children: [
            {
                path: 'list',
                name: '/order/list',
                component: OrderList,
                meta: {
                    name: '个体经营许可申请',
                    icon: 'icon-quit'
                }
            },
            {
                path: 'product',
                name: '/order/product',
                component: ProductManage,
                meta: {
                    name: '网约平台许可申请',
                    icon: 'icon-service'
                }
            },
            {
                path: 'returnGoods',
                name: 'return-goods',
                component: ReturnGoods,
                meta: {
                    name: '网约平台许可发证',
                    icon: 'icon-product-manage'
                }
            }
        ]
    },
    {
        path: '/goods',
        component: Goods,
        name: 'goods',
        meta: {
            name: '车辆管理',
            icon: 'icon-order-manage'
        },
        children: [
            {
                path: 'list',
                name: 'goods-list',
                component: GoodsList,
                meta: {
                    name: '网约车业务初审',
                    icon: 'icon-home'
                }
            },
            {
                path: 'classify',
                name: 'goods-classify',
                component: GoodsClassify,
                meta: {
                    name: '网约车业务受理',
                    icon: 'icon-product-manage'
                }
            }
        ]
    },
    {
        path: '/qual',
        component: resolve => require(['../views/carUser/index'], resolve),
        name: 'qual',
        meta: {
            name: '驾驶员管理',
            icon: 'icon-order-manage'
        },
        children: [
            {
                path: 'userqual',
                name: 'userqual',
                component: resolve => require(['../views/carUser/qual/index'], resolve),
                meta: {
                    name: '驾驶员资格认证',
                    icon: 'icon-home'
                }
            }
        ]
    },
    {
        path: '/archive',
        component: resolve => require(['../views/archive/index'], resolve),
        name: 'archive',
        meta: {
            name: '电子档案',
            icon: 'icon-order-manage'
        },
    },
    {
        path: '/assment',
        component: resolve => require(['../views/assment/index'], resolve),
        name: 'assment',
        meta: {
            name: '信质考核',
            icon: 'icon-order-manage'
        },
    },
    {
        path: '/industry',
        component: resolve => require(['../views/industry/index'], resolve),
        name: 'industry',
        meta: {
            name: '行业审验',
            icon: 'icon-order-manage'
        },
    },
    {
        path: '/work',
        component: resolve => require(['../views/work/index'], resolve),
        name: 'work',
        meta: {
            name: '协同办公',
            icon: 'icon-order-manage'
        },
    },
    {
        path: '/approval',
        component: resolve => require(['../views/approval/index'], resolve),
        name: 'approval',
        meta: {
            name: '审批中心',
            icon: 'icon-order-manage'
        },
    },
    {
        path: '/declare',
        component: resolve => require(['../views/declare/index'], resolve),
        name: 'declare',
        meta: {
            name: '从业资格申报',
            icon: 'icon-order-manage'
        },
    },
    {
        path: '/setting',
        component: resolve => require(['../views/setting/index'], resolve),
        name: 'setting',
        meta: {
            name: '系统管理',
            icon: 'icon-order-manage'
        },
    }
]

export default dynamicRoutes
