{
  "apps"[
    {
      name: "deploy-basic",

      script: "npx",

      interpreter: "none",

      args: "serve -s build -p 3000",
      env: {
        NODE_ENV: "production",
      },
    }
  ];
}
