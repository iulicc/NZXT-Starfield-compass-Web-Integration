import { Service } from 'node-windows'

const svc = new Service({
    name: 'NZXT Starfield Compass Web Integration',
    description: 'Web server for the Starfield compass web integration',
    script: './index.js'
})

svc.on('install', () => {
    svc.start()
})

svc.install()