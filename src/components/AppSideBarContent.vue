<template>
    <div id="app-side-bar-content">

        <div class="row">

            <!--side bar-->
            <div class="side-bar col-md-2">

                <!--MAIN SLOT-->
                <slot>
                    default side bar content
                </slot>

            </div>

            <!--main content-->
            <div class="col-md-10">

                <!-- 渲染出口 -->
                <router-view></router-view>

            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'AppSideBarContent'
}
</script>