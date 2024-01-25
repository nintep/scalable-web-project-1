import { serve } from "./deps.js";
import { grade } from "./services/gradingService.js";
import { Queue } from "./src/Queue.js";
import { createClient } from "./deps.js";

const client = createClient({
  url: "redis://redis:6379",
  pingInterval: 1000,
})

await client.connect();

let gradingQueue = new Queue();

const handleRequest = async (request) => {

  const requestData = await request.json();

  //console.log("Request data:");
  //console.log(requestData);

  gradingQueue.enqueue(requestData);
  //console.log("Grading queued - queue length: ", gradingQueue.length);
  StartGradingProcess();
  return new Response("OK", { status: 200 });

};

let gradingInProcess = false;

const StartGradingProcess = async() => {

  if (gradingInProcess) {
    //grading is already in progress, don't start another process
    return;
  }

  gradingInProcess = true;

  while (gradingQueue.length > 0) {
    
    try {

      let result;
      const gradeData = gradingQueue.dequeue();

      console.log("Grading submission:");
      console.log(gradeData);
  
      const code = gradeData.code;
      const testCode = gradeData.testCode;
      const id = gradeData.id;
  
      result = await grade(code, testCode);
      client.publish("grade-results", JSON.stringify({ id: id, result: result }));

    } catch (e) {
      console.log("Grading error")
    }    
  }

  gradingInProcess = false;

}

const portConfig = { port: 7000, hostname: "0.0.0.0" };
serve(handleRequest, portConfig);
