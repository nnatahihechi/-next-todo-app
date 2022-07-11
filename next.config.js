// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: `/api/AddTodo`,
            // source: `https://next-todo-app-nine.vercel.app`,
            destination: "https://next-todo-app-nnatahihechi.vercel.app/api/TodoItem",
            // destination: `/api/TodoItem`,
          },
        ]
      },
  };
//   https://next-todo-6diztz6q3-nnatahihechi.vercel.app

