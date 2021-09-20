//print welcome
const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const {clone} = require('./download')

const spawn = async(...args) => {
    // 同步 promiseapi
    // 输出流 子进程 合并流 主进程
    const {spawn} = require('child_process')
    return new Promise(resolve => {
        // 启动子进程
        const proc = spawn(...args)
            // 输出流 子进程 合并流 主进程  
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })
}
module.exports = async name => {
    clear()
    const data = await figlet('wr')
    log(data)

    //项目模板
    log('创建项目' + name)
    await clone('github:su37josephxia/vue-template', name)

    // 下载依赖 npm i 
    // 子进程
    log('安装依赖,,,,')
    log('finish')
    // await  spawn('npm', ['install'], {cwd: `./${name}`})
    open('http://localhost:8080')
    await  spawn('npm', ['run', 'serve'], {cwd: `./${name}`})

}