import shell from 'shelljs';

function exec(command, options = {}) {
    options.async = true;
  
    return shell.exec(command, options);
}


class Wifi {

  /**
   * 设置wifi属性
   * @param name
   * @param password
   * @returns {promise}
   */

    setWifi (name , password) {
        if(!name|| !password) return ;
        let $bash = `netsh wlan set hostednetwork mode=allow ssid=${name}key=${password}`;
        return exec($bash);
    }

    /**
     *  启动wifi
     */
    startWifi ( ) {
        let $bash = `netsh wlan start hostednetwork`;
        return exec($bash);
    }
    /**
     *  关闭wifi
     */
    stopWifi () {
        let $bash = `netsh wlan stop hostednetwork`;
        return exec($bash);
    }

}

export default new Wifi();