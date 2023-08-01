

// Temps update
window.nzxt = {
    v1: {
        onMonitoringDataUpdate: (data) => {
            const { cpus, gpus, ram } = data // https://github.com/NZXTCorp/web-integrations-types/blob/main/v1/index.d.ts
            update_cpu(cpus[0].temperature)
            update_gpu(gpus[0].temperature)
            console.log(ram);
        }
    }
}

const cpu_temp = document.getElementById('cpu_temp')
function update_cpu (temp) {
    cpu_temp.innerHTML = `${Math.round(temp)}°C`
}

const gpu_temp = document.getElementById('gpu_temp')
function update_gpu (temp) {
    gpu_temp.innerHTML = `${Math.round(temp)}°C`
}







