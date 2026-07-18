import { getChannel } from "../config/rabbitmq";


export async function publishUserCreated(user:any){

    const channel = getChannel();


    const exchange = "commerceflow_events";


    await channel.assertExchange(
        exchange,
        "fanout",
        {
            durable:true
        }
    );


    const event = {
        type:"USER_CREATED",
        data:{
            id:user.id,
            email:user.email,
            firstName:user.firstName
        }
    };


    channel.publish(
        exchange,
        "",
        Buffer.from(
            JSON.stringify(event)
        )
    );


    console.log(
        "USER_CREATED event published"
    );

}