const Kafka = require('no-kafka');


// Create an instance of the Kafka consumer
const consumer = new Kafka.SimpleConsumer({ "connectionString": "127.0.0.1:9092" });

function onData(messageSet) {
    messageSet.forEach(function (m) {
        const value = m.message.value.toString('utf8');
        console.log(value);
    });

}

return consumer.init().then(function () {
    return consumer.subscribe('duplicated', onData);
})