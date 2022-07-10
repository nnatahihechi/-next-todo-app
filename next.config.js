// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: `pages/api/AddTodo`,
            destination: "https://next-todo-app-vert.vercel.app/pages/api/AddTodo",
          },
        ]
      },
  };
