import Vue from "vue";
import VueRouter from "vue-router";
import Player from "../views/Player";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'player',
		component: Player
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

// router.beforeEach, se preciso rodar verificações todas as vezes antes de renderizar alguma tela

export default router;