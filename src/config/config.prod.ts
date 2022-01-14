import { IConfigOptions } from '../types'

// 先从环境变量取配置
let config: IConfigOptions = {
  version: '2.9.0',
  serve: {
    port: (process.env.PORT && parseInt(process.env.SERVE_PORT)) || 8080,
    path: '',
  },
  keys: ["some secret hurr"],
  session: {
    key: 'rap2:sess',
  },
  db: {
    dialect: 'mysql',
    host: process.env.MYSQLHOST || 'localhost',
    port: (process.env.MYSQLPORT && parseInt(process.env.MYSQLPORT)) || 3306,
    username: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || '',
    database: process.env.MYSQL_SCHEMA || 'rap',
    pool: {
      max: 4,
      min: 0,
      idle: 20000,
      acquire: 20000,
    },
    logging: false,
  },
  redis: {
    host: process.env.REDISHOST || 'localhost',
    port: (process.env.REDISPORT && parseInt(process.env.REDISPORT)) || 6379,
    password: process.env.REDISPASSWORD || undefined,
  },
  mail: {
    host: process.env.MAIL_HOST ?? 'smtp.aliyun.com',
    port: process.env.MAIL_PORT ?? 465,
    secure: process.env.MAIL_SECURE ?? true,
    auth: {
      user: process.env.MAIL_USER ?? 'rap2org@service.alibaba.com',
      pass: process.env.MAIL_PASS ?? '',
    },
  },
  mailSender: process.env.MAIL_SENDER ?? "rap2org@service.alibaba.com"
}

export default config
