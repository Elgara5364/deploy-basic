{
  "apps"[
    {
      name: "deploy-basic",

      script: "serve",

      interpreter: "none",

      args: "serve -s build -p 3000",
      env: {
        NODE_ENV: "production",
      },
    }
  ];
}
