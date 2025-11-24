module.exports = {
  apps : [{
    name   : "kersnerova-strapi",
    script : "node_modules/@strapi/strapi/bin/strapi.js",
    args   : "start",
    cwd    : "/opt/kersnerova/strapi",
    instances: 1,
    exec_mode: "fork",
    watch: false,
    max_memory_restart: "1G",
    env_production: {
      NODE_ENV: "production",
      DATABASE_CLIENT: "sqlite",
      HOST: "0.0.0.0",
      PORT: 1337
    },
    error_file: "/opt/kersnerova/strapi/logs/error.log",
    out_file: "/opt/kersnerova/strapi/logs/out.log",
    log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    merge_logs: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: "10s"
  }]
};
