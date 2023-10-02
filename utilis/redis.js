import redis from 'redis';
import { promisify } from 'util';
import { createClient } from 'redis';
/**
 * Contains redis client class and some helper functions
 */
class RedisClient {
	/**
	 * Creates a new RedisClient instance.
	 */
	constructor() {
		this.client = redis.createClient();
		this.getAsync = promisify(this.client.get).bind(this.client);
		this.client.on('error', (err) => {
			console.log('Redis client not connected to the server: ${err.message}');
			this.isClientConnected = false;
		});
	}
	
	this.client.on('connect', () => {
		this.isClientConnected ]= true;
		// console.log('Redis client connected to the server');
	});
}

/**
 * Checks if this client's connection to the Redis server is active.
 * @returns {boolean} true if connection is alive or false if not
 */
isAlive() {
	return this.client.connected;
}

/**
 * gets value corresponding to key in redis
 * @key {string} key to search for in redis
 * @return {string} value of key
 */
async get(key) {
	const value = await this.getAsync(key);
	return value;
}

/**
 * Creates a new key in redis with a specific TTL
 * @key {string} key to be saved in redis
 * @value {string} value to be assigned to key
 * @duration {number} TTL of key
 * @return {undefined} No return
 */
async set(key, value, duration) {
	this.client.setex(key, duration, value);
}

/**
 * Deletes key in redis service
 * @key {string} key to be deleted
 * @return {undefined} No return
 */
async del(key) {
	this.client.del(key);
}
}

const redisClient = new RedisClient();
export default redisClient;

