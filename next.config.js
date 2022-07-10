// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: `/api/AddTodo`,
            destination: "https://next-todo-6diztz6q3-nnatahihechi.vercel.app",
          },
        ]
      },
  };
//   https://next-todo-6diztz6q3-nnatahihechi.vercel.app