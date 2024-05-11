import client, { Connection, Channel, ConsumeMessage } from 'amqplib';

const consumer = (channel: Channel) => (message: ConsumeMessage | null): void => {
    if (message) {
        console.log(message.content.toString());
        channel.ack(message);
    }
}

const main = async () => {
    const connection: Connection = await client.connect("amqp://admin:admin@localhost:5672");
    const channel: Channel = await connection.createChannel();
    await channel.assertQueue('myQueue');

    await channel.consume('myQueue', consumer(channel));
};

main();
