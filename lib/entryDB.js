import { createClient } from 'redis';

const client = createClient();
client.on('error', err => console.log('Redis Client Error', err));

await client.connect();


export async function saveEntry(userId, entryId, content){
    console.log(`Saving content`);
    console.log(content);
    const fieldsAdded = await client.hSet(`user:${userId}:entry:${entryId}`, content);
    console.log(`Number of fields added: ${fieldsAdded}`);
};