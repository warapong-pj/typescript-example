import { Kafka, KafkaConfig } from 'kafkajs';

const kafkaConfig: KafkaConfig = {
  clientId: 'sample-producer',
  brokers: [ 'kafka1:19092', 'kafka2:29092', 'kafka3:39092' ]
};
const kafka = new Kafka(kafkaConfig);
const consumer = kafka.consumer({ groupId: "my-group-consumer" });

const main = async () => {
  await consumer.connect();

  await consumer.subscribe({
    topic: "my-topic",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value?.toString(),
      });
    },
  });
};

main().catch(console.error);
