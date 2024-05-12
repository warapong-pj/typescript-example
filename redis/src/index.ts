import { createClient } from 'redis';

const client = createClient({
    password: 'password',
    socket: {
        host: process.env.REDIS_HOSTNAME || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379')
    }
})

const main = async () => {
    try {
        await client.connect();
        await client.set("test-key","test-value1");
        const value = await client.get("test-key");
        console.log(value);
        await client.disconnect();
    } catch (error) {
        console.error(error);
    }
}

main();
