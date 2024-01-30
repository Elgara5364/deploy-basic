{
  apps: [
    {
      name: "deploy-basicr",

      script: "node_modules/next/dist/bin/next",

      interpreter: "none",

      args: "start -s build -p 3001",
      env: {
        NODE_ENV: "development",
      },
    },
  ];
}
