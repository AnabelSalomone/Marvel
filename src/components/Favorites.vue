<template>
	<div class="container">
		<header>
			<img id="imgtitle" src="https://sep.yimg.com/ay/stylinonline/marvel-46.jpg" />
			<h3>My favorites</h3>
		</header>
	
		<div>
			<ul class="list-group">
				<li class="list-group-item" v-for="item in favorites">{{item}}</li>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { Store } from '@/Store.js'

export default {
	name: 'favorites',
	data() {
		return {
			favorites: Store.datas.favorite
		}
	}
}
</script>

<style scoped>
.container {
	margin-top: 70px;
}

li {
	max-width: 50vw;
	margin: auto;
}

header {
	margin: auto;
	text-align: center;
	max-height: 60%;
	max-width: 60%;
}
</style>