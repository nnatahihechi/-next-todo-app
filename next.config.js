// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: `/api/AddTodo`,
            destination: "https://next-todo-app-vert.vercel.app/api/AddTodo",
          },
        ]
      },
  };
