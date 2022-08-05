const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: '', component: () => import('pages/IndexPage.vue') },
			{
				path: '/makeClass',
				component: () => import('pages/teacher/MakeClassPage.vue'),
			},
			{
				path: '/mypage',
				component: () => import('pages/account/MyPagePage.vue'),
			},
			{
				path: '/addStudent',
				component: () => import('pages/teacher/AddStudentPage.vue'),
			},
			{
				path: '/classDetail/:classId',
				name: 'classDetail',
				props: true,
				component: () => import('pages/teacher/classDetailPage.vue'),
			},
			{
				path: '/makeExam/:classId',
				name: 'makeExam',
				props: true,
				component: () => import('pages/teacher/MakeExamPage.vue'),
			},
		],
	},
	// 로그인/회원가입
	// { path: '/test', component: () => import('components/TestComp.vue') },
	{
		path: '/login',
		component: () => import('pages/account/LoginPage.vue'),
	},
	{
		path: '/IDfind',
		component: () => import('pages/account/IDFindPage.vue'),
	},
	{
		path: '/PWfind',
		component: () => import('pages/account/PWFindPage.vue'),
	},
	{
		path: '/join',
		name: 'join',
		component: () => import('pages/account/SignUpPage.vue'),
	},
	// home
	{
		path: '/home',
		component: () => import('pages/StudentHomePage.vue'),
	},
	// 반
	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/ErrorNotFound.vue'),
	},
];

export default routes;
