import { ref } from "vue";

const count = ref(1);

const emptyFunc = () => {
  return 1;
};

export default {
  emptyFunc,
  count,
};
