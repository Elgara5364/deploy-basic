module.exports = {
  apps: [
    {
      name: "deploy-basic",
      script: "node_modules/next/dist/bin/next",
      args: "start -s build -p 3020",
    },
  ],
};
