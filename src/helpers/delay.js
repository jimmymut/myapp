// This function takes time in milliseconds
export default async function delay(time){
    await new Promise(resolve=> setTimeout(resolve, time));
}