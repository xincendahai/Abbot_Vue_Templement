<template>
	<span class="lang" @click="checkLanguage()">
        {{title}}
    </span>

</template>

<script>
	export default {
		name: 'lang',
		components: {
			
		},
		data() {
			return {
                title:"EN"
			}
		},
		methods: {
            //修改语言
            checkLanguage(){
                let lang = this.$i18n.locale === 'zh-CN' ? 'en-US' : 'zh-CN'
                this.$i18n.locale = lang
                localStorage.setItem("locale",lang);
                if(lang === 'zh-CN'){
                    this.title = "EN"
                }else{
                    this.title = "ZH"
                }
            }
		},
	}
</script>

<style scoped lang="less">
.lang{
    display:inline-block;
    padding: 0 1rem;
    color: grey;
    font-weight: bold;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}
</style>
