# typescript & kafka

### intial project
1. tsc --init
2. npm init -y
3. npm install --save-dev typescript ts-node @types/node kafkajs

### initial kafka cluster
1. export CLUSTER_ID=$(docker run --rm confluentinc/cp-kafka:7.6.0 kafka-storage random-uuid)
2. docker compose up -d
