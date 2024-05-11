import client, { Connection, Channel, ConsumeMessage } from 'amqplib';

const producer = (channel: Channel) => {
    for (let i = 0; i < 10; i++){
        channel.sendToQueue('myQueue', Buffer.from(`message ${i}`));
    }
}

const main = async () => {
    const connection: Connection = await client.connect("amqp://admin:admin@localhost:5672");
    const channel: Channel = await connection.createChannel();
    await channel.assertQueue('myQueue');

    producer(channel);
};

main();
