import amqp from "amqplib";


const RABBITMQ_URL =
    process.env.RABBITMQ_URL ||
    "amqp://rabbitmq:5672";


let channel: amqp.Channel | null = null;


export async function connectRabbitMQ(){

    while(!channel){

        try{

            const connection =
                await amqp.connect(RABBITMQ_URL);


            channel =
                await connection.createChannel();


            console.log(
                "RabbitMQ connected"
            );


        }catch(error){

            console.log(
                "RabbitMQ not ready. Retrying in 5 seconds..."
            );


            await new Promise(
                resolve => setTimeout(resolve,5000)
            );
        }
    }

}



export function getChannel(){

    if(!channel){

        throw new Error(
            "RabbitMQ channel not initialized"
        );

    }


    return channel;

}