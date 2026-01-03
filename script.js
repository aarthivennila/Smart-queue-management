let queue = [];
let counters = { B: 0, E: 0, S: 0 };

function takeToken() {
    const service = document.getElementById("service").value;
    counters[service]++;

    const token = service + counters[service];
    queue.push(token);

    document.getElementById("userToken").innerText = token;
    document.getElementById("waiting").innerText = queue.length - 1;

    updateQueue();
}

function nextToken() {
    if (queue.length === 0) {
        alert("Queue is empty");
        return;
    }
    const current = queue.shift();
    document.getElementById("currentToken").innerText = current;
    updateQueue();
}

function updateQueue() {
    const list = document.getElementById("queueList");
    list.innerHTML = "";

    queue.forEach(token => {
        const span = document.createElement("span");
        span.innerText = token;
        span.classList.add(token.charAt(0));
        list.appendChild(span);
    });
}
