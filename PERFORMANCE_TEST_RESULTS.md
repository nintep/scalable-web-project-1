1. Measuring the performance of loading the assignment page:


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: load-page-performance-test.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 35s max duration (incl. graceful stop):
           * default: 10 looping VUs for 5s (gracefulStop: 30s)


running (05.2s), 00/10 VUs, 266 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  5s

     data_received..................: 4.7 MB 919 kB/s
     data_sent......................: 21 kB  4.1 kB/s
     http_req_blocked...............: avg=41.08µs  p(99)=1.22ms  
     http_req_connecting............: avg=31.32µs  p(99)=1.11ms  
     http_req_duration..............: avg=190.7ms  p(99)=259.27ms
       { expected_response:true }...: avg=190.7ms  p(99)=259.27ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 266 
     http_req_receiving.............: avg=1.15ms   p(99)=3.7ms   
     http_req_sending...............: avg=37.14µs  p(99)=365.47µs
     http_req_tls_handshaking.......: avg=0s       p(99)=0s      
     http_req_waiting...............: avg=189.51ms p(99)=258.37ms
     http_reqs......................: 266    51.602291/s
     iteration_duration.............: avg=190.92ms p(99)=259.41ms
     iterations.....................: 266    51.602291/s
     vus............................: 10     min=10      max=10
     vus_max........................: 10     min=10      max=10



2. Measuring the performance of submitting assignments:


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: submit-assignment-performance-test.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 35s max duration (incl. graceful stop):
           * default: 10 looping VUs for 5s (gracefulStop: 30s)


running (05.4s), 00/10 VUs, 159 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  5s

     data_received..................: 2.9 MB 530 kB/s
     data_sent......................: 41 kB  7.6 kB/s
     http_req_blocked...............: avg=15.53µs  p(99)=285.55µs
     http_req_connecting............: avg=7.1µs    p(99)=208.33µs
     http_req_duration..............: avg=163.56ms p(99)=626.16ms
       { expected_response:true }...: avg=163.56ms p(99)=626.16ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 318 
     http_req_receiving.............: avg=532.82µs p(99)=3.49ms  
     http_req_sending...............: avg=36.56µs  p(99)=171.86µs
     http_req_tls_handshaking.......: avg=0s       p(99)=0s      
     http_req_waiting...............: avg=162.99ms p(99)=623.02ms
     http_reqs......................: 318    58.933032/s
     iteration_duration.............: avg=327.46ms p(99)=650.04ms
     iterations.....................: 159    29.466516/s
     vus............................: 10     min=10      max=10
     vus_max........................: 10     min=10      max=10
