export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '课程列表',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: '首页标语',
    icon: 'table',
    path: '/homePage',
    component: './homePage'
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
