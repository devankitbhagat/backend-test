const IORedis = require("ioredis");

class Redis {
  constructor() {
    this.client = null;
    this.host =  "127.0.0.1";
    this.port = 6379;
  }

  connect() {
    return new Promise((resolve, reject) => {
      const that = this;
      // create a redis client object
      this.client = new IORedis({
        port: this.port, 
        host: this.host, 
        lazyConnect: true
      });
      
      // connect to redis server
      this.client.connect(function (error) {  
        if(error) {
          console.error(`Redis[connect] - connection failed host - ${that.host} port - ${that.port}`)
          return reject(error);
        }
        console.error(`Redis[connect] - connected to host - ${that.host} port - ${that.port}`)
        resolve()
      });
    })
  }

  hmset(key, map) {
    return new Promise((resolve, reject) => {
      this.client.hmset(key, map)
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        reject(error)
      });
    })
  }

  del(key) {
    return new Promise((resolve, reject) => {
      this.client.del(key)
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        reject(error)
      });
    })
  }

  hgetall(key) {
    return new Promise((resolve, reject) => {
      this.client.hgetall(key)
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        reject(error)
      });
    })
  }
}

export default new Redis(); 