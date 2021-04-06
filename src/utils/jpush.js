import { Device } from '@capacitor/device';
class Jpush {
    jpush = null;

    async init() {
        if (window.JPush) {
            this.jpush = window.JPush;
            this.jpush.setDebugMode(true);
            const {platform} = await this.getDeviceInfo();
            if (platform === 'ios') {
                window.JPush.startJPushSDK();
            }
            this.jpush.init();
        }
    }

    async getDeviceInfo() {
        return await Device.getInfo();
    }

    getRegistrationID() {
        return new Promise(resolve => {
            this.jpush.getRegistrationID(function (rId) {
                resolve(rId);
                console.log("JPushPlugin:registrationID is " + rId);
            })
        })
    }

    // 设置别名
    setAlias(alias) {
        return new Promise(((resolve, reject) => {
            this.jpush.setAlias({
                alias,
                sequence: new Date().valueOf(),
            }, (res) => {
                console.log('别名设置成功: ', res);
                resolve(res);
            }, (err) => {
                console.log('别名设置失败: ', err);
                setTimeout(() => this.setAlias(alias), 3000);
                reject(err);
            })
        }))

    }

    // 设置角标 只限IOS
    // setBadge(badge) {
    //     if (isPlatform('ios')) {
    //         this.jpush.setBadge(badge);
    //     }
    // }
}

export default new Jpush()