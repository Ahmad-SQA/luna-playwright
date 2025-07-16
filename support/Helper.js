export class Helper {
    generateRandomEmail() {
        const randomNum = Math.floor(Math.random() * 100000);
        return `user${randomNum}+test@mailosaur.net`;
    }

    generateRandomPassword(length = 10) {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
        let password = '';
        for (let i = 0; i < length; i++) {
            password +=  chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password + '@2';
    }
}
