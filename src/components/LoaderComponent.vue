<template>
  <div class="loader-overlay">
    <div class="loader large">
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.loader-overlay {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  content: "&nbsp;";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent; /*rgba(#fff, 0.9) !important;*/
  z-index: 9999;
}

.loader {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  border-top-color: #ccc;
  border-left-color: #ccc;
  border-right-color: #ccc;
  animation: spin 2s linear infinite reverse;
}

.loader > div {
  border-radius: 50%;
  border-color: transparent;
  border-left-color: #888;
  border-top-color: #888;
  animation: spin 0.9s linear infinite;
}

.loader.small {
  border-width: 3px;
  border-style: solid;
  height: 20px;
  width: 20px;
}

.loader.medium {
  border-width: 5px;
  border-style: solid;
  height: 40px;
  width: 40px;
}

.loader.large {
  border-width: 8px;
  border-style: solid;
  height: 80px;
  width: 80px;
}

.loader.small > div {
  border-width: 3px;
  border-style: solid;
  height: 10px;
  width: 10px;
}

.loader.medium > div {
  border-width: 5px;
  border-style: solid;
  height: 20px;
  width: 20px;
}

.loader.large > div {
  border-width: 8px;
  border-style: solid;
  height: 40px;
  width: 40px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
