<template>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" id="myNavbar">
				<ul class="nav navbar-nav">
					<li class="js-scrollTo">
						<router-link :to="{name:'Home'}">List of characters</router-link>
					</li>
					<li>
						<router-link :to="{name:'Favorite'}">My favorites</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'navbar'
}
</script>
<style scoped>
/*@media (min-width: 1024px) {
	nav {
		margin-top: -30px;
	}
}*/
</style>