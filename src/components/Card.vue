<template>
	<div v-if="!loaded">
		Loading</div>
	
	<div v-else class="container">
		<div class="row">
			<div class="col-xs-4">
				<img :src=avatar>
			</div>
			<div class="col-xs-8">
				<h3> {{char.name}}</h3>
				<p> {{char.description | emptyDescription}}</p>
				<br/>
				<h4 v-if="char.comics.items.length > 0">Appeared in</h4>
				<p v-for="item of char.comics.items">{{item.name}}</p>
			</div>
	
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { Store } from '@/Store.js';
export default {
	name: 'Card',
	data() {
		return {
			loaded: false,
			char: {},
			avatar: ''
		}
	},
	created() {
		console.log("route params: ", this.$route.params.id);
		Store.getDetail(this.$route.params.id).then((res) => {
			this.char = res;
			this.avatar = this.char.thumbnail.path + "/portrait_uncanny.jpg";
			this.loaded = true;

		})
	},

	filters: {
		emptyDescription(item) {

			if (item === undefined || item.length === 0) {
				return "There is no description for this character at the moment.";
			}
		}
	}
}
</script>