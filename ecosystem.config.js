module.exports = {
  apps: [
    {
      name: "deploy-basic",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3020  ",
    },
  ],
};
