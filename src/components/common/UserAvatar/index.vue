<script setup lang='ts'>

</script>

<template>
  <div class="flex items-center overflow-hidden">
    <div class="flex-1 min-w-0 ml-2">
      <NSpace vertical>
        <NSpace justify="space-between">
          <NSpace>
            <NButton type="primary" text>
              刷新
            </NButton>
            <n-button
              text
              tag="a"
              href="#/user?id=Billing"
              type="primary"
            >
              管理
            </n-button>
          </NSpace>
        </NSpace>
      </NSpace>
    </div>
  </div>
</template>
