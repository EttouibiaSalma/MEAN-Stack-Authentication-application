//Pour lancer l'app au niveau de l'environment development  
//avec les parametres déjà citer dans config.json 
var env = process.env.NODE_ENV || 'development';
var config = require('./config.json');
var envConfig = config[env];
Object.keys(envConfig).forEach(Key=> process.env[Key] = envConfig[Key]);