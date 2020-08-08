<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="goBack()">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {
       
    };
  },
  methods: {
        goBack(){
            let menuList = JSON.parse(sessionStorage.getItem("menuList"))
            if (menuList[0].menuUrl) {
                this.$router.push(menuList[0].menuUrl);
            } else {
                for (let i = 0; i < menuList[0].child.length; i++) {
                    this.$router.push(menuList[0].child[i].menuUrl);
                    break;
                }
            }
        }

    },
};
</script>