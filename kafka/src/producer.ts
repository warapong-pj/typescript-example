import { Kafka, KafkaConfig, Partitioners } from 'kafkajs';

const kafkaConfig: KafkaConfig = {
  clientId: 'sample-producer',
  brokers: [ 'kafka1:19092', 'kafka2:29092', 'kafka3:39092' ]
};
const kafka = new Kafka(kafkaConfig);
const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });

const main = async () => {
  await producer.connect();

  await producer.send({
    topic: 'my-topic',
    messages: [{ value: "test-message" }],
  });

  await producer.disconnect();
}

main().catch(console.error);
