<template>
  <div
    class="abstract-item" 
    @click="$router.push(item.path)">
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div class="cover">    <!--这里是加图片 -->   
      <img class="cover-img" :src="item.frontmatter.cover 
      || 'https://pan.zealsay.com/zealsay/cover/1.jpg'" :alt="item.title"/>
    </div>                  <!--加图片的代码到这 -->
  <div class="info">        <!--这里必须要有这个info类-->
    <div class="title">     
      <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
      <router-link :to="item.path">{{item.title}}</router-link>
    </div>
    <div class="abstract" v-html="item.excerpt"></div>
    <PageInfo
      :pageInfo="item"
      :currentTag="currentTag">
    </PageInfo>
  </div>                    <!--这里别忘记加这个div结束info类-->
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
export default {
  components: {PageInfo},
  props: ['item', 'currentPage', 'currentTag']
  //////////////////////////////////////////////////
}
</script>

<style lang="stylus" scoped>
.abstract-item
  position relative
  display inline-flex
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)    //这里修改了透明 原来是 --background-color
  cursor: pointer;
  > * {
    pointer-events: auto;
  }

.cover                                        //这里开始是加上去的
  max-width 320px
  flex 1
  overflow hidden
  border-radius .5rem
.cover-img
  border-radius .5rem
  max-width 320px
  transition: 1s ease-out;

.cover-img:hover
  transform: scale3d(1.1, 1.1, 1);

.info
  flex 1
  display: flex;
  flex-direction: column;
  justify-content: center;                   //这里结束，但是别忘了对齐

  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    margin 0 2rem
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
//下面又开始加了，注意对齐
@media (max-width: $homePageWidth)              
  .cover
    max-width 200px
    flex 1                          
    overflow hidden
    border-radius .5rem
    display flex
    align-items: center
    .cover-img
      border-radius .5rem
      max-width 200px
      transition: 1s ease-out;
  .info
    flex 2 !important
@media (max-width: 1080px)
  .cover
    display none
// 这里结束，下面.abstract-item 、.cover 、.info都是要加的 ，注意对齐
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;

  .abstract-item
    display block
    text-align center

    .cover
      width 100%
      display inline-flex
      max-width 320px
      .cover-img
        max-width 320px
        width inherit

    .info
      .title
        margin 0
</style>


