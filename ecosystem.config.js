{
  apps: [
    {
      name: "deploy-basicr",

      script: "src/app/page.js",

      interpreter: "none",

      args: "serve -s build -p 3000",
      env: {
        NODE_ENV: "development",
      },
    },
  ];
}
