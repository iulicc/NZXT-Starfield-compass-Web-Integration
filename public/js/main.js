function get_cookie(cookie_name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.length > 0) {
        let name, value;
        [name, value] = cookie.split('=');
        if (name === cookie_name) return value;
      }
    }
    return null;
  }
  
  const VIEWSTATE = parseInt(get_cookie('viewstate')) || 640;
  document.body.style.width = VIEWSTATE + 'px';
  document.body.style.height = VIEWSTATE + 'px';
  

  window.nzxt = {
    v1: {
      onMonitoringDataUpdate: (data) => {
        const { cpus, gpus, ram } = data;
        update_cpu(cpus[0].temperature);
        update_gpu(gpus[0].temperature);
        update_ram(ram);
      },
    },
  };
  
  const cpu_temp = document.getElementById('cpu_temp');
  function update_cpu(temp) {
    cpu_temp.innerHTML = `${Math.round(temp)}°C`;
  }
  
  const gpu_temp = document.getElementById('gpu_temp');
  function update_gpu(temp) {
    gpu_temp.innerHTML = `${Math.round(temp)}°C`;
  }
  
  const ram_usage = document.getElementById('ram_usage');
  function update_ram(ram) {
    // Response is in Mebibytes, convert the 'inUse' value to gigabytes. || https://github.com/NZXTCorp/web-integrations-types/blob/main/v1/index.d.ts
    const gbInUse = ram.inUse / 1024;
    ram_usage.innerHTML = `${gbInUse.toFixed(2)} GB`;
  }