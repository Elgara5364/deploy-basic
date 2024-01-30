{
  apps: [
    {
      name: "deploy-basicr",

      script: "npx",

      interpreter: "none",

      args: "serve -s build -p 3000",
    },
  ];
}
