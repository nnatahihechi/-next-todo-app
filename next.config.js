// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: `https://next-todo-app-nine.vercel.app`,
            destination: `/api/TodoItem`,
          },
        ]
      },
  };
//   https://next-todo-6diztz6q3-nnatahihechi.vercel.app
