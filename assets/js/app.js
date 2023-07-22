const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      editedTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({
          text: this.newTask,
          completed: false,
          editing: false,
        });
        this.newTask = "";
      }
    },
    editTask(index) {
      this.tasks[index].editing = true;
      this.editedTask = this.tasks[index].text;
    },
    saveTask(index) {
      if (this.editedTask.trim() !== "") {
        this.tasks[index].text = this.editedTask;
        this.tasks[index].editing = false;
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});

app.mount("#app");
