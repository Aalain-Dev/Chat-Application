import amqp from "amqplib";
import type { Channel } from "amqplib";

let channel: Channel | null = null;

export const connectRabbitMQ = async (): Promise<Channel> => {
  try {
    if (channel) {
      return channel;
    }

    const rabbitmqUrl = process.env.RABBITMQ_URL;

    if (!rabbitmqUrl) {
      throw new Error("RABBITMQ_URL is not defined");
    }

    const connection = await amqp.connect(rabbitmqUrl);

    channel = await connection.createChannel();

    console.log("✅ RabbitMQ Connected");

    connection.on("close", () => {
      console.log("❌ RabbitMQ Connection Closed");
    });

    connection.on("error", (err: Error) => {
      console.error("RabbitMQ Error:", err);
    });

    return channel;
  } catch (error) {
    console.error("Failed to connect RabbitMQ:", error);
    throw error;
  }
};

export const publishToQueue = async (queue: string, message: any) => {
  try {
    if (!channel) {
      console.log("No Channel Found");
    }
    const queueexsist = await channel?.assertQueue(queue, {
      durable: true,
    });
    const sendmessage = await channel?.sendToQueue(
      queue,
      Buffer.from(JSON.stringify(message)),
      {
        persistent: true,
      },
    );
  } catch (e: any) {
    console.log(e.message);
  }
};
